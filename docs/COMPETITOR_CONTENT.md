# survivezombiearena.com — 竞品全站内容库

**抓取日期：** 2026-05-20  
**站点地图：** 13 页（sitemap-0.xml）  
**域名注册：** 2026-05-02  
**用途：** 内容对标 + 结构化迁移至 SZA Companion（改写，非逐字复制）

---

## 站点结构总览

| # | URL | 页面类型 | 我们的对应路由 | Phase |
|---|-----|----------|----------------|-------|
| 1 | `/` | Hub 首页 | `/` | 1 |
| 2 | `/codes/` | Codes 监控 | `/codes/` | 1 |
| 3 | `/classes/` | 9 职业详解 | `/classes/` | 1 |
| 4 | `/tier-list/` | S–C 分级 | `/tier-list/` | 2 |
| 5 | `/weapons/` | 武器进度 | `/weapons/` | 1 |
| 6 | `/beginner-guide/` | 新手路线 | `/beginner-guide/` | 1 |
| 7 | `/best-loadouts/` | 配装框架 | `/best-loadouts/` | 2 |
| 8 | `/waves/` | 波次攻略 | `/waves/` | 2 |
| 9 | `/enemies/` | 敌人机制 | `/enemies/` | 2 |
| 10 | `/maps/` | 地图攻略 | `/maps/` | 2 |
| 11 | `/leaderboard/` | 排行榜 | `/leaderboard/` | 2 |
| 12 | `/update-log/` | 更新日志 | `/updates/` | 2 |
| 13 | `/discord/` | 官方链接 | `/discord/` | 1 |

**我们额外页面（竞品无）：**
- `/tools/credit-planner/` — Credits 规划器
- `/tools/loadout-builder/` — 配装器
- `/events/galactic/` — Galactic Event 时效页

---

## 1. 首页 `/`

### 核心数据块
- **Last checked:** 2026-05-18
- **Stats:** 170,807,365 visits · 125,636 favorites · 25 players/server · avg session 13.13 min
- **Verified code:** Zombies → 2,500 Credits

### 内容模块
1. Hero + 6 快捷卡片（Tier / Classes / Weapons / Loadouts / Waves / Codes）
2. May 18 Discord deep-dive（Atlantis preview、Galactic guns、无新 code）
3. Search intent map（3 个主关键词落地页）
4. Verified Code Report
5. Gameplay screenshots（Roblox 官方缩略图）
6. Live server snapshot
7. What is SZA（游戏介绍）
8. Best first upgrades（3 步）
9. Classes quick tier read（S/A/B/C 摘要）
10. All guides 链接 grid（12 页）
11. FAQ（6 条）
12. Official links

### 我们的增强
- 首页 CTA 指向 Credit Planner
- Codes 摘要带 last_verified
- 不复制竞品文案，保留数据结构与模块顺序

---

## 2. Codes `/codes/`

### Fast Answer
- Code: `Zombies` — 2,500 Credits
- Redeem: Shop → scroll → Redeem Codes box

### Active codes (竞品仅 1 个)
| Code | Reward | Status |
|------|--------|--------|
| Zombies | 2,500 Credits | active (9 sources agree) |

### 我们补充
| Code | Reward | Status | 说明 |
|------|--------|--------|------|
| GALACTIC | 2,500 Credits? | **disputed** | Destructoid/ProGameGuides 5/19 标 Active；Discord #codes 无；RoCodes 0% 成功 |

### Redeem 步骤（5 步）
1. Launch game, enter lobby
2. Shop button left
3. Scroll to Redeem Codes
4. Paste exactly
5. Redeem

### Codes 来源
- Discord #patch-notes, #giveaways
- Roblox 游戏页 social links
- Nectarforge group 561990553

### FAQ（4 条）
- Zombies still working?
- Case-sensitive?
- Why only one code?
- Codes give weapons?

---

## 3. Classes `/classes/`

### Quick answer 表
| Situation | Class | Cost | Tier |
|-----------|-------|------|------|
| Best overall | Necromancer | 250k | S |
| First unlock solo | Marksman | 15k | A |
| First unlock co-op | Medic | 10k | A |
| Squad defense | Bastion | 200k | A |
| Team anchor | Tactician | 75k | A |
| Crowd control | Demolitionist | 50k | B |
| Skip first unlock | Ninja | 25k | C |

### 9 职业完整数据（见 `src/data/classes.json`）

### Dev-confirmed facts
- 2026-02-01: Necromancer minion kills credit fix
- 2026-02-01: Turrets ignore Necromancer minions
- 2026-02-01: Medic earns Credits from healing
- 2026-05-08: Necromancer buff (minion speed + damage)

### Credit investment ladder
- Free–15k: Survivor, Medic, Marksman
- 20k–25k: Engineer, Ninja
- 50k–75k: Demolitionist, Tactician
- 200k–250k: Bastion, Necromancer

---

## 4. Tier List `/tier-list/`

### 分级（2026-05-14）
- **S:** Necromancer (250k)
- **A:** Medic (10k), Marksman (15k), Tactician (75k), Bastion NEW (200k)
- **B:** Engineer (20k), Demolitionist (50k)
- **C:** Survivor (free), Ninja (25k)

