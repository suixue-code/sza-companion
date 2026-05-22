# Slime RNG Guides & Tools — 二期需求说明

**文档版本**：1.2  
**日期**：2026-05-13  
**实施追踪**：拆解任务与完成状态见 [PHASE_2_TASKS.md](./PHASE_2_TASKS.md)；GSC/复盘流程见 [ANALYTICS_AND_GSC_PLAYBOOK.md](./ANALYTICS_AND_GSC_PLAYBOOK.md)。**协作分工（助手 / 未来 / 负责人）**见 [WORK_SPLIT_AGENT_AND_OWNER.md](./WORK_SPLIT_AGENT_AND_OWNER.md)。**第一波工程交付**（站点元数据、robots、隐私页、Codes 维护链、Goop 阶梯数据化、计算器预设批次、相关文档）已在仓库落地。

**范围**：在「一期已上线、GSC/Bing 已提交」前提下，面向**真实玩家搜索意图**与**后续流量/变现**的工程与内容二期规划。

---

## 1. 背景与二期目标

### 1.1 背景

- 站点为 **Astro 静态站**，生产域名为 `https://slimerngtools.com`，定位为 **非官方**攻略与工具站。
- 一期已具备：Codes 数据页、多篇英文 Guide（`src/lib/guides.ts` + `GuideTemplate`）、食谱检索、Luck 计算器、Rebirth Planner、轻量 Wiki Hub、部分中文页（`src/pages/zh-cn/`）、sitemap、结构化数据基础（`src/lib/seo.ts`）。
- 公开调研（Game8、IGN、Dexerto、各 slime-rng.* 站、通用搜索）显示玩家高意图主题集中在：**兑换码、新手/升级顺序、Goop、Rebirth、配方与区域、稀有度/Tier、概率与规划工具**。

### 1.2 二期总目标（可验收）

1. **流量**：在不大改「非全量 Wiki」定位的前提下，提高 **Codes + 工具页** 的更新频率、可发现性与停留；为 **Goop / Rebirth / 新手** 长尾补充可索引的实体内容或结构化区块。
2. **信任**：把「置信度 / 来源 / 最近核对日期」从文案口号变成 **可维护的数据契约**（减少首页与各页硬编码日期不一致的风险）。
3. **变现准备**：达到可接 **展示类广告联盟** 的最低合规与体验门槛（隐私说明、关键页版式预留、性能与不误导表述），**不**在一期文档中承诺具体收入。

---

## 2. 一期工程现状（事实基线）

以下内容来自当前仓库结构，作为二期的「已具备 / 不重复造轮子」基线。

| 领域 | 现状 |
|------|------|
| 路由与页面 | `src/pages/` 下 codes、guides（beginner/progression/goop/rebirth/best-upgrades/items/rarest-slimes）、recipes、tools（luck-calculator、rebirth-planner）、wiki、`zh-cn` 子集 |
| 指南正文 | 主要英文内容在 `src/lib/guides.ts`；`guide-meta.json` 仅覆盖部分 guide 的元数据 |
| 数据文件 | `src/data/codes.json`、`recipes.json`、`calculator-targets.json`、`lightweight-slimes.json`、`source-ledger.json`、`manual-verification-ledger.json` |
| 工具 | Luck 计算器含 URL 分享、公式说明；Rebirth Planner 为内联脚本 + 硬编码 `goopTargets` 阶梯 |
| i18n | `src/i18n/ui.ts` 导航；`routes.ts` 仅 Goop+Rebirth、recipes 与中文页有明确 alternates；多数英文 guide **无**独立中文镜像 |
| SEO | `BaseHead` canonical、OG、部分页 JSON-LD；`IMPLEMENTATION_STATUS` 仍为 noindex 内部页 |
| 根目录政策文件 | `public/robots.txt` 已入库；隐私政策见 `/privacy/` |

---

## 3. 调研结论摘要（驱动二期的「做什么」）

以下结论用于 **优先级排序**，详细取证见前期对话中的检索归纳。

1. **Codes** 搜索量最大、竞品最多；差异化在于 **更新节奏 + 状态分层（active / expired / unverified）+ 来源与日期**，而非「多堆一个列表」。
2. **新手与升级顺序**（含 Auto Roll、金币与区域节奏）与 **Goop + Rebirth** 为稳定高意图中段内容。
3. **Luck 计算器类工具**在竞品中存在；本站的「估算 + 假设透明」是合理定位，二期应强化 **预设与游戏版本对齐流程**，避免静态过期。
4. **Tier / 稀有史莱姆、配方** 竞品密集；宜走 **可筛选数据 + 置信标签 + 与工具/流程内链** ，避免做成大而全不可维护的百科。
5. **中文** 若持续维护，是英文红海之外的增量渠道；当前中文仅覆盖合并页与食谱，与英文 guide 集 **不对称**。

---

## 4. 差距与机会（二期要解决什么）

