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

for (const file of [index, worker, hosting]) {
  if (!existsSync(file)) throw new Error("Missing Sites build input: " + file);
}

const works = parseCatalogMarkdown(readFileSync(path.join(repositoryRoot, "README.md"), "utf8"));
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
