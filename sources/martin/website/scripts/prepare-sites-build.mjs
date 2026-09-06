#!/usr/bin/env node
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseCatalogMarkdown, README_URL, REPOSITORY } from "../server/catalog.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const index = path.join(dist, "client", "index.html");
const worker = path.join(root, "worker", "index.js");
const hosting = path.join(root, ".openai", "hosting.json");
const repositoryRoot = path.resolve(root, "..", "..", "..");
const fallback = path.join(dist, "client", "data", "catalog-fallback.json");
const manifest = JSON.parse(readFileSync(path.join(root, "server", "previews.manifest.json"), "utf8"));

for (const file of [index, worker, hosting]) {
  if (!existsSync(file)) throw new Error("Missing Sites build input: " + file);
}

const parsedWorks = parseCatalogMarkdown(readFileSync(path.join(repositoryRoot, "README.md"), "utf8"));
const shippedSnapshotPath = path.join(root, "public", "data", "catalog-fallback.json");
const shippedSnapshot = JSON.parse(readFileSync(shippedSnapshotPath, "utf8"));
const imageByName = new Map(
  parsedWorks
    .filter((work) => work.imageUrl)
    .map((work) => [work.name.normalize("NFKC").toLowerCase(), work.imageUrl]),
);

function canonical(value) {
  try {
    const url = new URL(value);
    url.hash = "";
    return url.href.replace(/\/$/, "");
  } catch {
    return null;
  }
}

function localManifestPreview(work) {
  const match = manifest.find((item) =>
    item.urls.some((url) => [work.demoUrl, work.sourceUrl].map(canonical).includes(canonical(url))),
  );
  return match?.file || null;
}

function xStatusId(value) {
  return value?.match(/(?:x|twitter)\.com\/[^/]+\/status\/(\d+)/i)?.[1] || null;
}

function imageProxy(value) {
  if (!value) return null;
  return `https://wsrv.nl/?url=${encodeURIComponent(value)}`;
}

function normalizeImage(value) {
  return typeof value === "string" && value.startsWith("https://pbs.twimg.com/")
    ? imageProxy(value)
    : value || null;
}

async function fetchTweetPreview(work) {
  const id = xStatusId(work.demoUrl);
  if (!id) return null;
  try {
    const response = await fetch(`https://api.fxtwitter.com/status/${id}`, {
      headers: { "User-Agent": "AstraShowcase/1.0 (public project preview)" },
      signal: AbortSignal.timeout(7000),
    });
    if (!response.ok) return null;
    const payload = await response.json();
    const media = payload?.tweet?.media?.all?.[0];
    const source = media?.type === "video" ? media?.thumbnail_url : media?.url;
    if (!source) return null;
    return {
      imageUrl: imageProxy(source),
      posterUrl: media?.type === "video" ? imageProxy(media.thumbnail_url) : null,
      videoUrl: media?.type === "video" ? media.url : null,
    };
  } catch {
    return null;
  }
}

function githubCard(work) {
  const value = work.repoUrl || work.sourceUrl;
  try {
    const url = new URL(value);
    if (url.hostname !== "github.com") return null;
    const [owner, repo] = url.pathname.split("/").filter(Boolean);
    if (!owner || !repo) return null;
    return `https://opengraph.githubassets.com/1/${owner}/${repo.replace(/\.git$/, "")}`;
  } catch {
    return null;
  }
}

async function enrichPreviews(works) {
  const candidates = works.filter((work) => !work.imageUrl && !work.posterUrl && !work.videoUrl);
  const results = new Map();
  for (let index = 0; index < candidates.length; index += 6) {
    const batch = await Promise.all(
      candidates.slice(index, index + 6).map(async (work) => [work.id, await fetchTweetPreview(work)]),
    );
    for (const [id, preview] of batch) results.set(id, preview);
  }
  return works.map((work) => {
    const fetched = results.get(work.id);
    const local = localManifestPreview(work);
    const card = githubCard(work);
    const imageUrl = normalizeImage(
      work.imageUrl ||
      imageByName.get(work.name.normalize("NFKC").toLowerCase()) ||
      local ||
      fetched?.imageUrl ||
      card ||
      null,
    );
    return {
      ...work,
      imageUrl,
      posterUrl: work.posterUrl || fetched?.posterUrl || null,
      videoUrl: work.videoUrl || fetched?.videoUrl || null,
    };
  });
}

const sourceWorks = Array.isArray(shippedSnapshot.works) ? shippedSnapshot.works : parsedWorks;
const works = await enrichPreviews(sourceWorks);
const checkedAt = new Date().toISOString();
mkdirSync(path.dirname(fallback), { recursive: true });
writeFileSync(fallback, `${JSON.stringify({
  works,
  source: {
    repository: REPOSITORY,
    url: README_URL,
    checkedAt,
    lastSuccessfulAt: checkedAt,
    revision: process.env.GITHUB_SHA || "pages-build",
    stale: false,
    status: "fresh",
  },
  refreshAfterSeconds: 300,
}, null, 2)}\n`);

mkdirSync(path.join(dist, "server"), { recursive: true });
mkdirSync(path.join(dist, ".openai"), { recursive: true });
copyFileSync(worker, path.join(dist, "server", "index.js"));
copyFileSync(hosting, path.join(dist, ".openai", "hosting.json"));

console.log("Prepared Sites build: dist/server/index.js and dist/.openai/hosting.json");