### 各 tier 详细说明
每职业：Cost · Best for · Weakness · 段落描述

### Best class per playstyle 表
| Playstyle | Best | Why |
|-----------|------|-----|
| First unlock budget | Medic | 10k cheapest A-tier |
| First unlock solo DPS | Marksman | 15k best value |
| Solo run | Marksman or Necromancer | |
| Team anchor | Tactician | |
| Squad survival | Bastion | Bunker invincibility |
| Co-op support | Medic | |
| Leaderboard | Necromancer | |
| Rooftop chokepoint | Tactician | |

### Rooftop Map meta shift
- Tactician ↑, Necromancer Death Nova in funnels ↑, Ninja ↓

---

## 5. Weapons `/weapons/`

### Verified progression
1. Handgun (starter) — bank credits waves 1–3
2. Shotgun (~150 credits) — mid-wave packs
3. Rifle (~750 credits) — sustained DPS, pairs with Marksman

### May 2026 新增 F2P（patch 2026-05-08）
- **World Ender** — first Mythic F2P
- **Grenade Launcher**
- **Tommy Gun**

### Dev-preview 武器（未上线）
- Goo Splasher (AoE slow)
- Cosmic Pistol / Galactic Pistol
- New galactic guns (2026-05-17 preview, F2P)

### Galactic Crates poll
- Event currency 4,411 vs Credits 1,177（poll only, not shipped）

### Class × Weapon pairing
- Medic: handgun longer, then shotgun
- Marksman: rifle ASAP
- Demolitionist: shotgun late
- Tactician: shotgun anchor, rifle elites

### Data gaps（竞品诚实标注）
- 无完整武器名列表
- 无精确 damage/fire rate/cost
- 不编造数据

---

## 6. Beginner Guide `/beginner-guide/`

### 5 步骤
1. Redeem Zombies code (2,500)
2. Pick starter class (Medic default)
3. Handgun → shotgun → rifle
4. Gear: barricade → turret behind cover → 1 health upgrade → save for class
5. Common mistakes（5 条）

### Credit milestone 表
| Credits | Unlock |
|---------|--------|
| 2,500 | Zombies code |
| 5k–8k | Shotgun upgrade |
| 10k | Medic |
| 15k | Marksman |
| 20k | Engineer |
| 25k | Ninja (skip) |
| 50k | Demolitionist |
| 75k | Tactician |
| 200k | Bastion |
| 250k | Necromancer |

### First 5 runs 计划表
| Run | Class | Weapon | Credit target | Action |
|-----|-------|--------|---------------|--------|
| 1 | Survivor | Handgun→Shotgun | Redeem code | Barricade + turret |
| 2 | Survivor/Medic | Shotgun→Rifle | 10k+ | Bank Medic/Marksman |
| 3 | Medic/Marksman | Rifle | 15k+ | Learn kit |
| 4–5 | Marksman | Rifle | Bank 75k | Sonar Ping, Auto Skip discipline |

### Team roles（4 角色）
- Support: Medic
- DPS carry: Marksman
- Anchor: Engineer→Tactician
- Crowd control: Demolitionist

### Rooftop Map 新手须知
- 2026-04-18 替换 Square Arena
- 楼梯间 chokepoint，非 open field
- 4 月前攻略部分过时

---

## 7. Best Loadouts `/best-loadouts/`

### 5 种 playstyle 框架
1. **Solo Beginner:** Medic, handgun→shotgun, barricade+turret
2. **Team Support:** Medic+Tactician, barricades+healing tower
3. **Credit Farming:** Marksman, rifle+Deadeye+Sonar
4. **High Wave Push:** Tactician+Necromancer+Marksman+Medic
5. **Leaderboard:** Necromancer, rifle, Soul Harvest+Death Nova timing

### 4 条决策原则
1. Role first, weapon second
2. Anchor before scale
3. Save for class unlocks
4. Auto Skip only when ahead

### Rooftop Map loadout 调整
- Solo: Tactician > Medic on Rooftop
- Team: one player per entry point
- Leaderboard: Necromancer+Tactician funnel meta

---

## 8. Waves `/waves/`

### Core loop（5 步）
Spawn → survive wave → earn Credits → buy phase upgrades → push wave counter → Auto Skip vote

### 三阶段
- **Early:** bank credits, handgun→shotgun, no class swap
- **Mid-late:** class tools (Tactician barricades, Demo bombs, Necro Death Nova)
- **Team roles:** Anchor/Carry/Sustain/Scaler

### Credit spending 三阶段
- Early: weapon only
- Mid: first class unlock + health
- Late: bank toward Legendary

### Auto Skip 规则
**Vote yes when:** barricade placed, turret behind, shotgun upgrade, team ready, mid-late outscaling  
**Vote no when:** teammate placing, mid-upgrade, still on handgun, after wipe, early banking

### Nightmare Mode（2026-05-08 确认存在，机制未验证）

