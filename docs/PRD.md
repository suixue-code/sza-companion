# Survive Zombie Arena Companion — 产品需求文档（PRD）

**文档版本：** v1.0  
**最后更新：** 2026-05-20  
**关联文档：** [BUSINESS_PLAN.md](./BUSINESS_PLAN.md)  
**技术基线：** 复用 `slime-rng-guides-tools`（Astro + Cloudflare Pages + JSON 数据层）

---

## 0. 文档说明

### 0.1 目的

本 PRD 将商业计划拆解为 **可逐条开发、逐条验收** 的功能清单。每个功能包含：

- 功能 ID（用于 issue / 看板）
- 优先级（P0 必做 / P1 应做 / P2 可选）
- 用户故事
- 功能描述
- 页面路由
- 数据需求
- UI/交互规格
- 验收标准（Acceptance Criteria）
- 依赖项

### 0.2 分期总览

| 期 | 周期 | 主题 | 功能点数 |
|----|------|------|----------|
| **Phase 0** | 启动前 2–3 天 | 项目脚手架 + 数据模型 | 8 |
| **Phase 1** | 第 1–2 周 | MVP：Codes + Planner + 基础内容 | 22 |
| **Phase 2** | 第 3–4 周 | 工具加深 + Tier + Update | 18 |
| **Phase 3** | 第 5–8 周 | 西语 + 增长 + 广告 + 长尾 | 16 |
| **Phase 4** | 第 3 月+ | 扩展工具 + 订阅评估 | 10 |

### 0.3 全局约定

**命名与合规**
- 站点品牌：`SZA Companion`（可在配置中修改）
- 每页页脚：`Unofficial fan site. Not affiliated with Roblox Corporation or Nectarforge Studios.`
- 禁止页面 title 含 `Official`

**日期字段**
- 全站统一 `last_reviewed` / `last_verified` ISO 8601 格式
- 展示格式：`May 20, 2026`（en）/ `2026年5月20日`（zh，后期）

**来源标注**
- 所有 codes、数值、更新必须链出来源或标注 `community_reported` / `in_game_verified` / `unverified`

**功能 ID 格式**
- `P0-001`、`P1-012` 等（P0=Phase 0，P1=Phase 1，以此类推）

---

## Phase 0 — 项目脚手架（启动前 2–3 天）

### P0-001 初始化 Astro 项目

| 项 | 内容 |
|----|------|
| **优先级** | P0 |
| **用户故事** | 作为开发者，我需要从 slime-rng 模板 fork 出干净的项目骨架，以便快速开发。 |
| **描述** | 复制/adapt slime-rng-guides-tools 目录结构，移除 Slime RNG 专属内容，保留 BaseLayout、SEO、i18n 框架、codes 组件模式。 |
| **交付物** | 可 `npm run dev` / `npm run build` 的空站 |
| **验收标准** | ① `npm run build` 无错误 ② 首页可访问 ③ 无 Slime RNG 文案残留 |

**目录结构（目标）**
```
survive-zombie-arena-copy/
├── src/
│   ├── components/
│   ├── data/
│   ├── i18n/
│   ├── layouts/
│   ├── lib/
│   ├── pages/
│   └── styles/
├── public/
├── docs/
├── astro.config.mjs
└── package.json
```

---

### P0-002 站点全局配置

| 项 | 内容 |
|----|------|
| **优先级** | P0 |
| **描述** | 创建 `src/data/site-meta.json`，包含品牌名、域名、Roblox 链接、Discord 链接、开发者群组链接。 |
| **数据字段** | `siteBrandName`, `siteOrigin`, `robloxExperienceUrl`, `robloxExperienceLabel`, `discordInviteUrl`, `robloxGroupUrl`, `placeId`, `universeId`, `lastPublicReview` |
| **验收标准** | ① 全站通过 import 读取 ② 修改一处即可更新全站链接 |

**初始值示例**
```json
{
  "siteBrandName": "SZA Companion",
  "siteOrigin": "https://szacompanion.com",
  "robloxExperienceUrl": "https://www.roblox.com/games/114204398207377/Survive-Zombie-Arena",
  "robloxExperienceLabel": "Survive Zombie Arena on Roblox",
  "discordInviteUrl": "https://discord.com/invite/fPQDZ2Svtv",
  "robloxGroupUrl": "https://www.roblox.com/communities/561990553",
  "placeId": "114204398207377",
  "lastPublicReview": "2026-05-20"
}
```

---

### P0-003 核心 JSON 数据 schema 定义

| 项 | 内容 |
|----|------|
| **优先级** | P0 |
| **描述** | 在 `src/types.ts` 定义全站 TypeScript 类型。 |
| **类型清单** | `CodeEntry`, `ClassEntry`, `WeaponEntry`, `UpdateEntry`, `EventEntry`, `SourceLedgerEntry`, `VerificationReport` |
| **验收标准** | ① 所有 data JSON 有对应类型 ② `npm run build` 类型检查通过 |

**CodeEntry 完整 schema**
```typescript
interface CodeEntry {
  id: string;                    // slug, e.g. "zombies"
  code: string;                  // 显示用 "Zombies"
  reward: string;                // "2,500 Credits"
  rewardAmount?: number;         // 2500
  status: 'active' | 'expired' | 'disputed' | 'unverified';
  firstSeen?: string;            // ISO date
  lastVerified?: string;         // ISO date
  verificationMethod: 'in_game' | 'discord' | 'community_report' | 'media_report';
  sources: { label: string; url: string; checkedAt: string }[];
  communityFeedback?: {
    successVotes: number;
    failVotes: number;
    successRate?: number;        // 计算字段
  };
  notes?: string;
}
```

