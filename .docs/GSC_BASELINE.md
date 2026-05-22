# GSC 基线表（28 天 · 查询 × 网页）

**用途**：把 Google Search Console「效果」里的数据固定成一张可对比的表。每次大改 title/codes/内链或核心更新后，用**同一套 28 天窗口**再导出一行「新快照」，和本基线比「展示/点击是否向目标 URL 和词迁移」——避免被 3 天噪声带着改站。

**本仓库能做的**：维护表结构、记入你已提供的快照、标出「已编入索引 vs 未编入」。  
**不能代替你做的**：登录 GSC 导出 28 天完整 CSV（无 Search Console API 密钥）。

---

## 怎么从 GSC 导出（建议每月 1 次）

1. 打开 [Google Search Console](https://search.google.com/search-console) → 资源 **slimerngtools.com**。
2. **效果** → 日期范围选 **过去 28 天** → 导出（或分别进入两个维度导出）：
   - **查询**：列 = 查询词、点击、展示、CTR、排名（可选）。
   - **网页**：列 = 网页 URL、点击、展示、CTR、排名（可选）。
3. 把导出粘贴进下方 CSV，或 Google Sheet 两个 Tab：`queries` / `pages`。
4. **编制索引 → 网页**（你已截图）：把「已编入索引」URL 与「上次抓取」记入 [索引快照](#索引快照-2026-05-16)（与效果数据可不同天）。

配套文件（可用 Excel/Numbers 打开）：

- [`gsc-baseline-queries.csv`](./gsc-baseline-queries.csv)
- [`gsc-baseline-pages.csv`](./gsc-baseline-pages.csv)
- [`gsc-baseline-indexed.csv`](./gsc-baseline-indexed.csv)

---

## 快照 A — 效果（查询）· 约 3 天窗口

> 来源：你在对话里提供的 GSC「热门查询」；**不是 28 天**。部署 2026-05-16 改版后，请在 GSC 用 28 天重导并替换此表。

| 快照日期 | 查询 | 点击 | 展示 | CTR | 备注 |
|----------|------|------|------|-----|------|
| 2026-05-13~16（≈3天） | slime rng calculator | 1 | 7 | 14.3% | 泛 calculator，多落首页 |
| 2026-05-13~16（≈3天） | slime rng progression guide | 0 | 5 | 0% | 与 `/guides/progression/` 标题对齐 |
| 2026-05-13~16（≈3天） | slime rng luck calculator | 0 | 2 | 0% | 样本过小；不为此改 buff 计算器 |
| 2026-05-13~16（≈3天） | slime rng progression | 0 | 1 | 0% | |

**28 天导出后追加行**：复制 CSV 新行即可，保留旧快照行不要删（方便对比）。

---

## 快照 A — 效果（网页）· 约 3 天窗口

| 快照日期 | 网页 URL | 点击 | 展示 | CTR | 主要查询（手动从 GSC 填） |
|----------|----------|------|------|-----|---------------------------|
| 2026-05-13~16（≈3天） | https://slimerngtools.com/ | 6 | 137 | 4.4% | slime rng calculator 等 |
| 2026-05-13~16（≈3天） | https://slimerngtools.com/guides/progression/ | 3 | 124 | 2.4% | progression guide |
| 2026-05-13~16（≈3天） | https://slimerngtools.com/guides/rarest-slimes/ | 1 | 23 | 4.3% | |
| 2026-05-13~16（≈3天） | http://slimerngtools.com/ | 1 | 2 | 50% | 应被 301 合并到 https |
| 2026-05-13~16（≈3天） | https://slimerngtools.com/es/ | 0 | 21 | 0% | 有展示无点击 → 改 title/首段 |
| 2026-05-13~16（≈3天） | https://slimerngtools.com/zh-cn/codes/ | 0 | 8 | 0% | |
| 2026-05-13~16（≈3天） | https://slimerngtools.com/es/wiki/ | 0 | 5 | 0% | |
| 2026-05-13~16（≈3天） | https://slimerngtools.com/guides/items/ | 0 | 9 | 0% | |
| 2026-05-13~16（≈3天） | https://slimerngtools.com/guides/goop/ | 0 | 5 | 0% | |
| 2026-05-13~16（≈3天） | https://slimerngtools.com/codes/ | 0 | 4 | 0% | **已收录但效果极少** → 改版后重点观察 |

**查询 × 网页（进阶）**：GSC → 效果 → 筛选「网页 = /codes/」→ 看顶部查询。该矩阵无法自动爬取，只能你在控制台里看两眼，把 Top 3 查询填进上表「主要查询」列。

---

## 索引快照 2026-05-16

> 来源：你提供的「已编入索引的网页」列表（编制索引 > 网页）。**共 10 个 URL**。

| 网址 | 上次抓取 | 在 sitemap | 复盘备注 |
|------|----------|------------|----------|
| https://slimerngtools.com/ | 2026-05-14 | 是 | 枢纽 |
| https://slimerngtools.com/codes/ | 2026-05-14 | 是 | 改版 title/FAQ 后请求重新编入 |
| https://slimerngtools.com/wiki/ | 2026-05-14 | 是 | |
| https://slimerngtools.com/guides/progression/ | 2026-05-12 | 是 | 当前效果最好的 guide |
| https://slimerngtools.com/zh-cn/ | 2026-05-14 | 是 | |
| https://slimerngtools.com/zh-cn/codes/ | 2026-05-14 | 是 | |
| https://slimerngtools.com/zh-cn/wiki/ | 2026-05-13 | 是 | |
| https://slimerngtools.com/es/ | 2026-05-13 | 是 | 21 展示 0 点击（见效果表） |
| https://slimerngtools.com/es/codes/ | 2026-05-14 | 是 | |
| https://slimerngtools.com/es/wiki/ | 2026-05-14 | 是 | |

### 已在 sitemap、尚未出现在「已编入索引」示例里（优先 URL 检查）

部署后请在 GSC **网址检查** 逐个提交：

| 优先级 | URL | 说明 |
|--------|-----|------|
| P0 | `/tools/luck-calculator/` | 工具主战场；效果数据里尚未分到展示 |
| P0 | `/tools/rebirth-planner/` | Goop/Rebirth 簇 |
| P1 | `/guides/goop/` | 与竞品 goop 词重叠 |
| P1 | `/guides/rebirth/` | |
| P1 | `/guides/beginner/` | 漏斗入口 |
| P1 | `/recipes/` | |
| P2 | `/guides/rarest-slimes/` | 效果表有展示，索引列表未出现（可能统计口径不同，以「网址检查」为准） |

---

## 读表规则（避免误读）

| 现象 | 含义 | 建议 |
|------|------|------|
| **已编入索引** 但效果表展示 ≈ 0 | Google 能抓，但排名靠后或词不匹配 | 改 title/首段/内链，不要先怀疑没收录 |
| **有展示无点击**（如 `/es/`） | SERP 文案或意图错位 | 对照该 URL 在 GSC 里的 Top 查询改 title |
| **有点击的 URL 与目标页不一致**（calculator 落首页） | 正常试探期 | 加强首页 → 工具的内链锚文本 |
| **http 与 https 分拆** | 信号分裂 | 确认 `public/_redirects` 已部署 |

---

## 下一次快照（模板）

复制下面一行，填完追加到 CSV：

```text
快照日期,查询,点击,展示,CTR,备注
YYYY-MM-DD（28天）,,,,,
```

**建议节奏**：改版部署后 **第 14 天**、**第 28 天** 各导一次 28 天效果 + 更新索引表。

---

**关联**：[ANALYTICS_AND_GSC_PLAYBOOK.md](./ANALYTICS_AND_GSC_PLAYBOOK.md)
