import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
async function walk(dir) {
  const result = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (['.git', 'node_modules', '.local'].includes(entry.name)) continue;
    const file = path.join(dir, entry.name);
    if (entry.isSymbolicLink()) { errors.push(`Symlinks are not supported: ${file}`); continue; }
    result.push(...(entry.isDirectory() ? await walk(file) : [file]));
  }
  return result;
}
const files = await walk(root);
const requiredSections = ['概览', '作品与来源', '提示词', '复现与局限', '权利与署名'];
for (const file of files) {
  const rel = path.relative(root, file).replaceAll('\\', '/');
  if ((await stat(file)).size > 2 * 1024 * 1024) errors.push(`${rel}: exceeds 2 MB; link large media instead`);
  if (!file.endsWith('.md')) continue;
  const text = await readFile(file, 'utf8');
  if (text.includes('\uFFFD')) errors.push(`${rel}: invalid text replacement character`);
  if (rel.startsWith('cases/') && !rel.endsWith('/README.md')) {
    for (const section of requiredSections) {
      if (!text.includes(`## ${section}`)) errors.push(`${rel}: missing section ${section}`);
    }
    for (const field of ['分类：', '作者：', '模型：', '来源类型：', '核对日期：', '复现状态：', '提示词状态：']) {
      if (!text.includes(field)) errors.push(`${rel}: missing field ${field}`);
    }
  }
  const prose = text.replace(/```[\s\S]*?```/g, '');
  const links = [...prose.matchAll(/\]\(([^\s)]+)\)/g), ...prose.matchAll(/(?:href|src)="([^"]+)"/g)];
  for (const match of links) {
    const href = match[1];
    if (/^(?:https?:|mailto:)/i.test(href)) continue;
    const [rawPath, anchor] = href.split('#');
    let target;
    try { target = rawPath ? path.resolve(path.dirname(file), decodeURIComponent(rawPath)) : file; }
    catch { errors.push(`${rel}: malformed link ${href}`); continue; }
    const relative = path.relative(root, target);
    if (relative.startsWith('..') || path.isAbsolute(relative)) { errors.push(`${rel}: link escapes repository ${href}`); continue; }
    try {
      await stat(target);
      if (anchor && target.endsWith('.md')) {
        const targetText = await readFile(target, 'utf8');
        if (!targetText.includes(`id="${anchor}"`)) errors.push(`${rel}: missing explicit anchor ${href}`);
      }
    } catch { errors.push(`${rel}: missing link ${href}`); }
  }
}
if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`OK: ${files.length} files; local links, explicit anchors, case structure and size limits checked.`);
}