| 差距 | 说明 |
|------|------|
| 「最后核对日期」分散 | 首页 `index.astro`、codes 页 hero、部分 schema `dateModified` 等与 `codes.json` / `guides.ts` 内日期 **未单一数据源**，易不同步、损害信任与 E-E-A-T 信号 |
| Codes 运营流程未工程化 | 新码入库、冲突源处理、过期迁移仍偏手工；缺少 **变更记录或自动化检查清单**（可为文档 + 半自动脚本） |
| Rebirth Goop 阶梯与游戏 | `rebirth-planner.astro` 内 `goopTargets` 为硬编码数组，与 `README` 所述「游戏更新后需重验」未在数据层统一 |
| 计算器预设 | `calculator-targets.json` 与游戏版本、公开表一致性 **无版本字段或 changelog** |
| 中文与 hreflang | `BaseHead` 有 `en` / `zh-CN` alternate，但 **仅首页级**；多数子页无对称中文 URL，搜索引擎对双语站点的理解不完整 |
| 变现与合规 | 无统一 **隐私 / Cookie / 第三方脚本** 策略与版位预留；`robots.txt` 未入库 |
| 数据后链路 | README 已写 GSC/分析接入设想；二期需明确 **谁看报表、如何反哺 codes 与预设更新** |

---

## 5. 二期需求包（Epic 级）

以下 Epic 可独立排期；每个 Epic 下列 **建议验收标准**（非穷尽任务列表）。

### Epic A — 站点级「信任与新鲜度」单一数据源

**目标**：消除「页面上写的 checked 日期」与数据 JSON 不一致类问题。

**建议交付**：

- 新增 **站点元数据** 单一来源（例如 `src/data/site-meta.json` 或构建时注入常量），至少包含：`lastPublicReview`（整站公开数据复核日期）、`gameContentVersionLabel`（可选，字符串如「以 2026-05 公开资料为准」）。
- `index.astro`、`codes.astro`、关键 schema 的 `dateModified` **读取同一字段**；文档约定更新流程：改数据必触发的文件清单。
- （可选）在页脚或全局条展示「数据复核日期」，与 GSC 无冲突、不冒充游戏内 patch 版本号。

**验收**：

- 修改一处元数据，首页与 codes 页 eyebrow/可见「最后核对」与 Article `dateModified`（若适用）一致；`npm run build` 通过。

---

### Epic B — Codes 二期：运营效率与冲突透明

**目标**：在保持现有「active / 其他状态 + confidence」模型下，支撑 **高频更新** 与 **多源冲突** 的可读性。

**建议交付**：

- `codes.json` schema 扩展（向后兼容）：例如 `sources[]`（多来源简述）、`conflictNote`（可选）、`expiresAfter`（可选，未知则空）。
- Codes 页增加 **「如何核对我们与 Discord / 官方」** 短区块（静态文案即可），降低用户因失效码流失。
- 维护文档：`.docs/CODES_MAINTENANCE.md`（或并入本文附录）写清：**每周/每次游戏热更新** 的检查顺序与 PR 检查项。

**验收**：

- 至少 1 条示例 code 展示 **多来源** 或 **冲突说明** UI；无游戏内测试条件下仍符合 README 置信度哲学。

---

### Epic C — 工具页二期：版本感 + 可分享性对齐

**目标**：Luck 计算器与 Rebirth Planner 成为 **回访页**，并与攻略内链形成闭环。

**Luck 计算器**

- `calculator-targets.json` 增加 **版本/批次字段**（如 `presetBatchId`），页面展示「预设基于哪一批公开资料」。
- 评估是否增加 **2～3 个高搜索预设**（与调研一致：常见稀有档、Huge 等）——仅当 `source-ledger` 或 manual ledger 有记录时加入，禁止无来源数字。

**Rebirth Planner**

- 将 `goopTargets` 抽至 `src/data/rebirth-goop-ladder.json`（或等价），字段含 `confidence`、`sourceNote`、`lastCheckedAt`；Planner 仅消费数据。
- 与 `guides/rebirth` 内文交叉链接「数字来源」锚点。

**验收**：

- 改 ladder JSON 即可改变 Planner 行为，无需改 Astro 大块内联逻辑（可接受小幅脚本重构）。
- 构建通过；Lighthouse 性能不明显劣化（主观：工具页仍首屏可用）。

---

### Epic D — 攻略内容：高意图长尾与内链拓扑

**目标**：在不改为全量 wiki 的前提下，覆盖调研中的 **明确 how-to 长尾**。

**候选新增或加厚（按优先级排序，实施前需过置信度评审）**：

