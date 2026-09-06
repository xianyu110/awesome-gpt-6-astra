# 维护与低成本接力

## 结构

- `README.md`：封面、分类和少量精选。
- `cases/`：四类案例，一案一文件。
- `prompts/`：原创实验模板和有出处的社区提示词线索。
- `templates/case.md`：投稿与模型整理共用模板。
- `.github/`：投稿表单、纠错表单、PR 模板和内容检查。
- `assets/cover.svg`：可直接修改文字与颜色的矢量封面。
- `AGENTS.md`：后续模型的采集规则。

## 给其他模型的任务

仓库内已提供完整 [awesome-gpt6-curator Skill](../skills/awesome-gpt6-curator/SKILL.md)。其他 Agent 可直接读取此文件，无需安装；需要个人 Skill 时，将整个 `skills/awesome-gpt6-curator` 文件夹复制到该 Agent 的 skills 目录。默认 Codex 个人路径为 `~/.codex/skills/awesome-gpt6-curator`；若设置了 CODEX_HOME，则使用其 skills 子目录。

可直接交接：

```text
请读取 skills/awesome-gpt6-curator/SKILL.md，搜集最多 3 个 GPT-6 的游戏制作案例。
核验原始来源，按结构化采集表整理，检查去重、提示词出处和复现状态。
审核通过后发布到 zender555/awesome-gpt6，保留现有首页风格。
若上传中断，按发布清单核对远端再恢复，最后报告提交链接与检查结果。
```

已安装 Skill 的 Agent 可以把第一句换成“使用 `$awesome-gpt6-curator`”。如果只想先看资料而不发布，将“审核通过后发布”改为“只准备本地修改，不发布”。

```text
请维护这个 awesome-gpt6 仓库。先读 AGENTS.md、CONTRIBUTING.md。
这次只查找 [分类] 的最多 3 个新案例，优先原作者和官方来源。
实际打开来源，记录准确模型名、署名、提示词出处和核对日期。
无法读取原帖的线索不得写成已核对精选；不要虚构完整提示词。
按 templates/case.md 新增条目并更新对应分类索引，避免重复。
不调用付费生成服务，不扩建网站，不改首页视觉风格。
运行 node scripts/check.mjs，交付本次修改和未核实信息清单。
```

## 审核投稿

1. 在 Issues 查看标题以 `[投稿]` 开头的提交，检查作品是否重复。
2. 打开原始来源，核对作者、模型证据、作品与许可。
3. 信息不足则保留为线索或请求补充；不要虚构缺失内容。
4. 建立案例文件，更新分类索引，运行检查后合并。
5. 在原 Issue 中链接收录结果，再关闭 Issue。

投稿者可以提 Issue 或 Fork 后提 PR，无需仓库写权限。默认不会自动合并；本版不设置自动回复机器人，也没有付费运行依赖。

## 检查范围

`node scripts/check.mjs` 使用 Node.js 标准库，检查 Markdown 相对文件链接、显式锚点、案例栏目、大小限制与 UTF-8 文本基本规范。GitHub Actions 还运行策展 Skill 的 `check`，核对新增结构化记录与 Markdown、索引的一致性。均不调用付费模型。

它不访问互联网，不判断案例真假、授权情况或作品质量；这些由维护者人工审核。YAML 表单还应在 GitHub 的新建 Issue 页面实际确认。

## 首版范围

当前使用 GitHub 原生 README 和投稿机制。没有独立网站、数据库或生成接口。需要图库网站时，可以保留现有案例文件作为内容来源，再单独规划。
