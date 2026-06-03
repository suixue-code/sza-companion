# 语言策略 — SZA Companion

**最后更新：** 2026-06-01
**上线语种：** English · Español · Português (BR) · 简体中文

---

## 1. 语种与路由

| 语种 | 代码 | 前缀 | 核心页（7） |
|------|------|------|-------------|
| 英语 | `en` | `/` | 全站（53+ 页） |
| 西语 | `es` | `/es/` | 首页、codes、beginner、tier-list、planner、galactic、wiki |
| 葡语（巴西） | `pt-br` | `/pt-br/` | 同上 |
| 简体中文 | `zh-cn` | `/zh-cn/` | 同上 |

**未本地化（仍走英文）：** classes 详情、20 篇 guides、loadout/wave 工具、best-loadouts、waves 等 — 各语言 `/wiki/` 页有 `englishOnlyNote` 说明。

---

## 2. 技术结构

```
src/i18n/
  config.ts          # 4 locales
  routes.ts          # hreflang 7 组核心页
  localized/
    home.ts          # getHomeCopy()
    codes.ts
    beginner.ts
    tier-list.ts
    galactic.ts
    wiki.ts
    credit-planner.ts
    paths.ts         # localePath(), lastReviewedDisplay()
    static-paths.ts  # getStaticPaths helper

src/pages/[locale]/  # es | pt-br | zh-cn 动态路由（7 页 × 3 = 21）
```

- Header **语言切换器** 在 4 语种间切换（hreflang 互指）。
- Credit Planner：**表单 UI 已翻译**；`planCredits()` 输出建议仍为英文（与游戏内职业/代码名一致），页内有说明。

---

## 3. SEO 原则：每种语言是一套独立体系

多语言网站不能按“英文站做完后翻译”来运营。翻译只复用事实、数据和产品结构；SEO 决策必须按语言单独做：

| 层级 | 可以复用 | 必须按语言单独判断 |
|------|----------|--------------------|
| 事实 | 代码状态、职业价格、活动状态、来源置信度 | 用户怎么称呼游戏、是否翻译游戏名、常用错拼/无重音写法 |
| 页面结构 | codes / beginner / tier / planner 等核心模块 | 哪些页面优先本地化、title/description 写法、FAQ 问题顺序 |
| 内链 | 对应功能页关系 | 每个语言的高意图入口词、低曝光高点击词、需要承接的长尾词 |
| 内容语气 | 诚实标注来源、不夸大 | 本地玩家阅读习惯、Roblox 社群常用词、是否保留英文游戏术语 |

执行规则：

1. 每次看 GSC 时，按语言拆出查询词，不把所有 locale 当英文变体处理。
2. 小语种页面优先服务真实出现的查询，而不是机械补齐英文全站页面。
3. title / description / H1 可以保留英文游戏名，但要吃进该语言实际搜索词。
4. 没有数据时，先记录假设，不批量生产翻译页。

2026-06-01 GSC 例子：

| 语言 | 已出现查询 | 处理 |
|------|------------|------|
| es | `codigos de sobrevivir a la arena de zombies`, `códigos de sobrevivir a la arena de zombies` | 西语首页和 codes 页加入 “Sobrevivir a la Arena de Zombies” 作为本地自然称呼。 |
| zh | `roblox 在殭屍競技場存活下來代碼` | 先观察；这是繁体/直译查询，当前 `zh-cn` 仍以简体核心页为主，不为了 5 次以内展示新建繁体体系。 |
| pt-br | `/pt-br/` 已有点击，暂无明确葡语查询词导出 | 暂不改标题，等查询词出现后再按巴西葡语习惯优化。 |

## 4. 维护规则

1. 改 `codes.json` / 核心事实 → 同步更新 `src/i18n/localized/*.ts` 三语 + 英语页。
2. 新增英语 guide **不要求**立即翻译；仅在核心 7 页事实变更时更新小语种。
3. Weekly SOP：检查 3 语 codes 页与英语是否一致（Zombies / GALACTIC 状态）。

---

## 5. 可读性标准

- Hero：1 句价值 + 1 句行动。
- 段落 2–3 句；guide 长文用 `splitGuideParagraphs()`（英语）。
- 代码名、职业名保持英文（Roblox 游戏内一致）。

---

## 6. 战略备注

- **巴西葡语** 在 Roblox 份额上高于单一西语国家 → `pt-br` 与 `es` 同等核心页覆盖。
- **中文** 覆盖 PRD P4-006 核心 6+1 页；完整 wiki 仍英文。
- 全量 20 guides 三语翻译为 **后续 backlog**（非本次范围）。
