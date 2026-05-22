# 二期任务拆解与完成状态

对应总览：`.docs/PHASE_2_REQUIREMENTS.md`。GSC/复盘流程：`.docs/ANALYTICS_AND_GSC_PLAYBOOK.md`。**助手与负责人分工**：[WORK_SPLIT_AGENT_AND_OWNER.md](./WORK_SPLIT_AGENT_AND_OWNER.md)。

---

## 搜索与体验目标（本轮 TODO 对齐口径）

以下同时服务 **通用 SEO**（收录、排名、点击）与 **生成式引擎优化**（摘要/对话更易正确摘录）；**国际多语**通过 `hreflang` 与对称 URL 完成，不单独起一套技术栈。

| 方向 | 原则 |
|------|------|
| 通用 SEO | 技术基线保持；用 GSC 数据改 **标题/描述/首段** 与内链；避免薄内容、无来源数字堆砌。 |
| 生成式（GEO） | 核心着陆页 **首段 2～4 句直接作答**（谁适用、解决什么、时效与是否官方）；**先步骤/清单后解释**；游戏名与系统称呼全站一致。 |
| 多语（hreflang） | **有对称内容再输出 alternates**；新增英文子页时同步决策：补 `zh-cn`/`es` 或暂不进 `alternateRouteGroups`。 |
| 算法环境 | 谷歌 **核心更新 / 垃圾更新** 后常有整体波动；不为此推翻技术基线，但应 **加频看 GSC** 并区分「正常波动」与「某类页被削弱」。官方动态见 [Search Status · Ranking history](https://status.search.google.com/products/rGHU1u87FJnkP6W2GwMi/history)。 |

---

## 第一波（工程交付 — 已完成）

| ID | 内容 | 状态 |
|----|------|------|
| T1 | **站点元数据**：`src/data/site-meta.json`，首页 / codes / Article `dateModified` / 页脚统一引用 | 已完成 |
| T2 | **`public/robots.txt`** + **`/privacy/`** 隐私页 + Footer 链到 Privacy | 已完成 |
| T3 | **Codes 数据模型扩展**（`sources`、`conflictNote`）+ 表格 UI + Discord 对齐说明 + `.docs/CODES_MAINTENANCE.md` | 已完成 |
| T4 | **Rebirth Goop 阶梯**抽离 `src/data/rebirth-goop-ladder.json` + Planner 使用 `define:vars` + Rebirth guide 内链 `#goop-ladder-data` | 已完成 |
| T5 | **Luck 预设批次** `src/data/calculator-presets-meta.json` + 计算器页展示 | 已完成 |
| T6 | **GSC/分析手册** `.docs/ANALYTICS_AND_GSC_PLAYBOOK.md` | 已完成 |

---

## 发布后自检（每次部署）

1. `npm run build`（CI 或本地）无错误。
2. `dist/robots.txt` 与线上 `/robots.txt` 一致且含正确 `Sitemap:` URL。
3. 抽测：`/`、`/codes/`、`/privacy/`、`/tools/rebirth-planner/#goop-ladder-data`、`/tools/luck-calculator/`。
4. GSC：站点地图抓取成功；有重大内容变更时可对 `/codes/` 请求编入索引（勿滥用）。

---

## 运营节奏（不绑定单次发版）

| 频率 | 动作 |
|------|------|
| 每月 | 按 `ANALYTICS_AND_GSC_PLAYBOOK.md` 做效果、网页、站点地图复盘；维护高展示低点击页清单。 |
| 核心更新 rollout 结束后 2～4 周 | **加频**看 GSC：总展示/点击突变、按「网页」维度找掉量 URL；无单一「修复开关」，优先核对 **首段是否匹配查询、日期与来源是否可信、是否像拼接摘要**。 |
| 每次改 codes / 阶梯 / 预设 | 更新 `site-meta` 或对应数据上的核对字段；与 CODES / 数据维护文档一致。 |

---

## 第二波 TODO（优先级已排序）

状态：`待办` `进行中` `已完成`。验收尽量可勾选。

| ID | 优先级 | 内容 | 验收要点 | 状态 |
|----|--------|------|----------|------|
| **T7** | P0 | **hreflang 与对称路由**：核对 `src/i18n/routes.ts` 与高流量三语页一致；无对称内容不硬凑。维护说明见 `.docs/HREFLANG_COVERAGE.md`；`routes.ts` 顶部注释链到该文档。 | 文档与注释可追溯；本地 `npm run build` 通过；首页/codes/工具/wiki 的 `alternate` 与真实 URL 一致。 | 已完成 |
| **T8** | P0 | **着陆页「可摘录」结构（GEO + SEO）**：为 `/`、`/codes/`、`/wiki/`、两工具及 **en/zh-cn/es 对称首页与 codes/wiki** 增加首段式 **`.geo-snap`**；Luck/Rebirth 文案字段 `snap`（`@i18n/luck-calculator`、`@i18n/rebirth-planner`）。 | 上述路径可见 `geo-snap`；工具三语有 `snap`。 | 已完成 |
| **T9** | P1 | **手册补强**：`ANALYTICS_AND_GSC_PLAYBOOK.md` 增补 **排名更新窗口**、**高展示低点击**、**信息增益自检**。 | 文档含三小节与可执行清单。 | 已完成 |
| **T10** | P1 | **高意图内容增量**（对齐需求 Epic D）：任选 1～2 项（如 redeem 步骤专节、新手 FAQ 锚点）；**每条事实** 有 `source-ledger` / manual ledger 或标为低置信。 | 新段落可从首页或 wiki **双向内链** 到达。 | 待办 |
| **T11** | P2 | **广告脚本接入** + 隐私页「第三方/广告」段落 **具体化**（接入前不得上线脚本）。 | Footer 链隐私；隐私文覆盖计划中的服务商与数据类别；无脚本则版位不破坏 CLS。 | 待办 |
| **T12** | P2 | **更多 Luck 预设**：**仅**在 `source-ledger` / 实机验证后写入 `calculator-presets-meta.json`（及关联 JSON）；禁止为 SEO 批量塞未验证数字。 | 每条新预设可在数据或文档中追溯到依据。 | 待办 |

### 第二波依赖说明

- **T7** / **T8** 已落地；新增 locale 页时仍应先查 `HREFLANG_COVERAGE.md` 再改文案。
- **T9** 已并入 Playbook；后续仅随 GSC 实践迭代文档即可。
- **T11** 受需求文档「非目标」约束：未披露前 **不上线** 广告脚本。

---

## 已完成项变更记录

- **2026-05-13（下午）**：**T7** `HREFLANG_COVERAGE.md` + `routes.ts` 注释；**T8** `.geo-snap` 与工具 `snap` 字段；**T9** Playbook 三节；`.geo-snap` 样式。
- **2026-05-13**：合并原「后续波次」散列为 **T7–T12**，补充搜索/GEO/算法环境下的 **运营节奏** 与 **验收**；第一波 T1–T6 不变。
