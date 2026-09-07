#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { access, mkdir, readFile, writeFile } from 'node:fs/promises';
import { basename, dirname, resolve } from 'node:path';

const SOURCE_URL = 'https://cheerselfai.com/usecase/gpt-6-astra';
const EXPECTED_MINIMUM = 610;
const CATEGORY_LABELS = {
  games: '游戏与玩法原型',
  '3d': '3D 空间与建模',
  'product-ui': '界面与产品流程',
  'motion-video': '动效与视频工作流',
  engineering: '工程文件与代码迁移',
  simulation: '模拟与科学可视化',
  'research-security': '专业研究与安全评测',
  'office-music': '办公与音乐创作',
};
const SITE_CATEGORIES = {
  games: 'game',
  '3d': 'experiment',
  'product-ui': 'app',
  'motion-video': 'experiment',
  engineering: 'tool',
  simulation: 'experiment',
  'research-security': 'other',
  'office-music': 'other',
};

function extractItems(html) {
  const chunks = [];
  for (const match of html.matchAll(/<script[^>]*>self\.__next_f\.push\((.*?)\)<\/script>/gs)) {
    try {
      const payload = JSON.parse(match[1]);
      if (typeof payload[1] === 'string') chunks.push(payload[1]);
    } catch {
      // Ignore unrelated or incomplete RSC chunks.
    }
  }

  const payload = chunks.join('');
  const marker = '"items":[';
  const start = payload.indexOf(marker) + marker.length - 1;
  if (start < marker.length - 1) throw new Error('Could not find the use-case list in the page payload');

  let depth = 0;
  let inString = false;
  let escaped = false;
  for (let index = start; index < payload.length; index += 1) {
    const char = payload[index];
    if (inString) {
      if (escaped) escaped = false;
      else if (char === '\\') escaped = true;
      else if (char === '"') inString = false;
      continue;
    }
    if (char === '"') inString = true;
    else if (char === '[') depth += 1;
    else if (char === ']' && --depth === 0) return JSON.parse(payload.slice(start, index + 1));
  }
  throw new Error('The use-case list is incomplete');
}

function normalizeUrl(value) {
  const url = new URL(value);
  if (url.hostname === 'twitter.com') url.hostname = 'x.com';
  url.search = '';
  url.hash = '';
  url.pathname = url.pathname.replace(/\/$/, '');
  return url.href;
}

function validateItems(items) {
  if (items.length < EXPECTED_MINIMUM) throw new Error(`Expected at least ${EXPECTED_MINIMUM} cases, received ${items.length}`);
  const urls = new Set();
  for (const item of items) {
    for (const key of ['caseNumber', 'category', 'title', 'takeaway', 'sourceUrl', 'author', 'poster']) {
      if (!item[key]) throw new Error(`Case ${item.id || 'unknown'} is missing ${key}`);
    }
    if (!CATEGORY_LABELS[item.category]) throw new Error(`Unknown category: ${item.category}`);
    const url = normalizeUrl(item.sourceUrl);
    if (urls.has(url)) throw new Error(`Duplicate source URL: ${url}`);
    urls.add(url);
  }
}

function stableId(item) {
  const fingerprint = createHash('sha256').update(normalizeUrl(item.sourceUrl)).digest('hex').slice(0, 16);
  return `work-${fingerprint}`;
}

function previewName(item) {
  return `cheerself-${String(item.caseNumber).padStart(3, '0')}.jpg`;
}

function toWork(item, sourceOrder, imageUrl) {
  const handle = item.author.replace(/^@/, '');
  return {
    id: stableId(item),
    name: item.title,
    description: item.takeaway,
    category: SITE_CATEGORIES[item.category],
    sourceCategory: `CheerSelfAI · ${CATEGORY_LABELS[item.category]}`,
    author: { name: item.author, url: `https://x.com/${handle}` },
    demoUrl: normalizeUrl(item.sourceUrl),
    sourceUrl: null,
    repoUrl: null,
    imageUrl,
    posterUrl: null,
    videoUrl: null,
    sourceOrder,
  };
}

function sourceReadme(items) {
  const lines = [
    '# GPT-6 Astra 使用案例（CheerSelfAI）',
    '',
    `来源：[cheerselfai.com/usecase/gpt-6-astra](${SOURCE_URL})。本快照于 2026-09-07 从页面公开结构化数据整理，共 ${items.length} 个案例；保留标题、摘要、作者、分类、原帖及预览图地址。互动数据是来源页面当时的快照，不代表实时数值。`,
    '',
  ];
  for (const item of items) {
    lines.push(`${item.caseNumber}. [${item.title}](${item.sourceUrl}) — ${item.author} · ${CATEGORY_LABELS[item.category]} · ${item.evidenceType}`);
    lines.push(`   - ${item.takeaway}`);
  }
  lines.push('', '## 权利说明', '', '案例原帖及媒体归各自作者所有；本仓库仅保存索引信息和用于识别案例的公开预览图，不转载视频。', '');
  return lines.join('\n');
}

function rootReadmeSection(items, stats) {
  const lines = [
    `## CheerSelfAI：${items.length} 个使用案例`,
    '',
    `来源页面：[GPT-6 Astra 使用案例](${SOURCE_URL})。页面公开结构化数据共 ${items.length} 条，与原目录按 X 原帖 URL 去重后新增 ${stats.added} 条、重合 ${stats.overlap} 条；同时清理原目录跨来源重复项，网站合计 ${stats.total} 个独立案例。以下在 README 直接列出全部标题和原始出处；摘要、作者、分类与证据边界见[完整本地快照](sources/cheerselfai/README.md)。视频仍在原帖或来源站播放，本仓库不保存视频。`,
    '',
  ];
  for (let index = 0; index < items.length; index += 4) {
    const group = items.slice(index, index + 4).map(item => `[${item.title}](${item.sourceUrl})`).join(' · ');
    lines.push(`${Math.floor(index / 4) + 1}. ${group}`);
  }
  lines.push('');
  return lines.join('\n');
}

