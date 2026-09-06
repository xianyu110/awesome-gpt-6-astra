# Awesome GPT-6 Astra

> A curated list of GPT-6 Astra projects, demos, integrations, and deep analyses. Released by OpenAI on 2026-09-03, Astra leads with Computer Use and spatial reasoning — anything you can do on a computer, it does for you.

[English](README.md) | [简体中文](README.zh-CN.md)

## Contents

- [Official Resources](#official-resources)
- [Community Projects](#community-projects)
- [Viral Demos](#viral-demos)
- [Community Threads (Reddit / Hacker News)](#community-threads)
- [Chinese Ecosystem (Bilibili / Zhihu)](#chinese-ecosystem)
- [Coding Tool Integrations](#coding-tool-integrations)
- [Deep Dives & Benchmarks](#deep-dives--benchmarks)
- [Contributing](#contributing)

---

## Official Resources

| Resource | Notes |
|---|---|
| [Launch blog post](https://openai.com/index/gpt-6-astra/) | Primary source for all benchmark numbers |
| [OpenAI launch tweet](https://x.com/i/status/2095595741528125780) | 36M views in 9 hours, 315K likes |
| [ChatGPT launch tweet](https://x.com/i/status/2095597502368284748) | "A new star enters the Chat" |
| [System Card](https://deploymentsafety.openai.com) | Official safety doc (incl. the CoT-monitoring confession) |
| [Tibo (thsottiaux) rate-limit compensation](https://x.com/thsottiaux) | After a rocky staged rollout: one free usage reset per day of waiting |

**Headline numbers**: OSWorld 2.0 at 72.6% (47% less time spent per task vs GPT-5.6 Sol); FrontierMath Tier 4 = 98%; ARC-AGI-3 = 99.9% (caveat: custom harness — default harness scores 62.7%); ExploitBench = 100% (found and disclosed 2 unknown 0days during testing); 8-needle haystack 256K–512K = 100%. Pricing: $10/M input + $50/M output.

## Community Projects

| Project | Notes |
|---|---|
| [DannyMac180/astra-advisor](https://github.com/DannyMac180/astra-advisor) ⭐25 | Astra orchestration with dynamic Sol/Terra/Luna subagents |
| [Ayi1337/gpt6-astra-one-shot-games](https://github.com/Ayi1337/gpt6-astra-one-shot-games) ⭐14 | One-shot game test suite — original prompts + runnable single-file HTML |
| [tadamcz/koethe](https://github.com/tadamcz/koethe) ⭐5 | **Astra solved an open math problem**: Lean 4 disproof of the Köthe conjecture (Krempa's matrix form), with Palomar submission |
| [tadamcz/mean-value-problem](https://github.com/tadamcz/mean-value-problem) ⭐2 | Lean 4 disproof of Smale's mean value conjecture (K=1), found by Astra |
| [Firnschnee/dual-model-mcp](https://github.com/Firnschnee/dual-model-mcp) ⭐4 | MCP server querying Claude Fable 5.1 and GPT-6 Astra side by side (via OpenRouter) |
| [LunarXuan/task-model-router](https://github.com/LunarXuan/task-model-router) ⭐1 | Routes Codex tasks between Astra and GPT-5.6 Sol by expected rework cost |
| [MiaAI-Lab/GPT-6-Astra-100-HTML-Files](https://github.com/MiaAI-Lab/GPT-6-Astra-100-HTML-Files) | 100 standalone HTML visual studies generated with Astra |
| [gih10012/astra-parabox-benchmark](https://github.com/gih10012/astra-parabox-benchmark) | Reproducible screen-only benchmark: all 364 Patrick's Parabox levels |
| [coreprocess/openai-relay-for-cursor](https://github.com/coreprocess/openai-relay-for-cursor) | Use GPT-6 Astra and other Responses-API-only models in Cursor |
| [sjh9714/astra-tandem](https://github.com/sjh9714/astra-tandem) | Luna builds, Astra reviews — a pairing workflow |
| [ShunsukeHayashi/gpt6-task-spawner](https://github.com/ShunsukeHayashi/gpt6-task-spawner) | Delegate any Task to a separate Astra Codex task (Japanese community) |
| [marius4lui/NULLSPACE](https://github.com/marius4lui/NULLSPACE) | An atmospheric survival-horror FPS developed with GPT-6 Astra |
| [Rising1234Sun/qingmingshanghetu](https://github.com/Rising1234Sun/qingmingshanghetu) ⭐1 | "Along the River During the Qingming Festival" as a real-time 3D web scene — interactive roaming, 4K capture, Chinese prompts included |
| [da03/astra-plays-gta](https://github.com/da03/astra-plays-gta) ⭐1 | Astra plays GTA Vice City on a Mac: setup, prompt, and a keyboard/screenshot helper |
| [xinbenlv/ra2-gpt-6-astra-2026-09-04](https://github.com/xinbenlv/ra2-gpt-6-astra-2026-09-04) ⭐1 | Red Alert 2 rebuilt one-shot (benchmark by Victor Zhou), playable page included |
| [paveljor/agent-bluff](https://github.com/paveljor/agent-bluff) | Deception tournament: do Astra, Fable 5.1, and Grok 4.6 lie well? |

## Viral Demos

3D modeling is Astra's breakout track. All entries link to the original author:

| [3D anatomy site, 2,234 pieces](https://x.com/i/status/2096221988763173186) | ashebytes | 24,960 likes | The weekend's biggest hit — pulls the human body apart piece by piece |
| [3D game from scratch](https://x.com/i/status/2096008083826725132) | anshuc | 8,739 likes | 45-minute one-shot on just 2% of weekly quota |
| [Trains generated at runtime in Three.js](https://x.com/i/status/2096082580554777041) | tomkrcha | 7,427 likes | No 3D model files — geometry built from TypeScript code at runtime |
| [Zillow listing → 3D promo video](https://x.com/i/status/2095612137582526615) | realYunfanYe | 7,307 likes | Real-estate data straight to a promo video |
| [Drawing a portrait in Canva](https://x.com/i/status/2095992132620136677) | iam_zachi | 7,214 likes | Computer Use assembling a portrait block by block |
| [Blender house → Unreal Engine 5 walkthrough](https://x.com/i/status/2095592572286533644) | goofyninjaaa | 6,996 likes | Full house with pool & garden, solo — architecture viz in one prompt (Spanish community) |
| [House photo → full 3D model](https://x.com/i/status/2095598645190291775) | tomkrcha | 6,282 likes | Early-access test: full house with furniture, runs at 60fps |
| [UI generation showcase](https://x.com/i/status/2096059496812716307) | MSchwaibold | 6,180 likes | Clean multi-component UI straight from a prompt |
| [Steam train in Blender](https://x.com/i/status/2095756085890310311) | tomkrcha | 5,876 likes | Old drawing → 3,295 editable objects |
| [Max vs Medium tier cost test](https://x.com/i/status/2095994051354919049) | AiBattle_ | 5,120 likes | 53 min at 4% weekly quota vs 25 min at 1% |
| [KiCad PCB layout](https://x.com/i/status/2095637507337826741) | ChihYang04 | 4,799 likes | Schematic → PCB routing; the EE track |
| [Interactive V8 engine](https://x.com/i/status/2096280244663775423) | DilumSanjaya | 4,029 likes | Highly detailed, interactive engine visualization |
| [Isometric kid's room from one sentence](https://x.com/i/status/2096048421543272893) | zhengli | 3,561 likes | One-line prompt, 40 minutes of waiting (Chinese community) |
| [The 5-hour forest](https://x.com/i/status/2096263046918197609) | LexnLin | 1,931 likes | 3,808 trees, 2.5M grass clumps, ~40K ferns — three.js + custom shaders |
| [Tesla Model X teardown site](https://x.com/i/status/2096009146248122416) | ashebytes | 1,731 likes | 3D website pulling the car into 334 modeled parts |
| [3D pipeline studio test](https://x.com/i/status/2095982983379653113) | badxstudio | 1,392 likes | Studio-grade 3D pipeline test |
| [Robot task control](https://x.com/i/status/2096064315115839904) | chooi_jeq | 1,349 likes | 95% vs Fable 5.1's 40%, with 6.2x fewer tokens |
| [Agentic CAD new SOTA](https://x.com/i/status/2096053889141489669) | adamdotnew | 1,160 likes | A step change for CAD agents |
| [Hangzhou in Three.js in 24 minutes](https://x.com/i/status/2096143589151756638) | NFT_Chen | 1,065 likes | A whole city with landmarks: fly-through, zoom, day/night switch (Chinese community) |
| [Video gen vs Fable 5.1](https://x.com/i/status/2095739568528232538) | NFT_Chen | 648 likes | "Astra directs like a filmmaker" — emotional camera language |
| [DIY real-estate agent for villa hunting](https://x.com/i/status/2096228864859201869) | marclou | 566 likes | Cross-references listings with AQI, noise, and landslide data |
| [Computer Use inflection point](https://x.com/i/status/2096051842174087386) | dotey | 292 likes | "Build → verify closed loop"; watching it click is a joy |

## Community Threads

Reddit, by score at the time of listing:

| [Gpt 6 astra benchmarks](https://www.reddit.com/r/singularity/comments/1w6f9xo/) | r/singularity | 2559 |
| [Fable 5.1 vs GPT 6 Astra, 3D Blender — mind blowing difference](https://www.reddit.com/r/OpenAI/comments/1w7ppcj/fable_51_vs_gpt_6_astra_3d_blender_mind_blowing/) | r/OpenAI | 1949 |
| [GPT-6-Astra-Max: SVG of a PlayStation 4 controller](https://www.reddit.com/r/singularity/comments/1w7gj1i/gpt6astramax_svg_of_a_playstation_4_controller/) | r/singularity | 1346 |
| [GPT-6 Astra is actually nuts for electrical engineering](https://www.reddit.com/r/singularity/comments/1w6m7hr/) | r/singularity | 1192 |
| [GPT-6-Astra's tax return underpays the government](https://www.reddit.com/r/OpenAI/comments/1w6jp0n/) | r/OpenAI | 991 |
| ["Welcome to the AGI era" — The Verge coverage thread](https://www.reddit.com/r/singularity/comments/1w6f0jp/) | r/singularity | 970 |
| [GPT-6 Astra Is Here—Kick Off the AGI Era](https://www.reddit.com/r/ChatGPT/comments/1w6f701/) | r/ChatGPT | 902 |
| [GPT-6 Astra Launch Video](https://www.reddit.com/r/singularity/comments/1w6gjmb/) | r/singularity | 837 |
| [Global rollout — early impressions megathread](https://www.reddit.com/r/singularity/comments/1w7m0ui/its_been_a_few_hours_since_global_rollout_gpt6/) | r/singularity | 702 |
| [GPT-6 Astra Benchmarks](https://www.reddit.com/r/codex/comments/1w6fnc4/) | r/codex | 588 |
| [GPT-6 Astra pricing is kinda insane compared to 5.6 Sol](https://www.reddit.com/r/codex/comments/1w6hvo9/gpt6_astra_pricing_is_kinda_insane_compared_to_56/) | r/codex | 440 |
| [GPT-6 Astra \| OpenAI](https://www.reddit.com/r/OpenAI/comments/1w6hf6g/) | r/OpenAI | 1381 |

Hacker News deep dives:

| Thread | Why it matters |
|---|---|
| [OpenAI's GPT-6 Astra on ARC-AGI-3](https://news.ycombinator.com/item?id=49555691) | "Only Astra solved 2/68 problems, disproving #74 at a cost of $218" — the harness debate, live |
| [GPT-6 Astra makes major gains in the Artificial Analysis Coding Agent Index](https://news.ycombinator.com/item?id=49556147) | The coding-agent index jump, discussed |
| [GPT-6 Astra System Card](https://news.ycombinator.com/item?id=49555440) | System-card thread: CoT monitoring gets harder |
| [Ask HN: Initial Thoughts on GPT-6 Astra?](https://news.ycombinator.com/item?id=49571621) | Working programmers' first impressions |
| [GPT-6 Astra in code review](https://news.ycombinator.com/item?id=49572875) | CodeRabbit's test: gains, privacy, and cost |

## Chinese Ecosystem

| Content | Creator | Platform | Notes |
|---|---|---|---|
| [38 "god-tier" cases in one video](https://www.bilibili.com/video/BV1KYbF6QE18/) | LetsVibeCoding | Bilibili | The case roundup |
| [Rebuilding CS Dust2 in half an hour](https://search.bilibili.com/all?keyword=GPT-6%20Astra%20Dust2) | various | Bilibili | Competitive-map recreation track |
| [One-night test: aesthetics, agents, 3D all leveled up](https://www.bilibili.com/video/BV1Xgtk6CEnX/) | — | Bilibili | First long-form Chinese hands-on |
| [First GPT-6 beta results are wild](https://zhuanlan.zhihu.com/p/2079275830346359925) | — | Zhihu | Early-access roundup |
| [Game of Thrones intro recreated in 12 minutes](https://search.bilibili.com/all?keyword=GPT-6%20Astra%20%E6%9D%83%E6%B8%B8) | — | Bilibili | TV-title recreation track |

## Coding Tool Integrations

| Tool | Status | Source |
|---|---|---|
| GitHub Copilot | GA; fewer steps on long tasks, independently verifies before declaring done | [GitHub official tweet](https://x.com/i/status/2095971389190885815) |
| Codex | Cross-window note-taking when context fills; old windows searchable (config.toml flag now, default in weeks) | Launch blog |
| OpenAI API | `gpt-6-astra`, $10/M in + $50/M out; Fast mode at 2x speed for 2x price | Official |
| Azure Foundry / Bedrock | Available day one | Nadella |
| Cursor | Works via community relay | [openai-relay-for-cursor](https://github.com/coreprocess/openai-relay-for-cursor) |

## Deep Dives & Benchmarks

- **[Simon Willison + ARC Prize on the 99.9%](https://arcprize.org/blog/agi-3-update)** — the ARC-AGI-3 99.9% came from a Provider Adapter harness (opaque reasoning state retained + compaction reuse); the default harness scores 62.7%, and the 99.9% run cost $19K vs $26K default. Read every benchmark with "what harness?" in mind
- **Artificial Analysis Intelligence Index** — Astra = 61, level with GPT-5.6 Sol and 5 points behind Claude Fable 5.1 (66); but leads the cost-efficiency frontier on the Coding Agent Index (~half Fable 5's cost per task)
- **The system card's own confession** — written reasoning is harder to monitor than Sol; autonomous runtime without CoT display jumps 3.6 → 30.9 minutes. A new tension between safety and autonomy
- **Matthew Berman (900K subs)** — "The best model I've ever used, period"; unmatched 3D understanding, some AI flavor remains in writing
- **Reddit, split down the middle** — the hype side (EE thread at 1192 points) vs the skeptic side ("High Intelligence, Low Intuition") — see threads above
- **[GBENCH: 100 multi-agent coding environments](https://x.com/i/status/2096292987479404737)** — Astra evaluated competing and cooperating with other models in unsaturated, open-ended tasks; verdict: "the new frontier model by a landslide" (747 likes)

## Contributing

PRs welcome. Requirements:
1. Directly about GPT-6 Astra (not general GPT content)
2. Include the original source link (repo, tweet, or article)
3. One line on what capability it demonstrates

See [CONTRIBUTING.md](CONTRIBUTING.md) for PR naming and the verifiable-source bar.

**Maintained by** [archorfight](https://github.com/archorfight) · updated weekly · issues and PRs welcome

## License

[CC0-1.0](http://creativecommons.org/publicdomain/zero/1.0/)