**ClassEntry 完整 schema**
```typescript
interface ClassEntry {
  id: string;
  name: string;
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary';
  costCredits: number;
  role: 'dps' | 'support' | 'defense' | 'control' | 'starter';
  tierSolo: 'S' | 'A' | 'B' | 'C';
  tierTeam: 'S' | 'A' | 'B' | 'C';
  tierFarm: 'S' | 'A' | 'B' | 'C';
  tierBeginner: 'S' | 'A' | 'B' | 'C';
  abilities: { name: string; description: string; rarity?: string }[];
  bestFor: string[];
  synergies: string[];           // class ids
  counters: string[];
  unlockAdvice: string;
  notes?: string;
}
```

---

### P0-004 初始数据文件填充

| 项 | 内容 |
|----|------|
| **优先级** | P0 |
| **描述** | 创建并填充 MVP 所需 JSON 数据文件。 |
| **文件清单** | `codes.json`, `classes.json`, `weapons.json`, `weapon-progression.json`, `source-ledger.json`, `events.json`, `updates.json` |
| **验收标准** | ① codes 至少 2 条（Zombies + GALACTIC disputed）② classes 9 个 ③ weapons 核心 progression 路径 |

**classes.json 必须包含的 9 个职业**
Survivor(0), Medic(10000), Marksman(15000), Engineer(20000), Ninja(25000), Demolitionist(50000), Tactician(75000), Bastion(200000), Necromancer(200000-250000 标注范围)

**weapons progression 最小集**
Handgun → Shotgun(~150) → Rifle(~750) → Slot 4 级武器名（Minigun, Arctic Striker 等，标注 public_source）

---

### P0-005 全局 Layout 与合规组件

| 项 | 内容 |
|----|------|
| **优先级** | P0 |
| **路由** | 全站 |
| **组件** | `BaseLayout.astro`, `Header.astro`, `Footer.astro`, `DisclaimerBanner.astro` |
| **Header 导航（Phase 1）** | Home, Codes, Tools ▾ (Credit Planner), Guides ▾ (Beginner, Tier List), Events, Updates |
| **Footer 必须含** | About, Privacy, Terms, Disclaimer, Roblox 官方链接, Discord 链接, last_reviewed |
| **验收标准** | ① 移动端 hamburger 可用 ② Disclaimer 每页可见 ③ 外链 `rel="noopener noreferrer"` |

---

### P0-006 SEO 基础设施

| 项 | 内容 |
|----|------|
| **优先级** | P0 |
| **描述** | 移植 `lib/seo.ts`：collectionSchema, faqSchema, breadcrumbSchema, webApplicationSchema |
| **全局** | `BaseHead.astro`：title template `%s | SZA Companion`, og:image, canonical, robots |
| **验收标准** | ① 首页有 JSON-LD ② 每页 unique title/description ③ sitemap.xml 自动生成 ④ robots.txt 允许 crawl |

---

### P0-007 设计系统 / 样式基线

| 项 | 内容 |
|----|------|
| **优先级** | P0 |
| **描述** | 移植 global.css，定义 SZA 主题色（僵尸/竞技场风格，区别于 Slime RNG 绿色） |
| **CSS 变量** | `--color-primary`, `--color-accent`, `--color-bg`, `--color-surface`, `--radius`, `--font-display` |
| **组件类** | `.btn.primary`, `.btn.secondary`, `.tool-panel`, `.metric`, `.notice`, `.trust-row` |
| **验收标准** | ① 与 slime-rng 组件类名兼容 ② 移动端 375px 无横向滚动 |

---

### P0-008 部署流水线

| 项 | 内容 |
|----|------|
| **优先级** | P0 |
| **描述** | Cloudflare Pages 配置，绑定域名（或先用 *.pages.dev） |
| **验收标准** | ① push 自动部署 ② HTTPS 生效 ③ 生产 build 成功 |

---

## Phase 1 — MVP（第 1–2 周）

> **目标：** 上线可搜索、可使用的核心站；玩家搜 codes 能进来，用完 Planner 能留下。

---

### P1-001 首页（Home）

| 项 | 内容 |
|----|------|
| **优先级** | P0 |
| **路由** | `/` |
| **用户故事** | 作为玩家，我搜索 "survive zombie arena" 进入站点后，能立刻知道这是什么、该点哪里。 |
| **页面模块** | ① Hero：品牌 + 一句话价值 + 3 CTA ② 快捷入口 grid ③ 活跃 codes 摘要（条数 + 最后验证）④ Planner 推广卡片 ⑤ FAQ ⑥ last_reviewed |
| **CTA 按钮** | `Check Codes` → /codes/ · `Plan Credits` → /tools/credit-planner/ · `Beginner Guide` → /guides/beginner/ |
| **SEO** | title: `Survive Zombie Arena Codes, Tools & Guides` · description 含 unofficial、last reviewed 日期 |
| **Schema** | collectionSchema + faqSchema（5 条 FAQ） |
| **验收标准** | ① LCP < 2.5s ② 3 个 CTA 可点击 ③ 显示 active codes 数量 ④ FAQ 可展开或静态展示 ⑤ 含 disclaimer |