async function downloadPreview(item, outputPath) {
  try {
    await access(outputPath);
    return;
  } catch {
    // Download previews that are not already present in the snapshot.
  }
  const response = await fetch(item.poster, { signal: AbortSignal.timeout(30_000) });
  if (!response.ok) throw new Error(`Preview ${item.caseNumber} returned HTTP ${response.status}`);
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.startsWith('image/')) throw new Error(`Preview ${item.caseNumber} is not an image`);
  const bytes = Buffer.from(await response.arrayBuffer());
  if (bytes.length < 1_000) throw new Error(`Preview ${item.caseNumber} is unexpectedly small`);
  await writeFile(outputPath, bytes);
}

async function runPool(tasks, concurrency = 12) {
  let cursor = 0;
  const workers = Array.from({ length: concurrency }, async () => {
    while (cursor < tasks.length) {
      const task = tasks[cursor];
      cursor += 1;
      await task();
    }
  });
  await Promise.all(workers);
}

async function main() {
  const htmlPath = process.argv[2];
  if (!htmlPath) throw new Error(`Usage: node ${basename(process.argv[1])} <saved-page.html>`);
  const repository = resolve(dirname(new URL(import.meta.url).pathname), '..');
  const html = await readFile(resolve(htmlPath), 'utf8');
  const items = extractItems(html);
  validateItems(items);

  const catalogPath = resolve(repository, 'sources/martin/website/public/data/catalog-fallback.json');
  const catalog = JSON.parse(await readFile(catalogPath, 'utf8'));
  const importedIds = new Set(items.map(stableId));
  const baseWorks = catalog.works.filter(work => !importedIds.has(work.id));
  const uniqueWorks = [];
  const primaryUrls = new Map();
  for (const work of baseWorks) {
    const primaryUrl = work.demoUrl || work.sourceUrl || work.repoUrl;
    const key = primaryUrl ? normalizeUrl(primaryUrl) : work.id;
    const canonical = primaryUrls.get(key);
    if (!canonical) {
      primaryUrls.set(key, work);
      uniqueWorks.push(work);
      continue;
    }
    if ((!canonical.imageUrl || !canonical.imageUrl.startsWith('/')) && work.imageUrl?.startsWith('/')) canonical.imageUrl = work.imageUrl;
    canonical.sourceUrl ||= work.sourceUrl;
    canonical.repoUrl ||= work.repoUrl;
  }
  catalog.works = uniqueWorks;
  catalog.works.forEach((work, index) => { work.sourceOrder = index; });
  const byUrl = new Map();
  for (const work of catalog.works) {
    for (const value of [work.demoUrl, work.sourceUrl]) {
      if (value) byUrl.set(normalizeUrl(value), work);
    }
  }

  let overlap = 0;
  let added = 0;
  const previewTasks = [];
  const previewDirectory = resolve(repository, 'sources/martin/website/public/previews');
  await mkdir(previewDirectory, { recursive: true });
  for (const item of items) {
    const url = normalizeUrl(item.sourceUrl);
    const existing = byUrl.get(url);
    let imageUrl = existing?.imageUrl || `/previews/${previewName(item)}`;
    if (existing) {
      overlap += 1;
      if (!existing.imageUrl) existing.imageUrl = imageUrl;
      existing.sourceCategory ||= `CheerSelfAI · ${CATEGORY_LABELS[item.category]}`;
    } else {
      const work = toWork(item, catalog.works.length, imageUrl);
      catalog.works.push(work);
      byUrl.set(url, work);
      added += 1;
    }
    if (imageUrl.includes('cheerself-')) {
      previewTasks.push(() => downloadPreview(item, resolve(previewDirectory, previewName(item))));
    }
  }

  const sourceDirectory = resolve(repository, 'sources/cheerselfai');
  await mkdir(sourceDirectory, { recursive: true });
  await writeFile(resolve(sourceDirectory, 'cases.json'), `${JSON.stringify({ source: SOURCE_URL, snapshotDate: '2026-09-07', total: items.length, items }, null, 2)}\n`);
  await writeFile(resolve(sourceDirectory, 'README.md'), sourceReadme(items));
  await writeFile(catalogPath, `${JSON.stringify(catalog, null, 2)}\n`);

  const rootReadmePath = resolve(repository, 'README.md');
  const rootReadme = await readFile(rootReadmePath, 'utf8');
  const sectionStart = rootReadme.indexOf('## CheerSelfAI：');
  const sectionEnd = rootReadme.indexOf('## 许可与来源说明', sectionStart);
  if (sectionStart < 0 || sectionEnd < 0) throw new Error('Could not locate the CheerSelfAI README section');
  const section = rootReadmeSection(items, { overlap, added, total: catalog.works.length });
  await writeFile(rootReadmePath, `${rootReadme.slice(0, sectionStart)}${section}\n${rootReadme.slice(sectionEnd)}`);

  await runPool(previewTasks);
  console.log(JSON.stringify({ source: items.length, overlap, added, total: catalog.works.length, previewsEnsured: previewTasks.length }));
}

main().catch(error => {
  console.error(error.message);
  process.exitCode = 1;
});
