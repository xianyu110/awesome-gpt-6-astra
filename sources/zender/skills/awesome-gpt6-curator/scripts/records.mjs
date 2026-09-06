import { readFile, writeFile, readdir, mkdir, lstat, realpath } from 'node:fs/promises';
import path from 'node:path';

export const categories = { '3d':'3D', web:'Web', video:'Video', games:'Games' };
const keys = 'id category title author authorUrl model modelEvidence tools sourceUrl sourceType sourceAccess secondaryUrl checkedAt summary promptStatus prompt promptSourceUrl reproduction reproductionEvidence limitations rights'.split(' ');
const text = v => typeof v === 'string' && v.trim().length > 0;
const url = v => { try { const u = new URL(v); return ['https:','http:'].includes(u.protocol) && !u.username && !u.password && !/[\s<>]/.test(v); } catch { return false; } };
export function canonical(value) { const u = new URL(value); u.hash=''; u.hostname=u.hostname.replace(/^www\./,'').replace(/^(?:mobile\.)?twitter\.com$/,'x.com'); for(const k of [...u.searchParams.keys()]) if (/^utm_|^(fbclid|gclid|ref)$/i.test(k)) u.searchParams.delete(k); u.searchParams.sort(); u.pathname=u.pathname.replace(/\/+$/,'')||'/'; return u.href; }
export function validateRecord(r) {
  const errors=[]; if(!r || typeof r!=='object' || Array.isArray(r)) return ['输入必须是 JSON 对象'];
  for(const k of Object.keys(r)) if(!keys.includes(k)) errors.push(`未知字段 ${k}`);
  for(const k of keys) if(!(k in r)) errors.push(`缺少字段 ${k}`);
  for(const k of ['title','author','model','modelEvidence','summary','limitations','rights']) if(!text(r[k]) || r[k].length>12000) errors.push(`${k} 必须是非空文本且不超过 12000 字符`);
  for(const k of ['title','author','model']) if(typeof r[k]==='string' && /[\r\n]/.test(r[k])) errors.push(`${k} 必须为单行`);
  if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(r.id||'')) errors.push('id 必须为英文短横线文件名');
  if(!Object.hasOwn(categories,r.category)) errors.push('category 必须为 3d/web/video/games');
  for(const k of ['authorUrl','sourceUrl']) if(!url(r[k])) errors.push(`${k} 必须为无凭据的 HTTP(S) URL`);
  for(const k of ['secondaryUrl','promptSourceUrl']) if(r[k]!==null && !url(r[k])) errors.push(`${k} 必须为 URL 或 null`);
  if(!Array.isArray(r.tools)||!r.tools.length||!r.tools.every(text)) errors.push('tools 必须是非空文本数组；未知使用 ["未公开"]');
  if(!['官方展示','官方客户案例','作者自述','二手线索'].includes(r.sourceType)) errors.push('sourceType 无效');
  if(!['原始来源已读取','仅二手来源'].includes(r.sourceAccess)) errors.push('sourceAccess 无效');
  if(r.sourceAccess==='仅二手来源' && (r.sourceType!=='二手线索'||!url(r.secondaryUrl)||r.secondaryUrl===r.sourceUrl)) errors.push('二手线索必须标记二手来源并提供独立聚合页 URL');
  if(r.sourceType==='二手线索' && r.sourceAccess!=='仅二手来源') errors.push('二手线索不能声称读取了原始来源');
  const date=new Date(`${r.checkedAt}T00:00:00Z`);
  if(!/^\d{4}-\d{2}-\d{2}$/.test(r.checkedAt||'')||!Number.isFinite(+date)||date.toISOString().slice(0,10)!==r.checkedAt||r.checkedAt>new Date().toISOString().slice(0,10)) errors.push('checkedAt 不是有效核对日期或位于未来');
  if(!['作者原文','作者摘要','整理者改写','未公开'].includes(r.promptStatus)) errors.push('promptStatus 无效');
  if(typeof r.prompt!=='string') errors.push('prompt 必须是字符串');
  if(r.promptStatus==='未公开' && r.prompt!=='') errors.push('未公开提示词必须留空，不能填入推测');
  if(r.promptStatus!=='未公开' && !text(r.prompt)) errors.push('已提供提示词时 prompt 不得为空');
  if(['作者原文','作者摘要'].includes(r.promptStatus) && !url(r.promptSourceUrl)) errors.push('作者提示词或摘要必须带 promptSourceUrl');
  if(r.sourceAccess==='仅二手来源' && r.promptStatus==='作者原文') errors.push('二手转述不能标为作者原文');
  if(!['未复现','部分复现','已复现'].includes(r.reproduction)) errors.push('reproduction 无效');
  if(!Array.isArray(r.reproductionEvidence)||!r.reproductionEvidence.every(url)) errors.push('reproductionEvidence 必须为 URL 数组');
  if(r.reproduction!=='未复现' && !r.reproductionEvidence?.length) errors.push('复现声明必须带实际记录证据 URL');
  return errors;
}
export async function safeFile(root,rel) {
  if(typeof rel!=='string'||!rel||path.isAbsolute(rel)||! /^[A-Za-z0-9_./-]+$/.test(rel)||rel.split('/').some(p=>!p||p==='..'||p==='.')||rel.startsWith('-')) throw Error(`不安全路径: ${rel}`);
  const base=await realpath(root); let cursor=base;
  for(const part of rel.split('/')) { cursor=path.join(cursor,part); try { if((await lstat(cursor)).isSymbolicLink()) throw Error(`路径含符号链接: ${rel}`); } catch(e) { if(e.code!=='ENOENT') throw e; } }
  return cursor;
}
export async function readMaybe(file){try{return await readFile(file,'utf8');}catch(e){if(e.code==='ENOENT')return null;throw e;}}
export async function listFiles(root){const result=[];async function walk(dir){let items;try{items=await readdir(dir,{withFileTypes:true});}catch(e){if(e.code==='ENOENT')return;throw e;}for(const item of items){const f=path.join(dir,item.name);if(item.isSymbolicLink())throw Error(`路径含符号链接: ${f}`);if(item.isDirectory())await walk(f);else result.push(f);}}await walk(root);return result;}
const prose = v => String(v).replaceAll('<','&lt;').replaceAll('>','&gt;').replace(/^([#>])/gm,'\\$1');
const inline = v => prose(v).replace(/[\[\]*_|]/g,'\\$&');
const link = (label,u) => `[${inline(label)}](${u.replaceAll('(','%28').replaceAll(')','%29')})`;
export const pathsFor = r => [`cases/${r.category}/${r.id}.md`,`cases/${r.category}/README.md`,`records/${r.category}/${r.id}.json`];
export function renderRecord(r) {
  const fence='`'.repeat(Math.max(3,...[...r.prompt.matchAll(/`+/g)].map(m=>m[0].length+1)));
  const prompt=r.promptStatus==='未公开'?'原作者未公开完整提示词。':`${r.promptSourceUrl?link('提示词出处',r.promptSourceUrl)+'\n\n':''}${fence}text\n${r.prompt}\n${fence}`;
  return `# ${inline(r.title)}\n\n## 概览\n\n- 分类：${categories[r.category]}\n- 作者：${link(r.author,r.authorUrl)}\n- 模型：${inline(r.model)}\n- 工具：${r.tools.map(inline).join('、')}\n- 来源类型：${r.sourceType}\n- 核对日期：${r.checkedAt}\n- 复现状态：${r.reproduction}\n\n## 作品与来源\n\n${link('原始来源',r.sourceUrl)}${r.secondaryUrl?' · '+link('二手来源',r.secondaryUrl):''}\n\n来源访问：${r.sourceAccess}。\n\n模型证据：${prose(r.modelEvidence)}\n\n${prose(r.summary)}\n\n## 提示词\n\n提示词状态：${r.promptStatus}。\n\n${prompt}\n\n## 复现与局限\n\n${r.reproduction==='未复现'?'尚未独立复现。\n\n':''}${prose(r.limitations)}\n${r.reproductionEvidence.map(u=>'\n- '+link('复现记录',u)).join('')}\n## 权利与署名\n\n${prose(r.rights)}\n`;
}
const normalized=s=>s?.replaceAll('\r\n','\n');
const indexEntry = r => `| [${inline(r.title)}](${r.id}.md) | ${r.sourceType} | ${r.reproduction} |`;
export async function addRecord(root,r,{update=false}={}){
  const errors=validateRecord(r);if(errors.length)throw Error(errors.join('\n'));
  const rels=pathsFor(r);const [casePath,indexPath,recordPath]=await Promise.all(rels.map(p=>safeFile(root,p)));
  const md=renderRecord(r),json=JSON.stringify(r,null,2)+'\n';const oldCase=await readMaybe(casePath),oldRecord=await readMaybe(recordPath),index=await readMaybe(indexPath);
  if(index===null)throw Error('分类索引不存在，请先确认仓库结构');
  if(update && (oldCase===null||oldRecord===null))throw Error('update 仅用于已有结构化案例');
  if(!update && (oldCase!==null&&normalized(oldCase)!==md||oldRecord!==null&&normalized(oldRecord)!==json))throw Error('同名文件已有不同内容；请审核后使用 update，不覆盖');
  for(const f of await listFiles(path.join(root,'cases'))){if(f===casePath||!f.endsWith('.md')||path.basename(f)==='README.md')continue;const s=await readFile(f,'utf8');for(const m of s.matchAll(/https?:\/\/[^\s<>\)"\]]+/g)){try{if(canonical(m[0])===canonical(r.sourceUrl))throw Error(`重复来源: ${path.relative(root,f)}`);}catch(e){if(e.message.startsWith('重复'))throw e;}}}
  const entry=indexEntry(r);
  const marker='<!-- curator:entries -->';let updated=index;
  if(!index.includes(`](${r.id}.md)`)) updated=index.includes(marker)?index.replace(marker,entry+'\n'+marker):index.trimEnd()+`\n\n## 新增案例与线索\n\n| 案例 | 来源 | 复现 |\n| :--- | :--- | :--- |\n${entry}\n${marker}\n`;
  else if(update)updated=index.split('\n').map(line=>line.includes(`](${r.id}.md)`)?entry:line).join('\n');
  if(normalized(oldCase)===md&&normalized(oldRecord)===json&&updated===index)return {status:'unchanged',files:rels};
  await mkdir(path.dirname(recordPath),{recursive:true});
  if(oldCase===null||update)await writeFile(casePath,md,{flag:update?'w':'wx'});
  if(oldRecord===null||update)await writeFile(recordPath,json,{flag:update?'w':'wx'});
  if(updated!==index){if(await readMaybe(indexPath)!==index)throw Error('索引被并发修改，请重新执行 add');await writeFile(indexPath,updated);}
  return {status:update?'updated':'created',files:rels};
}
export async function auditRecords(root){
  const errors=[],seen=new Map(),structured=new Set();
  for(const file of await listFiles(path.join(root,'records'))){
    if(!file.endsWith('.json'))continue;
    try{
      const r=JSON.parse(await readFile(file,'utf8')),issues=validateRecord(r);
      if(issues.length){errors.push(`${file}: ${issues.join('; ')}`);continue;}
      const rels=pathsFor(r),casePath=await safeFile(root,rels[0]);structured.add(casePath);
      if(path.resolve(file)!==await safeFile(root,rels[2]))errors.push(`${file}: 记录路径不一致`);
      if(normalized(await readMaybe(casePath))!==renderRecord(r))errors.push(`${rels[0]}: 与结构化记录不一致`);
      const index=await readMaybe(await safeFile(root,rels[1]));
      if(!index?.split(/\r?\n/).includes(indexEntry(r)))errors.push(`${rels[1]}: 索引标题、来源或复现状态缺失/不一致`);
      const key=canonical(r.sourceUrl);if(seen.has(key))errors.push(`重复来源: ${seen.get(key)} / ${file}`);seen.set(key,file);
    }catch(e){errors.push(`${file}: ${e.message}`);}
  }
  for(const file of await listFiles(path.join(root,'cases'))){
    if(structured.has(file)||!file.endsWith('.md')||path.basename(file)==='README.md')continue;
    for(const match of (await readFile(file,'utf8')).matchAll(/https?:\/\/[^\s<>\)"\]]+/g)){
      try{const key=canonical(match[0]);if(seen.has(key))errors.push(`重复来源: ${seen.get(key)} / ${file}`);}catch{ /* Non-URL prose is ignored. */ }
    }
  }
  return errors;
}