**首页 FAQ 必须包含**
1. Is this official?
2. How often are codes updated?
3. What is the Credit Planner?
4. Does the planner connect to my Roblox account?
5. Where to play the game?

---

### P1-002 Codes 监控页

| 项 | 内容 |
|----|------|
| **优先级** | P0 |
| **路由** | `/codes/` |
| **用户故事** | 作为玩家，我要复制可用 code，并知道它最后什么时候被验证过、来源是哪里。 |
| **页面结构** | ① Fast Answer 区：当前推荐 code + 复制按钮 ② Active codes 表格 ③ Disputed/Unverified 区 ④ Expired 区 ⑤ Redeem 步骤（5 步 + 截图占位）⑥ 来源说明 ⑦ FAQ |
| **Active 表格列** | Code · Reward · Status · Last Verified · Sources · Copy |
| **Status 徽章** | `active`(绿) · `disputed`(黄) · `expired`(灰) · `unverified`(橙) |
| **复制交互** | 点击 Copy → clipboard API → toast "Copied!" |
| **Codes 页 CTA** | 复制按钮旁：`Got 2,500 Credits? Plan your next unlock →` 链到 Planner |
| **组件** | 复用/adapt `CodesActiveTable`, `CodesOtherTable`, `CodeSourceBlock`, `CodesHonestyNotice` |
| **SEO** | title: `Survive Zombie Arena Codes (May 2026) — Verified List` |
| **验收标准** | ① Zombies 显示 active ② GALACTIC 显示 disputed（若未游戏内验证）③ 每 code 有 last_verified ④ 复制功能移动端可用 ⑤ Redeem 步骤完整 ⑥ 有 honesty notice |

---

### P1-003 Codes 数据管理与来源账本

| 项 | 内容 |
|----|------|
| **优先级** | P0 |
| **描述** | 实现 codes 数据层 + `source-ledger.json` 更新流程 |
| **source-ledger 字段** | `captureDate`, `sources[]: { name, url, codesReported, checkedAt }`, `notes` |
| **人工流程文档** | 写入 `docs/CODES_UPDATE_RUNBOOK.md`：每周检查 Discord #codes、RoCodes、Destructoid；游戏内实测；更新 JSON |
| **验收标准** | ① 修改 codes.json 后 rebuild 即可更新页面 ② source-ledger 有至少 3 个来源快照 ③ runbook 文档存在 |

---

### P1-004 Credits Spending Planner（核心工具）

| 项 | 内容 |
|----|------|
| **优先级** | P0 |
| **路由** | `/tools/credit-planner/` |
| **用户故事** | 作为玩家，我输入当前 Credits 和目标玩法，得到下一步该买什么、还差多少、建议攒到什么再解锁。 |
| **输入字段** | ① Current Credits（number, min 0）② Goal（select）③ Already owned classes（multi-checkbox）④ Optional: sessions per day（number, default 3） |
| **Goal 选项** | `farm_credits` · `unlock_first_class` · `push_necromancer` · `solo_high_wave` · `team_support` · `balanced_progression` |
| **输出字段** | ① Recommended next action（文字）② Target unlock（class/weapon）③ Credits gap ④ Estimated sessions（粗算，标注 estimate）⑤ Priority checklist（3–5 条）⑥ Warning notices |
| **推荐规则 v1（硬编码规则引擎）** | 见下方规则表 |
| **UI** | 左侧表单 + 右侧结果 panel；移动端 stacked |
| **Schema** | webApplicationSchema + faqSchema |
| **免责声明** | 结果区固定：`Estimate only. Based on public class costs as of {date}. Does not read your Roblox account.` |
| **验收标准** | ① 输入 12500 credits + goal unlock_first_class → 推荐 Marksman 或继续攒 ② 输入 60000 + push_necromancer → 提示别乱花、继续攒 ③ 已拥有 Medic 不再推荐 Medic ④ 纯客户端计算，无 API 请求 ⑤ 移动端可用 |

**Planner 规则 v1**

| 条件 | 推荐 |
|------|------|
| credits < 10000, no class, goal=unlock_first_class | 继续攒到 10000 → Medic；或 15000 → Marksman（标注 Marksman 性价比更高） |
| credits >= 10000 && < 15000, no class | 买 Medic 或攒到 Marksman |
| credits >= 15000 && < 50000, goal=solo_high_wave | Marksman + 武器升级优先于 Demolitionist |
| credits >= 50000 && < 75000 | 不推荐 Demolitionist（除非 goal=team_support）；建议攒 Tactician |
| credits >= 150000 && < 200000, goal=push_necromancer | 警告：勿买 Bastion/杂项；继续攒 Necromancer |
| credits >= 200000, no Necromancer | 解锁 Necromancer |
| any, goal=farm_credits | 武器路线 handgun→shotgun→rifle；不推荐 early class 乱买 |
| credits < 150, in-run context note | 提示局内先攒 shotgun |

---

### P1-005 Beginner Guide

| 项 | 内容 |
|----|------|
| **优先级** | P0 |
| **路由** | `/guides/beginner/` |
| **用户故事** | 作为新手，我要知道前 30 分钟该做什么、Credits 别浪费在哪。 |
| **内容结构** | ① First 5 minutes ② First 30 minutes ③ Credits 三原则 ④ 第一局武器路线 ⑤ 第一个 class 该买谁 ⑥ 常见错误 5 条 ⑦ 嵌入 Planner CTA |
| **常见错误清单** | 乱买炮塔、过早 Auto Skip、忽略 codes、wave 15 还没 shotgun、public 房乱花 |
| **SEO** | title: `Survive Zombie Arena Beginner Guide — First 30 Minutes` |
| **验收标准** | ① 3000 字以内（英文）② 每节有 actionable bullet ③ 链到 codes/classes/planner ④ 含 last_reviewed |

