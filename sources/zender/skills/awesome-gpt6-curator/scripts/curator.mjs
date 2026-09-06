#!/usr/bin/env node
import { readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { validateRecord, addRecord, auditRecords, safeFile, pathsFor } from './records.mjs';

const [command,...argv]=process.argv.slice(2);const args={};
for(let i=0;i<argv.length;i++){const k=argv[i];if(!k.startsWith('--'))throw Error(`未知参数 ${k}`);args[k.slice(2)]=argv[i+1]&&!argv[i+1].startsWith('--')?argv[++i]:true;}
const root=path.resolve(args.repo||process.cwd());
const env={...process.env,GIT_TERMINAL_PROMPT:'0',GCM_INTERACTIVE:'Never'};
function run(bin,items,allowFail=false){const r=spawnSync(bin,items,{cwd:root,env,encoding:'utf8',timeout:60000,maxBuffer:8*1024*1024});if(r.status!==0&&!allowFail)throw Error((r.stderr||r.error?.message||`${bin} failed`).replace(/https:\/\/[^\s@]+@/g,'https://[redacted]@'));return r;}
const git=(...a)=>run('git',a).stdout.trim();
const json=async p=>JSON.parse((await readFile(path.resolve(root,p),'utf8')).replace(/^\uFEFF/,''));
const emit=v=>console.log(JSON.stringify(v,null,2));
function required(k){if(typeof args[k]!=='string')throw Error(`需要 --${k}`);return args[k];}
function repoName(){const u=git('config','--get','remote.origin.url');const m=u.match(/^(?:https:\/\/github\.com\/|git@github\.com:)([\w.-]+\/[\w.-]+?)(?:\.git)?$/);if(!m)throw Error('origin 必须是不含令牌的 github.com 仓库地址');return m[1];}
const sha=b=>createHash('sha256').update(b).digest('hex');
const blob=b=>createHash('sha1').update(`blob ${b.length}\0`).update(b).digest('hex');
async function fingerprint(rel){if(rel.split('/').some(p=>['.git','.local','node_modules'].includes(p)||p.startsWith('.env'))||/\.(pem|key)$/i.test(rel))throw Error(`禁止发布内部或敏感路径 ${rel}`);const f=await safeFile(root,rel);const s=await stat(f);if(!s.isFile()||s.size>2*1024*1024)throw Error(`不是文件或超过 2 MB: ${rel}`);const b=await readFile(f);return {path:rel,bytes:b.length,sha256:sha(b),blobSha:blob(b)};}
async function checks(){const errors=await auditRecords(root);if(errors.length)throw Error(errors.join('\n'));run(process.execPath,['scripts/check.mjs']);}
async function completeGroups(files){for(const p of files){const m=p.match(/^(?:cases|records)\/(3d|web|video|games)\/([a-z0-9-]+)\.(?:md|json)$/);if(!m)continue;const rel=`records/${m[1]}/${m[2]}.json`;let r;try{r=await json(rel);}catch(e){if(e.code==='ENOENT')throw Error(`所选案例缺少结构化记录: ${rel}`);throw e;}if(!pathsFor(r).every(f=>files.includes(f)))throw Error('案例、分类索引、结构化记录必须一起发布');}}
async function loadManifest(){const p=required('manifest');if(!p.startsWith('.local/'))throw Error('发布清单必须位于 .local/');await safeFile(root,p);const m=await json(p);if(m.version!==1||m.repository!==repoName()||!Array.isArray(m.files)||!m.files.length||!/^[\w./-]+$/.test(m.branch)||m.branch.startsWith('-')||! /^[a-f0-9]{40}$/.test(m.baseCommit))throw Error('发布清单无效或仓库不匹配');if(new Set(m.files.map(f=>f.path)).size!==m.files.length)throw Error('清单含重复路径');for(const item of m.files){const current=await fingerprint(item.path);if(current.sha256!==item.sha256||current.blobSha!==item.blobSha)throw Error(`文件指纹变化: ${item.path}；重新审核并 plan`);}await completeGroups(m.files.map(f=>f.path));return m;}
function remoteHead(branch){git('check-ref-format',`refs/heads/${branch}`);const s=git('ls-remote','--heads','origin',`refs/heads/${branch}`);const head=s.split(/\s/)[0];if(!/^[a-f0-9]{40}$/.test(head))throw Error('目标远端分支不存在');return head;}
function fetchBranch(branch){git('fetch','origin',`refs/heads/${branch}:refs/remotes/origin/${branch}`);return git('rev-parse',`refs/remotes/origin/${branch}`);}
function matches(m,ref){return m.files.every(f=>{const r=run('git',['rev-parse',`${ref}:${f.path}`],true);return r.status===0&&r.stdout.trim()===f.blobSha;});}
async function saveState(file,value){await mkdir(path.dirname(file),{recursive:true});await writeFile(file,JSON.stringify(value,null,2)+'\n');}

try{
  if(command==='doctor'){emit({node:process.version,git:git('--version'),root,repository:repoName(),branch:git('branch','--show-current'),workingTree:git('status','--short'),ghAvailable:run('gh',['--version'],true).status===0,note:'登录、App 安装、仓库访问和网络须分别验证；doctor 不进行登录或发布。'});}
  else if(command==='validate'){const r=await json(required('input'));const e=validateRecord(r);if(e.length)throw Error(e.join('\n'));emit({valid:true});}
  else if(command==='add'){emit(await addRecord(root,await json(required('input'))));}
  else if(command==='update'){emit(await addRecord(root,await json(required('input')),{update:true}));}
  else if(command==='check'){await checks();emit({valid:true,note:'通过结构化记录与仓库检查；来源真实性仍需人工核验。'});}
  else if(command==='plan'){
    const files=await json(required('files'));if(!Array.isArray(files)||!files.length||new Set(files).size!==files.length)throw Error('files 必须是非空、无重复的相对路径数组');
    const repository=repoName();if(repository!==(args.repository||'zender555/awesome-gpt6'))throw Error('目标仓库不匹配；其他仓库必须显式指定 --repository');
    const branch=args.branch||'main';git('check-ref-format',`refs/heads/${branch}`);await checks();await completeGroups(files);const entries=[];for(const f of files)entries.push(await fingerprint(f));
    if(args['base-commit'] && (args['remote-verified']!==true||! /^[a-f0-9]{40}$/.test(args['base-commit'])))throw Error('外部基准需要实际核对远端后的 --remote-verified 和完整 SHA');
    const baseCommit=args['base-commit']||remoteHead(branch);
    const manifest={version:1,repository,branch,baseCommit,createdAt:new Date().toISOString(),files:entries};
    const out=await safeFile(root,required('out'));if(!args.out.startsWith('.local/'))throw Error('发布清单应写在 .local/ 下');await saveState(out,manifest);emit({manifest:args.out,baseCommit,files:entries.map(f=>f.path),note:'仅生成清单，尚未发布。'});
  }
  else if(command==='verify-manifest'){await loadManifest();await checks();emit({valid:true});}
  else if(command==='verify-release'){const m=await loadManifest();const commit=fetchBranch(m.branch);if(!matches(m,commit))throw Error('远端文件不匹配或尚未全部上传；先检查部分发布状态，勿盲目重复提交');emit({verified:true,commit,url:`https://github.com/${m.repository}/commit/${commit}`,note:'文件指纹匹配；还需检查 Actions 与页面。'});}
  else if(command==='publish'){
    if(args.authorized!==true)throw Error('publish 需要 --authorized；仅在用户已授权发布且内容已审阅时使用');
    const m=await loadManifest();await checks();const remote=fetchBranch(m.branch);
    if(matches(m,remote)){emit({status:'already-published',commit:remote});}
    else {
      if(remote!==m.baseCommit)throw Error('远端已变化，请读取差异、整合后重新生成清单；不会强推');
      if(git('branch','--show-current')!==m.branch)throw Error('本地分支与清单不一致');
      const statePath=await safeFile(root,required('manifest')+'.state.json');let saved;try{saved=JSON.parse(await readFile(statePath,'utf8'));}catch(e){if(e.code!=='ENOENT')throw e;}
      const head=git('rev-parse','HEAD');let commit;
      if(saved?.commit===head&&saved.baseCommit===remote&&matches(m,head)){
        const changed=git('diff','--name-only',remote,head).split('\n').filter(Boolean);if(changed.some(f=>!m.files.some(x=>x.path===f)))throw Error('续传提交包含清单外文件');commit=head;
      }else{
        if(head!==remote)throw Error('本地 HEAD 不等于远端；请先审阅并整合本地提交，勿自动重置');
        if(git('diff','--cached','--name-only'))throw Error('暂存区非空；请保留现有暂存内容并先处理，不自动清空');
        git('var','GIT_AUTHOR_IDENT');git('var','GIT_COMMITTER_IDENT');
        git('add','--',...m.files.map(f=>f.path));
        const staged=git('diff','--cached','--name-only').split('\n').filter(Boolean);if(staged.some(f=>!m.files.some(x=>x.path===f)))throw Error('暂存区含清单外文件');
        for(const f of m.files)if(git('rev-parse',`:${f.path}`)!==f.blobSha)throw Error('暂存文件与清单字节不同；检查换行或 Git filters');
        git('commit','-m',typeof args.message==='string'?args.message:'content: publish reviewed collection update');commit=git('rev-parse','HEAD');await saveState(statePath,{commit,baseCommit:remote});
      }
      // Explicit branch refspec, never force. A failed push is recovered from the saved commit.
      git('push','origin',`${commit}:refs/heads/${m.branch}`);const landed=fetchBranch(m.branch);if(!matches(m,landed))throw Error('推送后远端指纹不匹配');emit({status:'published',commit:landed,url:`https://github.com/${m.repository}/commit/${landed}`});
    }
  }
  else throw Error('用法: curator.mjs doctor | validate --input JSON | add --input JSON | update --input JSON | check | plan --files JSON --out .local/release.json | verify-manifest --manifest JSON | publish --manifest JSON --authorized | verify-release --manifest JSON；通用参数 --repo PATH');
}catch(e){console.error(e.message);process.exitCode=1;}
