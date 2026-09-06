---
name: awesome-gpt6-curator
description: "Use when maintaining awesome-gpt6: collecting GPT-6 cases or prompts, reviewing submissions, enforcing formats, handling GitHub login or repository access, uploading reviewed files, publishing, or resuming interrupted releases. 适用于该仓库的搜集、核验、上传发布和 Agent 接力；不用于一般网页开发。"
---

# Awesome GPT6 资料策展与发布

交付少量有出处、格式一致、可追溯的案例。发布完成必须有远端文件验证；搜索摘要、成功登录、点击上传都不等于任务完成。

## 任务范围与环境

- 默认仓库 `https://github.com/zender555/awesome-gpt6`，本机常见路径 `D:/awesome-gpt6`。现场确认目录、账号、分支，不把此路径当成跨机器约定。
- 先读目标仓库的 `AGENTS.md`、`CONTRIBUTING.md`、`docs/maintaining.md` 和分类索引。
- “搜集/整理”默认只准备本地文件；“搜集并发布/更新到 GitHub”包含发布。沿用本次任务已有授权，不重复确认常规操作。Skill 本身不授予所有未来任务的发布权限。
- 默认最多 3 条新案例，用户指定数量优先。保留首页封面和四张栏目图，普通收录只改分类索引。不得自动合并未审核的社区提交。
- 需要 Node.js 22+、Git，无 npm 依赖。安装版或仓库版都可用；脚本路径相对于当前 Skill，所有命令明确指定目标 `--repo`。

## 一体化流程

1. **预检**：确认未提交修改和目标仓库，运行 doctor。发布任务同时检查身份与网络；异常读取 [登录与权限](references/github.md)。
2. **搜集**：按 [研究规则](references/research.md) 搜索并实际打开来源，查重，保留作者、模型证据、作品和提示词出处。无法读取原帖时标二手线索。
3. **落稿**：复制 [采集表](assets/intake.json) 到目标仓库 `.local/intake.json`，按 [字段规范](references/format.md) 填写，一次一条。
4. **生成**：validate 后 add；更新已有结构化案例用 update。脚本同步固定栏目 Markdown、JSON 记录与分类索引标题/状态；重复输入不重复添加，add 不覆盖不同内容。
5. **审核**：实际阅读来源和生成内容，运行 check。结构检查不代表来源真实、版权许可或独立复现。
6. **发布准备**：收集 add 输出的 files，去重写入 `.local/files.json`，plan 生成文件指纹与远端基准。阅读差异，确认清单不夹带无关文件、秘密或缓存。
7. **上传发布**：按 [发布与恢复](references/publishing.md) 使用已有 Git、连接器或网页登录。仅在本任务已授权发布且资料已审核时写入外部系统；不要重新索要已经给出的授权。
8. **验收**：verify-release 比较远端每个文件；再确认对应 Actions 和实际页面、图片。未知项必须披露，不能提前报完成。

```powershell
# 在仓库根目录；个人安装版应改为其真实脚本路径。
$curator = Join-Path (Get-Location) 'skills/awesome-gpt6-curator/scripts/curator.mjs'
node $curator doctor --repo .
node $curator validate --repo . --input .local/intake.json
node $curator add --repo . --input .local/intake.json
node $curator check --repo .
node $curator plan --repo . --files .local/files.json --out .local/release.json
node $curator verify-manifest --repo . --manifest .local/release.json
# 仅在本次任务授权发布、内容已审阅且 Git 身份可用时：
node $curator publish --repo . --manifest .local/release.json --authorized
node $curator verify-release --repo . --manifest .local/release.json
```

## 固定判断

| 情况 | 处理 |
| :--- | :--- |
| 原帖不可读，仅聚合页可读 | 二手线索，保留两个 URL，不列为已核对精选 |
| 没有完整提示词 | 未公开，prompt 留空；原创改写单独标明 |
| 没有亲自运行 | 未复现；看过演示不算复现 |
| 同一来源换了标题 | 更新已有条目，不重复收录 |
| 登录成功，写入 403 | 检查 App 安装账号和选中的仓库 |
| TLS/传输失败 | 保留本地成果，有限重试或换可用通道，不关闭证书验证 |
| 提交后超时 | 先核对远端，已落盘不重提 |
| 远端变了 | 读取差异并整合、重做清单，不强推、不重置用户工作 |

## 接力与交付

在目标仓库 `.local/handoff.md` 写：任务与发布授权、账号/仓库/分支、来源核对结果、待核实项、输入记录、清单路径、已知本地/远端提交、当前通道与最后错误、下一步。不要保存令牌、Cookie、密码、验证码或浏览器内部编号。

最终给出条目数量、仓库或 PR 链接、检查结果和未核实信息。只完成本地时明确“尚未发布”。不制造投稿、评价或贡献记录，不调用付费生成服务来填充案例。

维护 Skill 时，在 Skill 根目录运行 `node --test scripts/curator.test.mjs`。测试使用临时本地 Git 仓库，不向真实 GitHub 上传测试内容。
