# 上游 README 快照

> 自动生成于 `2026-09-10T02:23:57+00:00`。内容来自公开 GitHub 仓库，原始文件保存在 [`sources/`](sources/)。

## MartinDelophy/awesome-gpt-6-astra

### `README.md`

<details><summary>展开查看完整上游内容</summary>

<!-- BEGIN UPSTREAM MartinDelophy/awesome-gpt-6-astra README.md -->

<div align="center">

![Awesome GPT-6 Astra — Games worth playing. Ideas worth building.](assets/banner.svg)

# Awesome GPT-6 Astra

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md) [![LINUX DO](https://img.shields.io/badge/LINUX%20DO-Community-f0b73f?style=flat-square)](https://linux.do/) [![Cases: 61](https://img.shields.io/badge/Cases-61-58a6ff?style=flat-square)](https://astragames.aigccreative.com/)

**A collection of interesting games made with GPT-6 Astra.**

Playful ideas, games you can try, and development stories that inspire the next creator.

**English** · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md)<br>
[Français](README.fr.md) · [Deutsch](README.de.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md)<br>
[Русский](README.ru.md) · [العربية](README.ar.md) · [हिन्दी](README.hi.md) · [Bahasa Indonesia](README.id.md)

[Submit a game](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml) · [Contribute](CONTRIBUTING.md)

</div>

## Start here

Explore **61 games and interactive projects**: Three Kingdoms territory strategy, wooden interlocking and sliding puzzles, soft-body fruit merging, procedural city-building 2048, one-tap flight, magic-carpet combat, a five-stage bullet-hell shooter, island power-grid tower defense, wilderness survival, underwater fishing, sushi-restaurant management and island farming, Bay Circuit kart racing, coastal cycling with a pelican, tabletop toys turned into 3D games, 3D home decoration, and Orbital Garden. Click a title to play directly in your browser.

Catalog updated: **2026-09-09**. Model attribution is based on creator or submitter statements; unconfirmed details are marked in individual entries. This date records catalog maintenance, not a new play-test of every game.

New additions: [16 browser games discovered on X](docs/x-high-traffic-games-2026-09-09.md), with a verification table ordered by observed post views.

- **Looking for something to play?** Browse the genres below.
- **Built a game?** [Submit your project](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml) with a direct browser game link, a gameplay screenshot, and a description of how you used GPT-6 Astra.
- **Found a great project?** Recommend someone else's public work and credit its creator.

This is a community-maintained list with no affiliation to OpenAI. Inclusion is an invitation to explore, not a benchmark or an official endorsement.

## Games

- [Action & arcade](#action--arcade)
- [Puzzles & brain games](#puzzles--brain-games)
- [Strategy & simulation](#strategy--simulation)
- [RPGs & adventures](#rpgs--adventures)
- [Platformers & racing](#platformers--racing)
- [Experimental & multiplayer](#experimental--multiplayer)

### Action & arcade

Shooters, fighters, survival games, rhythm games, and anything that invites one more round.

- **[Mosswing](https://mosswing-quiet-flight.jack-514.chatgpt.site/)** — A 3D tap-to-flap game about flying through gaps and building your score.
  - Creator: [Ayi1337](https://github.com/Ayi1337)
  - Platform: Browser, designed for mobile.
  - GPT-6 Astra: [Creator's one-shot tests and original prompts](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/README.md).
  - Resources: [Source](https://github.com/Ayi1337/gpt6-astra-one-shot-games/tree/main/mosswing/src) · [Standalone HTML](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/mosswing/mosswing.html)
  - Preview: ![Mosswing start screen showing the flying character and gaps between stone pillars.](assets/screenshots/mosswing/gameplay.jpg)

- **[Magic Carpet Wizard — A Thousand Skies](https://threapchills.github.io/MagicCarpetWizard/)** — Fly a magic carpet through a spherical world, thread rings, cast spells, and fight enemies and bosses.
  - Creator: [threapchills](https://github.com/threapchills)
  - Platform: Desktop browser with mouse and keyboard; requires WebGL 2.
  - GPT-6 Astra: The creator attributes the game to GPT-6 Astra in the [repository About section](https://github.com/threapchills/MagicCarpetWizard).
  - Resources: [Source and setup instructions](https://github.com/threapchills/MagicCarpetWizard) · Built with: Three.js and Vite.
  - Preview: ![Magic Carpet Wizard start screen showing the carpet rider, city and glowing flight ring.](assets/screenshots/magic-carpet/gameplay.jpg)

- **[THUNDERFALL / 雷霆战机 · 天穹远征](https://thunderfall.vercel.app/)** — Pilot three distinct fighters through five sectors and multi-phase bosses, dodge drifting bullets and telegraphed lasers, and collect four weapon colors in a campaign lasting at least ten minutes of active combat.
  - Creator: [jackroc](https://github.com/jackroc)
  - Platform: Modern desktop and mobile browsers; drag or use a keyboard, with automatic firing. Free, no login or API key; optional sound requires Web Audio.
  - GPT-6 Astra: [Creation record and model contribution](works/thunderfall/README.md#创作与许可) — The creator reports using GPT-6 Astra ultra for design, code, procedural graphics, synthesized audio, and iterative testing with collaborating agents; not a one-shot test.
  - Resources: [Source and setup instructions](works/thunderfall/README.md) · [Prompt](works/thunderfall/PROMPT.md) · Built with: native JavaScript, Canvas 2D, and Web Audio.
  - Preview: ![THUNDERFALL gameplay: a fighter dodges enemy fire over the Molten Foundry, with weapon loadout and combat controls visible.](assets/screenshots/thunderfall/gameplay.jpg)

- **[IRON BASTION / 钢铁防线](https://iron-bastion.zecoba.workers.dev/)** — Defend a beacon against waves of enemy tanks across six sectors in a 3D battlefield with destructible brick walls, a dash and an electromagnetic pulse.
  - Creator: [chat01.ai](https://linux.do/u/bandaot)
  - Platform: WebGL 2 browser, Chinese UI; keyboard/mouse and touch controls are documented. Opened and started without login or payment.
  - GPT-6 Astra: GPT-6 Astra usage and contribution details await creator confirmation.
  - Preview: ![IRON BASTION / 钢铁防线 — Gameplay](assets/screenshots/iron-bastion/gameplay.jpg)

- **[Stick Fighter](https://stick-fighter-production.up.railway.app/)** — A work-in-progress stick-figure fighting game with punches, kicks, uppercuts, ninja stars and parries; includes bot practice and online/friends menu options.
  - Creator: [Dwayne](https://x.com/CtrlAltDwayne)
  - Platform: Desktop browser, keyboard controls; bot practice works without sign-in. Online multiplayer and controller support were not independently tested.
  - GPT-6 Astra: [X](https://x.com/CtrlAltDwayne/status/2097499157967818780) — The creator explicitly states that he built this multiplayer fighting game using GPT-6 Astra and describes it as a work in progress.
  - Preview: ![Stick Fighter — Gameplay](assets/screenshots/stick-fighter/gameplay.jpg)

- **[Gogh Strike · Paint Clash](https://gogh-strike.surge.sh/)** — A Van Gogh-inspired FPS paint fight with six artists, signature weapons and a first-to-20 match format.
  - Creator: [Peter Gostev](https://x.com/petergostev)
  - Platform: Desktop browser; opened without login or payment. Mobile support was not tested.
  - GPT-6 Astra: [X](https://x.com/petergostev/status/2096015315209449578) — The creator reports using Astra to develop this project. [Verification notes (English)](assets/screenshots/gogh-strike/SOURCE.md).
  - Preview: ![Gogh Strike · Paint Clash — Gameplay](assets/screenshots/gogh-strike/gameplay.jpg)

- **[ASTEROIDS · Deepfield](https://asteroids-deepfield-cockpit.dan200200.chatgpt.site/)** — Pilot an Asteroids-style cockpit with four camera views, radar, twin cannons and inertial flight.
  - Creator: [Eyes Wide Open](https://x.com/DantesClown)
  - Platform: Desktop browser; opened without login or payment. Mobile support was not tested.
  - GPT-6 Astra: [X](https://x.com/DantesClown/status/2096085439052452064) — The creator reports using Astra to develop this project. [Verification notes (English)](assets/screenshots/asteroids-deepfield/SOURCE.md).
  - Preview: ![ASTEROIDS · Deepfield — Gameplay](assets/screenshots/asteroids-deepfield/gameplay.jpg)

- **[BLACKWATER · Silent Harbor](https://blackwater-roan.vercel.app/)** — Infiltrate a rain-soaked freight terminal in a tactical FPS with a detailed carbine, combat HUD and nine hostiles.
  - Creator: [hiraeth](https://x.com/WoahWurdz)
  - Platform: Desktop browser; opened without login or payment. Mobile support was not tested.
  - GPT-6 Astra: [X](https://x.com/WoahWurdz/status/2095958882732355908) — The creator reports using Astra to develop this project. [Verification notes (English)](assets/screenshots/blackwater/SOURCE.md).
  - Resources: [GitHub](https://github.com/Hiraeth010/blackwater)
  - Preview: ![BLACKWATER · Silent Harbor](assets/screenshots/blackwater/gameplay.jpg)

- **[Cinderfall · Fire, Shadow & Steel](https://rogue-omega.vercel.app/)** — A fantasy dueling arena with four champions, six class abilities and solo AI battles; online rooms are also offered.
  - Creator: [JUMPERZ](https://x.com/jumperz)
  - Platform: Desktop browser; opened without login or payment. Mobile support was not tested.
  - GPT-6 Astra: [X](https://x.com/jumperz/status/2096600055301984738) — The creator reports using Astra to develop this project. [Verification notes (English)](assets/screenshots/cinderfall/SOURCE.md).
  - Preview: ![Cinderfall · Fire, Shadow & Steel](assets/screenshots/cinderfall/gameplay.jpg)

- **[Oz Breakdance](https://satriodewantono.com/breakdance/)** — Drag a ragdoll dancer’s limbs into matching targets to score points and extend a timed breaking round.
  - Creator: [Satrio](https://x.com/satrio_d)
  - Platform: Desktop browser, mouse controls; a timed round started without sign-in.
  - GPT-6 Astra: [X](https://x.com/satrio_d/status/2096022866097758500) — The creator says Astra improved his existing breakdance game and its presentation. [Verification notes](assets/screenshots/breakdance/SOURCE.md).
  - Preview: ![A ragdoll dancer aiming for a foot target in the timed breakdance arena.](assets/screenshots/breakdance/gameplay.jpg)

- **[Astral War](https://astralwar.io/)** — A World War II themed browser FPS with soldier and zombie appearances, weapon loadouts, bot training and lobby options.
  - Creator: [Rishi](https://x.com/0xRishi)
  - Platform: Desktop browser, keyboard/mouse; bot training started without sign-in. Multiplayer and controller support were not tested.
  - GPT-6 Astra: [X](https://x.com/0xRishi/status/2096079660605997264) — Rishi reports building Astral War with Astra, Three.js, Meshy and ElevenLabs. The current site also credits Vesper; see the attribution note. [Verification notes](assets/screenshots/astral-war/SOURCE.md).
  - Preview: ![Astral War’s running combat view with weapon and battlefield controls.](assets/screenshots/astral-war/gameplay.jpg)

- **[FLOP CLUB](https://bubucn.com/ai-model-evals/flop-club/game/index.html)** — Dive from three platform heights, perform flips and twists, and aim for a floating ring to improve your landing score.
  - Creator: [BubuAi](https://x.com/BubuStd)
  - Platform: Browser; the standalone game starts directly without sign-in or downloads. A dive was started during the 2026-09-09 check; keyboard and documented touch controls.
  - GPT-6 Astra: [X](https://x.com/BubuStd/status/2096402783805354091) — The creator reports a one-prompt Astra Pro build using Three.js. [Verification notes](assets/screenshots/flop-club/SOURCE.md).
  - Resources: [Project introduction](https://bubucn.com/zh/ai-model-evals/flop-club)
  - Preview: ![A diver on the high platform above the target ring and landing controls.](assets/screenshots/flop-club/gameplay.jpg)

- **[Vector Dive — Beyond the Signal](https://vector-dive.openai.chatgpt.site/)** — Pilot through neon wireframe circuits that accelerate with each loop, timing boosts and phase moves to survive longer.
  - Creator: [Thomas Ricouard](https://x.com/Dimillian)
  - Platform: Desktop browser; a scored flight was started without sign-in. WASD flight, Space boost and Shift phase.
  - GPT-6 Astra: [X](https://x.com/Dimillian/status/2097188900888322323) — The creator says Astra built the game and music from a neon/synthwave visual brief and concept art. [Verification notes](assets/screenshots/vector-dive/SOURCE.md).
  - Preview: ![Vector Dive’s neon flight course with the player craft and gameplay HUD.](assets/screenshots/vector-dive/gameplay.jpg)

### Puzzles & brain games

Logic puzzles, physics challenges, word games, and clever little mechanisms.

- **[瓜体实验室 / Melon Lab](https://melon-game.jack-514.chatgpt.site/)** — A watermelon merging game built around soft-body fruit deformation and collisions.
  - Creator: [Ayi1337](https://github.com/Ayi1337)
  - Platform: Modern browser; the creator also provides a downloadable standalone HTML version.
  - GPT-6 Astra: [Creator's one-shot tests and original prompts](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/README.md).
  - Resources: [Source](https://github.com/Ayi1337/gpt6-astra-one-shot-games/tree/main/melon-lab/src) · [Standalone HTML](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/melon-lab/%E7%93%9C%E4%BD%93%E5%AE%9E%E9%AA%8C%E5%AE%A4.html)
  - Preview: ![Melon Lab gameplay with soft fruit in the merging container and physics controls.](assets/screenshots/melon-lab/gameplay.jpg)

- **[Q弹消消乐](https://qbxxl.0nz.de/)** — Pop connected groups of at least three same-colored bubbles; larger groups create bombs and rainbows, with relaxing, level and timed modes.
  - Creator: zding
  - Platform: Browser, Chinese UI; opened without login or payment.
  - GPT-6 Astra: GPT-6 Astra usage and contribution details await creator confirmation.
  - Preview: ![Q弹消消乐 — Gameplay](assets/screenshots/qbxxl/gameplay.jpg)

- **[榫境 / Sunjing Puzzles](https://sunjing-puzzles.vercel.app)** — Disassemble a six-piece interlocking wooden puzzle and solve two Huarong Dao sliding-block layouts in a 3D workshop, with hints and move undo.
  - Creator: [MartinDelophy](https://github.com/MartinDelophy) (project initiator and submitter).
  - Platform: Modern browser with WebGL 2; Chinese interface, mouse/keyboard and touch controls. Free, no login or API key; progress stays in the current browser.
  - Model participation: [Creation record](works/sunjing-puzzles/CREATION.md) — Iterative Codex work on game design, procedural 3D visuals, rules, solver and tests; exact GPT-6 Astra attribution awaits creator confirmation (draft submission).
  - Resources: [Source and setup](works/sunjing-puzzles/README.md) · [Requests](works/sunjing-puzzles/PROMPTS.md) · Built with: React, Vinext/Vite and Three.js.
  - Preview: ![Sunjing's six-piece wooden lock on a green 3D workbench, with numbered pieces and extraction controls.](assets/screenshots/sunjing-puzzles/gameplay.jpg)

- **[CityMaker](https://citymaker.0to1app.com)** — A 2048 puzzle played on a 4×4 city block: merge matching buildings to climb eleven architectural tiers per city, from traditional homes to a recognizable skyline, across twelve cities with a view you can rotate 45° at a time.
  - Creator: [Derek Wang](https://github.com/derek-wangpch)
  - Platform: Desktop and mobile browsers with WebGL; English, Simplified Chinese and Traditional Chinese. Free, no login or API key; progress is saved per city in the current browser and can be installed to the iOS Home Screen.
  - GPT-6 Astra: [Creation record](https://github.com/derek-wangpch/OpenCityMaker/blob/master/docs/CREATION.md) — The creator reports using GPT-6 Astra to generate the procedural geometry for all 132 building models, through a reference-driven workflow of multi-view research, silhouette-first massing and screenshot validation; not a one-shot test.
  - Resources: [Source and setup](https://github.com/derek-wangpch/OpenCityMaker) · [Verification notes](https://github.com/derek-wangpch/OpenCityMaker/blob/master/QA.md) · Built with: React, TypeScript, Vite and Three.js; all 132 building models are original procedural geometry.
  - Preview: ![CityMaker gameplay: a Hong Kong board of low-poly 3D buildings on a 4×4 grid, with score, city rail and rotation controls.](assets/screenshots/citymaker/gameplay.png)

### Strategy & simulation

Tower defense, strategic card games, management games, building, and simulation sandboxes.

- **[Dwellcraft · 住进想象](https://dwellcraft.vercel.app/)** — Furnish three homes by dragging furniture into a 3D layout, customize materials and lighting, then walk through the result at eye level; includes local saves and personal GLB model imports.
  - Creator: [Ryan-fm](https://github.com/Ryan-fm).
  - Platform: Modern desktop browser with WebGL; Chinese and English UI. Free, no login or API key. Designs and imported models stay in the current browser. WebXR controls are implemented, but physical Quest testing is pending.
  - Model participation: [Development record](https://github.com/Ryan-fm/Dwellcraft/blob/main/docs/DEVELOPMENT.md) — Iterative Codex work on scene planning, code, furniture placement, materials, bilingual UI and tests; exact GPT-6 Astra attribution awaits creator confirmation.
  - Resources: [Source and setup](https://github.com/Ryan-fm/Dwellcraft) · [Design plan](https://github.com/Ryan-fm/Dwellcraft/blob/main/docs/scene-design/development-plan.md) · [Asset credits](https://github.com/Ryan-fm/Dwellcraft/blob/main/docs/ASSETS.md) · Built with: React, TypeScript, Babylon.js and Vinext/Vite.
  - Preview: ![Dwellcraft's running editor with a furnished 3D floor plan, a draggable furniture library and material and lighting controls.](https://raw.githubusercontent.com/Ryan-fm/Dwellcraft/main/docs/screenshots/editor-en.png)

- **[Little Kingdom Chess / 작은 왕국 체스](https://little-kingdom-chess.echo3042.chatgpt.site/)** — Play chess against a computer on a rotatable 3D board with miniature characters, move history and undo.
  - Creator: [에코_eco](https://x.com/echo3042)
  - Platform: Desktop browser; opened without login or payment. Mobile support was not tested.
  - GPT-6 Astra: [X](https://x.com/echo3042/status/2096123409029886250) — The creator reports using Astra to develop this project. [Verification notes (English)](assets/screenshots/little-kingdom-chess/SOURCE.md).
  - Preview: ![Little Kingdom Chess / 작은 왕국 체스 — Gameplay](assets/screenshots/little-kingdom-chess/gameplay.jpg)

- **[JUNK RUN](https://junk-run.pages.dev/)** — Assemble a gravity-powered vehicle from scrapyard parts and send it downhill; starts in a first-person workshop.
  - Creator: [TheLabGuy](https://x.com/hermesailab)
  - Platform: Desktop browser; opened without login or payment. Mobile support was not tested.
  - GPT-6 Astra: [X](https://x.com/hermesailab/status/2097508053901840850) — The creator reports using Astra to develop this project. [Verification notes (English)](assets/screenshots/junk-run/SOURCE.md).
  - Preview: ![JUNK RUN — Gameplay](assets/screenshots/junk-run/gameplay.jpg)

- **[Spy or Lie](https://spyorlie.com/)** — A hexagonal strategy board game against a computer opponent: place hidden agents, bluff, and surround enemy groups to trigger capture chains.
  - Creator: [Nate Lorenzen](https://x.com/NateLorenzen)
  - Platform: Browser, English UI; the opening human/computer turn was verified without login or payment.
  - GPT-6 Astra: [X](https://x.com/NateLorenzen/status/2097504974683152559) — The creator says Astra turned his game design into a playable demo in one shot; this is a creator claim, not an independently audited development record.
  - Preview: ![Spy or Lie — Gameplay](assets/screenshots/spy-or-lie/gameplay.jpg)

- **[三分天下 · 百将风云 / Three Kingdoms: Hundred Heroes](https://sanguo-jiangshan.vercel.app)** — Lead Wei, Shu or Wu in a turn-based campaign across 15 cities, managing gold and grain and commanding a roster of 108 officers with individual AI-generated portraits as you compete with AI factions to unify the land.
  - Creator: [MartinDelophy](https://github.com/MartinDelophy) (project initiator and submitter).
  - Platform: Modern browser; Chinese interface, mouse and touch controls. Free, no login or API key; local saves support import and export.
  - GPT-6 Astra: [Creation record](works/three-kingdoms/CREATION.md) — Creator-confirmed use through iterative collaboration in Codex on rules, interface, AI, balancing and tests; terrain and officer portraits were made with image-generation tools.
  - Resources: [Source and setup](works/three-kingdoms/README.md) · [Requests](works/three-kingdoms/PROMPTS.md) · Built with: React, TypeScript and Vinext/Vite.
  - Preview: ![Three Kingdoms gameplay showing an ink-wash city map, resource controls and officer portraits.](assets/screenshots/three-kingdoms/gameplay.jpg)

- **[Last Beacon / 最后的灯塔](https://last-beacon.loupengju.cc)** — Connect a power grid across a miniature island, build and upgrade towers, and balance limited power to defend a lighthouse through ten waves and a final boss.
  - Creator: [stackloomdev](https://github.com/stackloomdev)
  - Platform: Modern desktop and mobile browsers, with Chinese and English support; free, no login or API key. Optional sound requires Web Audio.
  - GPT-6 Astra: [Creator's development log and model contribution](https://github.com/stackloomdev/last-beacon/blob/main/docs/CREATION.md) — Used for gameplay design, code, procedural artwork, and tests through multiple iterations; not a one-shot test.
  - Resources: [Source and setup instructions](https://github.com/stackloomdev/last-beacon) · [Requirements and iteration notes](https://github.com/stackloomdev/last-beacon/blob/main/docs/PROMPT.md) · Built with: JavaScript, Canvas 2D, and Web Audio.
  - Preview: ![Last Beacon gameplay in English: powered sentinels, mortars, and a frost tower defend the island against enemies following the coastal path.](assets/screenshots/last-beacon/gameplay-en.png)

- **[缺氧 · 小小星球](https://hypoxia-6tu.pages.dev/)** — An underground colony survival simulation: dig and build while balancing oxygen, food and power for three colonists.
  - Creator: dudu
  - Platform: Browser with Canvas; Chinese UI, mouse and keyboard; opened without login or payment.
  - GPT-6 Astra: [Issue #28](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/28) — The submitter reports development throughout with GPT-6 Astra; independently unverified.
  - Preview: ![缺氧 · 小小星球 — Gameplay](assets/screenshots/hypoxia/gameplay.jpg)

- **[魔塔 · 永夜之阶](https://ai.ywnet.xyz/work/mt.html)** — A fifteen-floor pixel tower adventure built around attack/defense calculations, limited resources and three colors of keys.
  - Creator: yw
  - Platform: Browser, Chinese UI; opened without login or payment.
  - GPT-6 Astra: [Issue #38](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/38) — The submitter supplies the development prompt under GPT-6 Astra usage; the exact model contribution is not independently verified.
  - Preview: ![魔塔 · 永夜之阶 — Gameplay](assets/screenshots/magic-tower/gameplay.jpg)

- **[永恒荒野](https://starve.pages.dev/)** — A browser survival and strategy game presented as a Don't Starve recreation. The submitted screenshot shows woodland exploration, resource gathering, an inventory, and health, hunger and sanity meters.
  - Creator: dudu
  - Platform: Browser; the screenshot shows a Chinese interface and keyboard controls. Payment and login requirements are not specified; demo not independently verified.
  - GPT-6 Astra: [Submitter statement](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/26) — The submitter attributes the full development to GPT-6 Astra.
  - Resources: No public source or separate development record supplied.
  - Preview: ![永恒荒野 screenshot supplied in Issue #26: a character beside a campfire in a forest, with inventory slots, survival meters and a minimap.](assets/screenshots/eternal-wilderness/gameplay.jpg)

- **[潜水员戴夫 / Dave the Diver](https://dave-2cm.pages.dev/)** — A browser recreation of Dave the Diver combining underwater spearfishing, sushi-restaurant management and island farming.
  - Creator: dudu
  - Platform: Browser; Chinese interface with mouse and keyboard controls. Opened and started a dive without login or payment.
  - GPT-6 Astra: [Submitter statement](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/41) — The submitter attributes the full development to GPT-6 Astra.
  - Resources: No public source or separate development record supplied.
  - Preview: ![Dave the Diver recreation in action: a diver among fish, with oxygen, depth and inventory indicators.](assets/screenshots/dave-the-diver/gameplay.jpg)

- **[No Moat](https://no-moat.petergyang.chatgpt.site/)** — A startup-themed roguelike deckbuilder: recruit a team and play cards against copycats, bugs and cloud bills.
  - Creator: [Peter Yang](https://x.com/petergyang)
  - Platform: Desktop browser; opened without login or payment. Mobile support was not tested.
  - GPT-6 Astra: [X](https://x.com/petergyang/status/2096297378584375672) — The creator reports using Astra to develop this project. [Verification notes (English)](assets/screenshots/no-moat/SOURCE.md).
  - Preview: ![No Moat](assets/screenshots/no-moat/gameplay.jpg)

- **[The Free Game](https://vale-dos-vinhedos.lucas579686.chatgpt.site/)** — Build a medieval village with roads, workers and production chains, presented as a detailed 3D tabletop settlement.
  - Creator: [Lucas Marques, from Shiva](https://x.com/LucasMarquesSv)
  - Platform: Desktop browser; opened without login or payment. Mobile support was not tested.
  - GPT-6 Astra: [X](https://x.com/LucasMarquesSv/status/2096772160404504583) — The creator reports using Astra to develop this project. [Verification notes (English)](assets/screenshots/the-free-game/SOURCE.md).
  - Resources: [GitHub](https://github.com/LucasMarquesShiva/the-free-game)
  - Preview: ![The Free Game](assets/screenshots/the-free-game/gameplay.jpg)

- **[AGI of Empires — The Compute Wars](https://agiofempires.com/)** — Gather funding and GPUs, build data centers and armies, and race rival AI labs to ASI or destroy their headquarters.
  - Creator: [timour kosters](https://x.com/timourxyz)
  - Platform: Desktop browser; a free satirical real-time strategy game. The opening computer-opponent match and resource collection were verified without sign-in.
  - GPT-6 Astra: [X](https://x.com/timourxyz/status/2096662786692776293) — The creator says he developed this Age of Empires-inspired game with Astra over two days. [Verification notes](assets/screenshots/agi-of-empires/SOURCE.md).
  - Preview: ![The AGI of Empires battlefield, resource counters and headquarters.](assets/screenshots/agi-of-empires/gameplay.jpg)

- **[Atlas Go](https://atlas-go.borisxp.chatgpt.site/)** — Play Go on street networks and unusual graph boards, with local pass-and-play and friend-game options.
  - Creator: [Boris Power](https://x.com/BorisMPower)
  - Platform: Browser; local board opened without sign-in. Online friend matches were not tested.
  - GPT-6 Astra: [X](https://x.com/BorisMPower/status/2096784808399843582) — The creator describes this arbitrary-graph multiplayer Go game as a single-prompt Astra creation. [Verification notes](assets/screenshots/atlas-go/SOURCE.md).
  - Preview: ![Black and white stones on Atlas Go’s honeycomb graph board.](assets/screenshots/atlas-go/gameplay.jpg)

- **[Ironwood — The Art of Industry](https://ironwood.sparkles.dev/)** — Gather raw materials, power machines and connect conveyor belts to turn a clearing into a working factory.
  - Creator: [Dan](https://x.com/aidaniil)
  - Platform: Desktop browser; a guest tutorial opens without sign-in, while saving progress requires login. Multiplayer was not independently tested.
  - GPT-6 Astra: [X](https://x.com/aidaniil/status/2096426970930106530) — The creator says he and his brother built it with Astra, Blender MCP and Cloudflare Durable Objects, inspired by Satisfactory and Besiege. [Verification notes](assets/screenshots/ironwood/SOURCE.md).
  - Preview: ![Ironwood’s factory machines, conveyor belts and resource-management tutorial.](assets/screenshots/ironwood/gameplay.jpg)

- **[前线指令 / Frontline Command](https://fluffy-biscotti-dad318.netlify.app/)** — Build a base, contest resource zones and command tanks, infantry, aircraft and drones against AI armies in a modern-war RTS, using spies and intelligence to gain an advantage.
  - Creator: [嘟啊嘟](https://x.com/HDLhN783wtLkpPR)
  - Platform: Desktop browser, Chinese UI, mouse and keyboard; a single-player match started without login, payment or installation.
  - GPT-6 Astra: [X](https://x.com/HDLhN783wtLkpPR/status/2097321360641122393) — The creator credits “GPT Astra” for building this RTS in the linked post; the exact model version and detailed development workflow are not specified.
  - References: [Submission](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/66) · [Verification notes](assets/screenshots/frontline-command/SOURCE.md)
  - Preview: ![Frontline Command: a base, three selected tanks and power-plant placement during a live match; v0.8, captured 2026-09-09.](assets/screenshots/frontline-command/gameplay.jpg)

### RPGs & adventures

Role-playing, exploration, narrative adventures, and interactive stories.

- **[Lumbridge / Elderwood Realms](https://elderwood-realms.rohannvarma.chatgpt.site/)** — An old-school multiplayer adventure with a shared world, skills, gathering and combat; playable as a guest.
  - Creator: [Rohan Varma](https://x.com/TheRohanVarma)
  - Platform: Desktop browser; opened without login or payment. Mobile support was not tested.
  - GPT-6 Astra: [X](https://x.com/TheRohanVarma/status/2096744577332068549) — The creator reports using Astra to develop this project. [Verification notes (English)](assets/screenshots/lumbridge/SOURCE.md).
  - Preview: ![Lumbridge / Elderwood Realms — Gameplay](assets/screenshots/lumbridge/gameplay.jpg)

- **[Silent Meridian / 静默子午线](https://silent-meridian.stackloom.org/)** — An atmospheric point-and-click adventure with four chapters and thirteen puzzles: compare the Present with its Echo, gather evidence and unravel the mystery of an observatory trapped at 00:17.
  - Creator: [stackloomdev](https://github.com/stackloomdev)
  - Platform: Desktop and mobile browsers; Chinese and English. Play online for free, with no login, installation or API key. Optional WebGL effects fall back to the original illustrations.
  - GPT-6 Astra: [Development record](https://github.com/stackloomdev/silent-meridian/blob/main/docs/CREATION.md) — Iterative work in Codex on story, puzzles, bilingual text, code, procedural 3D effects and tests.
  - Resources: [Source and setup](https://github.com/stackloomdev/silent-meridian) · [Art provenance](https://github.com/stackloomdev/silent-meridian/blob/main/docs/ART.md) · Built with: JavaScript, WebGL, Web Audio.
  - Preview: ![Silent Meridian in action: the observatory with a brass 3D mechanism, clue markers, Present/Echo controls and a field journal.](assets/screenshots/silent-meridian/gameplay.png)

- **[热血归来 · 八荒幻世 / Mir176 Dragon Warrior](https://mir176-dragon-warrior.geekcatxx.chatgpt.site/)** — A Legend-inspired action RPG with warrior, mage and taoist classes, equipment, dungeon combat and auto-battle.
  - Creator: [知识猫AI实验室](https://x.com/GeekCatX)
  - Platform: Desktop browser; opened without login or payment. Mobile support was not tested.
  - GPT-6 Astra: [X](https://x.com/GeekCatX/status/2097530887558865115) — The creator reports using Astra to develop this project. [Verification notes (English)](assets/screenshots/mir176/SOURCE.md).
  - Preview: ![热血归来 · 八荒幻世 / Mir176 Dragon Warrior](assets/screenshots/mir176/gameplay.jpg)

- **[Zork · The Great Underground Empire](https://zork-underground-empire.netlify.app/)** — An unofficial 3D adaptation of Zork with first-person exploration, puzzles, combat and a journal.
  - Creator: [Ethan Mollick](https://x.com/emollick)
  - Platform: Desktop browser; opened without login or payment. Mobile support was not tested.
  - GPT-6 Astra: [X](https://x.com/emollick/status/2096047660662722620) — The creator reports using Astra to develop this project. [Verification notes (English)](assets/screenshots/zork/SOURCE.md).
  - Preview: ![Zork · The Great Underground Empire](assets/screenshots/zork/gameplay.jpg)

- **[The Simpsons: Hit & Run — Browser Recreation](https://vheissu.github.io/hit-and-run-web/)** — Explore Springfield on foot and by car in an unofficial browser recreation with missions, traffic and police chases.
  - Creator: [Dwayne](https://x.com/CtrlAltDwayne)
  - Platform: Desktop browser; the first mission loaded without sign-in after a large initial asset load. Full campaign completion was not tested.
  - GPT-6 Astra: [X](https://x.com/CtrlAltDwayne/status/2096872309936287887) — The creator describes rebuilding the game for the web with GPT-6 Astra; the repository also credits Claude assistance with loading. Original game assets retain their own rights. [Verification notes](assets/screenshots/hit-and-run-web/SOURCE.md).
  - Resources: [Source and setup](https://github.com/Vheissu/hit-and-run-web)
  - Preview: ![Homer in Springfield with the first mission objective and minimap visible.](assets/screenshots/hit-and-run-web/gameplay.jpg)

- **[Where the Wind Wanders](https://app.usecrayon.ai/play/a9a3c165-74b3-4ff6-9588-ad97f829ddb5)** — Wander through a sunlit 2.5D valley, follow paths and gather three wind letters in a quiet exploration adventure.
  - Creator: [Tushar](https://x.com/TusharXo)
  - Platform: Browser, hosted on Crayon; the public game page and embedded player were checked.
  - GPT-6 Astra: [X](https://x.com/TusharXo/status/2096037482739683574) — Tushar describes Astra generating paths and assets; a follow-up announces the playable release using Astra, Three.js and Crayon. [Verification notes](assets/screenshots/crayon-adventure/SOURCE.md).
  - Resources: [Creator release post](https://x.com/TusharXo/status/2096741535891251261)
  - Preview: ![A character exploring the flower-filled valley with the wind-letter objective visible.](assets/screenshots/crayon-adventure/gameplay.jpg)

- **[ALIBI — The Last Light](https://alibi-blackthorn-manor.vercel.app/)** — Investigate Blackthorn Manor in a point-and-click murder mystery, examining scenes and following clues to identify the killer.
  - Creator: [Christos Antonopoulos](https://x.com/Christos_antono)
  - Platform: Browser; the interactive manor entrance opened without sign-in. Later generated scenes were not fully tested.
  - GPT-6 Astra: [X](https://x.com/Christos_antono/status/2096435122669297892) — The creator credits both GPT Astra and H3 Max for this generative detective game. [Verification notes](assets/screenshots/alibi-blackthorn-manor/SOURCE.md).
  - Preview: ![The manor entrance with a clickable door and the opening investigation text.](assets/screenshots/alibi-blackthorn-manor/gameplay.jpg)

- **[Skyward: The Gathering](https://edge-city-skyward-quests.vercel.app/)** — Explore floating islands, jump and glide between communities, and complete quests for their residents.
  - Creator: [timour kosters](https://x.com/timourxyz)
  - Platform: Desktop browser, keyboard and mouse; the quest-edition page and controls were checked.
  - GPT-6 Astra: [X](https://x.com/timourxyz/status/2096379521926840339) — The creator says Astra built a playable 3D game with NPCs and quests inspired by Edge City locations. [Verification notes](assets/screenshots/skyward-gathering/SOURCE.md).
  - Preview: ![Skyward’s floating-island overview with exploration and journal controls.](assets/screenshots/skyward-gathering/gameplay.jpg)

- **[Anna & Leo · The Starstone Adventure](https://anna-leo-starstone.vercel.app/)** — Switch between Anna’s musical magic and Leo’s superpowers to awaken melody flowers and explore Wonder Garden.
  - Creator: [Dharma Utomo](https://x.com/dharmautomo)
  - Platform: Browser; the opening quest started without sign-in. WASD movement, Space jump, E power and Tab hero switching.
  - GPT-6 Astra: [X](https://x.com/dharmautomo/status/2096573649235091967) — The creator says GPT-6 Astra helped him build the 3D adventure and shares a video of his children play-testing it. [Verification notes](assets/screenshots/anna-leo-starstone/SOURCE.md).
  - Preview: ![Anna and Leo’s 3D adventure world and quest interface.](assets/screenshots/anna-leo-starstone/gameplay.jpg)

### Platformers & racing

Parkour, platform challenges, racing, and games built around movement and routes.

- **[STORM RACE](https://storm-race.vercel.app/)** — Mini 4WD racing with an exploded-parts garage, boost and changing dry, rainy and stormy track conditions.
  - Creator: [BubuAi](https://x.com/BubuStd)
  - Platform: Desktop browser; opened without login or payment. Mobile support was not tested.
  - GPT-6 Astra: [X](https://x.com/BubuStd/status/2096587056755638553) — The creator reports using Astra to develop this project. [Verification notes (English)](assets/screenshots/storm-race/SOURCE.md).
  - Preview: ![STORM RACE — Gameplay](assets/screenshots/storm-race/gameplay.jpg)

- **[FANG STARLIGHT RUN](https://fang-starlight-run.yosshy666.chatgpt.site/)** — Guide a wolf through three moonlit platforming stages, collecting coins and star fragments with double jumps and dashes.
  - Creator: [FANGプラス最強伝説🐺](https://x.com/FANGsaikyou)
  - Platform: Desktop browser; opened without login or payment. Mobile support was not tested.
  - GPT-6 Astra: [X](https://x.com/FANGsaikyou/status/2096192022596194588) — The creator reports using Astra to develop this project. [Verification notes (English)](assets/screenshots/fang-starlight-run/SOURCE.md).
  - Preview: ![FANG STARLIGHT RUN — Gameplay](assets/screenshots/fang-starlight-run/gameplay.jpg)

- **[Blue Bajaj Rally](https://bajaj.guzo.tech/)** — Race a three-wheeled Bajaj around an Ethiopian-inspired highland circuit against five AI rivals or the clock.
  - Creator: [Guzo Technologies](https://x.com/guzotech)
  - Platform: Desktop browser; opened without login or payment. Mobile support was not tested.
  - GPT-6 Astra: [X](https://x.com/guzotech/status/2096209787864088638) — The creator reports using Astra to develop this project. [Verification notes (English)](assets/screenshots/blue-bajaj-rally/SOURCE.md).
  - Preview: ![Blue Bajaj Rally — Gameplay](assets/screenshots/blue-bajaj-rally/gameplay.jpg)

- **[APEX CLUB — Bay Kart Grand Prix](https://apex-club-racing.vercel.app)** — Race three laps around Bay Circuit, choose from six karts, and charge corner-exit mini turbos to climb the solo rankings or score for a 4v4 team.
  - Creator: Ryan
  - Platform: Desktop browser with WebGL 2 and a keyboard; free, no login or API key. Runs from a local HTTP server or static host; Three.js is included locally. Team races are local: one human and seven AI racers.
  - Model participation: [Development record](works/apex-club/CREATION.md) — Iterative Codex work on gameplay, code, procedural visuals and tests; GPT-6 Astra attribution awaits creator confirmation.
  - Resources: [Source and setup](works/apex-club/README.md) · [Request and iteration summary](works/apex-club/PROMPTS.md) · [GPT conversation](https://chatgpt.com/s/cx_6a9e84c13c9c8191bcb7ad0801288adc) · Built with: JavaScript, Three.js.
  - Preview: ![APEX CLUB team race on Bay Circuit with nearby karts, lap progress, live team points and a minimap.](assets/screenshots/apex-club/gameplay.png)

- **[PELICAN PEDAL / 鹈鹕踏浪](https://pelican-pedal.zecoba.workers.dev/)** — Guide a cycling pelican along a changing 3D coastline: switch between three lanes, jump and duck around obstacles, collect fish combos, and use shields, magnets and a six-second invincible dash.
  - Creator: [chat01.ai](https://chat01.ai) (credited in the submission).
  - Platform: Desktop and mobile browsers, with keyboard or touch controls; free, no login, according to the submission. Demo not independently verified.
  - GPT-6 Astra: [Issue #10](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/10) — The submitter reports generation with a single prompt; the linked development record has not been independently verified.
  - Resources: [Shared development record](https://chat01.ai/zh/chat/01M1VJ5K55803V2YK3T2NKTX33)
  - Preview: ![PELICAN PEDAL title screen with a pelican riding a bicycle beside the sea; screenshot supplied in Issue #10.](https://github.com/user-attachments/assets/ec085afa-3c45-4de6-b03f-5c626f941546)

- **[狂飙赛车 · OVERDRIVE](https://gpt-kbsc.0nz.de/)** — 3D racing against five AI rivals, with selectable cars and tracks, time trials, drifting and nitro.
  - Creator: zding
  - Platform: Browser, Chinese UI; opened without login or payment.
  - GPT-6 Astra: GPT-6 Astra usage and contribution details await creator confirmation.
  - Preview: ![狂飙赛车 · OVERDRIVE — Gameplay](assets/screenshots/overdrive/gameplay.jpg)

- **[零界深潜 / ABYSS PROTOCOL](https://abyss-descent.zecoba.workers.dev/)** — Move left and right to descend through a 3D shaft of moving, crumbling and phase-shifting platforms, avoiding lasers and saws while collecting crystals and survival chips.
  - Creator: [chat01.ai](https://linux.do/u/bandaot)
  - Platform: Desktop browser; Chinese UI, A/D or arrow keys. Opened and started without login or payment; mobile play not tested.
  - Model participation: [Chat01](https://chat01.ai/en/chat/01M221KFTPTBQV5ARQWJM7P86Y) — The shared record is labeled GPT-6 Pro and documents iterative game generation and revisions; it does not explicitly identify GPT-6 Astra.
  - Resources: [HTML](https://files.chat01.ai/python-generations/9ab8f4f7-425f-4709-b741-7218d87122e6/abyss-descent.html) · [ZIP](https://files.chat01.ai/python-generations/9ab8f4f7-425f-4709-b741-7218d87122e6/abyss-descent-complete.zip)
  - Preview: ![零界深潜 / ABYSS PROTOCOL](assets/screenshots/abyss-protocol/gameplay.jpg)

- **[疾风赛道 / Kart Racing（跑跑卡丁车）](https://qwen3-8-test.vercel.app/)** — Race three laps with drifting, nitro and items; the live game is titled 疾风赛道 and offers a 2–4-player online mode.
  - Creator: [SteveZhang / jay6697117](https://github.com/jay6697117) · [X](https://x.com/stevezh10058543)
  - Platform: Browser; free, no login. Creator reports VPN/proxy access may be needed. Solo start checked; multiplayer not tested.
  - GPT-6 Astra: [Issue #51](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/51) — Creator reports: The first version used Qwen3.8 Max; Astra comprehensively rebuilt the second version.
  - Preview: ![疾风赛道 / Kart Racing（跑跑卡丁车）](https://github.com/user-attachments/assets/015e0ca1-7032-4d0e-9391-ad3f40d84227)

- **[TIDAL RUSH — Paradise GP](https://tidal-rush-paradise-gp.skirano.chatgpt.site/)** — Drift through a tropical kart circuit, use items and race seven rivals over three laps.
  - Creator: [Pietro Schirano](https://x.com/skirano)
  - Platform: Browser; the three-lap race started without sign-in. Keyboard driving, drift and item controls, plus on-screen touch buttons.
  - GPT-6 Astra: [Model attribution](https://openai.com/index/gpt-6-astra/) — OpenAI’s Astra launch page links this interactive kart game and credits Pietro Schirano. The X discovery post is a community share, not the creator’s own post. [Verification notes](assets/screenshots/tidal-rush/SOURCE.md).
  - Resources: [X discovery](https://x.com/alexgetmancom/status/2095598460921614825)
  - Preview: ![Tidal Rush’s tropical kart track with race position and drift controls.](assets/screenshots/tidal-rush/gameplay.jpg)

- **[LUNA — Crimson Requiem / 紅月のレクイエム](https://luna-crimson-requiem.ponsuke.chatgpt.site/)** — Jump through a gothic pixel-art stage, slash enemies, stomp them or summon an attack in a short side-scrolling adventure.
  - Creator: [音羽ぽんすけ](https://x.com/ponsuke_otowa)
  - Platform: Browser, Japanese UI; keyboard controls and creator-reported smartphone support. One stage is available.
  - GPT-6 Astra: [X](https://x.com/ponsuke_otowa/status/2096531744933425299) — The creator reports about 25 minutes of Astra development and one correction to the walking animation; the music is credited separately to Suno. [Verification notes](assets/screenshots/luna-crimson-requiem/SOURCE.md).
  - Preview: ![LUNA fighting through a red-moon gothic street with health and summon meters.](assets/screenshots/luna-crimson-requiem/gameplay.jpg)

- **[Strange Orbit](https://app.usecrayon.ai/play/47df78e2-1410-45d1-833c-196e1161c0b8)** — Race astronaut cyclists around a planet’s rings, collect stardust, draft rivals and boost through the Orbital Cup.
  - Creator: [Crayon](https://x.com/usecrayon)
  - Platform: Browser on Crayon; keyboard and documented touch controls. The public page offers racing, time-trial and endless-wander modes.
  - GPT-6 Astra: [X](https://x.com/usecrayon/status/2097468975995302167) — Crayon credits GPT-6 Astra, Crayon Pro and Three.js for the space biking game. [Verification notes](assets/screenshots/crayon-space-bike/SOURCE.md).
  - Preview: ![Astronaut cyclists racing along a planetary ring with lap, position and stardust indicators.](assets/screenshots/crayon-space-bike/gameplay.jpg)

- **[One More Vine — Into the Wild](https://onemorevine.bennash.dev/)** — Run, jump and swing across four jungle levels, collect treasure and avoid crocodiles while improving your time.
  - Creator: [Ben Nash](https://x.com/bennash)
  - Platform: Browser, keyboard and on-screen movement controls; the opening level and instructions loaded without sign-in.
  - GPT-6 Astra: [X](https://x.com/bennash/status/2096282758930645170) — The creator explicitly calls it a four-level Pitfall-inspired game made with GPT-6 Astra. [Verification notes](assets/screenshots/one-more-vine/SOURCE.md).
  - Preview: ![A jungle platforming level with hanging vines, treasures, pits and crocodiles.](assets/screenshots/one-more-vine/gameplay.jpg)

- **[混合马里奥Ⅱ · 忍者龙剑传 × 坦克大战 / Mario Mix II](https://aha-xiaoq.github.io/games/mario-mix-2/play.html)** — Bring Ninja Gaiden’s Ryu Hayabusa and the Battle City tank into Mario’s underground World 1-2: jump, climb walls and fight as Ryu, battle from above as the tank, or rescue the princess in a ninja-to-tank relay.
  - Creator: [在下_小Q（Aha-xiaoQ）](https://github.com/Aha-xiaoQ)
  - Platform: Desktop browser, Chinese UI, keyboard recommended; free, no login or installation.
  - GPT-6 Astra: [Issue #65](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/65) — The creator reports using GPT-6 Astra to iteratively develop and debug the game code and interactions, while providing gameplay direction and feedback; not a one-shot generation.
  - Resources: [Project page](https://aha-xiaoq.github.io/games/mario-mix-2/) · [Video](https://www.bilibili.com/video/BV1erYt69EFP/) · [Verification and image credits](assets/screenshots/mario-mix-2/SOURCE.md)
  - Rights: Unofficial fan game; classic characters, images and music retain their respective owners’ rights. See the original game’s material credits.
  - Preview: ![Mario Mix II — video cover supplied by the creator, not a gameplay capture.](https://aha-xiaoq.github.io/games/mario-mix-2/cover.jpg)
  - Screenshot: ![Mario Mix II tank firing at the World 1-2 entrance; running version 1.0, captured 2026-09-09.](assets/screenshots/mario-mix-2/gameplay.jpg)

### Experimental & multiplayer

Unusual mechanics, online competition, and cooperative experiences.

- **[ASTRA Arcade](https://astra-arcade.antonioleivag.chatgpt.site/)** — Six browser games in one arcade, including mountain rally, snowboarding and antigravity racing; counted as one collection.
  - Creator: [Antonio Leiva](https://x.com/antonioleivag)
  - Platform: Desktop browser; opened without login or payment. Mobile support was not tested.
  - GPT-6 Astra: [X](https://x.com/antonioleivag/status/2096509898481651770) — The creator reports using Astra to develop this project. [Verification notes (English)](assets/screenshots/astra-arcade/SOURCE.md).
  - Preview: ![ASTRA Arcade — Gameplay](assets/screenshots/astra-arcade/gameplay.jpg)

- **[Chao Party](https://chao.party/)** — An unofficial multiplayer Chao Garden fan game: choose a Sonic character, explore the garden and interact with Chao.
  - Creator: [Hank](https://x.com/h4nkdog)
  - Platform: Desktop browser; opened without login or payment. Mobile support was not tested.
  - GPT-6 Astra: [X](https://x.com/h4nkdog/status/2097308970431987857) — The creator reports using Astra to develop this project. [Verification notes (English)](assets/screenshots/chao-party/SOURCE.md).
  - Preview: ![Chao Party — Gameplay](assets/screenshots/chao-party/gameplay.jpg)

- **[ORBITAL GARDEN · 轨道花园](https://orbital-garden-one.vercel.app)** — An interactive particle-art sandbox: morph 48,000 light points between a flower, a gravity ring, and a galaxy, disturb the sculpture, and export a moment as a poster.
  - Creator: [jackroc](https://github.com/jackroc)
  - Platform: Modern browser with WebGL; click the title to try it online. Free, no login or API key; the standalone HTML also works offline. Optional ambient sound requires Web Audio.
  - GPT-6 Astra: [Creation record and model contribution](works/orbital-garden/README.md#模型与创作记录) — The creator used GPT-6 Astra ultra for the concept, code, and copy, with collaborative review; not a one-shot test.
  - Resources: [Source and setup instructions](works/orbital-garden/README.md) · [Standalone HTML](works/orbital-garden/index.html) · [Prompt](works/orbital-garden/PROMPT.md) · Built with: native WebGL, Web Audio, and Canvas 2D.
  - Preview: ![Orbital Garden's mint-green particle flower, with shape selection, vitality and time-speed controls, and poster export.](assets/screenshots/orbital-garden/gameplay.jpg)

- **[Toy2Game / 在线玩具箱](https://games.asmo.top/)** — Four 3D adaptations of tabletop toys: knock out ice beneath a penguin, guide rabbits through traps, balance astronauts on a platform and solve parking puzzles.
  - Creator: [asmoyou](https://github.com/asmoyou)
  - Platform: Desktop, tablet and mobile browsers; free, no login. Local same-screen turn-taking for 2–4 seats, including computer opponents, plus solo puzzles; no online multiplayer. Demo not independently verified.
  - GPT-6 Astra: [Creator statement](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/24) — Creator reports that GPT-6 Astra autonomously implemented the games and carried out testing from toy descriptions and feature requirements.
  - Resources: [Source and setup](https://github.com/asmoyou/toy2game) · [Noncommercial license](https://github.com/asmoyou/toy2game/blob/main/LICENSE) — Source available; noncommercial use is free, commercial use requires prior written authorization from the author. Built with: TypeScript, React, Vite, Three.js.
  - Preview: ![Toy2Game overview with four actual 3D game scenes: penguin ice, rabbit traps, astronaut balancing and parking escape. Image provided by asmoyou.](https://raw.githubusercontent.com/asmoyou/toy2game/main/docs/images/toy2game-overview.png)

- **[Jelly Baby](https://jelly.scottsun.io/)** — A soft-body jelly playground on a sunlit tabletop, with jumping, stretching, a swing and a trampoline.
  - Creator: [Scott](https://x.com/scottstts)
  - Platform: Desktop browser; opened without login or payment. Mobile support was not tested.
  - GPT-6 Astra: [X](https://x.com/scottstts/status/2096364764054131119) — The creator reports using Astra to develop this project. [Verification notes (English)](assets/screenshots/jelly-baby/SOURCE.md).
  - Resources: [GitHub](https://github.com/scottstts/Jelly-Baby)
  - Preview: ![Jelly Baby](assets/screenshots/jelly-baby/gameplay.jpg)

- **[泡泡坦克大作战联机版 / Toon Tank Arena](https://toon-tank-arena.jay6697117.deno.net/)** — Defend a rainbow core with bouncing shells and power-ups in a colorful tank arena, with solo, local co-op and online battle options.
  - Creator: [SteveZhang / jay6697117](https://github.com/jay6697117) · [X](https://x.com/stevezh10058543)
  - Platform: Browser; free, no login. Creator reports VPN/proxy access may be needed. Solo start checked; multiplayer not tested.
  - GPT-6 Astra: [Issue #52](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/52) — Creator reports: GPT-6 Astra Pro built the first version; GPT-6 Astra in Codex handled later improvements.
  - Preview: ![泡泡坦克大作战联机版 / Toon Tank Arena](https://github.com/user-attachments/assets/713d44f3-a77c-452c-ba6d-1231882dc670)

## What an entry includes

A useful recommendation makes it easy to understand what a game is, where to try it, and why it belongs here.

| Detail | What to include |
| --- | --- |
| Game & creator | The game title and a link to its original creator or team |
| Why it is interesting | One sentence about the core mechanic, without promotional filler |
| Access | A direct browser game link without downloads, installation, local setup or mandatory sign-in |
| Gameplay screenshot | At least one actual gameplay screenshot with a publicly accessible image URL |
| Platform & requirements | Browser / desktop / mobile; disclose payment, login, or special hardware requirements |
| Astra's role | A creator statement, development log, or public record explaining how GPT-6 Astra contributed |
| Development resources | Source code, technology, and the making-of story, where available |

Model use is attributed to the creator's public description; unsupported claims will not be presented as confirmed facts. Playable prototypes are welcome, and open source is optional.

## Help maintain the list

[Submit a game through an issue](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml), or open a pull request. See the [contribution guide](CONTRIBUTING.md) for the entry format.

Please [report broken links or incorrect information](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=broken-link.yml), including attribution errors or changed access requirements.

## License

Original curated text and artwork in this repository are dedicated to the public domain under [CC0 1.0](LICENSE). Linked games, code, images, trademarks, and other third-party materials retain their own licenses and rights. Listing a project does not change its permissions.

<!-- END UPSTREAM MartinDelophy/awesome-gpt-6-astra README.md -->

</details>

### `README.zh-CN.md`

<details><summary>展开查看完整上游内容</summary>

<!-- BEGIN UPSTREAM MartinDelophy/awesome-gpt-6-astra README.zh-CN.md -->

<div align="center">

![Awesome GPT-6 Astra — Games worth playing. Ideas worth building.](assets/banner.svg)

# Awesome GPT-6 Astra

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md) [![LINUX DO](https://img.shields.io/badge/LINUX%20DO-Community-f0b73f?style=flat-square)](https://linux.do/) [![Cases: 61](https://img.shields.io/badge/Cases-61-58a6ff?style=flat-square)](https://astragames.aigccreative.com/)

**收集用 GPT-6 Astra 制作的有趣游戏。**

关注好玩的点子、可体验的作品，以及能启发下一位创作者的开发过程。

[English](README.md) · **简体中文** · [日本語](README.ja.md) · [한국어](README.ko.md)<br>
[Français](README.fr.md) · [Deutsch](README.de.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md)<br>
[Русский](README.ru.md) · [العربية](README.ar.md) · [हिन्दी](README.hi.md) · [Bahasa Indonesia](README.id.md)

[提交游戏](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml) · [参与贡献](CONTRIBUTING.md)

</div>

## 从这里开始

目前收录 **61 个游戏与互动作品**：三国领土策略、木锁拆解与华容道、半流体水果合成、程序化城市建造 2048、单键飞行、魔毯战斗、五关弹幕射击、海岛电网塔防、荒野生存、水下捕鱼、寿司店经营与海岛种植、海湾卡丁车竞速、鹈鹕海岸骑行、桌面玩具的 3D 改编、3D 家居装修，以及轨道花园。点击作品名称即可直接进入在线游戏。

目录更新：**2026-09-09**。模型使用信息依据作者或投稿者的说明，未确认内容在具体条目中标注。此日期表示目录维护时间，不代表当天重新试玩了所有游戏。

本次新增：[16 款在 X 上发现的在线游戏](docs/x-high-traffic-games-2026-09-09.md)，核验表按所观察到的帖子浏览量排序。

- **想玩游戏：** 从下面的分类寻找你喜欢的玩法。
- **做了游戏：** [提交你的作品](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml)，附上在线游戏直达入口、实机截图，以及使用 GPT-6 Astra 的说明。
- **发现好作品：** 欢迎推荐他人的公开作品，并注明原作者。

这是一份社区维护的清单，与 OpenAI 无隶属关系。收录表示值得探索，不代表性能评测或官方推荐。

## 游戏目录

- [动作与街机](#动作与街机)
- [解谜与益智](#解谜与益智)
- [策略与模拟](#策略与模拟)
- [RPG 与冒险](#rpg-与冒险)
- [平台跳跃与竞速](#平台跳跃与竞速)
- [实验玩法与多人游戏](#实验玩法与多人游戏)

### 动作与街机

射击、格斗、生存、节奏，以及追求“再来一局”的作品。

- **[Mosswing](https://mosswing-quiet-flight.jack-514.chatgpt.site/)** — 3D 单键飞行，控制小翼穿越障碍间隙得分。
  - 作者：[Ayi1337](https://github.com/Ayi1337)
  - 平台：浏览器，面向移动端设计。
  - GPT-6 Astra：[作者的 One Shot 测试与原始 Prompt](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/README.md)。
  - 开发资料：[源码](https://github.com/Ayi1337/gpt6-astra-one-shot-games/tree/main/mosswing/src) · [单文件 HTML](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/mosswing/mosswing.html)
  - 预览：![Mosswing 起始画面：飞行角色与石柱之间的障碍间隙。](assets/screenshots/mosswing/gameplay.jpg)

- **[Magic Carpet Wizard — A Thousand Skies](https://threapchills.github.io/MagicCarpetWizard/)** — 驾驶魔毯探索球形世界，穿环、施法，并挑战敌人与 Boss。
  - 作者：[threapchills](https://github.com/threapchills)
  - 平台：桌面浏览器，键鼠操作，需要 WebGL 2。
  - GPT-6 Astra：作者在[仓库 About](https://github.com/threapchills/MagicCarpetWizard) 中说明由 GPT-6 Astra 制作。
  - 开发资料：[源码与运行说明](https://github.com/threapchills/MagicCarpetWizard) · 技术：Three.js、Vite。
  - 预览：![Magic Carpet Wizard 起始画面：魔毯骑手、城市与发光飞行环。](assets/screenshots/magic-carpet/gameplay.jpg)

- **[雷霆战机 · 天穹远征 / THUNDERFALL](https://thunderfall.vercel.app/)** — 三种战机挑战五大空域与多阶段首领，躲避漂移弹和预警激光、拾取四色武器，完整战役至少十分钟有效战斗。
  - 作者：[jackroc](https://github.com/jackroc)
  - 平台：现代桌面与手机浏览器；拖动或键盘移动，自动开火。免费，无需登录或 API Key；可选音效需要 Web Audio。
  - GPT-6 Astra：[创作记录与模型参与说明](works/thunderfall/README.md#创作与许可) — 创作者声明使用 GPT-6 Astra ultra 完成设计、代码、程序画面、合成声音与迭代测试，并有协作代理参与；非 one-shot 测试。
  - 开发资料：[源码与运行说明](works/thunderfall/README.md) · [Prompt](works/thunderfall/PROMPT.md) · 技术：原生 JavaScript、Canvas 2D、Web Audio。
  - 预览：![雷霆战机实机画面：战机在熔核工厂上空躲避敌方火力，旁边显示武器配置与战斗操作。](assets/screenshots/thunderfall/gameplay.jpg)

- **[IRON BASTION / 钢铁防线](https://iron-bastion.zecoba.workers.dev/)** — 在六片战区驾驶 3D 坦克，抵御敌军波次并守护信标；可破坏砖墙，并使用战术冲刺与电磁脉冲。
  - 作者: [chat01.ai](https://linux.do/u/bandaot)
  - 平台: 支持 WebGL 2 的浏览器，中文界面；操作手册提供键鼠和触屏操作。已确认可无需登录或付费进入战斗。
  - GPT-6 Astra: GPT-6 Astra 使用情况及参与范围待作者确认。
  - 预览: ![IRON BASTION / 钢铁防线 — 实机画面](assets/screenshots/iron-bastion/gameplay.jpg)

- **[Stick Fighter](https://stick-fighter-production.up.railway.app/)** — 仍在开发中的火柴人格斗游戏，包含拳脚连招、上勾拳、飞镖和格挡；提供电脑陪练及在线、好友模式入口。
  - 作者: [Dwayne](https://x.com/CtrlAltDwayne)
  - 平台: 桌面浏览器，键盘操作；无需登录即可进入电脑陪练，在线多人及手柄支持未独立测试。
  - GPT-6 Astra: [X](https://x.com/CtrlAltDwayne/status/2097499157967818780) — 作者明确表示使用 GPT-6 Astra 制作这款多人格斗游戏，并说明作品仍在开发中。
  - 预览: ![Stick Fighter — 实机画面](assets/screenshots/stick-fighter/gameplay.jpg)

- **[Gogh Strike · Paint Clash](https://gogh-strike.surge.sh/)** — 梵高画作风格的第一人称颜料对战，包含六位艺术家、专属武器及率先获得 20 分的赛制。
  - 作者: [Peter Gostev](https://x.com/petergostev)
  - 平台: 桌面浏览器；已无需登录或付费打开，未测试移动端。
  - GPT-6 Astra: [X](https://x.com/petergostev/status/2096015315209449578) — 作者说明使用 Astra 参与本项目开发。 [核验记录（英文）](assets/screenshots/gogh-strike/SOURCE.md).
  - 预览: ![Gogh Strike · Paint Clash — 实机画面](assets/screenshots/gogh-strike/gameplay.jpg)

- **[ASTEROIDS · Deepfield](https://asteroids-deepfield-cockpit.dan200200.chatgpt.site/)** — 驾驶小行星射击座舱，使用四向摄像头、雷达、双炮与惯性飞行。
  - 作者: [Eyes Wide Open](https://x.com/DantesClown)
  - 平台: 桌面浏览器；已无需登录或付费打开，未测试移动端。
  - GPT-6 Astra: [X](https://x.com/DantesClown/status/2096085439052452064) — 作者说明使用 Astra 参与本项目开发。 [核验记录（英文）](assets/screenshots/asteroids-deepfield/SOURCE.md).
  - 预览: ![ASTEROIDS · Deepfield — 实机画面](assets/screenshots/asteroids-deepfield/gameplay.jpg)

- **[BLACKWATER · Silent Harbor](https://blackwater-roan.vercel.app/)** — 潜入雨夜货运港口的战术 FPS，包含精细步枪、战斗 HUD 和九名敌人。
  - 作者: [hiraeth](https://x.com/WoahWurdz)
  - 平台: 桌面浏览器；已无需登录或付费打开，未测试移动端。
  - GPT-6 Astra: [X](https://x.com/WoahWurdz/status/2095958882732355908) — 作者说明使用 Astra 参与本项目开发。 [核验记录（英文）](assets/screenshots/blackwater/SOURCE.md).
  - 开发资料: [GitHub](https://github.com/Hiraeth010/blackwater)
  - 预览: ![BLACKWATER · Silent Harbor](assets/screenshots/blackwater/gameplay.jpg)

- **[Cinderfall · Fire, Shadow & Steel](https://rogue-omega.vercel.app/)** — 四位英雄的奇幻对决竞技场，包含六项职业技能和单人 AI 对战，也提供在线房间。
  - 作者: [JUMPERZ](https://x.com/jumperz)
  - 平台: 桌面浏览器；已无需登录或付费打开，未测试移动端。
  - GPT-6 Astra: [X](https://x.com/jumperz/status/2096600055301984738) — 作者说明使用 Astra 参与本项目开发。 [核验记录（英文）](assets/screenshots/cinderfall/SOURCE.md).
  - 预览: ![Cinderfall · Fire, Shadow & Steel](assets/screenshots/cinderfall/gameplay.jpg)

- **[Oz Breakdance](https://satriodewantono.com/breakdance/)** — 拖动布娃娃舞者的手脚和头部命中对应目标，获得分数并延长霹雳舞回合时间。
  - 作者: [Satrio](https://x.com/satrio_d)
  - 平台: 桌面浏览器，鼠标操作；已无需登录开始计分回合。
  - GPT-6 Astra: [X](https://x.com/satrio_d/status/2096022866097758500) — 作者说明 Astra 改进了已有的霹雳舞游戏及其视觉呈现。 [核验记录](assets/screenshots/breakdance/SOURCE.md).
  - 预览: ![限时霹雳舞场地中的布娃娃舞者、脚部目标与计分界面。](assets/screenshots/breakdance/gameplay.jpg)

- **[Astral War](https://astralwar.io/)** — 二战题材浏览器 FPS，可选择士兵或僵尸外观、调整武器配置，并提供机器人训练与大厅模式。
  - 作者: [Rishi](https://x.com/0xRishi)
  - 平台: 桌面浏览器，键鼠操作；已无需登录进入机器人训练，未验证多人联机和手柄支持。
  - GPT-6 Astra: [X](https://x.com/0xRishi/status/2096079660605997264) — Rishi 说明使用 Astra、Three.js、Meshy 与 ElevenLabs 制作 Astral War；当前网站另有 Vesper 署名，详见核验记录。 [核验记录](assets/screenshots/astral-war/SOURCE.md).
  - 预览: ![Astral War 运行中的武器视角与战场操作界面。](assets/screenshots/astral-war/gameplay.jpg)

- **[FLOP CLUB](https://bubucn.com/ai-model-evals/flop-club/game/index.html)** — 从三种高度的跳台起跳，完成翻转和转体，对准漂浮圆环入水，挑战更高评分。
  - 作者: [BubuAi](https://x.com/BubuStd)
  - 平台: 浏览器；独立游戏页无需登录或下载，2026-09-09 已开始跳水回合；支持键盘，说明提供触屏操作。
  - GPT-6 Astra: [X](https://x.com/BubuStd/status/2096402783805354091) — 作者说明使用 Astra Pro 与 Three.js，通过一条提示词制作。 [核验记录](assets/screenshots/flop-club/SOURCE.md).
  - 开发资料: [作品介绍](https://bubucn.com/zh/ai-model-evals/flop-club)
  - 预览: ![跳水者、高台、水面目标圆环与入水操作界面。](assets/screenshots/flop-club/gameplay.jpg)

- **[Vector Dive — Beyond the Signal](https://vector-dive.openai.chatgpt.site/)** — 驾驶飞行器穿越逐圈加速的霓虹线框赛道，利用加速与相位移动坚持更久。
  - 作者: [Thomas Ricouard](https://x.com/Dimillian)
  - 平台: 桌面浏览器；已无需登录开始计分飞行，WASD 飞行、空格加速、Shift 相位移动。
  - GPT-6 Astra: [X](https://x.com/Dimillian/status/2097188900888322323) — 作者说明 Astra 根据霓虹、合成器波与线框视觉要求和概念图完成游戏及音乐。 [核验记录](assets/screenshots/vector-dive/SOURCE.md).
  - 预览: ![Vector Dive 的霓虹飞行赛道、玩家飞船与状态界面。](assets/screenshots/vector-dive/gameplay.jpg)

### 解谜与益智

逻辑谜题、物理解谜、文字游戏与巧妙的小机关。

- **[瓜体实验室](https://melon-game.jack-514.chatgpt.site/)** — 把半流体水果的形变与碰撞融入西瓜合成玩法。
  - 作者：[Ayi1337](https://github.com/Ayi1337)
  - 平台：现代浏览器；作者另提供可下载后直接打开的单文件版本。
  - GPT-6 Astra：[作者的 One Shot 测试与原始 Prompt](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/README.md)。
  - 开发资料：[源码](https://github.com/Ayi1337/gpt6-astra-one-shot-games/tree/main/melon-lab/src) · [单文件 HTML](https://github.com/Ayi1337/gpt6-astra-one-shot-games/blob/main/melon-lab/%E7%93%9C%E4%BD%93%E5%AE%9E%E9%AA%8C%E5%AE%A4.html)
  - 预览：![瓜体实验室运行画面：合成容器中的软体水果与物理模式控制。](assets/screenshots/melon-lab/gameplay.jpg)

- **[Q弹消消乐](https://qbxxl.0nz.de/)** — 点击消除至少三颗相连的同色泡泡，大组生成爆弹和彩虹，提供解压、闯关和限时模式。
  - 作者: zding
  - 平台: 浏览器，中文界面；实测无需登录或付费即可进入。
  - GPT-6 Astra: GPT-6 Astra 使用情况及参与范围待作者确认。
  - 预览: ![Q弹消消乐 — 实机画面](assets/screenshots/qbxxl/gameplay.jpg)

- **[榫境 / Sunjing Puzzles](https://sunjing-puzzles.vercel.app)** — 在 3D 木作展台拆解六构件互锁木锁，挑战两种华容道布局，支持提示与移动撤销。
  - 作者：[MartinDelophy](https://github.com/MartinDelophy)（项目发起人及提交者）。
  - 平台：支持 WebGL 2 的现代浏览器，中文界面，键鼠与触控操作；免费，无需登录或 API Key，进度仅保存在当前浏览器。
  - 模型参与：[制作记录](works/sunjing-puzzles/CREATION.md) — 通过 Codex 多轮完成玩法、程序化 3D 画面、规则、求解器与测试；GPT-6 Astra 的具体使用归因待作者确认，本次为草稿投稿。
  - 开发资料：[源码与运行说明](works/sunjing-puzzles/README.md) · [需求记录](works/sunjing-puzzles/PROMPTS.md) · 技术：React、Vinext/Vite、Three.js。
  - 预览：![榫境实机画面：深绿色 3D 展台上的六构件木锁，旁边是木块编号与抽出操作。](assets/screenshots/sunjing-puzzles/gameplay.jpg)

- **[CityMaker / 城市营造](https://citymaker.0to1app.com)** — 在 4×4 街区上玩 2048：合并相同建筑，沿十一级建筑阶梯从传统民居成长为城市天际线，收录十二座城市，视角可按 45° 逐级旋转。
  - 作者：[Derek Wang](https://github.com/derek-wangpch)
  - 平台：支持 WebGL 的桌面与移动浏览器；提供英文、简体中文与繁体中文界面。免费，无需登录或 API Key；各城市进度分别保存在当前浏览器，并可添加到 iOS 主屏幕。
  - GPT-6 Astra：[制作记录](https://github.com/derek-wangpch/OpenCityMaker/blob/master/docs/CREATION.md) — 作者说明 132 个建筑模型的程序化几何均由 GPT-6 Astra 生成，流程为多视角资料检索、先定轮廓体块再加细节、并对照参考图逐轮校验；并非一次性生成测试。
  - 开发资料：[源码与运行说明](https://github.com/derek-wangpch/OpenCityMaker) · [验收记录](https://github.com/derek-wangpch/OpenCityMaker/blob/master/QA.md) · 技术：React、TypeScript、Vite 与 Three.js；132 个建筑模型均为原创程序化几何。
  - 预览：![CityMaker 实机画面：4×4 棋盘上的低多边形香港建筑，旁边是分数、城市列表与旋转控制。](assets/screenshots/citymaker/gameplay.png)

### 策略与模拟

塔防、卡牌策略、经营建造与模拟沙盒。

- **[Dwellcraft · 住进想象](https://dwellcraft.vercel.app/)** — 从家具库拖入物件，自由装修三个住宅，调整材质与光照，再以第一人称走进自己的设计；支持本机存档和自有 GLB 模型导入。
  - 作者：[Ryan-fm](https://github.com/Ryan-fm)。
  - 平台：支持 WebGL 的现代桌面浏览器，中英文界面；免费，无需登录或 API Key。作品和导入模型保存在当前浏览器。已接入 WebXR 操作，Quest 真机验收仍待完成。
  - 模型参与：[开发记录](https://github.com/Ryan-fm/Dwellcraft/blob/main/docs/DEVELOPMENT.md) — 通过多轮 Codex 协作完成场景规划、代码、家具摆放、材质、双语界面与测试；具体 GPT-6 Astra 归因等待创作者确认。
  - 开发资料：[源码与运行说明](https://github.com/Ryan-fm/Dwellcraft) · [设计计划](https://github.com/Ryan-fm/Dwellcraft/blob/main/docs/scene-design/development-plan.md) · [素材许可](https://github.com/Ryan-fm/Dwellcraft/blob/main/docs/ASSETS.md) · 技术：React、TypeScript、Babylon.js、Vinext/Vite。
  - 预览：![Dwellcraft 实际装修工作台：已布置家具的 3D 户型、可拖放家具库，以及材质和光照设置。](https://raw.githubusercontent.com/Ryan-fm/Dwellcraft/main/docs/screenshots/editor-en.png)

- **[Little Kingdom Chess / 작은 왕국 체스](https://little-kingdom-chess.echo3042.chatgpt.site/)** — 在可旋转的 3D 棋盘上与电脑下国际象棋，包含微缩角色、棋谱与悔棋。
  - 作者: [에코_eco](https://x.com/echo3042)
  - 平台: 桌面浏览器；已无需登录或付费打开，未测试移动端。
  - GPT-6 Astra: [X](https://x.com/echo3042/status/2096123409029886250) — 作者说明使用 Astra 参与本项目开发。 [核验记录（英文）](assets/screenshots/little-kingdom-chess/SOURCE.md).
  - 预览: ![Little Kingdom Chess / 작은 왕국 체스 — 实机画面](assets/screenshots/little-kingdom-chess/gameplay.jpg)

- **[JUNK RUN](https://junk-run.pages.dev/)** — 用废料零件组装无动力小车，再依靠重力冲下山坡；从第一人称工坊开始。
  - 作者: [TheLabGuy](https://x.com/hermesailab)
  - 平台: 桌面浏览器；已无需登录或付费打开，未测试移动端。
  - GPT-6 Astra: [X](https://x.com/hermesailab/status/2097508053901840850) — 作者说明使用 Astra 参与本项目开发。 [核验记录（英文）](assets/screenshots/junk-run/SOURCE.md).
  - 预览: ![JUNK RUN — 实机画面](assets/screenshots/junk-run/gameplay.jpg)

- **[Spy or Lie](https://spyorlie.com/)** — 与电脑对战的六边形策略桌游：放置隐藏身份的特工，通过虚张声势和包围敌方群组触发连锁占领。
  - 作者: [Nate Lorenzen](https://x.com/NateLorenzen)
  - 平台: 浏览器，英文界面；已无需登录或付费完成玩家落子及电脑回应。
  - GPT-6 Astra: [X](https://x.com/NateLorenzen/status/2097504974683152559) — 作者称 Astra 将其设计的游戏一次生成了可玩演示；这是作者陈述，未独立审计开发过程。
  - 预览: ![Spy or Lie — 实机画面](assets/screenshots/spy-or-lie/gameplay.jpg)

- **[三分天下 · 百将风云 / Three Kingdoms: Hundred Heroes](https://sanguo-jiangshan.vercel.app)** — 选择魏、蜀、吴，在 15 城地图上经营金粮、指挥拥有独立 AI 生成头像的 108 名武将，以回合制征战对抗 AI 势力，争夺天下统一。
  - 作者：[MartinDelophy](https://github.com/MartinDelophy)（项目发起人及提交者）。
  - 平台：现代浏览器，中文界面，鼠标与触控操作；免费，无需登录或 API Key，本地存档支持导入导出。
  - GPT-6 Astra：[创作记录](works/three-kingdoms/CREATION.md) — 作者确认使用，通过 Codex 多轮协作完成规则、界面、AI、平衡与测试；地形和武将头像另由图像生成工具制作。
  - 开发资料：[源码与运行说明](works/three-kingdoms/README.md) · [需求记录](works/three-kingdoms/PROMPTS.md) · 技术：React、TypeScript、Vinext/Vite。
  - 预览：![三分天下实机画面：水墨城池地图、资源操作与武将头像。](assets/screenshots/three-kingdoms/gameplay.jpg)

- **[最后的灯塔 / Last Beacon](https://last-beacon.loupengju.cc)** — 在微缩海岛上连接电网、布置并升级炮塔，以有限电力抵挡十波机械生物和最终 Boss，守住灯塔。
  - 作者：[stackloomdev](https://github.com/stackloomdev)
  - 平台：现代桌面与手机浏览器，中英双语；免费，无需登录或 API Key；可选音效需要 Web Audio。
  - GPT-6 Astra：[作者的创作记录与模型参与说明](https://github.com/stackloomdev/last-beacon/blob/main/docs/CREATION.md) — 参与玩法设计、代码、程序化美术和测试；多轮迭代，非 one-shot 测试。
  - 开发资料：[源码与运行说明](https://github.com/stackloomdev/last-beacon) · [需求与迭代记录](https://github.com/stackloomdev/last-beacon/blob/main/docs/PROMPT.md) · 技术：JavaScript、Canvas 2D、Web Audio。
  - 预览：![最后的灯塔中文实机画面：连接电网的炮塔与寒潮塔守卫海岛，抵挡沿海岸路线进攻的敌人。](assets/screenshots/last-beacon/gameplay.png)

- **[缺氧 · 小小星球](https://hypoxia-6tu.pages.dev/)** — 地下殖民地生存模拟：指挥三名复制人挖掘和建造，管理氧气、食物及电力，让基地持续运转。
  - 作者: dudu
  - 平台: 支持 Canvas 的浏览器；中文界面，鼠标和键盘操作；实测无需登录或付费即可进入。
  - GPT-6 Astra: [Issue #28](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/28) — 投稿者说明由 GPT-6 Astra 全程开发；未独立核验。
  - 预览: ![缺氧 · 小小星球 — 实机画面](assets/screenshots/hypoxia/gameplay.jpg)

- **[魔塔 · 永夜之阶](https://ai.ywnet.xyz/work/mt.html)** — 十五层像素高塔冒险，围绕攻防计算、有限资源和三色钥匙规划路线、逐层探索。
  - 作者: yw
  - 平台: 浏览器，中文界面；实测无需登录或付费即可进入。
  - GPT-6 Astra: [Issue #38](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/38) — 投稿者在 GPT-6 Astra 参与说明中提供了开发提示词；具体模型参与情况未独立核验。
  - 预览: ![魔塔 · 永夜之阶 — 实机画面](assets/screenshots/magic-tower/gameplay.jpg)

- **[永恒荒野](https://starve.pages.dev/)** — 投稿中的《饥荒》复刻网页生存与策略游戏；截图展示了森林探索、物资收集、背包，以及生命、饱食与理智状态。
  - 作者：dudu
  - 平台：浏览器；截图显示中文界面与键盘操作。投稿未说明付费及登录要求，试玩尚未独立核验。
  - GPT-6 Astra：[投稿者说明](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/26) — 投稿者称由 GPT-6 Astra 全程开发。
  - 开发资料：未提供公开源码或独立开发记录。
  - 预览：![Issue #26 提供的永恒荒野画面：角色站在森林营火旁，界面显示背包、生存状态和小地图。](assets/screenshots/eternal-wilderness/gameplay.jpg)

- **[潜水员戴夫（复刻）](https://dave-2cm.pages.dev/)** — 《潜水员戴夫》的浏览器复刻，将水下鱼叉捕鱼、寿司店经营与海岛种植结合在一起。
  - 作者：dudu
  - 平台：浏览器，中文界面，支持鼠标和键盘操作；实测无需登录或付费即可进入并开始潜水。
  - GPT-6 Astra：[投稿者说明](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/41) — 投稿者称由 GPT-6 Astra 全程开发。
  - 开发资料：未提供公开源码或独立开发记录。
  - 预览：![潜水员戴夫复刻实机画面：潜水员穿行于鱼群之间，界面显示氧气、深度和收获背包。](assets/screenshots/dave-the-diver/gameplay.jpg)

- **[No Moat](https://no-moat.petergyang.chatgpt.site/)** — 创业题材的肉鸽卡牌游戏：招募团队，打出卡牌应对抄袭者、程序错误和云服务账单。
  - 作者: [Peter Yang](https://x.com/petergyang)
  - 平台: 桌面浏览器；已无需登录或付费打开，未测试移动端。
  - GPT-6 Astra: [X](https://x.com/petergyang/status/2096297378584375672) — 作者说明使用 Astra 参与本项目开发。 [核验记录（英文）](assets/screenshots/no-moat/SOURCE.md).
  - 预览: ![No Moat](assets/screenshots/no-moat/gameplay.jpg)

- **[The Free Game](https://vale-dos-vinhedos.lucas579686.chatgpt.site/)** — 修路、培养工人、搭建生产链，在细致的 3D 中世纪村庄里经营建设。
  - 作者: [Lucas Marques, from Shiva](https://x.com/LucasMarquesSv)
  - 平台: 桌面浏览器；已无需登录或付费打开，未测试移动端。
  - GPT-6 Astra: [X](https://x.com/LucasMarquesSv/status/2096772160404504583) — 作者说明使用 Astra 参与本项目开发。 [核验记录（英文）](assets/screenshots/the-free-game/SOURCE.md).
  - 开发资料: [GitHub](https://github.com/LucasMarquesShiva/the-free-game)
  - 预览: ![The Free Game](assets/screenshots/the-free-game/gameplay.jpg)

- **[AGI of Empires — The Compute Wars](https://agiofempires.com/)** — 收集资金与 GPU，建造数据中心和军队，抢先完成 ASI 研究或摧毁其他 AI 实验室的总部。
  - 作者: [timour kosters](https://x.com/timourxyz)
  - 平台: 桌面浏览器，免费讽刺题材即时战略游戏；已无需登录开始电脑对局，并观察到资源采集。
  - GPT-6 Astra: [X](https://x.com/timourxyz/status/2096662786692776293) — 作者说明与 Astra 用两天时间开发了这款受帝国时代启发的游戏。 [核验记录](assets/screenshots/agi-of-empires/SOURCE.md).
  - 预览: ![AGI of Empires 的即时战略战场、资源统计与总部。](assets/screenshots/agi-of-empires/gameplay.jpg)

- **[Atlas Go](https://atlas-go.borisxp.chatgpt.site/)** — 在城市街道网络和特殊图形棋盘上对弈围棋，支持本地轮流操作并提供好友对局入口。
  - 作者: [Boris Power](https://x.com/BorisMPower)
  - 平台: 浏览器；本地棋盘无需登录即可打开，未验证在线好友对局。
  - GPT-6 Astra: [X](https://x.com/BorisMPower/status/2096784808399843582) — 作者说明这款支持任意图棋盘的多人围棋游戏由 Astra 根据一条提示词生成。 [核验记录](assets/screenshots/atlas-go/SOURCE.md).
  - 预览: ![Atlas Go 蜂窝图棋盘上的黑白棋子。](assets/screenshots/atlas-go/gameplay.jpg)

- **[Ironwood — The Art of Industry](https://ironwood.sparkles.dev/)** — 采集原料，为机器供能并连接传送带，将林间空地发展成持续运转的工厂。
  - 作者: [Dan](https://x.com/aidaniil)
  - 平台: 桌面浏览器；可免登录进入游客教程，保存进度需要登录；未独立验证多人联机。
  - GPT-6 Astra: [X](https://x.com/aidaniil/status/2096426970930106530) — 作者说明与弟弟使用 Astra、Blender MCP 和 Cloudflare Durable Objects 制作，灵感来自幸福工厂与围攻。 [核验记录](assets/screenshots/ironwood/SOURCE.md).
  - 预览: ![Ironwood 的工厂机器、传送带和资源管理教程。](assets/screenshots/ironwood/gameplay.jpg)

- **[前线指令 / Frontline Command](https://fluffy-biscotti-dad318.netlify.app/)** — 在现代战争题材的即时战略游戏中建设基地、争夺资源区，指挥坦克、步兵、飞机与无人机对抗电脑，并通过间谍和情报系统获取优势。
  - 作者: [嘟啊嘟](https://x.com/HDLhN783wtLkpPR)
  - 平台: 桌面浏览器，中文界面，鼠标与键盘操作；已开始单机对局，无需登录、付费或安装。
  - GPT-6 Astra: [X](https://x.com/HDLhN783wtLkpPR/status/2097321360641122393) — 作者在所链接的帖子中说明使用“GPT Astra”制作这款即时战略游戏；未注明具体模型版本和详细开发流程。
  - 相关资料: [投稿](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/66) · [核验记录（英文）](assets/screenshots/frontline-command/SOURCE.md)
  - 预览: ![前线指令实机画面：基地、三辆已选坦克与发电站放置操作；v0.8，拍摄于 2026-09-09。](assets/screenshots/frontline-command/gameplay.jpg)

### RPG 与冒险

角色扮演、探索、叙事冒险与互动故事。

- **[Lumbridge / Elderwood Realms](https://elderwood-realms.rohannvarma.chatgpt.site/)** — 复古多人冒险，包含共享世界、技能、采集和战斗，可使用游客身份进入。
  - 作者: [Rohan Varma](https://x.com/TheRohanVarma)
  - 平台: 桌面浏览器；已无需登录或付费打开，未测试移动端。
  - GPT-6 Astra: [X](https://x.com/TheRohanVarma/status/2096744577332068549) — 作者说明使用 Astra 参与本项目开发。 [核验记录（英文）](assets/screenshots/lumbridge/SOURCE.md).
  - 预览: ![Lumbridge / Elderwood Realms — 实机画面](assets/screenshots/lumbridge/gameplay.jpg)

- **[Silent Meridian / 静默子午线](https://silent-meridian.stackloom.org/)** — 一款包含四章、十三道谜题的氛围叙事解谜游戏：在“现在”与“回声”间对照线索、收集证据，解开停在 00:17 的观测站之谜。
  - 作者: [stackloomdev](https://github.com/stackloomdev)
  - 平台: 桌面与手机浏览器；中英文。可直接在线免费游玩，无需登录、安装或 API Key；可选 WebGL 视效，不支持时保留原始插画。
  - GPT-6 Astra: [开发记录](https://github.com/stackloomdev/silent-meridian/blob/main/docs/CREATION.md) — 在 Codex 中多轮协作，参与故事、谜题、中英文文案、代码、程序化 3D 视效及测试。
  - 开发资料: [源码与运行说明](https://github.com/stackloomdev/silent-meridian) · [美术来源](https://github.com/stackloomdev/silent-meridian/blob/main/docs/ART.md) · 技术: JavaScript, WebGL, Web Audio.
  - 预览: ![静默子午线实机画面：观测穹顶中的立体青铜机关、线索标记、现在与回声切换按钮和调查手记。](assets/screenshots/silent-meridian/gameplay.png)

- **[热血归来 · 八荒幻世 / Mir176 Dragon Warrior](https://mir176-dragon-warrior.geekcatxx.chatgpt.site/)** — 传奇风格动作 RPG，包含战士、法师、道士三职业、装备、副本战斗与自动战斗。
  - 作者: [知识猫AI实验室](https://x.com/GeekCatX)
  - 平台: 桌面浏览器；已无需登录或付费打开，未测试移动端。
  - GPT-6 Astra: [X](https://x.com/GeekCatX/status/2097530887558865115) — 作者说明使用 Astra 参与本项目开发。 [核验记录（英文）](assets/screenshots/mir176/SOURCE.md).
  - 预览: ![热血归来 · 八荒幻世 / Mir176 Dragon Warrior](assets/screenshots/mir176/gameplay.jpg)

- **[Zork · The Great Underground Empire](https://zork-underground-empire.netlify.app/)** — Zork 的非官方 3D 改编，以第一人称探索地下世界，结合谜题、战斗与冒险日志。
  - 作者: [Ethan Mollick](https://x.com/emollick)
  - 平台: 桌面浏览器；已无需登录或付费打开，未测试移动端。
  - GPT-6 Astra: [X](https://x.com/emollick/status/2096047660662722620) — 作者说明使用 Astra 参与本项目开发。 [核验记录（英文）](assets/screenshots/zork/SOURCE.md).
  - 预览: ![Zork · The Great Underground Empire](assets/screenshots/zork/gameplay.jpg)

- **[The Simpsons: Hit & Run — Browser Recreation](https://vheissu.github.io/hit-and-run-web/)** — 在非官方浏览器重制版中步行或驾车探索春田镇，体验任务、街道交通与警察追逐。
  - 作者: [Dwayne](https://x.com/CtrlAltDwayne)
  - 平台: 桌面浏览器；首次需加载较多素材，已无需登录进入首个任务，未验证完整战役。
  - GPT-6 Astra: [X](https://x.com/CtrlAltDwayne/status/2096872309936287887) — 作者说明使用 GPT-6 Astra 重建网页版；仓库也注明 Claude 协助过加载工作。原游戏素材仍归各自权利人所有。 [核验记录](assets/screenshots/hit-and-run-web/SOURCE.md).
  - 开发资料: [源码与运行说明](https://github.com/Vheissu/hit-and-run-web)
  - 预览: ![Homer 位于春田镇，画面显示首个任务目标与小地图。](assets/screenshots/hit-and-run-web/gameplay.jpg)

- **[Where the Wind Wanders](https://app.usecrayon.ai/play/a9a3c165-74b3-4ff6-9588-ad97f829ddb5)** — 在阳光下的 2.5D 山谷中沿小径漫游，寻找三封风之信，体验轻松的探索冒险。
  - 作者: [Tushar](https://x.com/TusharXo)
  - 平台: 浏览器游戏，托管于 Crayon；已检查公开作品页与嵌入播放器。
  - GPT-6 Astra: [X](https://x.com/TusharXo/status/2096037482739683574) — Tushar 说明 Astra 参与路径与素材生成，后续发布帖确认使用 Astra、Three.js 与 Crayon 上线可玩版本。 [核验记录](assets/screenshots/crayon-adventure/SOURCE.md).
  - 开发资料: [作者发布帖](https://x.com/TusharXo/status/2096741535891251261)
  - 预览: ![角色探索花草山谷，画面显示风之信收集目标。](assets/screenshots/crayon-adventure/gameplay.jpg)

- **[ALIBI — The Last Light](https://alibi-blackthorn-manor.vercel.app/)** — 在点击式谋杀谜案中调查 Blackthorn 庄园，检查场景并追踪线索，寻找凶手。
  - 作者: [Christos Antonopoulos](https://x.com/Christos_antono)
  - 平台: 浏览器；已无需登录打开可交互的庄园入口，未完整验证后续生成场景。
  - GPT-6 Astra: [X](https://x.com/Christos_antono/status/2096435122669297892) — 作者说明这款生成式侦探游戏共同使用了 GPT Astra 与 H3 Max。 [核验记录](assets/screenshots/alibi-blackthorn-manor/SOURCE.md).
  - 预览: ![庄园入口的可点击大门与调查剧情文字。](assets/screenshots/alibi-blackthorn-manor/gameplay.jpg)

- **[Skyward: The Gathering](https://edge-city-skyward-quests.vercel.app/)** — 探索浮空群岛，在社区之间跳跃和滑翔，并完成居民交付的任务。
  - 作者: [timour kosters](https://x.com/timourxyz)
  - 平台: 桌面浏览器，键鼠操作；已检查任务版页面与操作说明。
  - GPT-6 Astra: [X](https://x.com/timourxyz/status/2096379521926840339) — 作者说明 Astra 制作了带 NPC 和任务的 3D 游戏，群岛灵感来自 Edge City 到访过的地区。 [核验记录](assets/screenshots/skyward-gathering/SOURCE.md).
  - 预览: ![Skyward 的浮空群岛总览与探索、日志操作。](assets/screenshots/skyward-gathering/gameplay.jpg)

- **[Anna & Leo · The Starstone Adventure](https://anna-leo-starstone.vercel.app/)** — 在 Anna 的音乐魔法与 Leo 的超能力之间切换，唤醒旋律花朵并探索奇迹花园。
  - 作者: [Dharma Utomo](https://x.com/dharmautomo)
  - 平台: 浏览器；已无需登录开始首个任务，WASD 移动、空格跳跃、E 使用能力、Tab 切换角色。
  - GPT-6 Astra: [X](https://x.com/dharmautomo/status/2096573649235091967) — 作者说明 GPT-6 Astra 协助制作了这款 3D 冒险，并分享孩子试玩的视频。 [核验记录](assets/screenshots/anna-leo-starstone/SOURCE.md).
  - 预览: ![Anna 与 Leo 的 3D 冒险世界和任务界面。](assets/screenshots/anna-leo-starstone/gameplay.jpg)

### 平台跳跃与竞速

跑酷、平台闯关、赛车，以及考验路线与操作的游戏。

- **[STORM RACE](https://storm-race.vercel.app/)** — 迷你四驱车竞速，包含零件拆解车库、加速和晴天、雨天、暴风雨赛道变化。
  - 作者: [BubuAi](https://x.com/BubuStd)
  - 平台: 桌面浏览器；已无需登录或付费打开，未测试移动端。
  - GPT-6 Astra: [X](https://x.com/BubuStd/status/2096587056755638553) — 作者说明使用 Astra 参与本项目开发。 [核验记录（英文）](assets/screenshots/storm-race/SOURCE.md).
  - 预览: ![STORM RACE — 实机画面](assets/screenshots/storm-race/gameplay.jpg)

- **[FANG STARLIGHT RUN](https://fang-starlight-run.yosshy666.chatgpt.site/)** — 操控小狼穿越三个星夜横版关卡，利用二段跳与冲刺收集金币和星之碎片。
  - 作者: [FANGプラス最強伝説🐺](https://x.com/FANGsaikyou)
  - 平台: 桌面浏览器；已无需登录或付费打开，未测试移动端。
  - GPT-6 Astra: [X](https://x.com/FANGsaikyou/status/2096192022596194588) — 作者说明使用 Astra 参与本项目开发。 [核验记录（英文）](assets/screenshots/fang-starlight-run/SOURCE.md).
  - 预览: ![FANG STARLIGHT RUN — 实机画面](assets/screenshots/fang-starlight-run/gameplay.jpg)

- **[Blue Bajaj Rally](https://bajaj.guzo.tech/)** — 驾驶三轮 Bajaj 在埃塞俄比亚风格的高地赛道上，与五名电脑车手竞速或挑战计时。
  - 作者: [Guzo Technologies](https://x.com/guzotech)
  - 平台: 桌面浏览器；已无需登录或付费打开，未测试移动端。
  - GPT-6 Astra: [X](https://x.com/guzotech/status/2096209787864088638) — 作者说明使用 Astra 参与本项目开发。 [核验记录（英文）](assets/screenshots/blue-bajaj-rally/SOURCE.md).
  - 预览: ![Blue Bajaj Rally — 实机画面](assets/screenshots/blue-bajaj-rally/gameplay.jpg)

- **[APEX CLUB — Bay Kart Grand Prix](https://apex-club-racing.vercel.app)** — 在海湾赛道参加三圈卡丁车竞速，选择六款赛车，利用漂移蓄力与出弯小喷争夺个人名次或 4v4 队伍积分。
  - 作者：Ryan
  - 平台：支持 WebGL 2 的桌面浏览器，键盘操作；免费，无需登录或 API Key；本地 HTTP 服务或静态网站启动，Three.js 已随源码提供。组队为 1 位玩家与 7 位 AI 的本地竞赛。
  - 模型参与：[开发记录](works/apex-club/CREATION.md) — 通过 Codex 多轮迭代玩法、代码、程序化美术与测试；GPT-6 Astra 归因待创作者确认。
  - 开发资料：[源码与运行说明](works/apex-club/README.md) · [需求与迭代记录](works/apex-club/PROMPTS.md) · [GPT 对话分享](https://chatgpt.com/s/cx_6a9e84c13c9c8191bcb7ad0801288adc) · 技术：JavaScript、Three.js。
  - 预览：![APEX CLUB 海湾赛道实机画面：卡丁车组队竞速，显示圈数、队伍积分和实时小地图。](assets/screenshots/apex-club/gameplay.png)

- **[PELICAN PEDAL / 鹈鹕踏浪](https://pelican-pedal.zecoba.workers.dev/)** — 让鹈鹕骑着自行车穿行于不断变化的 3D 海岸，在三条车道间换道、跳跃与低头躲避障碍，连续收集小鱼获得连击，使用护盾、磁铁和六秒无敌冲刺。
  - 作者：[chat01.ai](https://chat01.ai)（投稿中注明的作者）。
  - 平台：桌面与手机浏览器，支持键盘和触控；据投稿说明，免费且无需登录。试玩尚未独立核验。
  - GPT-6 Astra：[Issue #10](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/10) — 投稿者称由一句提示词生成；所附开发记录尚未独立核验。
  - 开发资料：[分享的开发记录](https://chat01.ai/zh/chat/01M1VJ5K55803V2YK3T2NKTX33)
  - 预览：![PELICAN PEDAL 标题画面：鹈鹕骑自行车行驶在海边；截图由 Issue #10 提供。](https://github.com/user-attachments/assets/ec085afa-3c45-4de6-b03f-5c626f941546)

- **[狂飙赛车 · OVERDRIVE](https://gpt-kbsc.0nz.de/)** — 与五名 AI 对手进行 3D 赛车竞速，可选择车辆和赛道，提供计时、漂移及氮气加速。
  - 作者: zding
  - 平台: 浏览器，中文界面；实测无需登录或付费即可进入。
  - GPT-6 Astra: GPT-6 Astra 使用情况及参与范围待作者确认。
  - 预览: ![狂飙赛车 · OVERDRIVE — 实机画面](assets/screenshots/overdrive/gameplay.jpg)

- **[零界深潜 / ABYSS PROTOCOL](https://abyss-descent.zecoba.workers.dev/)** — 只靠左右移动，在 3D 深井中踩着移动、脆裂与相位平台不断下潜，躲避激光和锯刃，收集晶体与生存芯片。
  - 作者: [chat01.ai](https://linux.do/u/bandaot)
  - 平台: 桌面浏览器，中文界面，A/D 或左右方向键操作；已验证无需登录或付费即可开始，移动端未测试。
  - 模型参与：[Chat01](https://chat01.ai/en/chat/01M221KFTPTBQV5ARQWJM7P86Y) — 分享记录标注 GPT-6 Pro，展示了游戏生成与多轮修改；页面未明确标注 GPT-6 Astra。
  - 开发资料：[HTML](https://files.chat01.ai/python-generations/9ab8f4f7-425f-4709-b741-7218d87122e6/abyss-descent.html) · [ZIP](https://files.chat01.ai/python-generations/9ab8f4f7-425f-4709-b741-7218d87122e6/abyss-descent-complete.zip)
  - 预览: ![零界深潜 / ABYSS PROTOCOL](assets/screenshots/abyss-protocol/gameplay.jpg)

- **[疾风赛道 / Kart Racing（跑跑卡丁车）](https://qwen3-8-test.vercel.app/)** — 通过漂移积攒氮气，在三圈竞速中使用道具争夺名次；当前游戏名为“疾风赛道”，提供 2–4 人联机入口。
  - 作者: [SteveZhang / jay6697117](https://github.com/jay6697117) · [X](https://x.com/stevezh10058543)
  - 平台: 浏览器，免费、无需登录；作者提示可能需要 VPN／代理。已验证单人启动，联机未实测。
  - GPT-6 Astra: [Issue #51](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/51) — 作者说明： 第一版使用 Qwen3.8 Max，第二版由 Astra 全面重构。
  - 预览: ![疾风赛道 / Kart Racing（跑跑卡丁车）](https://github.com/user-attachments/assets/015e0ca1-7032-4d0e-9391-ad3f40d84227)

- **[TIDAL RUSH — Paradise GP](https://tidal-rush-paradise-gp.skirano.chatgpt.site/)** — 在热带卡丁车赛道上漂移、使用道具，经过三圈比赛与七名对手争夺名次。
  - 作者: [Pietro Schirano](https://x.com/skirano)
  - 平台: 浏览器；已无需登录开始三圈比赛，提供键盘驾驶、漂移和道具操作，另有屏幕触控按钮。
  - GPT-6 Astra: [模型说明](https://openai.com/index/gpt-6-astra/) — OpenAI 的 Astra 发布页链接到这款卡丁车游戏，并署名 Pietro Schirano。用于发现和统计的 X 帖子是社区分享，并非作者原帖。 [核验记录](assets/screenshots/tidal-rush/SOURCE.md).
  - 开发资料: [X 分享](https://x.com/alexgetmancom/status/2095598460921614825)
  - 预览: ![Tidal Rush 的热带卡丁车赛道、名次与漂移操作。](assets/screenshots/tidal-rush/gameplay.jpg)

- **[LUNA — Crimson Requiem / 紅月のレクイエム](https://luna-crimson-requiem.ponsuke.chatgpt.site/)** — 在哥特像素关卡中跳跃前进，通过挥剑、踩踏或召唤攻击迎战敌人的短篇横版冒险。
  - 作者: [音羽ぽんすけ](https://x.com/ponsuke_otowa)
  - 平台: 浏览器，日文界面；键盘操作，作者说明支持手机，目前只有一个关卡。
  - GPT-6 Astra: [X](https://x.com/ponsuke_otowa/status/2096531744933425299) — 作者说明使用 Astra 开发约 25 分钟，并修正过一次行走方向；音乐另行注明来自 Suno。 [核验记录](assets/screenshots/luna-crimson-requiem/SOURCE.md).
  - 预览: ![LUNA 在红月下的哥特街道战斗，显示生命与召唤状态。](assets/screenshots/luna-crimson-requiem/gameplay.jpg)

- **[Strange Orbit](https://app.usecrayon.ai/play/47df78e2-1410-45d1-833c-196e1161c0b8)** — 骑着自行车沿行星环与宇航员对手竞速，收集星尘、跟随尾流并加速完成轨道杯。
  - 作者: [Crayon](https://x.com/usecrayon)
  - 平台: Crayon 浏览器游戏，提供键盘和触控操作说明；公开页面介绍竞速、计时与无限漫游模式。
  - GPT-6 Astra: [X](https://x.com/usecrayon/status/2097468975995302167) — Crayon 说明这款太空骑行游戏使用 GPT-6 Astra、Crayon Pro 与 Three.js 制作。 [核验记录](assets/screenshots/crayon-space-bike/SOURCE.md).
  - 预览: ![宇航员骑手在行星环上竞速，画面显示圈数、排名与星尘。](assets/screenshots/crayon-space-bike/gameplay.jpg)

- **[One More Vine — Into the Wild](https://onemorevine.bennash.dev/)** — 在四个丛林关卡中奔跑、跳跃和荡藤，收集宝藏、躲避鳄鱼并刷新通关时间。
  - 作者: [Ben Nash](https://x.com/bennash)
  - 平台: 浏览器，键盘和屏幕移动按钮；已无需登录加载首关与操作说明。
  - GPT-6 Astra: [X](https://x.com/bennash/status/2096282758930645170) — 作者明确说明这是一款使用 GPT-6 Astra 制作、受 Pitfall 启发的四关游戏。 [核验记录](assets/screenshots/one-more-vine/SOURCE.md).
  - 预览: ![带藤蔓、宝藏、深坑与鳄鱼的丛林平台跳跃关卡。](assets/screenshots/one-more-vine/gameplay.jpg)

- **[混合马里奥Ⅱ · 忍者龙剑传 × 坦克大战 / Mario Mix II](https://aha-xiaoq.github.io/games/mario-mix-2/play.html)** — 让《忍者龙剑传》的隼龙与《坦克大战》的坦克进入马里奥地下关卡 1-2：用隼龙横版跳跃、攀墙与战斗，用坦克俯视作战，也可选择“忍龙 → 坦克”双角色接力救回公主。
  - 作者: [在下_小Q（Aha-xiaoQ）](https://github.com/Aha-xiaoQ)
  - 平台: 桌面浏览器，中文界面，推荐键盘操作；免费，无需登录或安装。
  - GPT-6 Astra: [Issue #65](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/65) — 作者说明使用 GPT-6 Astra 反复开发、调试游戏代码与交互，并由自己提供玩法方向和持续反馈；不是一次提示生成。
  - 开发资料: [作品介绍](https://aha-xiaoq.github.io/games/mario-mix-2/) · [演示视频](https://www.bilibili.com/video/BV1erYt69EFP/) · [核验与图片来源（英文）](assets/screenshots/mario-mix-2/SOURCE.md)
  - 素材说明: 非官方同人作品；经典角色、图像和音乐的权利归各自权利人所有，具体素材说明见原游戏页面。
  - 预览: ![混合马里奥Ⅱ — 作者提供的视频封面，非实机截图。](https://aha-xiaoq.github.io/games/mario-mix-2/cover.jpg)
  - 截图: ![混合马里奥Ⅱ：坦克在 1-2 关入口开炮；运行版本 1.0，拍摄于 2026-09-09。](assets/screenshots/mario-mix-2/gameplay.jpg)

### 实验玩法与多人游戏

难以归类的新玩法、联机对战与合作体验。

- **[ASTRA Arcade](https://astra-arcade.antonioleivag.chatgpt.site/)** — 集山地拉力、滑雪、反重力竞速等六款浏览器游戏于一体的街机厅；按一个合集收录。
  - 作者: [Antonio Leiva](https://x.com/antonioleivag)
  - 平台: 桌面浏览器；已无需登录或付费打开，未测试移动端。
  - GPT-6 Astra: [X](https://x.com/antonioleivag/status/2096509898481651770) — 作者说明使用 Astra 参与本项目开发。 [核验记录（英文）](assets/screenshots/astra-arcade/SOURCE.md).
  - 预览: ![ASTRA Arcade — 实机画面](assets/screenshots/astra-arcade/gameplay.jpg)

- **[Chao Party](https://chao.party/)** — 非官方 Chao Garden 多人同人游戏：选择索尼克角色，探索花园并与 Chao 互动。
  - 作者: [Hank](https://x.com/h4nkdog)
  - 平台: 桌面浏览器；已无需登录或付费打开，未测试移动端。
  - GPT-6 Astra: [X](https://x.com/h4nkdog/status/2097308970431987857) — 作者说明使用 Astra 参与本项目开发。 [核验记录（英文）](assets/screenshots/chao-party/SOURCE.md).
  - 预览: ![Chao Party — 实机画面](assets/screenshots/chao-party/gameplay.jpg)

- **[ORBITAL GARDEN · 轨道花园](https://orbital-garden-one.vercel.app)** — 交互式粒子艺术沙盒：让 48,000 颗光点在花、引力环与星系之间变形，扰动雕塑并将瞬间导出为海报。
  - 作者：[jackroc](https://github.com/jackroc)
  - 平台：支持 WebGL 的现代浏览器；点击作品名直接在线体验，免费，无需登录或 API Key；也可下载单文件 HTML 离线运行，可选环境音需要 Web Audio。
  - GPT-6 Astra：[创作记录与模型参与说明](works/orbital-garden/README.md#模型与创作记录) — 创作者使用 GPT-6 Astra ultra 完成构思、代码与文案，经过协作审阅；非 one-shot 测试。
  - 开发资料：[源码与运行说明](works/orbital-garden/README.md) · [单文件 HTML](works/orbital-garden/index.html) · [Prompt](works/orbital-garden/PROMPT.md) · 技术：原生 WebGL、Web Audio、Canvas 2D。
  - 预览：![轨道花园实机画面：薄荷绿色粒子组成星之花，下方可切换形态、调节生命力与时间流速，并导出纪念海报。](assets/screenshots/orbital-garden/gameplay.jpg)

- **[Toy2Game / 在线玩具箱](https://games.asmo.top/)** — 把桌面玩具改编成四款 3D 网页游戏：轮流敲冰避免企鹅落水、带小兔穿过机关、放置太空人保持平台平衡，以及挪动车辆解开出库谜题。
  - 作者：[asmoyou](https://github.com/asmoyou)
  - 平台：电脑、平板与手机浏览器；免费，无需登录。支持 2–4 个席位本地同屏轮流操作，可加入电脑对手，也有单人解谜；不支持异地联机。试玩尚未独立核验。
  - GPT-6 Astra：[作者说明](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/24) — 作者称只提供玩具描述和功能要求，由 GPT-6 Astra 自主完成游戏开发与测试验证。
  - 开发资料：[源码与运行说明](https://github.com/asmoyou/toy2game) · [非商业使用许可](https://github.com/asmoyou/toy2game/blob/main/LICENSE) — 源码开放，非商业使用免费；商业使用须事先取得作者书面授权。技术：TypeScript、React、Vite、Three.js。
  - 预览：![Toy2Game 四款游戏的实际 3D 场景：企鹅敲冰、小兔闯关、平衡太空人和移车出库。图片由 asmoyou 提供。](https://raw.githubusercontent.com/asmoyou/toy2game/main/docs/images/toy2game-overview.png)

- **[Jelly Baby](https://jelly.scottsun.io/)** — 阳光木桌上的软体果冻游乐场，可以跳跃、拉伸，体验秋千和蹦床。
  - 作者: [Scott](https://x.com/scottstts)
  - 平台: 桌面浏览器；已无需登录或付费打开，未测试移动端。
  - GPT-6 Astra: [X](https://x.com/scottstts/status/2096364764054131119) — 作者说明使用 Astra 参与本项目开发。 [核验记录（英文）](assets/screenshots/jelly-baby/SOURCE.md).
  - 开发资料: [GitHub](https://github.com/scottstts/Jelly-Baby)
  - 预览: ![Jelly Baby](assets/screenshots/jelly-baby/gameplay.jpg)

- **[泡泡坦克大作战联机版 / Toon Tank Arena](https://toon-tank-arena.jay6697117.deno.net/)** — 用弹跳炮弹与强化道具守护彩虹核心，提供单人、双人同屏合作与在线对战模式的卡通坦克竞技场。
  - 作者: [SteveZhang / jay6697117](https://github.com/jay6697117) · [X](https://x.com/stevezh10058543)
  - 平台: 浏览器，免费、无需登录；作者提示可能需要 VPN／代理。已验证单人启动，联机未实测。
  - GPT-6 Astra: [Issue #52](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/52) — 作者说明： 第一版由 GPT-6 Astra Pro 完成，后续由 Codex 中的 GPT-6 Astra 优化。
  - 预览: ![泡泡坦克大作战联机版 / Toon Tank Arena](https://github.com/user-attachments/assets/713d44f3-a77c-452c-ba6d-1231882dc670)

## 每个作品记录什么

一条好用的推荐，应该让人一眼知道“玩什么、在哪里玩、为什么收录”。

| 信息 | 内容 |
| --- | --- |
| 游戏与作者 | 作品名称、原作者或团队链接 |
| 玩法亮点 | 一句话说明核心玩法，避免空泛宣传 |
| 体验入口 | 无需下载、安装、本地搭建或强制登录的在线游戏直达入口 |
| 实机截图 | 至少一张展示核心玩法的真实截图，附可公开访问的图片地址 |
| 平台与条件 | 浏览器 / 桌面 / 移动端；注明付费、登录或特殊硬件要求 |
| Astra 的参与 | 作者说明、开发日志或公开记录，说明 GPT-6 Astra 参与了哪些工作 |
| 开发资料 | 源码、技术栈与制作过程，能提供多少就提供多少 |

模型使用情况按作者公开说明记录；没有依据的归因不会写成已确认事实。可玩的原型也欢迎，不要求每个游戏都开源。

## 一起维护

通过 [Issue 提交游戏](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=submit-game.yml)，或直接发起 Pull Request。具体格式见 [贡献指南](CONTRIBUTING.md)。

遇到失效试玩入口、错误署名或信息变化，请[反馈问题](https://github.com/MartinDelophy/awesome-gpt-6-astra/issues/new?template=broken-link.yml)。

## 许可

本仓库原创的清单文字与视觉素材以 [CC0 1.0](LICENSE) 贡献至公有领域。链接指向的游戏、代码、图片、商标及其他第三方内容仍遵循各自的许可与权利声明；收录不改变它们的授权。

<!-- END UPSTREAM MartinDelophy/awesome-gpt-6-astra README.zh-CN.md -->

</details>

## helloianneo/awesome-gpt6-astra

### `README.md`

<details><summary>展开查看完整上游内容</summary>

<!-- BEGIN UPSTREAM helloianneo/awesome-gpt6-astra README.md -->

# Awesome GPT-6 Astra

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[English](README.en.md) · 中文默认

精选 GPT-6 Astra 上线首周的高质量案例。每条都有作者署名和可点回的原帖，精选带预览图。这是合集，不是教程，也不是 OpenAI 官方仓库。

GPT-6 Astra 于 2026-09-03 发布，9 月 4–5 日向 Plus / Pro / 企业用户铺开。现收 **16 条精选**，目录另约 39 条，合计约 55 条。

## Contents

- [精选 16](#精选-16)
- [分类目录](#分类目录)
- [收录说明](#收录说明)
- [关于作者](#关于作者)

## 精选 16

预览图来自原作者帖子缩略图，仅供识别；版权仍归作者。

### 01. Afterlight · 45 分钟 3D 游戏

<a href="https://x.com/anshuc/status/2096008083826725132"><img src="https://pbs.twimg.com/amplify_video_thumb/2096004824751890434/img/fW0IV1fAgJ3b7i-D.jpg" alt="Afterlight" width="100%"></a>

[Anshu](https://x.com/anshuc) · 2026-09-04 · [原帖](https://x.com/anshuc/status/2096008083826725132)

概念图对标到 60fps 的 one-shot 原型。

### 02. 运行时生成的活火车

<a href="https://x.com/tomkrcha/status/2096082580554777041"><img src="https://pbs.twimg.com/amplify_video_thumb/2096080925239185408/img/dxnzyee6XX7tgLe8.jpg" alt="Tom Krcha trains" width="100%"></a>

[Tom Krcha](https://x.com/tomkrcha) · 2026-09-05 · [原帖](https://x.com/tomkrcha/status/2096082580554777041)

没有模型文件，TypeScript / Three.js 几何函数驱动轮子和爆炸。

### 03. 梵高小镇 + Gogh Strike

<a href="https://x.com/petergostev/status/2095776685807346105"><img src="https://pbs.twimg.com/amplify_video_thumb/2095776416302280708/img/IzfZe03VWW3gBzC6.jpg" alt="Van Gogh Town" width="100%"></a>

[Peter Gostev](https://x.com/petergostev) · 2026-09-04 · [小镇](https://van-goghs-town.surge.sh/) · [FPS](https://gogh-strike.surge.sh/) · [原帖](https://x.com/petergostev/status/2095776685807346105)

6 幅梵高画合成可漫游小镇，后又做成 5v5 射击。

### 04. 15 分钟 3D iPod

<a href="https://x.com/skirano/status/2095648379455861054"><img src="https://pbs.twimg.com/amplify_video_thumb/2095648069740318720/img/FlJKiuoWnEfQpz3h.jpg" alt="3D iPod" width="100%"></a>

[Pietro Schirano](https://x.com/skirano) · 2026-09-04 · [原帖](https://x.com/skirano/status/2095648379455861054)

Blender 做机身，用原版 iPod 交互浏览 Codex threads。

### 05. Fall Guys 到 5 天 SimCity

<a href="https://x.com/MatthewBerman/status/2095595892464333065"><img src="https://pbs.twimg.com/amplify_video_thumb/2095578042618052608/img/RyBElYNzg3S7Efc4.jpg" alt="Matthew Berman" width="100%"></a>

[Matthew Berman](https://x.com/MatthewBerman) · 2026-09-03 · [评测](https://signals.forwardfuture.com/astra-review/) · [原帖](https://x.com/MatthewBerman/status/2095595892464333065)

早期最完整长线程之一，含游戏、世界与浏览器控制。

### 06. 10 分钟 Blender 甜甜圈

<a href="https://x.com/op7418/status/2096065904828416286"><img src="https://pbs.twimg.com/media/HRa4oT1bIAA6F1h.jpg" alt="歸藏 donut" width="100%"></a>

[歸藏](https://x.com/op7418) · 2026-09-05 · [原帖](https://x.com/op7418/status/2096065904828416286)

新手课通常 1–2 小时的模型，约 10 分钟出可改工程文件。

### 07. Zillow 房源图 → 3D 宣传片

<a href="https://x.com/realYunfanYe/status/2095612137582526615"><img src="https://pbs.twimg.com/amplify_video_thumb/2095611898968547328/img/EKCYWcJTBrAMT4e6.jpg" alt="Zillow house" width="100%"></a>

[Yunfan Ye](https://x.com/realYunfanYe) · 2026-09-03 · [原帖](https://x.com/realYunfanYe/status/2095612137582526615)

真房源照片建出可漫游房屋。作者自认细节有误。

### 08. Apple Notes 里画自像

<a href="https://x.com/viticci/status/2096025249582039180"><img src="https://pbs.twimg.com/amplify_video_thumb/2096025078165082112/img/zGCZRwqXJaqyZhWs.jpg" alt="Viticci Notes portrait" width="100%"></a>

[Federico Viticci](https://x.com/viticci) · 2026-09-04 · [原帖](https://x.com/viticci/status/2096025249582039180)

不是生成一张图，是在 Mac 上打开 Notes 一笔一笔画。

### 09. 只看屏幕通关《火红》

<a href="https://x.com/Clad3815/status/2095596013168050551"><img src="https://pbs.twimg.com/media/HRT4RchaUAAp_lJ.png" alt="Pokemon FireRed" width="100%"></a>

[Clad3815](https://x.com/Clad3815) · 2026-09-03 · [原帖](https://x.com/Clad3815/status/2095596013168050551)

Astra 18h12m；Sol 96h35m；GPT-5.5 跑 218h 未完。

### 10. 11 分钟巴赫钢琴

<a href="https://x.com/DeryaTR_/status/2096090915790069857"><img src="https://pbs.twimg.com/amplify_video_thumb/2096090005085077511/img/36OGv0ZYv9Ap7Xgc.jpg" alt="Brandenburg piano" width="100%"></a>

[Derya Unutmaz](https://x.com/DeryaTR_) · 2026-09-05 · [试玩](https://brandenburg-piano.vercel.app/) · [原帖](https://x.com/DeryaTR_/status/2096090915790069857)

可弹虚拟钢琴，内置全部 6 首《勃兰登堡协奏曲》。

### 11. 机械臂 40% → 95%

<a href="https://x.com/chooi_jeq/status/2096064315115839904"><img src="https://pbs.twimg.com/media/HRa3vJWaEAAQSRT.jpg" alt="Robot arm" width="100%"></a>

[Jay Chooi](https://x.com/chooi_jeq) · 2026-09-05 · [原帖](https://x.com/chooi_jeq/status/2096064315115839904)

真实抓取对照 Fable 5.1，输出 token 少 6.2 倍。

### 12. Canva 里一块块拼肖像

<a href="https://x.com/iam_zachi/status/2095992132620136677"><img src="https://pbs.twimg.com/amplify_video_thumb/2095991877577359360/img/MpolDyw89ejSOXM2.jpg" alt="Canva portrait" width="100%"></a>

[iam_zachi](https://x.com/iam_zachi) · 2026-09-04 · [原帖](https://x.com/iam_zachi/status/2095992132620136677)

Computer Use 在 Canva 里实操组装画像。

### 13. 语音通关《杀戮尖塔 2》

<a href="https://x.com/coolish/status/2096195104809873710"><img src="https://pbs.twimg.com/amplify_video_thumb/2096192501153705984/img/Owwdv3C08sVR0vOg.jpg" alt="Slay the Spire 2" width="100%"></a>

[paulwei](https://x.com/coolish) · 2026-09-05 · [原帖](https://x.com/coolish/status/2096195104809873710)

没写复杂 prompt，模型自学键位打了 48 层。

### 14. Godot 索尼克 Max vs Medium

<a href="https://x.com/AiBattle_/status/2095994051354919049"><img src="https://pbs.twimg.com/amplify_video_thumb/2095992908448944130/img/v8BSAp4Xt5knPeV0.jpg" alt="Sonic Max vs Medium" width="100%"></a>

[AiBattle](https://x.com/AiBattle_) · 2026-09-04 · [原帖](https://x.com/AiBattle_/status/2095994051354919049)

同一提示词：53 分钟 / 4% vs 25 分钟 / 1%。

### 15. 官方 KiCad / UE5 演示

<a href="https://openai.com/index/gpt-6-astra/"><img src="https://pbs.twimg.com/amplify_video_thumb/2095595661559574528/img/Vmb2pgEFJ6fpCUTD.jpg" alt="OpenAI Astra" width="100%"></a>

[OpenAI](https://x.com/OpenAI) · 2026-09-03 · [博客](https://openai.com/index/gpt-6-astra/) · [原帖](https://x.com/OpenAI/status/2095595741528125780)

原理图到 PCB，Blender 房子导入 Unreal Engine 5。

### 16. 早餐时给布加迪发了邮件

<a href="https://x.com/skel/status/2096113092736540685"><img src="https://pbs.twimg.com/media/HRbjvpibcAAS0hC.jpg" alt="SKEL Bugatti email" width="100%"></a>

[SKEL](https://x.com/skel) · 2026-09-05 · [原帖](https://x.com/skel/status/2096113092736540685)

已连 Gmail 的 Astra 在画车时主动发了两封邮件。

## 分类目录

精选不重复列出。格式：作品 — 一句话。作者 · [original](原帖) · 日期。

### 游戏与可玩原型

- **三岁小孩动力沙 / 卡车 / 恐龙** — 一句 prompt，约 27 分钟可玩。[imoutoftokensFR](https://x.com/imoutoftokensFR) · [original](https://x.com/imoutoftokensFR/status/2096202083561054342) · 09-05
- **Astral War** — 浏览器 FPS，一天做出。[RealFedeURU](https://x.com/RealFedeURU) · [original](https://x.com/RealFedeURU/status/2096202133532008758) · 09-05
- **Three.js MMORPG 区域** — 网页端 one prompt：营地、交易、技能栏。[oceanbennett](https://x.com/oceanbennett) · [original](https://x.com/oceanbennett/status/2096049972437209510) · 09-05
- **Fernando Galaxy** — 原生 iOS，Swift + RealityKit + Blender MCP，5h48m。[RayFernando1337](https://x.com/RayFernando1337) · [original](https://x.com/RayFernando1337/status/2096150987031633961) · 09-05
- **宝可梦风 3D / 渋谷 / 东京塔** — 日语回顾视频，剪辑也用了 Codex。[masahirochaen](https://x.com/masahirochaen) · [original](https://x.com/masahirochaen/status/2096196861287878877) · 09-05
- **可玩射击 + 赛车** — 两条简单 prompt，两个可玩回合。[k2sbhai](https://x.com/k2sbhai) · [original](https://x.com/k2sbhai/status/2096182794737402183) · 09-05
- **1-shot 浏览器游戏** — 上线日 Theo 的即席游戏演示。[theo](https://x.com/theo) · [original](https://x.com/theo/status/2095599934766764338) · 09-03
- **三主题赛车** — Playco 团队的多主题 kart 原型。[chetaslua](https://x.com/chetaslua) · [original](https://x.com/chetaslua/status/2095580402505400369) · 09-03
- **Forgotten Horizon** — 更完整的探索游戏原型。[ashthepeasant](https://x.com/ashthepeasant) · [original](https://x.com/ashthepeasant/status/2096172063241515218) · 09-05

### 3D 世界与建模

- **房子照片 → 完整 Blender 场景** — 家具玩具都在，可 60fps 浏览。[tomkrcha](https://x.com/tomkrcha) · [original](https://x.com/tomkrcha/status/2095598645190291775) · 09-03
- **火车草图 → 3295 个可编辑物体** — 同作者的工程级 3D。[tomkrcha](https://x.com/tomkrcha) · [original](https://x.com/tomkrcha/status/2095756085890310311) · 09-04
- **椭圆形办公室** — Astra 写几何，视频模型收尾。[higgsfield_ai](https://x.com/higgsfield_ai) · [original](https://x.com/higgsfield_ai/status/2095630197257367857) · 09-03
- **一条 prompt 用基本体拼出整车** — 作者说四个月前还摆不好物体。[Stefan_3D_AI](https://x.com/Stefan_3D_AI) · [original](https://x.com/Stefan_3D_AI/status/2096185294165103049) · 09-05
- **Cinema 4D 建模** — 不只有 Blender。[mojon1](https://x.com/mojon1) · [original](https://x.com/mojon1/status/2096189580752081024) · 09-05
- **澳洲宿舍照片还原** — 约 20 分钟做成可交互场景。[rionaifantasy](https://x.com/rionaifantasy) · [original](https://x.com/rionaifantasy/status/2096163579925770671) · 09-05
- **零 Blender 经验做美式厨房** — 语音 + 出图 + Computer Use。[berryxia](https://x.com/berryxia) · [original](https://x.com/berryxia/status/2096158415894835518) · 09-05
- **GTA6 画风新加坡街道** — Three.js，iPhone POV。[birdabo](https://x.com/birdabo) · [original](https://x.com/birdabo/status/2096156461365960837) · 09-05
- **Tesla Model X 拆解站** — 334 个零件的 3D 网页。[ashebytes](https://x.com/ashebytes) · [original](https://x.com/ashebytes/status/2096009146248122416) · 09-04
- **Forest Retreat** — Blender 森林别墅，约 7 小时。[UNIBRACITY](https://x.com/UNIBRACITY) · [original](https://x.com/UNIBRACITY/status/2096142182050927035) · 09-05
- **Backrooms** — Duncan Trussell 的 Blender 限制空间。[duncantrussell](https://x.com/duncantrussell) · [original](https://x.com/duncantrussell/status/2096003511104508411) · 09-04
- **地图钉 → 3D 街区** — Pietro 把地图标记重建成街区。[skirano](https://x.com/skirano) · [original](https://x.com/skirano/status/2095899479308144981) · 09-04
- **自动 bind 的功夫动作** — 角色自动绑骨与动画。[thebuggeddev](https://x.com/thebuggeddev) · [original](https://x.com/thebuggeddev/status/2096141728487178503) · 09-05
- **3D 钢琴家** — 可观看的演奏场景。[LexnLin](https://x.com/LexnLin) · [original](https://x.com/LexnLin/status/2096166277849239804) · 09-05
- **Hangzhou in Three.js** — 西湖到钱江新城的可漫游微缩杭州。[NFT_Chen](https://x.com/NFT_Chen) · [original](https://x.com/NFT_Chen/status/2096143589151756638) · 09-05

### Computer Use / 工程

- **Paint 里画你** — 广被引用的 Computer Use 小检。[The_Alex](https://x.com/The_Alex) · [original](https://x.com/The_Alex/status/2095962639386239400) · 09-04
- **55 段素材自动剪辑** — 选曲、切点、遮罩一起做。[0xTykoo](https://x.com/0xTykoo) · [original](https://x.com/0xTykoo/status/2096183262255386833) · 09-05
- **无人机飞控 PCB** — 原理图到布局走线再自查。[GoGoFly23](https://x.com/GoGoFly23) · [original](https://x.com/GoGoFly23/status/2096145124950708512) · 09-05
- **KiCad PCB 布线** — 另一条被广泛转发的 EE 案例。[ChihYang04](https://x.com/ChihYang04) · [original](https://x.com/ChihYang04/status/2095637507337826741) · 09-03
- **Agentic CAD** — 作者称 CAD agent 有一阶跳变。[adamdotnew](https://x.com/adamdotnew) · [original](https://x.com/adamdotnew/status/2096053889141489669) · 09-05
- **开发—验收闭环** — 中文圈对 Computer Use 的早期观察。[dotey](https://x.com/dotey) · [original](https://x.com/dotey/status/2096051842174087386) · 09-05
- **iOS 参考做安卓** — 一次对齐现有 iOS 应用。[jonaswrks](https://x.com/jonaswrks) · [original](https://x.com/jonaswrks/status/2096201967982829707) · 09-05
- **Three.js 30 分钟可交互场景** — 作者说从几小时压到 30 分钟。[lepadphone](https://x.com/lepadphone) · [original](https://x.com/lepadphone/status/2096147245775331419) · 09-05
- **3D pipeline 工作室测试** — 工作室级管线试跑。[badxstudio](https://x.com/badxstudio) · [original](https://x.com/badxstudio/status/2095982983379653113) · 09-04
- **UI 生成质量** — 短视频观点，但被广泛收藏。[MSchwaibold](https://x.com/MSchwaibold) · [original](https://x.com/MSchwaibold/status/2096059496812716307) · 09-05

### 音乐 / 科学 / Prompt

- **ZX Spectrum 48K 复刻** — 橡胶键盘、磅带加载、可玩 Gridrunner。[DeryaTR_](https://x.com/DeryaTR_) · [original](https://x.com/DeryaTR_/status/2096062355692048605) · 09-05
- **Ableton 从零做一轨** — Pietro + Ableton MCP。[skirano](https://x.com/skirano) · [original](https://x.com/skirano/status/2095595942544089525) · 09-03
- **个人风格 MIDI** — Astra 出稿，作者改 MIDI 再进 Suno。[super_bonochin](https://x.com/super_bonochin) · [original](https://x.com/super_bonochin/status/2096183825433084181) · 09-05
- **9 条能上班的 Agent prompt** — 账单、二手市场、夜间 QA、竞品。[gregisenberg](https://x.com/gregisenberg) · [original](https://x.com/gregisenberg/status/2095854071580156338) · 09-04
- **第一性原理盘问代码库** — 先删再简。[georgepickett](https://x.com/georgepickett) · [original](https://x.com/georgepickett/status/2095979879137460640) · 09-04

## 收录说明

- 收的是能点回原作的成果，不是用法教程。
- 预览图为原帖缩略图，本仓库不转存视频。
- 时长、配额、成本均为作者自述。
- 摘要文字 [CC0 1.0](LICENSE)；原作品版权见 [NOTICE.md](NOTICE.md)。
- 投稿见 [CONTRIBUTING.md](CONTRIBUTING.md)。Not affiliated with OpenAI。

## 关于作者

**Ian（伊恩）**，产品设计师。分享设计、审美和产品商业化。

- [Indie Builders](https://ianneo.xyz/ib)
- [伊恩日刊](https://iandaily.xyz)
- [Ian's Inspiration](https://topinspo.design)
- [X](https://x.com/ianneo_ai)

<!-- END UPSTREAM helloianneo/awesome-gpt6-astra README.md -->

</details>

### `README.en.md`

<details><summary>展开查看完整上游内容</summary>

<!-- BEGIN UPSTREAM helloianneo/awesome-gpt6-astra README.en.md -->

# Awesome GPT-6 Astra

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[中文](README.md) · English

A curated catalog of GPT-6 Astra cases from the first week after launch. Every entry has author credit and an original post. Featured cases include preview stills. This is a collection, not a tutorial, and not an official OpenAI repo.

The visual homepage is the [Chinese README](README.md). This page is the English mirror.

## Featured 16

1. **Afterlight** — 45-minute one-shot 3D game. [@anshuc](https://x.com/anshuc/status/2096008083826725132)
2. **Runtime trains** — TypeScript / Three.js, no model files. [@tomkrcha](https://x.com/tomkrcha/status/2096082580554777041)
3. **Van Gogh Town + Gogh Strike** — Walkable town and a 5v5 FPS. [town](https://van-goghs-town.surge.sh/) · [fps](https://gogh-strike.surge.sh/)
4. **3D iPod** — 15-minute Mac app. [@skirano](https://x.com/skirano/status/2095648379455861054)
5. **Fall Guys to 5-day SimCity** — Long early thread. [review](https://signals.forwardfuture.com/astra-review/)
6. **Blender donut** — About 10 minutes. [@op7418](https://x.com/op7418/status/2096065904828416286)
7. **Zillow listing → 3D film** — Details drift. [@realYunfanYe](https://x.com/realYunfanYe/status/2095612137582526615)
8. **Notes portrait** — Stroke by stroke on a Mac. [@viticci](https://x.com/viticci/status/2096025249582039180)
9. **Pokemon FireRed** — Screenshots only, 18h12m. [@Clad3815](https://x.com/Clad3815/status/2095596013168050551)
10. **Bach piano** — All six Brandenburg Concertos. [demo](https://brandenburg-piano.vercel.app/)
11. **Robot arm 40% → 95%** — vs Fable 5.1. [@chooi_jeq](https://x.com/chooi_jeq/status/2096064315115839904)
12. **Canva portrait** — Computer Use assembles a likeness. [@iam_zachi](https://x.com/iam_zachi/status/2095992132620136677)
13. **Slay the Spire 2 by voice** — 48 floors. [@coolish](https://x.com/coolish/status/2096195104809873710)
14. **Sonic Max vs Medium** — Same prompt, two costs. [@AiBattle_](https://x.com/AiBattle_/status/2095994051354919049)
15. **Official KiCad / UE5** — [blog](https://openai.com/index/gpt-6-astra/)
16. **Connected Gmail emailed Bugatti** — Cautionary case. [@skel](https://x.com/skel/status/2096113092736540685)

Preview stills live on the Chinese homepage. Thumbnails belong to the original authors.

## Catalog

Featured cases are not repeated. Combined total is about 55 entries.

### Games

- Kinetic sand for a 3-year-old — [imoutoftokensFR](https://x.com/imoutoftokensFR/status/2096202083561054342)
- Astral War browser FPS — [RealFedeURU](https://x.com/RealFedeURU/status/2096202133532008758)
- Three.js MMORPG zone — [oceanbennett](https://x.com/oceanbennett/status/2096049972437209510)
- Fernando Galaxy, native iOS — [RayFernando1337](https://x.com/RayFernando1337/status/2096150987031633961)
- Pokemon-style 3D / Shibuya / Tokyo Tower — [masahirochaen](https://x.com/masahirochaen/status/2096196861287878877)
- Shooter + racer — [k2sbhai](https://x.com/k2sbhai/status/2096182794737402183)
- 1-shot browser game — [theo](https://x.com/theo/status/2095599934766764338)
- Three-theme karts — [chetaslua](https://x.com/chetaslua/status/2095580402505400369)
- Forgotten Horizon — [ashthepeasant](https://x.com/ashthepeasant/status/2096172063241515218)

### 3D worlds

- House photo → full Blender scene — [tomkrcha](https://x.com/tomkrcha/status/2095598645190291775)
- Train drawing → 3,295 objects — [tomkrcha](https://x.com/tomkrcha/status/2095756085890310311)
- Oval Office — [higgsfield_ai](https://x.com/higgsfield_ai/status/2095630197257367857)
- One-prompt car from primitives — [Stefan_3D_AI](https://x.com/Stefan_3D_AI/status/2096185294165103049)
- Cinema 4D modeling — [mojon1](https://x.com/mojon1/status/2096189580752081024)
- Dorm-room reconstruction — [rionaifantasy](https://x.com/rionaifantasy/status/2096163579925770671)
- American kitchen, no Blender experience — [berryxia](https://x.com/berryxia/status/2096158415894835518)
- GTA6-style Singapore street — [birdabo](https://x.com/birdabo/status/2096156461365960837)
- Tesla Model X teardown site — [ashebytes](https://x.com/ashebytes/status/2096009146248122416)
- Forest Retreat — [UNIBRACITY](https://x.com/UNIBRACITY/status/2096142182050927035)
- Backrooms — [duncantrussell](https://x.com/duncantrussell/status/2096003511104508411)
- Map pin → 3D street — [skirano](https://x.com/skirano/status/2095899479308144981)
- Auto-rig kung fu — [thebuggeddev](https://x.com/thebuggeddev/status/2096141728487178503)
- 3D pianist — [LexnLin](https://x.com/LexnLin/status/2096166277849239804)
- Hangzhou in Three.js — [NFT_Chen](https://x.com/NFT_Chen/status/2096143589151756638)

### Computer use / engineering

- Paint bench — [The_Alex](https://x.com/The_Alex/status/2095962639386239400)
- 55-clip auto edit — [0xTykoo](https://x.com/0xTykoo/status/2096183262255386833)
- Drone flight-controller PCB — [GoGoFly23](https://x.com/GoGoFly23/status/2096145124950708512)
- KiCad PCB routing — [ChihYang04](https://x.com/ChihYang04/status/2095637507337826741)
- Agentic CAD — [adamdotnew](https://x.com/adamdotnew/status/2096053889141489669)
- Build-verify loop — [dotey](https://x.com/dotey/status/2096051842174087386)
- iOS reference to Android — [jonaswrks](https://x.com/jonaswrks/status/2096201967982829707)
- Three.js scene in 30 minutes — [lepadphone](https://x.com/lepadphone/status/2096147245775331419)
- Studio 3D pipeline test — [badxstudio](https://x.com/badxstudio/status/2095982983379653113)
- UI generation quality — [MSchwaibold](https://x.com/MSchwaibold/status/2096059496812716307)

### Music / science / prompts

- ZX Spectrum 48K replica — [DeryaTR_](https://x.com/DeryaTR_/status/2096062355692048605)
- Ableton track from scratch — [skirano](https://x.com/skirano/status/2095595942544089525)
- Personal-style MIDI — [super_bonochin](https://x.com/super_bonochin/status/2096183825433084181)
- Nine workday agent prompts — [gregisenberg](https://x.com/gregisenberg/status/2095854071580156338)
- First-principles codebase prompt — [georgepickett](https://x.com/georgepickett/status/2095979879137460640)

## Notes

This is a collection of work you can click back to, not a how-to. Duration and cost claims are the authors' own. Catalog text is [CC0 1.0](LICENSE). Original works stay with their authors. See [NOTICE.md](NOTICE.md) and [CONTRIBUTING.md](CONTRIBUTING.md). Not affiliated with OpenAI.

## Author

**Ian**, product designer. I write about design, taste, and making products.

- [Indie Builders](https://ianneo.xyz/ib)
- [Ian Daily](https://iandaily.xyz)
- [Ian's Inspiration](https://topinspo.design)
- [X](https://x.com/ianneo_ai)

<!-- END UPSTREAM helloianneo/awesome-gpt6-astra README.en.md -->

</details>

## archorfight/awesome-gpt-6-astra

### `README.md`

<details><summary>展开查看完整上游内容</summary>

<!-- BEGIN UPSTREAM archorfight/awesome-gpt-6-astra README.md -->

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

<!-- END UPSTREAM archorfight/awesome-gpt-6-astra README.md -->

</details>

### `README.zh-CN.md`

<details><summary>展开查看完整上游内容</summary>

<!-- BEGIN UPSTREAM archorfight/awesome-gpt-6-astra README.zh-CN.md -->

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
| [EverettFish/holo-card-studio](https://github.com/EverettFish/holo-card-studio) ⭐842 | 开源 Blender+Three.js 技能：一句话出 3D 镭射卡牌（中文社区，配[原推](https://x.com/i/status/2096765359282061544)） |
| [wz1119/Codex-Minecraft-Gameplay](https://github.com/wz1119/Codex-Minecraft-Gameplay) ⭐128 | Astra 用 Computer Use 玩 Minecraft：探索、采集、合成、建造 |
| [ScottStevenson/SuperAstra](https://github.com/ScottStevenson/SuperAstra) ⭐64 | 边玩边用 AI 改 SNES 游戏 |
| [cozyblaze/portal-agent](https://github.com/cozyblaze/portal-agent) ⭐39 | 通关《传送门》那次的完整装备：手柄、补丁、指南、脱敏日志 |
| [hku-sail/Real2Sim_GPT6_ASTRA](https://github.com/hku-sail/Real2Sim_GPT6_ASTRA) ⭐33 | 真实机械臂操作→Blender 重放，仅凭三路 RGB 相机重建 |
| [gnipbao/gpt6-prompt-writer](https://github.com/gnipbao/gpt6-prompt-writer) ⭐21 | 基于官方指南的 GPT-6 Astra 提示词写作技能（中文社区） |
| [parlance-labs/super-oracle](https://github.com/parlance-labs/super-oracle) ⭐12 | 评审议会：Claude 与 Astra 各自独立评审，再合成一份结论 |

## 病毒级 Demo

### 3D 世界与建模

爆火主赛道：Blender、Unreal、three.js，从提示词和照片直接出场景。

| 案例 | 作者 | 热度 | 看点 |
|---|---|---|---|
| [Unreal 世界里的 AI 居民](https://x.com/i/status/2095596175705399482) | mattshumer_ | 28,137 赞 | 每个 NPC 都是独立 Astra 智能体，协作求生——后来它们开始自己聊天 |
| [3D 人体解剖网站，2,234 个零件](https://x.com/i/status/2096221988763173186) | ashebytes | 24,960 赞 | 周末最火：把人体逐件拆开的学习网站 |
| [一周造出曼哈顿](https://x.com/i/status/2095609734845927525) | mattshumer_ | 18,871 赞 | Unreal Engine 里一条街一条街磨出来的纽约 |
| [Blender 里的Backrooms恐怖片](https://x.com/i/status/2096003511104508411) | duncantrussell | 9,442 赞 | 约 5 条 prompt：30 分钟建模+20 分钟渲染，音效也是它做的 |
| [运行时生成的 Three.js 火车](https://x.com/i/status/2096082580554777041) | tomkrcha | 7,427 赞 | 没有 3D 模型文件——几何体全部由 TypeScript 代码运行时生成 |
| [Blender 房子 → UE5 漫游](https://x.com/i/status/2095592572286533644) | goofyninjaaa | 6,996 赞 | 带泳池花园的全屋，独自完成；一句话干掉建筑可视化工作室（西语社区） |
| [房子照片 → 全屋 3D 模型](https://x.com/i/status/2095598645190291775) | tomkrcha | 6282 赞 | 早期访问实测，含玩具家电家具，60fps 可跑 |
| [蒸汽火车 Blender 建模](https://x.com/i/status/2095756085890310311) | tomkrcha | 5876 赞 | 旧图纸 → 3,295 个可编辑对象 |
| [可交互 V8 发动机](https://x.com/i/status/2096280244663775423) | DilumSanjaya | 4,029 赞 | 高细节可交互的发动机可视化 |
| [一句话等 40 分钟的等距儿童房](https://x.com/i/status/2096048421543272893) | zhengli | 3,561 赞 | 随便一句 prompt 出图这个级别（中文社区） |
| [整个首尔 3D 化](https://x.com/i/status/2096557555086725159) | synabreu | 2,701 赞 | 全城+周边的交互微缩景观 |
| [5 小时森林](https://x.com/i/status/2096263046918197609) | LexnLin | 1,931 赞 | 3,808 棵树、250 万丛草、近 4 万蕨类——three.js + 自定义 shader |
| [Tesla Model X 拆解网站](https://x.com/i/status/2096009146248122416) | ashebytes | 1731 赞 | 拆成 334 个建模零件的 3D 网站 |
| [3D 建模 BEAST 实测](https://x.com/i/status/2095982983379653113) | badxstudio | 1392 赞 | 工作室 3D 管线实测 |
| [24 分钟把杭州搬进网页](https://x.com/i/status/2096143589151756638) | NFT_Chen | 1,065 赞 | 西湖雷峰塔钱江新城全有：飞行漫游、昼夜切换（中文社区） |

### 游戏

能玩的游戏，one-shot 或迭代打磨。

| 案例 | 作者 | 热度 | 看点 |
|---|---|---|---|
| [48 关机器人游戏全通关](https://x.com/sharifshameem/status/2096847916837314853) | sharifshameem | 10,739 赞 | "I'm Not a Robot" 全部关卡打穿 |
| [3D 游戏从零到可玩](https://x.com/i/status/2096008083826725132) | anshuc | 8739 赞 | "3D 游戏的神"——45 分钟 one-shot，只花配额 2% |
| [Paperboy 复刻](https://x.com/i/status/2096515959469072630) | builtbysketch | 3,512 赞 | 1985 街机经典：建模、渲染、手感全包 |
| [浏览器里的 GTA](https://x.com/i/status/2096382232403603752) | xikhar | 2,634 赞 | three.js 跑在浏览器里，车是 Blender 建的——"下一部 GTA 会是 AI 做的" |

### Computer Use：操控真实软件

Astra 在真实桌面软件里动鼠标——DAW、设计工具、浏览器。

| 案例 | 作者 | 热度 | 看点 |
|---|---|---|---|
| ["用 Ableton 写首神曲"](https://x.com/i/status/2096374630525309206) | timourxyz | 8,593 赞 | Computer Use 操控真实 DAW 做音乐 |
| [Canva 浏览器画人像](https://x.com/i/status/2095992132620136677) | iam_zachi | 7214 赞 | Computer Use 操控 Canva 一块块拼出人像 |
| [AI 用 Procreate 画自画像](https://x.com/i/status/2096124169406775325) | keitowebai | 2,501 赞 | 纯 Computer Use 鼠标操作，一笔一笔画（日本社区） |
| [Computer Use 临界点论](https://x.com/i/status/2096051842174087386) | dotey | 292 赞 | 中文社区代表观点："开发→验收完整闭环" |

### 现实应用

真能用的东西：医学图谱、乐高套装、婚礼网站、房源视频。

| 案例 | 作者 | 热度 | 看点 |
|---|---|---|---|
| [脚踝疼痛 3D 图谱](https://x.com/i/status/2096528986390085696) | Emanuel_Andre7 | 7,612 赞 | 骨骼/韧带/肌腱/运动轴全交互，给自己看病用的图谱 |
| [看 YouTube 视频还原起落架](https://x.com/i/status/2096642895134752922) | DilumSanjaya | 7,562 赞 | Cessna 337 起落架机构，其他模型都没做对过 |
| [Zillow 房源 → 3D 宣传片](https://x.com/i/status/2095612137582526615) | realYunfanYe | 7307 赞 | 房产数据直接变宣传视频 |
| [任意图片→可拼乐高套装](https://x.com/i/status/2096377028945576370) | emmanuel_2m | 6,945 赞 | 用官方零件、可下单的搭建说明——年度玩具预定 |
| [Astra Max 做婚礼网站](https://x.com/i/status/2096659577660203436) | venturetwins | 6,814 赞 | 非技术创始人的真实婚礼站 |
| [UI 生成实测](https://x.com/i/status/2096059496812716307) | MSchwaibold | 6,180 赞 | 一条 prompt 出干净的多组件 UI |
| [5 分钟出产品发布视频](https://x.com/i/status/2096488216983732341) | _yatharthg | 2,441 赞 | 搭配 fal H3 Max 的营销内容 |
| [自己搭别墅找房 agent](https://x.com/i/status/2096228864859201869) | marclou | 566 赞 | 把房源与空气质量/噪音/滑坡数据交叉比对 |

### 硬件、电子与机器人

PCB 布线、CAD、机器人控制。

| 案例 | 作者 | 热度 | 看点 |
|---|---|---|---|
| [KiCad PCB 布局](https://x.com/i/status/2095637507337826741) | ChihYang04 | 4799 赞 | 原理图 → 电路板布线，电子工程师赛道 |
| [机器人任务控制](https://x.com/i/status/2096064315115839904) | chooi_jeq | 1349 赞 | 95% vs Fable 5.1 的 40%，token 少 6.2x |
| [agentic CAD 新 SOTA](https://x.com/i/status/2096053889141489669) | adamdotnew | 1160 赞 | CAD 领域的阶跃 |

### 基准与成本实测

档位实测与正面对比。

| 案例 | 作者 | 热度 | 看点 |
|---|---|---|---|
| [巴赫基准至今最佳](https://x.com/i/status/2096030719156089029) | aug5thmusic | 8,105 赞 | 零声部进行错误、首个写出正确经过音的模型——乐理硬功夫 |
| [Max vs Medium 档成本实测](https://x.com/i/status/2095994051354919049) | AiBattle_ | 5120 赞 | 53 分钟 4% 周配额 vs 25 分钟 1% |
| [视频生成 vs Fable 5.1](https://x.com/i/status/2095739568528232538) | NFT_Chen | 648 赞 | "Astra 像在导戏"——镜头语言有情绪 |

## 社区热帖

### Reddit — 游戏通关

能玩的证据：从头到尾打穿的游戏。

| 帖子 | 子版 | 分数 |
|---|---|---|
| [Astra 通关《传送门》，只花了 571.18 美元](https://www.reddit.com/r/technology/comments/1w92153/) | r/technology | 3918 |
| [首个通关《传送门》的模型](https://www.reddit.com/r/singularity/comments/1w8g7d0/) | r/singularity | 3398 |
| [Blender 里 Rickroll](https://www.reddit.com/r/singularity/comments/1w9aeyk/) | r/singularity | 1977 |
| [苹果芯上跑《帝国时代 4》70-150 帧](https://www.reddit.com/r/accelerate/comments/1w9bsjh/) | r/accelerate | 1398 |
| [15 小时通关《环世界》](https://www.reddit.com/r/singularity/comments/1w93mgg/) | r/singularity | 1279 |

### Reddit — 3D 与创作

Blender/3D 赛道，从业者视角的讨论。

| 帖子 | 子版 | 分数 |
|---|---|---|
| [Fable 5.1 vs GPT 6 Astra 3D Blender 对比，差距惊人](https://www.reddit.com/r/OpenAI/comments/1w7ppcj/fable_51_vs_gpt_6_astra_3d_blender_mind_blowing/) | r/OpenAI | 1949 |
| [GPT-6-Astra-Max 画的 PS4 手柄 SVG](https://www.reddit.com/r/singularity/comments/1w7gj1i/gpt6astramax_svg_of_a_playstation_4_controller/) | r/singularity | 1346 |

### Reddit — 工程与实用

电子工程、报税、30 分钟做出来的网站。

| 帖子 | 子版 | 分数 |
|---|---|---|
| [GPT-6 Astra is actually nuts for electrical engineering](https://www.reddit.com/r/singularity/comments/1w6m7hr/) | r/singularity | 1192 |
| [约 30 分钟做出地球人类史交互网站](https://www.reddit.com/r/vibecoding/comments/1w99r2z/) | r/vibecoding | 1192 |
| [GPT-6-Astra's tax return underpays the government](https://www.reddit.com/r/OpenAI/comments/1w6jp0n/) | r/OpenAI | 991 |

### Reddit — 基准与定价

数字、harness 争议、成本。

| 帖子 | 子版 | 分数 |
|---|---|---|
| [Gpt 6 astra benchmarks](https://www.reddit.com/r/singularity/comments/1w6f9xo/) | r/singularity | 2559 |
| [经验帖："Astra 低档胜过 Sol 高档"](https://www.reddit.com/r/codex/comments/1w9erx3/) | r/codex | 1054 |
| [GPT-6 Astra Benchmarks](https://www.reddit.com/r/codex/comments/1w6fnc4/) | r/codex | 588 |
| [GPT-6 Astra 定价比 5.6 Sol 离谱](https://www.reddit.com/r/codex/comments/1w6hvo9/gpt6_astra_pricing_is_kinda_insane_compared_to_56/) | r/codex | 440 |

### Reddit — 发布与舆论

上线当天的汇总帖与媒体报道。

| 帖子 | 子版 | 分数 |
|---|---|---|
| [GPT-6 Astra \| OpenAI](https://www.reddit.com/r/OpenAI/comments/1w6hf6g/) | r/OpenAI | 1381 |
| ["Welcome to the AGI era" — The Verge 报道讨论](https://www.reddit.com/r/singularity/comments/1w6f0jp/) | r/singularity | 970 |
| [GPT-6 Astra Is Here—Kick Off the AGI Era](https://www.reddit.com/r/ChatGPT/comments/1w6f701/) | r/ChatGPT | 902 |
| [GPT-6 Astra Launch Video](https://www.reddit.com/r/singularity/comments/1w6gjmb/) | r/singularity | 837 |
| [全球推送开启后的第一时间体感楼](https://www.reddit.com/r/singularity/comments/1w7m0ui/its_been_a_few_hours_since_global_rollout_gpt6/) | r/singularity | 702 |
### Hacker News — 深度讨论

值得全文读完的长帖。

| 帖子 | 看点 |
|---|---|
| [OpenAI's GPT-6 Astra on ARC-AGI-3](https://news.ycombinator.com/item?id=49555691) | "只有 Astra 解出 2/68 题，否证第 74 题花了 $218"——harness 之争的现场 |
| [GPT-6 Astra makes major gains in Artificial Analysis Coding Agent Index](https://news.ycombinator.com/item?id=49556147) | 编程 agent 指数跃升的讨论 |
| [GPT-6 Astra System Card](https://news.ycombinator.com/item?id=49555440) | 系统卡讨论：思维链监控失效 |
| [Ask HN: Initial Thoughts on GPT-6 Astra?](https://news.ycombinator.com/item?id=49571621) | 一线程序员的真实体感 |
| [GPT-6 Astra in code review](https://news.ycombinator.com/item?id=49572875) | CodeRabbit 实测：代码审查的收益、隐私与成本 |
| [GPT-6 Astra on robot arms](https://news.ycombinator.com/item?id=49582582) | 机械臂上的实体智能讨论 |
| [GPT-6 Astra on OpenRouter](https://news.ycombinator.com/item?id=49570545) | 第三方可用性与定价讨论 |

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

<!-- END UPSTREAM archorfight/awesome-gpt-6-astra README.zh-CN.md -->

</details>

## zender555/awesome-gpt6

### `README.md`

<details><summary>展开查看完整上游内容</summary>

<!-- BEGIN UPSTREAM zender555/awesome-gpt6 README.md -->

<p align="center">
  <img src="assets/cover.svg" alt="Awesome GPT6 — A field guide to what comes next. 3D, Web, Film, Play." width="100%">
</p>

<h1 align="center">Awesome GPT6</h1>

<p align="center">把灵感变成作品。收藏值得研究的 GPT‑6 案例、提示词与创作过程。</p>
<p align="center"><strong>3D 建模 · 网页设计 · 视频制作 · 游戏开发</strong></p>

<p align="center">
  <a href="https://github.com/zender555/awesome-gpt6/issues/new?template=submit-case.yml"><img alt="Submit a case" src="https://img.shields.io/badge/Submit_a_case-投稿案例-c6f36a?style=flat-square&amp;labelColor=192522"></a>
  <a href="CONTRIBUTING.md"><img alt="Contributions welcome" src="https://img.shields.io/badge/Contributions-welcome-145c4b?style=flat-square"></a>
  <a href="LICENSE"><img alt="License MIT" src="https://img.shields.io/badge/License-MIT-ece8dd?style=flat-square&amp;labelColor=192522"></a>
</p>

<p align="center"><a href="#explore">探索分类</a> · <a href="#collection">首批精选</a> · <a href="prompts/README.md">提示词起点</a> · <a href="CONTRIBUTING.md">参与共建</a> · <a href="docs/maintaining.md">维护指南</a></p>

---

### 少一些堆砌，多一些值得复现的作品。

一个由社区共建的 GPT‑6 创作索引。我们关注**做出了什么、如何做到、证据在哪里**。首版刻意保持轻量，先建立清晰的分类和收录标准，再逐步积累作品。

> **阅读说明**：已核对来源 ≠ 已独立复现。每个条目分别记录来源、模型声明、提示词出处和复现状态。本站为非官方社区项目，与 OpenAI 无隶属关系。

<a id="explore"></a>

## 四个创作方向

<table>
  <tr>
    <td width="50%" valign="top">
      <a href="cases/3d/README.md"><img src="assets/category-3d.jpg" alt="3D 建模概念插画：可编辑建筑的微缩模型，呈现结构、材质与空间" width="100%"></a>
      <h3>01 / 3D · 从形状到空间</h3>
      <p>Blender、CAD、可编辑模型与场景。让一个想法拥有形体、材质和尺度。</p>
      <p><a href="cases/3d/README.md"><strong>探索建模案例 →</strong></a></p>
    </td>
    <td width="50%" valign="top">
      <a href="cases/web/README.md"><img src="assets/category-web.jpg" alt="网页设计概念插画：层叠的立体浏览器界面与交互组件" width="100%"></a>
      <h3>02 / WEB · 让界面回应你</h3>
      <p>网站、交互界面与前端实现。把信息、视觉和操作，组织成自然的体验。</p>
      <p><a href="cases/web/README.md"><strong>探索网页案例 →</strong></a></p>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <a href="cases/video/README.md"><img src="assets/category-video.jpg" alt="视频制作概念插画：电影摄影机、胶片曲线与剪辑时间轴" width="100%"></a>
      <h3>03 / FILM · 把时间变成画面</h3>
      <p>动效、分镜、程序化视频与剪辑工作流。让画面沿着节奏展开。</p>
      <p><a href="cases/video/README.md"><strong>探索视频创作 →</strong></a></p>
    </td>
    <td width="50%" valign="top">
      <a href="cases/games/README.md"><img src="assets/category-games.jpg" alt="游戏开发概念插画：微缩赛道、城堡、收集物与游戏手柄" width="100%"></a>
      <h3>04 / PLAY · 创造一个可玩的世界</h3>
      <p>游戏原型、玩法与可玩体验。从一个有趣的机制，走向真正想玩的作品。</p>
      <p><a href="cases/games/README.md"><strong>探索游戏案例 →</strong></a></p>
    </td>
  </tr>
</table>

<p align="center"><sub>四张栏目配图为 AI 生成的概念插画，用于视觉导航，并非收录案例的实际截图。<a href="assets/generation-prompts.md">查看素材说明与生成提示词</a></sub></p>

<a id="collection"></a>

## 首批精选

| 案例 | 看点 | 证据状态 |
| :--- | :--- | :--- |
| [Blender 房屋 → UE5 漫游](cases/3d/blender-to-unreal.md) | 模型到可探索空间的跨工具过程 | 官方展示 · 未复现 |
| [Career website 网页演示](cases/web/career-website.md) | 网站制作中的需求澄清与协作 | 官方展示 · 未复现 |
| [Playco：从灰盒到三种游戏主题](cases/games/playco-prototypes.md) | 共用玩法基础，比较不同美术方向 | 官方客户案例 · 未复现 |

**视频方向的线索**：[HyperFrames 创作展示](cases/video/hyperframes-showcase.md)已找到作者原帖链接；当前只能核对聚合页转述，因此放在候选区，不计入已核对精选。

## 从一个好提示词开始

- [四类创作的起始模板](prompts/README.md)：整理者原创，未经 GPT‑6 实测，适合修改后尝试。
- [社区提示词线索](prompts/community.md)：保留出处和原文可用性，不把推测包装成作者原文。
- [统一案例模板](templates/case.md)：将提示词、工具、结果、局限和复现证据放在同一个地方。

## 把你的作品放进来

**不会 Git？** [填写投稿表单](https://github.com/zender555/awesome-gpt6/issues/new?template=submit-case.yml)，附上原始链接、模型信息和作品。维护者审核后整理收录。

**熟悉 Git？** Fork 本仓库 → 复制 [案例模板](templates/case.md) → 添加条目和分类索引 → 提交 Pull Request。详见 [贡献指南](CONTRIBUTING.md)。

**交给其他 Agent？** 使用 [Awesome GPT6 策展与发布 Skill](skills/awesome-gpt6-curator/SKILL.md)，完成搜索核验、严格格式整理、GitHub 接入、上传发布与断线恢复。见 [调用与安装说明](docs/maintaining.md)。

也欢迎[修正信息或报告失效链接](https://github.com/zender555/awesome-gpt6/issues/new?template=correction.yml)。投稿不会自动成为精选，引用他人作品请保留署名与出处。

## 资料与致谢

- [GPT‑6 Astra 官方发布页](https://openai.com/index/gpt-6-astra/) · [官方模型指南](https://developers.openai.com/api/docs/guides/latest-model)
- 结构灵感来自 [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2)。本仓库独立编写，未复制其案例库或视觉素材。
- 自有文字、模板与封面使用 [MIT License](LICENSE)；第三方作品、商标与原始提示词的权利归各自权利人，链接收录不代表取得转载或商用授权。

<p align="center"><sub>CURATED WITH INTENT. BUILT WITH THE COMMUNITY.</sub></p>

<!-- END UPSTREAM zender555/awesome-gpt6 README.md -->

</details>
