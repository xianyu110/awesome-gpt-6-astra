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
| [EverettFish/holo-card-studio](https://github.com/EverettFish/holo-card-studio) ⭐842 | Open-sourced Blender + Three.js skill: one sentence → finished 3D holographic trading card (Chinese community) |
| [wz1119/Codex-Minecraft-Gameplay](https://github.com/wz1119/Codex-Minecraft-Gameplay) ⭐128 | Astra plays Minecraft via Computer Use — explore, gather, craft, build |
| [ScottStevenson/SuperAstra](https://github.com/ScottStevenson/SuperAstra) ⭐64 | Modify SNES games with AI while you play them |
| [cozyblaze/portal-agent](https://github.com/cozyblaze/portal-agent) ⭐39 | The full setup behind the Portal-beating run: controller, patch, guide, sanitized logs |
| [hku-sail/Real2Sim_GPT6_ASTRA](https://github.com/hku-sail/Real2Sim_GPT6_ASTRA) ⭐33 | Real-world robot manipulation → Blender replay reconstructed from three RGB camera views |
| [gnipbao/gpt6-prompt-writer](https://github.com/gnipbao/gpt6-prompt-writer) ⭐21 | Prompt-writing skill built on the official GPT-6 Astra guide (Chinese community) |
| [parlance-labs/super-oracle](https://github.com/parlance-labs/super-oracle) ⭐12 | A review council: Claude and Astra review independently, then return one synthesis |

## Viral Demos

### 3D Worlds & Modeling

The breakout track: Blender, Unreal Engine, and three.js scenes from prompts and photos.

| Demo | Author | Traction | Highlight |
|---|---|---|---|
| [Unreal Engine world of AI humans](https://x.com/i/status/2095596175705399482) | mattshumer_ | 28,137 likes | Every NPC is an Astra-powered agent working together to survive — they started talking to each other |
| [3D anatomy site, 2,234 pieces](https://x.com/i/status/2096221988763173186) | ashebytes | 24,960 likes | The weekend's biggest hit — pulls the human body apart piece by piece |
| [A week of Manhattan, street by street](https://x.com/i/status/2095609734845927525) | mattshumer_ | 18,871 likes | Unreal Engine build iterated over a week |
| [Backrooms in Blender, with VHS horror](https://x.com/i/status/2096003511104508411) | duncantrussell | 9,442 likes | ~5 prompts, 30 min to build + 20 to render; sound design included |
| [Trains generated at runtime in Three.js](https://x.com/i/status/2096082580554777041) | tomkrcha | 7,427 likes | No 3D model files — geometry built from TypeScript code at runtime |
| [Blender house → Unreal Engine 5 walkthrough](https://x.com/i/status/2095592572286533644) | goofyninjaaa | 6,996 likes | Full house with pool & garden, solo — architecture viz in one prompt (Spanish community) |
| [House photo → full 3D model](https://x.com/i/status/2095598645190291775) | tomkrcha | 6,282 likes | Early-access test: full house with furniture, runs at 60fps |
| [Steam train in Blender](https://x.com/i/status/2095756085890310311) | tomkrcha | 5,876 likes | Old drawing → 3,295 editable objects |
| [Interactive V8 engine](https://x.com/i/status/2096280244663775423) | DilumSanjaya | 4,029 likes | Highly detailed, interactive engine visualization |
| [Isometric kid's room from one sentence](https://x.com/i/status/2096048421543272893) | zhengli | 3,561 likes | One-line prompt, 40 minutes of waiting (Chinese community) |
| [Seoul in 3D, all of it](https://x.com/i/status/2096557555086725159) | synabreu | 2,701 likes | Interactive miniature of the whole city and surroundings |
| [The 5-hour forest](https://x.com/i/status/2096263046918197609) | LexnLin | 1,931 likes | 3,808 trees, 2.5M grass clumps, ~40K ferns — three.js + custom shaders |
| [Tesla Model X teardown site](https://x.com/i/status/2096009146248122416) | ashebytes | 1,731 likes | 3D website pulling the car into 334 modeled parts |
| [3D pipeline studio test](https://x.com/i/status/2095982983379653113) | badxstudio | 1,392 likes | Studio-grade 3D pipeline test |
| [Hangzhou in Three.js in 24 minutes](https://x.com/i/status/2096143589151756638) | NFT_Chen | 1,065 likes | A whole city with landmarks: fly-through, zoom, day/night switch (Chinese community) |

### Games

Playable games, one-shot or iterated.

| Demo | Author | Traction | Highlight |
|---|---|---|---|
| [Astra beats all 48 levels of "I'm Not a Robot"](https://x.com/sharifshameem/status/2096847916837314853) | sharifshameem | 10,739 likes | The full robot-puzzle game, cleared |
| [3D game from scratch](https://x.com/i/status/2096008083826725132) | anshuc | 8,739 likes | 45-minute one-shot on just 2% of weekly quota |
| [Paperboy remake, Blender to browser](https://x.com/i/status/2096515959469072630) | builtbysketch | 3,512 likes | The 1985 arcade classic rebuilt — models, render, feel |
| [Browser GTA in three.js + Blender cars](https://x.com/i/status/2096382232403603752) | xikhar | 2,634 likes | "The next GTA will be made by AI" — runs in the browser |

### Computer Use: driving real apps

Astra moving the mouse in real desktop apps — DAWs, design tools, browsers.

| Demo | Author | Traction | Highlight |
|---|---|---|---|
| ["Make a banger" in Ableton Live](https://x.com/i/status/2096374630525309206) | timourxyz | 8,593 likes | Computer Use driving a real DAW |
| [Drawing a portrait in Canva](https://x.com/i/status/2095992132620136677) | iam_zachi | 7,214 likes | Computer Use assembling a portrait block by block |
| [AI draws its own portrait in Procreate](https://x.com/i/status/2096124169406775325) | keitowebai | 2,501 likes | Computer Use alone, every stroke via mouse (Japanese community) |
| [Computer Use inflection point](https://x.com/i/status/2096051842174087386) | dotey | 292 likes | "Build → verify closed loop"; watching it click is a joy |

### Real-world Applications

Things you can actually use: medical atlases, LEGO sets, wedding sites, listing videos.

| Demo | Author | Traction | Highlight |
|---|---|---|---|
| [Ankle-pain 3D atlas for a patient](https://x.com/i/status/2096528986390085696) | Emanuel_Andre7 | 7,612 likes | Bones, ligaments, tendons, motion axes — interactive self-diagnosis aid |
| [Cessna landing gear from a YouTube video](https://x.com/i/status/2096642895134752922) | DilumSanjaya | 7,562 likes | Mechanism no other model got right, reverse-engineered from video |
| [Zillow listing → 3D promo video](https://x.com/i/status/2095612137582526615) | realYunfanYe | 7,307 likes | Real-estate data straight to a promo video |
| [Any image → buildable LEGO set](https://x.com/i/status/2096377028945576370) | emmanuel_2m | 6,945 likes | Real Bricksy parts, orderable instructions — toy of the year material |
| [Wedding website on Astra Max](https://x.com/i/status/2096659577660203436) | venturetwins | 6,814 likes | Non-tech founder's real wedding site |
| [UI generation showcase](https://x.com/i/status/2096059496812716307) | MSchwaibold | 6,180 likes | Clean multi-component UI straight from a prompt |
| [Launch video in 5 minutes](https://x.com/i/status/2096488216983732341) | _yatharthg | 2,441 likes | Marketing content with fal H3 Max |
| [DIY real-estate agent for villa hunting](https://x.com/i/status/2096228864859201869) | marclou | 566 likes | Cross-references listings with AQI, noise, and landslide data |

### Hardware, EE & Robotics

PCB layout, CAD, and robot control.

| Demo | Author | Traction | Highlight |
|---|---|---|---|
| [KiCad PCB layout](https://x.com/i/status/2095637507337826741) | ChihYang04 | 4,799 likes | Schematic → PCB routing; the EE track |
| [Robot task control](https://x.com/i/status/2096064315115839904) | chooi_jeq | 1,349 likes | 95% vs Fable 5.1's 40%, with 6.2x fewer tokens |
| [Agentic CAD new SOTA](https://x.com/i/status/2096053889141489669) | adamdotnew | 1,160 likes | A step change for CAD agents |

### Benchmarks & Cost Tests

Tier tests and head-to-head comparisons.

| Demo | Author | Traction | Highlight |
|---|---|---|---|
| [Best Bach Benchmark result yet](https://x.com/i/status/2096030719156089029) | aug5thmusic | 8,105 likes | No voice-leading errors, first model to write correct passing tones — music theory, not vibes |
| [Max vs Medium tier cost test](https://x.com/i/status/2095994051354919049) | AiBattle_ | 5,120 likes | 53 min at 4% weekly quota vs 25 min at 1% |
| [Video gen vs Fable 5.1](https://x.com/i/status/2095739568528232538) | NFT_Chen | 648 likes | "Astra directs like a filmmaker" — emotional camera language |

## Community Threads

### Reddit — Games

Playable proof: games beaten end-to-end.

| Thread | Subreddit | Score |
|---|---|---|
| [GPT-6 Astra beat Portal — and it only cost $571.18](https://www.reddit.com/r/technology/comments/1w92153/) | r/technology | 3918 |
| [First model to beat Portal](https://www.reddit.com/r/singularity/comments/1w8g7d0/) | r/singularity | 3398 |
| [Rickroll in Blender](https://www.reddit.com/r/singularity/comments/1w9aeyk/) | r/singularity | 1977 |
| [Age of Empires IV at 70-150 fps on Apple Silicon](https://www.reddit.com/r/accelerate/comments/1w9bsjh/) | r/accelerate | 1398 |
| [Astra finished RimWorld in 15 hours](https://www.reddit.com/r/singularity/comments/1w93mgg/) | r/singularity | 1279 |

### Reddit — 3D & Creative

The Blender/3D track, argued by practitioners.

| Thread | Subreddit | Score |
|---|---|---|
| [Fable 5.1 vs GPT 6 Astra, 3D Blender — mind blowing difference](https://www.reddit.com/r/OpenAI/comments/1w7ppcj/fable_51_vs_gpt_6_astra_3d_blender_mind_blowing/) | r/OpenAI | 1949 |
| [GPT-6-Astra-Max: SVG of a PlayStation 4 controller](https://www.reddit.com/r/singularity/comments/1w7gj1i/gpt6astramax_svg_of_a_playstation_4_controller/) | r/singularity | 1346 |

### Reddit — Engineering & Practical

EE, taxes, and sites that took 30 minutes.

| Thread | Subreddit | Score |
|---|---|---|
| [GPT-6 Astra is actually nuts for electrical engineering](https://www.reddit.com/r/singularity/comments/1w6m7hr/) | r/singularity | 1192 |
| [History of Earth interactive site in ~30 min](https://www.reddit.com/r/vibecoding/comments/1w99r2z/) | r/vibecoding | 1192 |
| [GPT-6-Astra's tax return underpays the government](https://www.reddit.com/r/OpenAI/comments/1w6jp0n/) | r/OpenAI | 991 |

### Reddit — Benchmarks & Pricing

Numbers, harness debates, and cost.

| Thread | Subreddit | Score |
|---|---|---|
| [Gpt 6 astra benchmarks](https://www.reddit.com/r/singularity/comments/1w6f9xo/) | r/singularity | 2559 |
| [Usage tip: "Astra on low performs better than Sol on high"](https://www.reddit.com/r/codex/comments/1w9erx3/) | r/codex | 1054 |
| [GPT-6 Astra Benchmarks](https://www.reddit.com/r/codex/comments/1w6fnc4/) | r/codex | 588 |
| [GPT-6 Astra pricing is kinda insane compared to 5.6 Sol](https://www.reddit.com/r/codex/comments/1w6hvo9/gpt6_astra_pricing_is_kinda_insane_compared_to_56/) | r/codex | 440 |

### Reddit — Launch Reactions

Rollout-day megathreads and media coverage.

| Thread | Subreddit | Score |
|---|---|---|
| [GPT-6 Astra \| OpenAI](https://www.reddit.com/r/OpenAI/comments/1w6hf6g/) | r/OpenAI | 1381 |
| ["Welcome to the AGI era" — The Verge coverage thread](https://www.reddit.com/r/singularity/comments/1w6f0jp/) | r/singularity | 970 |
| [GPT-6 Astra Is Here—Kick Off the AGI Era](https://www.reddit.com/r/ChatGPT/comments/1w6f701/) | r/ChatGPT | 902 |
| [GPT-6 Astra Launch Video](https://www.reddit.com/r/singularity/comments/1w6gjmb/) | r/singularity | 837 |
| [Global rollout — early impressions megathread](https://www.reddit.com/r/singularity/comments/1w7m0ui/its_been_a_few_hours_since_global_rollout_gpt6/) | r/singularity | 702 |
### Hacker News — Deep Dives

Long-form threads worth reading in full.

| Thread | Why it matters |
|---|---|
| [OpenAI's GPT-6 Astra on ARC-AGI-3](https://news.ycombinator.com/item?id=49555691) | "Only Astra solved 2/68 problems, disproving #74 at a cost of $218" — the harness debate, live |
| [GPT-6 Astra makes major gains in the Artificial Analysis Coding Agent Index](https://news.ycombinator.com/item?id=49556147) | The coding-agent index jump, discussed |
| [GPT-6 Astra System Card](https://news.ycombinator.com/item?id=49555440) | System-card thread: CoT monitoring gets harder |
| [Ask HN: Initial Thoughts on GPT-6 Astra?](https://news.ycombinator.com/item?id=49571621) | Working programmers' first impressions |
| [GPT-6 Astra in code review](https://news.ycombinator.com/item?id=49572875) | CodeRabbit's test: gains, privacy, and cost |
| [GPT-6 Astra on robot arms](https://news.ycombinator.com/item?id=49582582) | Embodied use cases, argued seriously |
| [GPT-6 Astra on OpenRouter](https://news.ycombinator.com/item?id=49570545) | Third-party availability and pricing, discussed |

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
