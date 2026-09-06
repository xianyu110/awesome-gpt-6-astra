#!/usr/bin/env python3
"""Sync public upstream README snapshots into this merged catalog."""

from __future__ import annotations

import argparse
import json
import os
import re
import urllib.error
import urllib.request
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
README = ROOT / "README.md"
UPSTREAM_README = ROOT / "UPSTREAM.md"
SOURCE_TABLE = ROOT / "SOURCES.md"
BEGIN = "<!-- BEGIN AUTO-SYNC STATUS -->"
END = "<!-- END AUTO-SYNC STATUS -->"
CONTENT_BEGIN = "<!-- BEGIN AUTO-SYNC CONTENT -->"
CONTENT_END = "<!-- END AUTO-SYNC CONTENT -->"


@dataclass(frozen=True)
class Upstream:
    repo: str
    destination: str
    files: tuple[str, ...] = ("README.md",)


UPSTREAMS = (
    Upstream(
        "MartinDelophy/awesome-gpt-6-astra",
        "sources/martin",
        ("README.md", "README.en.md"),
    ),
    Upstream(
        "helloianneo/awesome-gpt6-astra",
        "sources/helloianneo",
        ("README.md", "README.en.md"),
    ),
    Upstream(
        "archorfight/awesome-gpt-6-astra",
        "sources/archorfight",
        ("README.md", "README.zh-CN.md"),
    ),
    Upstream("zender555/awesome-gpt6", "sources/zender"),
)


def request_json(url: str) -> dict:
    request = urllib.request.Request(
        url,
        headers={
            "Accept": "application/vnd.github+json",
            "User-Agent": "awesome-gpt-6-astra-upstream-sync",
        },
    )
    token = os.environ.get("GITHUB_TOKEN")
    if token:
        request.add_header("Authorization", f"Bearer {token}")
    with urllib.request.urlopen(request, timeout=30) as response:
        return json.load(response)


def fetch_text(url: str) -> str:
    request = urllib.request.Request(
        url,
        headers={"User-Agent": "awesome-gpt-6-astra-upstream-sync"},
    )
    token = os.environ.get("GITHUB_TOKEN")
    if token:
        request.add_header("Authorization", f"Bearer {token}")
    with urllib.request.urlopen(request, timeout=30) as response:
        return response.read().decode("utf-8")


def sync_upstream(upstream: Upstream) -> tuple[str, str, bool]:
    metadata = request_json(f"https://api.github.com/repos/{upstream.repo}")
    branch = metadata.get("default_branch") or "main"
    sha = request_json(
        f"https://api.github.com/repos/{upstream.repo}/commits/{branch}"
    ).get("sha", "")
    changed = False
    for filename in upstream.files:
        raw_url = f"https://raw.githubusercontent.com/{upstream.repo}/{branch}/{filename}"
        content = fetch_text(raw_url).replace("\r\n", "\n")
        destination = ROOT / upstream.destination / filename
        destination.parent.mkdir(parents=True, exist_ok=True)
        if not destination.exists() or destination.read_text(encoding="utf-8") != content:
            destination.write_text(content, encoding="utf-8")
            changed = True
    return upstream.repo, sha, changed


def replace_marked_block(text: str, block: str) -> str:
    pattern = re.compile(rf"{re.escape(BEGIN)}.*?{re.escape(END)}", re.DOTALL)
    replacement = f"{BEGIN}\n{block.rstrip()}\n{END}"
    if pattern.search(text):
        return pattern.sub(replacement, text, count=1)
    suffix = "" if text.endswith("\n") else "\n"
    return f"{text}{suffix}\n{replacement}\n"


def build_root_readme(timestamp: str) -> None:
    readme = README.read_text(encoding="utf-8")
    old = re.compile(
        rf"\n## 自动同步上游内容.*?{re.escape(CONTENT_END)}\n?",
        re.DOTALL,
    )
    readme = old.sub("\n", readme).rstrip()
    sections = [
        "## 自动同步上游内容",
        "",
        f"> 以下内容由 GitHub Actions 自动同步，最后生成于 `{timestamp}`。人工精选区保持不变。",
        "",
        CONTENT_BEGIN,
        "",
    ]
    for upstream in UPSTREAMS:
        for filename in upstream.files:
            path = ROOT / upstream.destination / filename
            if not path.exists():
                continue
            sections.extend(
                [
                    f"### {upstream.repo} / `{filename}`",
                    "",
                    path.read_text(encoding="utf-8").rstrip(),
                    "",
                ]
            )
    sections.extend([CONTENT_END, ""])
    README.write_text(f"{readme}\n\n" + "\n".join(sections), encoding="utf-8")


def update_status(statuses: list[tuple[str, str, bool]], timestamp: str) -> None:
    rows = [
        "| 仓库 | 最新提交 | 本次是否变化 |",
        "| --- | --- | --- |",
    ]
    for repo, sha, changed in statuses:
        short_sha = sha[:12] if sha else "未知"
        rows.append(f"| `{repo}` | `{short_sha}` | {'是' if changed else '否'} |")
    block = f"最后同步：`{timestamp}`\n\n" + "\n".join(rows)
    README.write_text(
        replace_marked_block(README.read_text(encoding="utf-8"), block),
        encoding="utf-8",
    )
    SOURCE_TABLE.write_text(
        replace_marked_block(SOURCE_TABLE.read_text(encoding="utf-8"), block),
        encoding="utf-8",
    )


def build_upstream_readme(timestamp: str) -> None:
    sections = [
        "# 上游 README 快照",
        "",
        f"> 自动生成于 `{timestamp}`。内容来自公开 GitHub 仓库，原始文件保存在 [`sources/`](sources/)。",
        "",
    ]
    for upstream in UPSTREAMS:
        sections.extend([f"## {upstream.repo}", ""])
        for filename in upstream.files:
            path = ROOT / upstream.destination / filename
            if not path.exists():
                continue
            sections.extend(
                [
                    f"### `{filename}`",
                    "",
                    "<details><summary>展开查看完整上游内容</summary>",
                    "",
                    f"<!-- BEGIN UPSTREAM {upstream.repo} {filename} -->",
                    "",
                    path.read_text(encoding="utf-8").rstrip(),
                    "",
                    f"<!-- END UPSTREAM {upstream.repo} {filename} -->",
                    "",
                    "</details>",
                    "",
                ]
            )
    UPSTREAM_README.write_text("\n".join(sections).rstrip() + "\n", encoding="utf-8")


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true", help="only validate configuration")
    args = parser.parse_args()
    if args.check:
        print(f"configured upstreams: {len(UPSTREAMS)}")
        return 0

    timestamp = datetime.now(timezone.utc).astimezone().isoformat(timespec="seconds")
    statuses = []
    for upstream in UPSTREAMS:
        try:
            statuses.append(sync_upstream(upstream))
        except (urllib.error.URLError, urllib.error.HTTPError, TimeoutError) as error:
            raise SystemExit(f"同步失败：{upstream.repo}: {error}") from error
    changed = any(item[2] for item in statuses)
    first_run = "尚未运行自动同步工作流" in README.read_text(encoding="utf-8")
    has_generated_content = CONTENT_BEGIN in README.read_text(encoding="utf-8")
    if changed or first_run or not UPSTREAM_README.exists() or not has_generated_content:
        update_status(statuses, timestamp)
        build_root_readme(timestamp)
        build_upstream_readme(timestamp)
    else:
        print("上游 README 没有变化，不创建同步提交。")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