---

### P1-006 Galactic Event 时效页

| 项 | 内容 |
|----|------|
| **优先级** | P0 |
| **路由** | `/events/galactic/` |
| **用户故事** | 作为玩家，我要知道 Galactic Event 是什么、Void Shards 怎么拿、Crate 值不值得、什么时候结束。 |
| **内容模块** | ① Event 概述 ② 截止日期 countdown（硬编码 end date，JS 计算剩余天）③ Void Shards 获取（1% Galactic Zombie）④ Galactic Crate 武器列表 ⑤ 50 shards 门槛 ⑥ Atlantis 地图状态（标注 preview vs live）⑦ FAQ |
| **数据** | `events.json` → galactic event entry |
| **状态标注** | 未官方确认的数据标 `[Unverified]` 或 `[Preview only]` |
| **SEO** | title: `Survive Zombie Arena Galactic Event Guide (2026)` |
| **验收标准** | ① 显示 end date ⑥16 或 configurable ② 武器列表有来源 ③ 不过度承诺未验证数值 ④ countdown 组件工作 |

---

### P1-007 Classes 索引页（轻量）

| 项 | 内容 |
|----|------|
| **优先级** | P1 |
| **路由** | `/classes/` |
| **描述** | 表格展示 9 职业：Name · Cost · Role · Solo Tier · Team Tier · Link |
| **验收标准** | ① 数据来自 classes.json ② 每行链到 anchor 或 Phase 2 详情页 |

---

### P1-008 Weapons 索引页（轻量）

| 项 | 内容 |
|----|------|
| **优先级** | P1 |
| **路由** | `/weapons/` |
| **描述** | 武器 progression 路线图：Slot 1–4，early→late |
| **验收标准** | ① 展示 handgun→shotgun→rifle 成本 ② 标注 public source |

---

### P1-009 About 页

| 项 | 内容 |
|----|------|
| **优先级** | P0 |
| **路由** | `/about/` |
| **内容** | 非官方声明 · 数据来源方法 · 更新频率 · 联系方式 · 与 slime-rng 同类方法论 |
| **验收标准** | ① 明确 not affiliated ② 说明 verification 流程 |

---

### P1-010 Privacy 页

| 项 | 内容 |
|----|------|
| **优先级** | P0 |
| **路由** | `/privacy/` |
| **内容** | 标准隐私政策：cookies、analytics、广告、不收集 Roblox 账号 |
| **验收标准** | ① 声明 Planner 数据不上传服务器 |

---

### P1-011 Terms 页

| 项 | 内容 |
|----|------|
| **优先级** | P0 |
| **路由** | `/terms/` |
| **内容** | 免责声明：信息按原样提供、codes 可能失效、非游戏攻略官方 |
| **验收标准** | ① 与 About 一致 |

---

### P1-012 Contact 页

| 项 | 内容 |
|----|------|
| **优先级** | P1 |
| **路由** | `/contact/` |
| **内容** | 联系邮箱或 form（可 mailto:）· 报告 code 失效 · 纠错 |
| **验收标准** | ① 至少一种联系方式可达 |

---

### P1-013 Header 导航与站内链接

| 项 | 内容 |
|----|------|
| **优先级** | P0 |
| **描述** | 完成 Phase 1 全部路由的导航链接；面包屑组件 |
| **验收标准** | ① 无 dead link ② 移动端导航含 Codes 和 Planner |

---

### P1-014 Sitemap 与 RSS（可选）

| 项 | 内容 |
|----|------|
| **优先级** | P1 |
| **路由** | `/sitemap-index.xml`, `/rss.xml` |
| **验收标准** | ① sitemap 含所有 Phase 1 页面 ② RSS 推送 updates/codes 变更（可选） |

---

### P1-015 404 页

| 项 | 内容 |
|----|------|
| **优先级** | P1 |
| **路由** | `/404` |
| **验收标准** | ① 链回首页、codes、planner |

---

### P1-016 Codes 页 — 游戏内验证流程（运营）

| 项 | 内容 |
|----|------|
| **优先级** | P0 |
| **类型** | 运营 / 非代码 |
| **描述** | 上线前必须进游戏实测 Zombies + GALACTIC；更新 codes.json status |
| **验收标准** | ① 至少 1 个 code 标记 `in_game_verified` + 日期 ② GALACTIC 状态有明确结论 |

---

### P1-017 Planner 单元测试

| 项 | 内容 |
|----|------|
| **优先级** | P1 |
| **描述** | 为规则引擎写 vitest 测试，覆盖 P1-004 规则表所有分支 |
| **文件** | `src/lib/credit-planner.test.ts` |
| **验收标准** | ① ≥ 10 个 test case ② CI 通过 |

---

### P1-018 首页 + Codes SEO 微调

| 项 | 内容 |
|----|------|
| **优先级** | P1 |
| **描述** | 确保 codes 页 meta 含月份年份；h1 含 primary keyword |
| **验收标准** | ① codes 页 h1 含 "Survive Zombie Arena Codes" ② meta description < 160 字符 |

---

### P1-019 结构化数据验证

