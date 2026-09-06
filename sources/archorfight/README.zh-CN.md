# GPT-6 Astra 生态资源清单

> 精选的 GPT-6 Astra（OpenAI 2026-09-03 发布）项目、案例、工具与深度分析。Astra 主打 Computer Use 与空间推理——电脑上能做的事，它替你做。

[English](README.md) | [简体中文](README.zh-CN.md)

## 目录

- [官方资源](#官方资源)
- [社区项目](#社区项目)
- [病毒级 Demo（附原作者链接）](#病毒级-demo)
- [社区热帖（Reddit / Hacker News）](#社区热帖)
- [中文生态（B站 / 知乎）](#中文生态)
- [编程工具集成](#编程工具集成)
- [深度分析与评测](#深度分析与评测)
- [贡献指南](#贡献指南)

---

## 官方资源

| 资源 | 说明 |
|---|---|
| [发布博客](https://openai.com/index/gpt-6-astra/) | 官方发布页，全部基准数字的一手来源 |
| [OpenAI 官宣推文](https://x.com/i/status/2095595741528125780) | 9 小时 3600 万浏览、31.5 万赞 |
| [ChatGPT 发布推文](https://x.com/i/status/2095597502368284748) | "A new star enters the Chat" |
| [系统卡](https://deploymentsafety.openai.com) | 官方安全文档（思维链监控失效等坦白） |
| [sama 三连道歉与补偿推](https://x.com/thsottiaux) | 灰度翻车后每等一天送一次额度重置（赛博义父梗的由来） |

**官方核心数字**：OSWorld 2.0 上 72.6%（比 GPT-5.6 Sol 少花 47% 时间）；FrontierMath Tier 4 = 98%；ARC-AGI-3 = 99.9%（注意：定制 harness，默认 harness 62.7%）；ExploitBench = 100%（测试中发现并披露 2 个未知 0day）；八针大海捞针 256K–512K = 100%。定价：$10/M 输入 + $50/M 输出。

## 社区项目

| 项目 | 说明 |
|---|---|
| [DannyMac180/astra-advisor](https://github.com/DannyMac180/astra-advisor) ⭐25 | Astra 编排，动态 Sol/Terra/Luna 子代理 |
| [Ayi1337/gpt6-astra-one-shot-games](https://github.com/Ayi1337/gpt6-astra-one-shot-games) ⭐14 | One-shot 游戏测试集，含原始 Prompt 与可直接运行的单文件 HTML |
| [tadamcz/koethe](https://github.com/tadamcz/koethe) ⭐5 | **Astra 解出数学开放问题**：Köthe 猜想（Krempa 矩阵形式）的 Lean 4 否证，附 Palomar 投稿仓库 |
| [tadamcz/mean-value-problem](https://github.com/tadamcz/mean-value-problem) ⭐2 | Astra 找到 Smale 平均值猜想（K=1）的 Lean 4 否证 |
| [Firnschnee/dual-model-mcp](https://github.com/Firnschnee/dual-model-mcp) ⭐4 | 同时查询 Claude Fable 5.1 与 GPT-6 Astra 的 MCP 服务器（OpenRouter） |
| [LunarXuan/task-model-router](https://github.com/LunarXuan/task-model-router) ⭐1 | 按预期返工成本在 Astra 与 GPT-5.6 Sol 间路由 Codex 任务 |
| [MiaAI-Lab/GPT-6-Astra-100-HTML-Files](https://github.com/MiaAI-Lab/GPT-6-Astra-100-HTML-Files) | 100 个单文件 HTML 视觉研究，Astra 生成 |
| [gih10012/astra-parabox-benchmark](https://github.com/gih10012/astra-parabox-benchmark) | 可复现的纯屏幕操作基准：364 个 Patrick's Parabox 关卡 |
| [coreprocess/openai-relay-for-cursor](https://github.com/coreprocess/openai-relay-for-cursor) | 让 Cursor 用上 GPT-6 Astra 等 Responses-API-only 模型的中继 |
| [sjh9714/astra-tandem](https://github.com/sjh9714/astra-tandem) | Luna 写码、Astra 审查的配对工作流 |
| [ShunsukeHayashi/gpt6-task-spawner](https://github.com/ShunsukeHayashi/gpt6-task-spawner) | 把任意 Task 委派给 Astra 另开 Codex 任务的插件（日文社区） |
| [marius4lui/NULLSPACE](https://github.com/marius4lui/NULLSPACE) | 用 GPT-6 Astra 开发的恐怖生存 FPS 游戏 |
| [Rising1234Sun/qingmingshanghetu](https://github.com/Rising1234Sun/qingmingshanghetu) ⭐1 | 《清明上河图》实时三维网页：交互漫游、昼夜切换、4K 展示录制，附中文提示词 |
| [da03/astra-plays-gta](https://github.com/da03/astra-plays-gta) ⭐1 | 让 Astra 在 Mac 上玩 GTA 罪恶都市：配置、提示词、键鼠截图小助手 |
| [xinbenlv/ra2-gpt-6-astra-2026-09-04](https://github.com/xinbenlv/ra2-gpt-6-astra-2026-09-04) ⭐1 | 红警 2 被 one-shot 复刻（Victor Zhou 出题的基准），附可玩页面 |
| [paveljor/agent-bluff](https://github.com/paveljor/agent-bluff) | 吹牛锦标赛：Astra、Fable 5.1、Grok 4.6 谁更会骗人？ |

## 病毒级 Demo

3D 建模是 Astra 的爆火赛道，多数案例附原始视频：

| [3D 人体解剖网站，2,234 个零件](https://x.com/i/status/2096221988763173186) | ashebytes | 24,960 赞 | 周末最火：把人体逐件拆开的学习网站 |
| [3D 游戏从零到可玩](https://x.com/i/status/2096008083826725132) | anshuc | 8739 赞 | "3D 游戏的神"——45 分钟 one-shot，只花配额 2% |
| [运行时生成的 Three.js 火车](https://x.com/i/status/2096082580554777041) | tomkrcha | 7,427 赞 | 没有 3D 模型文件——几何体全部由 TypeScript 代码运行时生成 |
| [Zillow 房源 → 3D 宣传片](https://x.com/i/status/2095612137582526615) | realYunfanYe | 7307 赞 | 房产数据直接变宣传视频 |
| [Canva 浏览器画人像](https://x.com/i/status/2095992132620136677) | iam_zachi | 7214 赞 | Computer Use 操控 Canva 一块块拼出人像 |
| [Blender 房子 → UE5 漫游](https://x.com/i/status/2095592572286533644) | goofyninjaaa | 6,996 赞 | 带泳池花园的全屋，独自完成；一句话干掉建筑可视化工作室（西语社区） |
| [房子照片 → 全屋 3D 模型](https://x.com/i/status/2095598645190291775) | tomkrcha | 6282 赞 | 早期访问实测，含玩具家电家具，60fps 可跑 |
| [UI 生成实测](https://x.com/i/status/2096059496812716307) | MSchwaibold | 6,180 赞 | 一条 prompt 出干净的多组件 UI |
| [蒸汽火车 Blender 建模](https://x.com/i/status/2095756085890310311) | tomkrcha | 5876 赞 | 旧图纸 → 3,295 个可编辑对象 |
| [Max vs Medium 档成本实测](https://x.com/i/status/2095994051354919049) | AiBattle_ | 5120 赞 | 53 分钟 4% 周配额 vs 25 分钟 1% |
| [KiCad PCB 布局](https://x.com/i/status/2095637507337826741) | ChihYang04 | 4799 赞 | 原理图 → 电路板布线，电子工程师赛道 |
| [可交互 V8 发动机](https://x.com/i/status/2096280244663775423) | DilumSanjaya | 4,029 赞 | 高细节可交互的发动机可视化 |
| [一句话等 40 分钟的等距儿童房](https://x.com/i/status/2096048421543272893) | zhengli | 3,561 赞 | 随便一句 prompt 出图这个级别（中文社区） |
| [5 小时森林](https://x.com/i/status/2096263046918197609) | LexnLin | 1,931 赞 | 3,808 棵树、250 万丛草、近 4 万蕨类——three.js + 自定义 shader |
| [Tesla Model X 拆解网站](https://x.com/i/status/2096009146248122416) | ashebytes | 1731 赞 | 拆成 334 个建模零件的 3D 网站 |
| [3D 建模 BEAST 实测](https://x.com/i/status/2095982983379653113) | badxstudio | 1392 赞 | 工作室 3D 管线实测 |
| [机器人任务控制](https://x.com/i/status/2096064315115839904) | chooi_jeq | 1349 赞 | 95% vs Fable 5.1 的 40%，token 少 6.2x |
| [agentic CAD 新 SOTA](https://x.com/i/status/2096053889141489669) | adamdotnew | 1160 赞 | CAD 领域的阶跃 |
| [24 分钟把杭州搬进网页](https://x.com/i/status/2096143589151756638) | NFT_Chen | 1,065 赞 | 西湖雷峰塔钱江新城全有：飞行漫游、昼夜切换（中文社区） |
| [视频生成 vs Fable 5.1](https://x.com/i/status/2095739568528232538) | NFT_Chen | 648 赞 | "Astra 像在导戏"——镜头语言有情绪 |
| [自己搭别墅找房 agent](https://x.com/i/status/2096228864859201869) | marclou | 566 赞 | 把房源与空气质量/噪音/滑坡数据交叉比对 |
| [Computer Use 临界点论](https://x.com/i/status/2096051842174087386) | dotey | 292 赞 | 中文社区代表观点："开发→验收完整闭环" |

## 社区热帖

Reddit 全网热度（分数为发帖时快照）：

| [Gpt 6 astra benchmarks](https://www.reddit.com/r/singularity/comments/1w6f9xo/) | r/singularity | 2559 |
| [Fable 5.1 vs GPT 6 Astra 3D Blender 对比，差距惊人](https://www.reddit.com/r/OpenAI/comments/1w7ppcj/fable_51_vs_gpt_6_astra_3d_blender_mind_blowing/) | r/OpenAI | 1949 |
| [GPT-6-Astra-Max 画的 PS4 手柄 SVG](https://www.reddit.com/r/singularity/comments/1w7gj1i/gpt6astramax_svg_of_a_playstation_4_controller/) | r/singularity | 1346 |
| [GPT-6 Astra is actually nuts for electrical engineering](https://www.reddit.com/r/singularity/comments/1w6m7hr/) | r/singularity | 1192 |
| [GPT-6-Astra's tax return underpays the government](https://www.reddit.com/r/OpenAI/comments/1w6jp0n/) | r/OpenAI | 991 |
| ["Welcome to the AGI era" — The Verge 报道讨论](https://www.reddit.com/r/singularity/comments/1w6f0jp/) | r/singularity | 970 |
| [GPT-6 Astra Is Here—Kick Off the AGI Era](https://www.reddit.com/r/ChatGPT/comments/1w6f701/) | r/ChatGPT | 902 |
| [GPT-6 Astra Launch Video](https://www.reddit.com/r/singularity/comments/1w6gjmb/) | r/singularity | 837 |
| [全球推送开启后的第一时间体感楼](https://www.reddit.com/r/singularity/comments/1w7m0ui/its_been_a_few_hours_since_global_rollout_gpt6/) | r/singularity | 702 |
| [GPT-6 Astra Benchmarks](https://www.reddit.com/r/codex/comments/1w6fnc4/) | r/codex | 588 |
| [GPT-6 Astra 定价比 5.6 Sol 离谱](https://www.reddit.com/r/codex/comments/1w6hvo9/gpt6_astra_pricing_is_kinda_insane_compared_to_56/) | r/codex | 440 |
| [GPT-6 Astra \| OpenAI](https://www.reddit.com/r/OpenAI/comments/1w6hf6g/) | r/OpenAI | 1381 |

Hacker News 深度讨论：

| 帖子 | 看点 |
|---|---|
| [OpenAI's GPT-6 Astra on ARC-AGI-3](https://news.ycombinator.com/item?id=49555691) | "只有 Astra 解出 2/68 题，否证第 74 题花了 $218"——harness 之争的现场 |
| [GPT-6 Astra makes major gains in Artificial Analysis Coding Agent Index](https://news.ycombinator.com/item?id=49556147) | 编程 agent 指数跃升的讨论 |
| [GPT-6 Astra System Card](https://news.ycombinator.com/item?id=49555440) | 系统卡讨论：思维链监控失效 |
| [Ask HN: Initial Thoughts on GPT-6 Astra?](https://news.ycombinator.com/item?id=49571621) | 一线程序员的真实体感 |
| [GPT-6 Astra in code review](https://news.ycombinator.com/item?id=49572875) | CodeRabbit 实测：代码审查的收益、隐私与成本 |

## 中文生态

| 内容 | 作者/UP | 热度 | 看点 |
|---|---|---|---|
| [全网38个"神级"案例一次看完](https://www.bilibili.com/video/BV1KYbF6QE18/) | LetsVibeCoding | B站 | 案例总集篇 |
| [半小时重建 CS Dust2 地图](https://search.bilibili.com/all?keyword=GPT-6%20Astra%20Dust2) | B站多位UP | B站 | 竞技地图复刻赛道 |
| [实测：折腾一晚上，审美、Agent、3D 全都变强了](https://www.bilibili.com/video/BV1Xgtk6CEnX/) | B站 | B站 | 中文第一手长测 |
| [首批GPT-6内测结果好离谱](https://zhuanlan.zhihu.com/p/2079275830346359925) | 知乎专栏 | 知乎 | 首批实测盘点 |
| [权游片头 12 分钟复刻](https://search.bilibili.com/all?keyword=GPT-6%20Astra%20%E6%9D%83%E6%B8%B8) | B站 | B站 | 影视复刻赛道 |

## 编程工具集成

| 工具 | 状态 | 来源 |
|---|---|---|
| GitHub Copilot | 已上架，官方称长任务步数更少、完成前独立确认结果 | [GitHub 官方推文](https://x.com/i/status/2095971389190885815) |
| Codex | context 填满时可跨窗口记笔记、旧窗口可检索（config.toml 实验开启，数周内默认） | 官方发布博客 |
| OpenAI API | `gpt-6-astra`，$10/M 输入 + $50/M 输出；Fast 模式 2 倍速 2 倍价 | 官方 |
| Azure Foundry / Bedrock | 同步可用 | Nadella 推文 |
| Cursor | 社区中继方案已可用 | [openai-relay-for-cursor](https://github.com/coreprocess/openai-relay-for-cursor) |

## 深度分析与评测

- **[Simon Willison + ARC Prize 对 99.9% 的拆解](https://arcprize.org/blog/agi-3-update)** — ARC-AGI-3 99.9% 是 Provider Adapter harness（保留不透明推理状态 + compaction 复用）跑出来的；默认 harness 只有 62.7%，且 99.9% 花 $19K vs 默认 $26K。以后看评测先问"用了什么 harness"
- **Artificial Analysis 智能指数** — Astra = 61 分，与 GPT-5.6 Sol 持平，落后 Claude Fable 5.1（66）5 分；但 Coding Agent Index 上领先成本效率前沿（单任务成本约为 Fable 5 一半）
- **官方系统卡的坦白** — 书面推理比 Sol 更难监控；无 CoT 显示下自主运行从 3.6 分钟 → 30.9 分钟。安全与自主性的新张力
- ** Matthew Berman（YouTube 90 万粉）** — "这是我用过的最好模型，句号"；3D 理解"无人能敌"，写作仍有 AI 味残留
- **Reddit 分化** — 吹派（EE 赛道 1192 分热帖）与黑派（"High Intelligence, Low Intuition"）并存，见上表
- **[GBENCH：100 个多智能体编程环境评测](https://x.com/i/status/2096292987479404737)** — Astra 在未饱和、开放式任务里与其他模型竞争+合作；结论"断崖式领先的新前沿模型"（747 赞）

## 贡献指南

欢迎 PR 补充新项目/案例。要求：
1. 与 GPT-6 Astra 直接相关（不是泛 GPT 内容）
2. 附原始来源链接（repo、推文或文章）
3. 简短说明它证明了什么能力

**维护者**：[archorfight](https://github.com/archorfight) · 每周更新 · Issue/PR 均欢迎

## License

[CC0-1.0](http://creativecommons.org/publicdomain/zero/1.0/)