### Class transition 三阶段
- Stage 1: Medic/Marksman (0–15k)
- Stage 2: Tactician/Demo (15k–75k)
- Stage 3: Bastion/Necromancer (200k+)

### Hardcore nerf: 10→7.5 credits/zombie (May 8 patch)

---

## 9. Enemies `/enemies/`

### Verified facts
- 500+ enemies per session
- Elite zombies exist; Vanguard Turret targets elites
- Necromancer uses fallen zombie corpses
- New movement system 2026-04-18

### Upcoming: VOLATILE（dev preview 2026-02-07, not live）

### Targeting priority
1. Elites first
2. Group clears (Demo/Necro AoE)
3. Stragglers (Marksman Deadeye)
4. VOLATILE when live → treat as elite

### Class counters（6 职业 vs 敌人类型）
- Tactician: elite auto-target
- Necromancer: soul loop scales with density
- Demolitionist: pack disruption
- Marksman: line clears + Sonar pre-mark
- Bastion: Bunker vs heavy waves
- Medic: attrition sustain + healing credits

### Wave phases density
- Early: sparse, bank credits
- Mid: packs + elites, barricades critical
- Late: 500+ total, elite stacking, Necro/Bastion peak

---

## 10. Maps `/maps/`

### Current: Rooftop Map（2026-04-18 live）
- Replaced Square Arena
- Community vote 215 YES vs 14 NO
- Elevation, stairwells, chokepoints
- **FPS issue:** 242/300 reported lower FPS poll

### Upcoming: Atlantis Map（2026-05-17 dev preview only, NOT live）

### Best classes on Rooftop
- S: Necromancer (Death Nova in funnels)
- A: Tactician (barricades at stairs), Marksman (sightlines)
- B: Demolitionist (Shockwave at stair openings)

### Previous: Square Arena（2025-12-13 to 2026-04-18, retired）

### Melee weapons poll: 681 YES vs 68 NO (91%, not confirmed release)

---

## 11. Leaderboard `/leaderboard/`

### Scoring
- Score = highest wave in single run
- 25 players co-op default
- Auto Skip compresses time but risky

### Best team comp
- Necromancer (scaler)
- Tactician (anchor)
- Marksman (carry)
- Medic (sustain)

### Pacing（5 步）
1. Redeem code
2. Bank waves 1–3, no skip until barricade+turret
3. Mid: Marksman rifle, Tactician barricades
4. Late: Necromancer lead, Death Nova on compressed packs only
5. Sonar Ping + Vanguard Turret for elites

### Data gaps
- Top player names in-game only
- Seasonal vs all-time unknown

---

## 12. Update Log `/update-log/`

### May 18 2026 Discord findings
- No new code (#codes still Zombies only)
- Atlantis footage (preview)
- Galactic guns preview (F2P)
- Galactic Crates poll: event currency leads

### Key patches（时间倒序）
| Date | Event |
|------|-------|
| 2026-05-17 | Atlantis + galactic guns sneak peek |
| 2026-05-16 | Galactic Crates economy poll |
| 2026-05-08 | **Mini Content Update:** World Ender, Grenade Launcher, Tommy Gun, Nightmare Mode, Necro buff, Hardcore nerf |
| 2026-04-18 | Rooftop Map + new zombie movement |
| 2026-02-01 | Necro credit fix, turret minion fix, Medic healing credits |
| 2026-01-31 | Classes Update shipped |
| 2026-01-14 | Silent update |

### Sneak peeks tracked
- VOLATILE zombie
- Goo Splasher
- World Ender (preview→shipped May 8)
- Cosmic Pistol
- Galactic guns batch

---

## 13. Discord `/discord/`

### Official links
- Discord: discord.com/invite/fPQDZ2Svtv (~24,818 members May 18)
- Roblox: place 114204398207377
- Group: 561990553 Nectarforge Studios

### Channels audited (May 18)
| Channel | Finding |
|---------|---------|
| #patch-notes | May 8 Mini Content Update latest |
| #announcements | Class suggestions drive |
| #codes | Zombies only |
| #sneak-peeks | Atlantis + galactic guns May 17 |
| #polls | Galactic Crates currency poll |
| #game-night / #giveaways | Community events |

### Cannot republish
- Private/staff content
- Full Discord post copies
- Leaderboard player names without permission

---

## 竞品方法论（我们要学的）

1. **来源标注：** 每条事实链 Discord message / API / media source
2. **诚实 gap：** 明确写 "in-game only", "not invented"
3. **Last checked 日期：** 每页顶部
4. **Fast answer 区块：** 搜索意图直接答案
5. **FAQ schema：** 每页 4–6 条
6. **内部链接网：** 每页链 3–5 相关页
7. **Discord deep-dive：** 差异化 freshness

## 竞品缺失（我们要补）

1. ❌ 交互工具（Credits Planner、Loadout Builder）
2. ❌ Codes 用户反馈 / 成功率投票
3. ❌ GALACTIC disputed 状态诚实标注
4. ❌ 葡语版（可选 backlog；西语不做）
5. ❌ Galactic Event 独立页（活动截止 6/16）

---

*本文档随抓取更新。数据已结构化至 `src/data/*.json`。*