1. **Redeem codes 专节**：步骤截图位占位 + 与 Roblox UI 路径描述（无截图也可先文字）；目标关键词：`how to redeem slime rng codes`。
2. **「Like + Join group +2 luck」类公开福利**（若可核实来源）：独立短章或并入 beginner；需标注来源与是否随更新失效。
3. **区域解锁与推荐金币门槛**（与 progression 区分：表格式速查 + 低置信标注），数据来源需写入 `source-ledger.json`。
4. **Auto Roll / 首购 200 coins** 等极常见新手问题：可并入 beginner 的 FAQ 区块或锚点，不必强制新路由。

**验收**：

- 每个新增事实性段落有 **source-ledger** 或 manual verification 对应条目，或明确标为 `estimate`/`low`。
- 从首页 shortcut、wiki hub、相关 guide **双向内链** 可达新内容。

---

### Epic E — 国际化二期（中文）

**目标**：让中文流量路径 **自成闭环**，并与英文 alternates 可扩展。

**建议交付**：

- 扩展 `src/i18n/routes.ts`：为计划内的中文页提供 `en` ↔ `zh-cn` 映射；`BaseHead` 的 `hreflang` 在 **子页** 上可对有映射的页输出（无映射则仅 `x-default` + 当前语言，避免错误 hreflang）。
- 内容策略二选一（排期时敲定）：
  - **A**：优先把 `codes` + `beginner` + `luck-calculator` 做成中文页或双语块；
  - **B**：维持少页策略，但中文首页文案与英文 **任务路径** 对齐（当前中文导航已指向合并 guide）。

**验收**：

- 至少新增 **1 条** 有真实中文内容的路线与 alternates；`npm run build` 通过；无死链。

---

### Epic F — 发现与合规（SEO / robots / 变现准备）

**目标**：为广告联盟与地区合规打基础，不绑定具体广告商。

**建议交付**：

- 新增 `public/robots.txt`：`User-agent: *`、`Allow: /`、指向生产域的 `Sitemap:`；与 `@astrojs/sitemap` 产出一致。
- 新增 **隐私政策** 静态页（中英择一或双语）：说明日志、若二期加 Cloudflare Web Analytics / AdSense 等第三方的数据类别；页面链入 Footer。
- **广告位预留（可选，设计级）**：在 `content-section` 或布局中预留「未来广告容器」占位（未接入脚本前不展示空白破坏布局），需与现视觉体系统一。

**验收**：

- 生产构建包含 `robots.txt`；Footer 可从全站访问隐私页；核心内容区无因占位导致的 CLS 明显问题。

---

### Epic G — 数据与报表闭环（轻量运营）

**目标**：GSC/Bing 有数据后，**可执行**的迭代节奏。

**建议交付**：

- `.docs/ANALYTICS_AND_GSC_PLAYBOOK.md`（短文即可）：每月看哪些报表、如何将「查询词」映射到「codes 更新 / 新预设 / 新 FAQ」。
- （可选）接入 Cloudflare Web Analytics 或等价 **隐私友好** 方案；若接入，必须在隐私页披露。

**验收**：

- 文档存在且指向具体报表项名称（GSC：效果、网页、站点地图）；与 Epic F 隐私披露一致。

---

## 6. 非目标（二期明确不做）

- 不做 **完整可编辑 wiki**、用户生成内容（UGC）、账号系统。
- 不承诺 **游戏内未公开公式** 为官方；不伪造 `high` 置信度以搏排名。
- 不在未解决隐私披露前 **上线** 广告脚本。

---

## 7. 风险与依赖

| 风险 | 缓解 |
|------|------|
| 游戏版本更新导致公开数据集体失效 | Epic A/C 的版本标签 + source-ledger 强制更新习惯 |
| 人力不足以维持 Codes 周更 | Epic B 文档化 + 缩小 active 表、明确「仅追踪高可信源」 |
| hreflang 错误导致 SEO 反效果 | 仅对确有对称内容的 URL 输出 alternates；其余不编造 |

---

## 8. 建议里程碑（可按人力裁剪）

| 阶段 | 内容 |
|------|------|
| M1（1～2 周） | Epic A + Epic F（robots + 隐私骨架）+ Epic B 文档与 codes schema 小扩展 |
| M2（2～3 周） | Epic C（数据抽离 + 计算器批次字段）+ Epic D 中 1～2 个高意图增量 |
| M3（并行可选） | Epic E 中文闭环 + Epic G 报表手册 |

---

## 9. 文档维护

- 本文档存放于 **`.docs/PHASE_2_REQUIREMENTS.md`**，随排期更新版本号与日期。
- 实施任务拆分时，建议在仓库 Issue / Project 中 **按 Epic 打标签**，避免与一期 `IMPLEMENTATION_STATUS` 内部页混淆（该页可链接至本文档作为对外规划的入口之一，需另议是否 noindex）。

---

**编制说明**：需求内容结合仓库当前实现路径（`src/`、`public/`）与 2026-05 前后公开检索中 Slime RNG（Roblox）玩家主题归纳；具体数值与游戏机制以 **`source-ledger.json` / 实机验证** 为准，本文档不抄录未经验证的动态数值表。