| 项 | 内容 |
|----|------|
| **优先级** | P1 |
| **描述** | Google Rich Results Test 验证首页、codes、planner |
| **验收标准** | ① 无 critical errors |

---

### P1-020 性能基线

| 项 | 内容 |
|----|------|
| **优先级** | P1 |
| **验收标准** | ① Lighthouse mobile Performance ≥ 85 ② 首页 total JS < 100KB gzip |

---

### P1-021 IMPLEMENTATION_STATUS 页（内部）

| 项 | 内容 |
|----|------|
| **优先级** | P2 |
| **路由** | `/IMPLEMENTATION_STATUS/`（noindex） |
| **描述** | 对照 PRD 功能 ID 展示完成状态，方便开发跟踪 |
| **验收标准** | ① 列出 P0/P1 功能 ID + checkbox |

---

### P1-022 Phase 1 上线检查清单

| 项 | 内容 |
|----|------|
| **优先级** | P0 |
| **检查项** | ① 域名/DNS ② SSL ③ 全部 P0 功能验收 ④ robots.txt ④ sitemap submit Search Console ⑤ 至少 1 次 codes 游戏内验证 ⑥ disclaimer 全站 ⑦ 无 broken link |
| **验收标准** | 全部勾选方可公开推广 |

---

## Phase 2 — 工具加深 + 内容扩展（第 3–4 周）

> **目标：** Loadout Builder 上线；多维 Tier；Update Log 抢时效词；补齐精选 guide。

---

### P2-001 Loadout Builder

| 项 | 内容 |
|----|------|
| **优先级** | P0 |
| **路由** | `/tools/loadout-builder/` |
| **用户故事** | 作为玩家，我选择场景和已有职业，得到推荐配装 + 队伍缺什么角色。 |
| **输入** | ① Scenario: solo / public / duo / full_team / leaderboard ② Owned classes（multi）③ Target wave（optional number）④ Preferred role（optional） |
| **输出** | ① Recommended class to play ② Weapon path reminder ③ Gear suggestions（barricade/turret/mine 文字建议）④ Team gaps（如缺 Medic、缺 Tactician）⑤ Share text（纯文本，可复制到 Discord） |
| **规则 v1** | team 缺 sustain → 推荐 Medic；缺 defense anchor → Tactician；缺 late scaling → Necromancer；solo → Marksman/Necromancer |
| **Schema** | webApplicationSchema |
| **验收标准** | ① 选 team + 只选 Necromancer → 提示缺 Medic/Tactician ② Share text copy 可用 ③ 移动端 layout OK |

---

### P2-002 多维 Tier List 页

| 项 | 内容 |
|----|------|
| **优先级** | P0 |
| **路由** | `/guides/tier-list/` |
| **用户故事** | 作为玩家，我要按 Solo / Team / Farm / Beginner 四种场景看职业排名，而不是一个总榜。 |
| **UI** | Tab 切换 4 个场景；每 tab 一张 S/A/B/C 表 |
| **数据** | classes.json 的 tierSolo/tierTeam/tierFarm/tierBeginner |
| **SEO** | title: `Survive Zombie Arena Tier List — Solo, Team & Farm Rankings` |
| **验收标准** | ① 4 个 tab 可切换 ② 每 class 有 cost 显示 ③ 底部链 planner ④ 注明 tier 基于 public sources + last_reviewed |

---

### P2-003 Update Log / 版本时间线

| 项 | 内容 |
|----|------|
| **优先级** | P0 |
| **路由** | `/updates/` |
| **用户故事** | 作为回流玩家，我要看最近更新了什么、有没有新 code、Galactic 何时上线。 |
| **UI** | 时间线列表：Date · Title · Summary · Tags · Sources |
| **数据** | `updates.json`，每条含 `sources[]` |
| **初始条目** | Galactic Event launch · GALACTIC code 争议 · Atlantis preview · Rooftop map · Necromancer fixes（来自公开来源） |
| **SEO** | title: `Survive Zombie Arena Updates — Patch Notes & Events` |
| **验收标准** | ① ≥ 5 条更新记录 ② 每条有 source ③ 按日期降序 |

---

### P2-004 Necromancer 深度指南

| 项 | 内容 |
|----|------|
| **优先级** | P1 |
| **路由** | `/guides/necromancer/` |
| **内容** | Soul Harvester → Raise Undead → Death Nova 循环 · 站位 · 技能保留 · 升级优先级 · 不适合场景 |
| **验收标准** | ① ≥ 1500 词 ② 含 ability 名称 ③ 链 tier-list + planner |

---

### P2-005 Credits Farm 指南

| 项 | 内容 |
|----|------|
| **优先级** | P1 |
| **路由** | `/guides/credits-farm/` |
| **内容** | credits/min 概念 · 武器路线 · Demolitionist AFK 方法（标注 PC/风险）· 常见错误 · **不推荐脚本** |
| **验收标准** | ① 明确合法 farm ② 不链接 script 站 |

---

### P2-006 Wave Guide（中高波）

| 项 | 内容 |
|----|------|
| **优先级** | P1 |
| **路由** | `/guides/waves/` |
| **内容** | Early/Mid/Late 三阶段策略 · Auto Skip 风险 · Elite 优先级 |
| **验收标准** | ① 三阶段结构 ② 链 loadout builder |

---

### P2-007 Medic + Tactician Combo 指南

