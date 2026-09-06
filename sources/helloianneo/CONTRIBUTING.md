# 投稿指南 Contributing

中文为默认说明；English follows.

感谢你把好案例送进来。这是精选馆，不是全集索引。

## 收录标准

同时满足：

1. 有可公开核对的原帖（优先 X status 原链）
2. 有可见产出：视频、可玩链接、截图或开源仓库
3. 至少具备一项：创意跳跃 / 完成度 / 可复用方法 / 可量化结果
4. 能明确署名作者

不收：

- 纯跑分、纯发布感叹
- 没有视频或成品的口头吹
- 搬运剪辑且不链原作者
- 同质量重复发布（同一作者只留最强的一条）
- 未公开的高级攻击 / exploit 细节

## 怎么提

1. Fork 本仓库
2. 复制 [`templates/CASE.md`](templates/CASE.md)
3. 新建 `cases/<category>/<slug>.md`，slug 用英文短标题
4. 在对应分类页和 `data/cases.yml` 补一行
5. 如确实达到 Featured 水准，在 PR 里说明理由；否则默认进目录
6. 提 PR，标题格式：`Add case: @handle — short title`

## 写作要求

- 摘要自写，不整段粘贴推文
- handle、作品名保留原文
- 必须带 X status 原链
- 注明证据边界：one-shot / 多轮 / 作者自述 / 本仓库未复现
- 中英双语可以写在同一个案例文件里

## Featured 转入

Featured 上限建议锁在 16–24 条。新的精选通常要把旧条目降到目录。

---

## English

This is a curated gallery, not an exhaustive index.

**Include only if** the case has a public original post, a visible artifact, at least one of {novelty, finish, reusable method, measured result}, and a clear author.

**Do not include** benchmark-only posts, launch hype, unsigned remixes, duplicate one-shots from the same author, or unpublished exploit details.

Open a PR using [`templates/CASE.md`](templates/CASE.md). Keep summaries original. Always link the X status URL. Mark evidence boundaries.
