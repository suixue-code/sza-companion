# Free AI SEO Audit — 首页基线（slimerngtools.com）

**来源**：[freeaiseoaudit.com 审计页](https://www.freeaiseoaudit.com/audit/slimerngtools.com?url=https%3A%2F%2Fslimerngtools.com%2F)（Context.dev / AI-readability rubric）  
**审计 URL**：`https://slimerngtools.com/`（首页）  
**记录日期**：2026-05-19  
**工具判定分类**：Gaming & Interactive Entertainment  

## 总分与统计

| 指标 | 值 |
|------|-----|
| **总分** | **55 / 100** |
| Pass | 10 |
| Partial | 4 |
| Fail | 10 |
| N/A | 8 |
| 合计检查项 | 32 |

**工具总结**：*Foundations are present in places, but the page is losing extractability and trust signals.*（基础有，但可抽取性与信任信号不足。）

**页面快照**：427 词 · 10 个标题 · **0 条外链** · 1 个 JSON-LD 块。

> 说明：该工具面向「AI 检索 / GEO」启发式评分，**不等于** Google 官方排名因素。以下「适用」表示对我们这个**非官方 Roblox 粉丝工具站**值得做且与现有架构一致。

---

## 优先级 Top 5（工具给出的 Agent 修复清单）

| # | ID | 建议 | 我们的判断 | 优先级 |
|---|-----|------|------------|--------|
| 01 | **E12** | 引用权威品类来源、基准、标准、具名专家 | **适用（部分）** — 首页应链到 Roblox 体验页、开发商/Discord 等可核对来源；不必堆砌「专家」 | P1 |
| 02 | **D5** | About / Trust / Newsroom 类页面可从首页直达 | **适用** — 尚无 `/about/`；可用「关于本站 + 方法论 + source ledger」单页 | P1 |
| 03 | **D6** | 页脚暴露 privacy、terms、contact、support | **部分适用** — 已有 `/privacy/`；缺 terms、contact/反馈路径 | P1 |
| 04 | **D12** | title / description / H1 / schema / 正文品牌表述一致 | **适用** — 当前命名不统一（见下文） | P1 |
| 05 | **C2** | 独立 `Organization` JSON-LD（name、url、logo、sameAs） | **适用** — 首页仅有 `CollectionPage`；`articleSchema` 内嵌的 Organization 不算独立实体 | P1 |

---

## 分项检查 — 全部 32 项

### 一、Technical AI Crawlability（技术可抓取）

| 检查项 | 工具结果 | 判断 | 说明 / 行动 |
|--------|----------|------|-------------|
| 关键内容在 raw HTML | Pass — 429 词 | **已做好** | Astro SSG，无需改 |
| HTTPS | Pass | **已做好** | — |
| Canonical 可索引 | Pass — `https://slimerngtools.com/` | **已做好** | `BaseHead.astro` |
| 无 noindex | Pass | **已做好** | — |

### 二、Content Structure & Chunking（内容与分块）

| 检查项 | 工具结果 | 判断 | 说明 / 行动 |
|--------|----------|------|-------------|
| BLUF 开篇直接回答 | Partial — 有 `geo-snap` 但仍提示加强 | **基本适用** | 已有首段说明非官方与用途；可再**显式写品牌名**（Slime RNG Tools / slimerngtools.com）并压缩为 2–3 句 |
| 标题层级（1×H1 +  topical H2） | Pass — 1 H1、3 H2 | **已做好** | `index.astro` |
| 段落长度 ≤120 词 | Pass — 0 段超标 | **已做好** | — |
| H2 区块语义自洽 | Pass | **已做好** | — |
| FAQ / Q&A 结构 | Fail — 0 个问句标题 | **适用（首页）** | codes/工具/guide 子页已有 FAQ + `faqSchema`；**首页可加 4–6 条高频问答**（非官方、代码怎么用、计算器局限） |
| 可抽取数据点 | Partial — 仅 2 个 | **适用（轻量）** | 已有 active codes 数、recipe zones；可补**带日期的核对日期**（`site-meta.json` 已在页内，可更显式） |
| 引用/归因表述 | Fail | **适用（轻量）** | 在首页或 about 加 1 句带来源的声明，链到 `source-ledger` 或 Roblox |
| 外链支撑主张 | Fail — 0 外链 | **适用** | 首页「Visual reference」区适合加 **Roblox 体验官方链接**；避免大量出站 |
| 定义型句式（X is / X refers to） | Fail | **低优先级** | 粉丝站不必学术化；若做 FAQ 可顺带 1 条定义 Slime RNG helper |
| 内链扇出 | Pass — 14 条同域链接 | **已做好** | shortcut / data-card 网格 |
| 可读性 F-K 28.7 | Fail | **部分认同** | 长句+术语偏多；可略简化 `geo-snap` / `lead`，**不必为分数刻意降智** |
| 列表/表格可机器抽取 | Fail — 0 list/table | **部分误判 + 可改进** | 页面用 card 网格无 `<ul>`/`<table>`；若需讨好审计器，shortcut 区可改为语义化 `<ul>` 或加一张「页面地图」小表 |
| 文章型 last-updated | N/A | **不适用** | 首页非文章；已有 `lastPublicReviewDisplay` 类信号 |

### 三、Structured Data / Schema

| 检查项 | 工具结果 | 判断 | 说明 / 行动 |
|--------|----------|------|-------------|
| 存在 JSON-LD | Pass — 1 实体 | **已做好** | `collectionSchema` |
| Organization（含 logo、sameAs） | Fail | **适用** | 在 `BaseLayout` 或首页增加站点级 `Organization`；sameAs 仅填**真实存在**的档案（无则省略） |
| Schema 在首屏 HTML | Pass | **已做好** | inline JSON-LD |
| Article / BlogPosting | N/A | **不适用（首页）** | 指南页已用 `articleSchema` |
| Person | N/A | **不适用** | 无署名作者策略 |
| FAQPage 与 Q&A 内容匹配 | Fail — 称有 FAQ 样内容无 schema | **部分适用** | 工具可能把文案里的问句误判；**若首页加 FAQ 区块则必须配 `faqSchema`** |

### 四、E-E-A-T & Entity Authority

| 检查项 | 工具结果 | 判断 | 说明 / 行动 |
|--------|----------|------|-------------|
| About / trust / newsroom 链接 | Fail — 0 | **适用** | 新建 `/about/` 并在 header/footer 链出 |
| Privacy / terms / contact | Partial — 仅 1 条 | **适用** | Footer 仅 Privacy；补 **Terms**（或合并进 privacy 的 ToS 节）、**Contact**（邮件或 GitHub issues） |
| 品牌表述一致 D12 | Partial | **适用** | 见下表 |
| 原创研究信号 | Partial | **低优先级** | 计算器预设、codes 状态标签已是差异化；可在 about 写方法论，不必伪造「研究论文」 |

**品牌命名现状（D12）**

| 位置 | 当前文案 |
|------|----------|
| `<title>` / meta | Slime RNG Codes, Guides & **Calculator** |
| H1 | Slime RNG Codes, Guides & **Tools** |
| Footer 标题 | Slime RNG Guides & **Tools** |
| `seo.ts` siteName | Slime RNG Guides & Tools |
| 域名 token | slimerngtools |

**建议统一口径**（择一贯彻到 title、H1、Organization schema、footer）：例如 **「Slime RNG Guides & Tools」** + 副标题保留 codes/calculator 关键词。

### 五、Off-site / Citation Surface

| 检查项 | 工具结果 | 判断 | 说明 / 行动 |
|--------|----------|------|-------------|
| E12 出站权威共现 | Fail | **适用** | 与上「外链」相同：Roblox 体验、可选 Discord / 维基（若稳定） |
| Review / marketplace | N/A | **不适用** | 非 SaaS 商品站 |
| GitHub 开发者面 | N/A | **不适用** | 除非开源整个站（当前无此定位） |
| sameAs 实体消歧 | Fail | **条件适用** | 依赖 Organization；无官方社交账号则**不要编造 sameAs** |

### 六、Measurement & Governance

| 检查项 | 工具结果 | 判断 | 说明 / 行动 |
|--------|----------|------|-------------|
| 内容刷新信号 | N/A | **部分已有** | `site-meta.json` 日期在 hero eyebrow / footer；about 页可再集中展示 |

---

## 建议落地 backlog（按性价比）

### 建议做（P1，与 GSC/信任一致）

1. **统一品牌字符串**（D12）：title、H1、Organization、footer 对齐。  
2. **站点级 `Organization` JSON-LD**（C2）+ 可选 `WebSite`。  
3. **`/about/` 信任页**（D5）：非官方声明、数据如何核对、`source-ledger` / `manual-verification-ledger` 说明。  
4. **页脚补链**（D6）：Terms（或扩写 privacy）、Contact。  
5. **首页 1–2 条权威外链**（E12）：Roblox 体验页（`Visual reference` 区块最合适）。  
6. **首页精简 FAQ + `faqSchema`**（内容结构多项）。

### 可选做（P2）

7. shortcut 区语义化列表或「站点地图」表（讨好机器抽取，对真人影响小）。  
8. 略简化首屏英文长句（可读性）。  
9. 首段 BLUF 再压缩并点名品牌。

### 不建议做 / 需谨慎

| 建议 | 原因 |
|------|------|
| 为刷分堆外链、买「专家引用」 | 与粉丝站定位不符，信任反降 |
| 虚构 sameAs / 社交账号 | Organization 违规风险 |
| 把首页改成 2000+ 词长文 | 当前任务导向结构更清晰 |
| 强行 Person / 作者 schema | 无真实署名作者 |
| 按 F-K 28.7 过度简化技术说明 | 工具对该指标可能失真；玩家需要准确术语 |

### 子页已覆盖、**不必因首页审计重复做**

- FAQ + `faqSchema`：`/codes/`、`/tools/luck-calculator/`、`/tools/rebirth-planner/`、多篇 guides  
- `articleSchema` + breadcrumb：指南与 privacy  
- `webApplicationSchema`：工具页  
- Sitemap / hreflang / canonical：见 `astro.config.mjs`、`BaseHead.astro`、`.docs/HREFLANG_COVERAGE.md`

---

## 复测方式

1. 部署上述 P1 改动后，在同一 URL 点击审计页 **re-run audit**。  
2. 同步用 [GSC 基线](./GSC_BASELINE.md) 看展示/点击，不以 AI SEO 分为唯一 KPI。  
3. 可对 `/codes/`、`/tools/luck-calculator/` 各跑一轮审计（首页失败项与子页能力不同）。

---

## 变更记录

| 日期 | 说明 |
|------|------|
| 2026-05-19 | 初版：自 freeaiseoaudit.com 抓取首页 55/100 报告并人工判读 |
| 2026-05-19 | **P1 已落地**：Organization/WebSite 全站 schema、`/about/` `/terms/` `/contact/`、页脚信任链接、首页 FAQ+schema、品牌统一、Roblox 官方体验外链 |