| 项 | 内容 |
|----|------|
| **优先级** | P1 |
| **路由** | `/guides/tactician-medic-combo/` |
| **内容** | 双人配合 · 技能分工 · 何时放 turret/barricade · Destructoid 共识 + 来源 |
| **验收标准** | ① 明确 2-player combo ② 链 loadout builder team mode |

---

### P2-008 Class 详情页（模板化）

| 项 | 内容 |
|----|------|
| **优先级** | P1 |
| **路由** | `/classes/[id]/` 或 `/guides/classes/[id]/` |
| **描述** | 基于 `GuideTemplate.astro` 生成 9 个 class 页（可 Phase 2 先做 S/A 级 5 个） |
| **每页模块** | Cost · Abilities · Tier badges · Best for · Synergies · Counter tips · Unlock advice |
| **验收标准** | ① 至少 5 个 class 页上线 ② 模板统一 ③ JSON 驱动 |

---

### P2-009 Codes 用户反馈（轻量）

| 项 | 内容 |
|----|------|
| **优先级** | P1 |
| **描述** | Codes 页每 code 旁 👍/👎 或链到 `/contact/?subject=code-fail`；暂不建后端，可用 Formspree/Cloudflare Worker 或纯 mailto |
| **验收标准** | ① 用户能报告 code 失效 ② 页面说明反馈如何影响 status |

---

### P2-010 Discord 监控 Runbook

| 项 | 内容 |
|----|------|
| **优先级** | P1 |
| **文件** | `docs/DISCORD_MONITOR_RUNBOOK.md` |
| **内容** | 每周检查 #codes #patch-notes #announcements；更新 codes.json + updates.json 流程 |
| **验收标准** | ① 文档完整 ② Phase 2 至少执行 2 次并留下 updates 记录 |

---

### P2-011 站内交叉链接优化

| 项 | 内容 |
|----|------|
| **优先级** | P1 |
| **描述** | 每篇 guide 底部 `ToolsGuidesStrip`：链 codes / planner / loadout / tier |
| **验收标准** | ① 所有 guide 页有 strip ② 无 orphan 页 |

---

### P2-012 Open Graph 图片

| 项 | 内容 |
|----|------|
| **优先级** | P2 |
| **描述** | 默认 og:image + codes/planner 专用 social card（1200×630） |
| **验收标准** | ① 分享 Discord/Twitter 有预览 |

---

### P2-013 Search Console 提交与监控

| 项 | 内容 |
|----|------|
| **优先级** | P1 |
| **描述** | 提交 sitemap；记录 baseline impressions/clicks |
| **验收标准** | ① SC 已验证 ② 2 周后有 baseline 截图或记录 |

---

### P2-014–P2-018 精选长尾 Guide（5 篇）

| ID | 路由 | 标题关键词 | 优先级 |
|----|------|-----------|--------|
| P2-014 | `/guides/best-class-solo/` | best class for solo | P1 |
| P2-015 | `/guides/afk-farm/` | afk farm credits | P1 |
| P2-016 | `/guides/best-weapons/` | best weapons tier | P1 |
| P2-017 | `/guides/how-to-redeem-codes/` | how to redeem codes | P2 |
| P2-018 | `/guides/leaderboard/` | wave leaderboard tips | P2 |

**每篇验收：** ≥ 800 词 · 唯一 h1 · last_reviewed · 1 个内链到工具 · FAQ ≥ 3

---

## Phase 3 — 增长与本地化（第 5–8 周）

> **目标：** 英语长尾 SEO；广告变现；分享传播；codes 监控自动化程度提高。

---

### P3-001 西语 i18n 框架 — **已完成**

| 项 | 内容 |
|----|------|
| **状态** | ✅ Done（2026-05-20） |
| **范围** | `es` + `pt-br` + `zh-cn`，见 [LANGUAGE_STRATEGY.md](./LANGUAGE_STRATEGY.md) |
| **验收** | 语言切换器 · hreflang · `/es/` `/pt-br/` `/zh-cn/` 可访问 |

---

### P3-002 小语种核心页（7 页 × 3 语）

| 路由 | es | pt-br | zh-cn |
|------|----|-------|-------|
| `/` | `/es/` | `/pt-br/` | `/zh-cn/` |
| codes | ✅ | ✅ | ✅ |
| credit-planner | ✅ | ✅ | ✅ |
| beginner-guide | ✅ | ✅ | ✅ |
| tier-list | ✅ | ✅ | ✅ |
| galactic | ✅ | ✅ | ✅ |
| wiki hub | ✅ | ✅ | ✅ |

**验收：** 各页完整翻译 · hreflang 正确 · canonical 互指

### P3-003 Loadout 分享卡片

| 项 | 内容 |
|----|------|
| **优先级** | P1 |
| **路由** | Loadout Builder 结果区内 |
| **描述** | 生成纯文本卡片 + 可选 canvas 图片（品牌水印，无官方素材） |
| **格式示例** | `[SZA Companion] Team Loadout · Medic + Tactician · Target Wave 80 · Generated May 20, 2026` |
| **验收标准** | ① Copy 按钮 ② 含站点 URL |

---

### P3-004 Code Alert 邮件订阅（轻量）

| 项 | 内容 |
|----|------|
| **优先级** | P1 |
| **描述** | Codes 页嵌入邮件订阅（Buttondown / MailerLite / ConvertKit） |
| **触发** | 手动：有新 code 验证时发 newsletter |
| **验收标准** | ① 订阅表单可用 ② 隐私说明链接 privacy 页 ③ 不自动滥发 |

---

