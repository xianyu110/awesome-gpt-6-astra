# 字段与文件规范

采集表故意留空关键字段，未经填写不能校验通过。它不是可发布的示例。

| 字段 | 要求 |
| :--- | :--- |
| id / category | 小写英文数字短横线文件名；类别 3d/web/video/games |
| title | 中文为主的简短单行标题 |
| author / authorUrl | 原作者及公开主页；未知先查证，不能编造 |
| model / modelEvidence | 来源准确模型名及声明位置；二手可写待核实并解释 |
| tools | 软件或服务数组，未知为 `["未公开"]` |
| sourceUrl | 原始作品/作者发布链接，不是搜索结果页 |
| sourceType | 官方展示 / 官方客户案例 / 作者自述 / 二手线索 |
| sourceAccess | 原始来源已读取 / 仅二手来源，与访问事实一致 |
| secondaryUrl | 二手线索必填实际读到的转述 URL；否则 null |
| checkedAt | 实际核对日期 YYYY-MM-DD，不能无效或在未来 |
| summary | 原创中文摘要：作品、亮点、证据，不照抄长文 |
| promptStatus | 作者原文 / 作者摘要 / 整理者改写 / 未公开 |
| prompt | 未公开时必须空字符串；其余填实际内容 |
| promptSourceUrl | 作者原文/摘要必填来源；原创改写可为 null |
| reproduction | 未复现 / 部分复现 / 已复现 |
| reproductionEvidence | 部分或已复现需实际记录 URL 数组，含环境、日期、步骤、结果；否则 [] |
| limitations / rights | 未公开信息、局限、失败，以及权利人、许可或仅链接引用说明 |

保留全部字段，不接受未知键。URL 仅允许无内嵌凭据的 HTTP(S)。脚本不访问这些链接，因此真实性必须由 Agent 核验。

add 同时维护三个文件：

```text
cases/<category>/<id>.md
cases/<category>/README.md
records/<category>/<id>.json
```

Markdown 固定栏目：概览、作品与来源、提示词、复现与局限、权利与署名。JSON、Markdown、索引标题和状态不一致会使 check 失败。修改已有结构化案例时，在 `.local/` 准备新的完整输入，使用 `update --input .local/intake.json --repo .` 同步三个文件，再审阅差异。add 不覆盖不同内容，update 仅用于已有结构化案例。

新增索引放在“新增案例与线索”表，逐条标来源和复现状态，不自动成为首页精选。旧案例没有 JSON 时保留原样，只接受仓库原有检查；迁移需要重新核对，不批量推断。

通过本 Skill 发布任何所选案例文件时，必须附带对应 JSON 和分类索引。即使它是旧案例，本次修改也要先补齐记录；不修改的旧案例无需迁移。

去重使用规范化来源 URL：去片段、尾斜杠及常见跟踪参数，统一 twitter.com/x.com，扫描现有案例。同一发布页的多件作品优先补充既有条目，确有独立作品时使用真实的独立作品链接，不能添加随机参数绕过去重。

媒体放 assets，文件不超过 2 MB，英文文件名；大型工程和视频链接到原作者渠道。概念插画不作为案例实测截图。普通搜集不重做现有首页图。