### P3-005 广告接入

| 项 | 内容 |
|----|------|
| **优先级** | P1 |
| **描述** | AdSense 或同类；codes 页复制区下方 + guide 文中部 |
| **限制** | 不在 planner 输入区放广告；不投违规广告 |
| **验收标准** | ① 广告不挡 CTA ② CLS 不恶化（< 0.1 增量） |

---

### P3-006 长尾 SEO 批次（10 篇）

| 项 | 内容 |
|----|------|
| **优先级** | P1 |
| **主题** | marksman guide · engineer guide · void shards · galactic crate · x2 credits gamepass 值不值 · ninja worth it · bastion guide · how many waves · infinite waves · redeem galactic code |
| **验收标准** | ① 10 页上线 ② 各含 FAQ schema ③ 互链 |

---

### P3-007 Gamepass 值不值分析页

| 项 | 内容 |
|----|------|
| **优先级** | P2 |
| **路由** | `/guides/gamepass/` |
| **内容** | X2 Credits (449 R$) · VIP (649 R$) — 基于 Rolimon's 公开价格；给出 farm 场景建议；**不鼓励消费** |
| **验收标准** | ① 标注价格来源 ② 非付费推广口吻 |

---

### P3-008 站内搜索（可选）

| 项 | 内容 |
|----|------|
| **优先级** | P2 |
| **描述** | 客户端 Pagefind 或 Fuse.js 索引 guides+codes |
| **验收标准** | ① 搜 "necromancer" 返回相关页 |

---

### P3-009 Analytics 接入

| 项 | 内容 |
|----|------|
| **优先级** | P1 |
| **描述** | Plausible / Cloudflare Analytics / GA4（选一） |
| **事件追踪** | `code_copy`, `planner_run`, `loadout_share`, `cta_planner_from_codes` |
| **验收标准** | ① 4 个事件可在 dashboard 看到 ② cookie banner 如需要 |

---

### P3-010 每周内容更新 SOP

| 项 | 内容 |
|----|------|
| **优先级** | P1 |
| **文件** | `docs/WEEKLY_UPDATE_SOP.md` |
| **Weekly checklist** | Discord 检查 · codes 游戏内验证 · updates.json 追加 · last_reviewed 更新 · Search Console 看一眼 |
| **验收标准** | ① 连续 4 周有更新记录 |

---

### P3-011–P3-016 其余增长项

| ID | 功能 | 优先级 | 验收标准 |
|----|------|--------|----------|
| P3-011 | Planner v1.1：保存输入到 localStorage | P1 | 刷新后恢复 credits/goal |
| P3-012 | Planner：武器升级路径可视化进度条 | P2 | 显示 shotgun/rifle 节点 |
| P3-013 | `/discord/` 跳转说明页（非自建 Discord） | P1 | 链官方 Discord + 我们能提供什么 |
| P3-014 | 赞助位占位组件 `SponsorSlot.astro` | P2 | 空态不显示；有 sponsor 配置才渲染 |
| P3-015 | 404/500 友好页西语版 | P2 | /es/404 |
| P3-016 | Phase 3 KPI 回顾模板 | P1 | docs/KPI_REVIEW_TEMPLATE.md |

---

## Phase 4 — 扩展与商业化评估（第 3 月+）

> **前提：** Phase 3 周 UV ≥ 500 或 Planner 周使用 ≥ 200。否则 Phase 4 仅做 P4-001/002/010。

---

### P4-001 Wave Push Planner（简版）

| 项 | 内容 |
|----|------|
| **优先级** | P1 |
| **路由** | `/tools/wave-planner/` |
| **输入** | Target wave · Team composition · Current gear tier |
| **输出** | Early/Mid/Late _checklist（静态规则） |
| **验收标准** | ① 3 阶段 checklist ② 与 wave guide 一致 |

---

### P4-002 会员功能评估文档

| 项 | 内容 |
|----|------|
| **优先级** | P1 |
| **输出** | `docs/MEMBERSHIP_EVAL.md` |
| **评估项** | 去广告 · 多 save slots · code SMS/email alert · 是否值得做 |
| **决策门** | UV/粘性达标才开发 P4-003 |

---

### P4-003 会员/Supporter 页（可选）

| 项 | 内容 |
|----|------|
| **优先级** | P2 |
| **路由** | `/supporter/` |
| **功能** | Stripe/Gumroad 一次性 $3–5 或月付；去广告 + planner 多 profile |
| **验收标准** | ① 支付可用 ② 不承诺游戏内优势 |

---

### P4-004 Code Alert 自动化（可选）

| 项 | 内容 |
|----|------|
| **优先级** | P2 |
| **描述** | Cloudflare Worker cron 检查 Discord/RSS；差异时发邮件/更新 JSON |
| **验收标准** | ① 新 code 来源变更 24h 内站内有反应 |

---

### P4-005 Roblox Survival 迷你榜单（可选）

| 项 | 内容 |
|----|------|
| **优先级** | P2 |
| **路由** | `/stats/` |
| **描述** | 每日快照 SZA CCU/visits/favorites（公开 API 或 Rolimon's 引用） |
| **验收标准** | ① 显示 7 天趋势 ② 标注数据来源 |

---

### P4-006–P4-010 长期项

| ID | 功能 | 优先级 |
|----|------|--------|
| P4-006 | 中文 `/zh-cn/` 6 核心页 | P2 |
| P4-007 | Creator Kit（分享图模板） | P2 |
| P4-008 | LFG 模板生成器（无私信） | P2 |
| P4-009 | B2B 月度数据邮件 | P3 |
| P4-010 | 架构复用到下一 Roblox 游戏评估 | P1 |

---

## 附录 A：完整路由表

| 路由 | Phase | 功能 ID |
|------|-------|---------|
| `/` | 1 | P1-001 |
| `/codes/` | 1 | P1-002 |
| `/tools/credit-planner/` | 1 | P1-004 |
| `/guides/beginner/` | 1 | P1-005 |
| `/events/galactic/` | 1 | P1-006 |
| `/classes/` | 1 | P1-007 |
| `/weapons/` | 1 | P1-008 |
| `/about/` | 1 | P1-009 |
| `/privacy/` | 1 | P1-010 |
| `/terms/` | 1 | P1-011 |
| `/contact/` | 1 | P1-012 |
| `/tools/loadout-builder/` | 2 | P2-001 |
| `/guides/tier-list/` | 2 | P2-002 |
| `/updates/` | 2 | P2-003 |
| `/guides/necromancer/` | 2 | P2-004 |
| `/guides/credits-farm/` | 2 | P2-005 |
| `/guides/waves/` | 2 | P2-006 |
| `/guides/tactician-medic-combo/` | 2 | P2-007 |
| `/guides/classes/[id]/` | 2 | P2-008 |
| `/es/*` | 3 | P3-001–002 |
| `/tools/wave-planner/` | 4 | P4-001 |
| `/stats/` | 4 | P4-005 |

---

## 附录 B：数据文件清单

| 文件 | Phase | 说明 |
|------|-------|------|
| `site-meta.json` | 0 | 全站配置 |
| `codes.json` | 0 | 兑换码 |
| `source-ledger.json` | 0 | 来源快照 |
| `classes.json` | 0 | 职业 |
| `weapons.json` | 0 | 武器 |
| `weapon-progression.json` | 0 | 升级路线 |
| `events.json` | 0 | 活动 |
| `updates.json` | 2 | 更新日志 |
| `planner-presets.json` | 1 | Planner 默认值（可选） |
| `sponsors.json` | 3 | 赞助配置（可选） |

---

## 附录 C：组件清单

| 组件 | Phase | 用途 |
|------|-------|------|
| `BaseLayout.astro` | 0 | 全站布局 |
| `BaseHead.astro` | 0 | SEO meta |
| `Header.astro` / `Footer.astro` | 0 | 导航 |
| `DisclaimerBanner.astro` | 0 | 合规 |
| `CodesActiveTable.astro` | 1 | Codes 表 |
| `CodesHonestyNotice.astro` | 1 | 来源说明 |
| `CreditPlanner.astro` | 1 | 核心工具 |
| `LoadoutBuilder.astro` | 2 | 配装工具 |
| `TierListTabs.astro` | 2 | 多维 tier |
| `UpdateTimeline.astro` | 2 | 更新时间线 |
| `GuideTemplate.astro` | 2 | 指南模板 |
| `ToolsGuidesStrip.astro` | 2 | 交叉链接 |
| `EventCountdown.astro` | 1 | 活动倒计时 |
| `ShareCard.astro` | 3 | 分享卡 |
| `SponsorSlot.astro` | 3 | 赞助 |

---

## 附录 D：开发顺序建议（Critical Path）

```
P0-001 → P0-002 → P0-003 → P0-004 → P0-005 → P0-006 → P0-007 → P0-008
    ↓
P1-002 → P1-003 → P1-004 → P1-001 → P1-005 → P1-006 → P1-009~011 → P1-016 → P1-022
    ↓
P2-001 → P2-002 → P2-003 → P2-004~008 → P2-011 → P2-013
    ↓
P3-001 → P3-002 → P3-005 → P3-009 → P3-006
    ↓
（达标后）P4-001 → P4-002 → P4-003
```

---

## 附录 E：验收签字表（Phase 1 发布）

| 功能 ID | 名称 | 开发完成 | 验收通过 | 备注 |
|---------|------|----------|----------|------|
| P0-001 | 项目初始化 | ☐ | ☐ | |
| P0-002 | 站点配置 | ☐ | ☐ | |
| P0-003 | 类型定义 | ☐ | ☐ | |
| P0-004 | 初始数据 | ☐ | ☐ | |
| P0-005 | Layout | ☐ | ☐ | |
| P0-006 | SEO | ☐ | ☐ | |
| P0-007 | 样式 | ☐ | ☐ | |
| P0-008 | 部署 | ☐ | ☐ | |
| P1-001 | 首页 | ☐ | ☐ | |
| P1-002 | Codes 页 | ☐ | ☐ | |
| P1-003 | Codes 数据 | ☐ | ☐ | |
| P1-004 | Credit Planner | ☐ | ☐ | |
| P1-005 | Beginner | ☐ | ☐ | |
| P1-006 | Galactic Event | ☐ | ☐ | |
| P1-009 | About | ☐ | ☐ | |
| P1-010 | Privacy | ☐ | ☐ | |
| P1-011 | Terms | ☐ | ☐ | |
| P1-016 | 游戏内验证 | ☐ | ☐ | |
| P1-022 | 上线清单 | ☐ | ☐ | |

---

*本 PRD 与 [BUSINESS_PLAN.md](./BUSINESS_PLAN.md) 同步维护。开发时以功能 ID 建 issue，验收后在附录 E 打勾。*
