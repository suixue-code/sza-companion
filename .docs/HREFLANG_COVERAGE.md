# hreflang 与多语 URL 覆盖说明

`BaseHead` 通过 `getAlternateHrefMap` + `src/i18n/routes.ts` 的 `alternateRouteGroups` 输出 `hreflang` 与 `x-default`。**仅当三种语言存在对称内容时**才应加入一组；否则宁可缺省 alternates，也不要指到空页或错误语别。

## 已编入 alternate 的 URL（三组 locale 对称）

| 逻辑页 | en | zh-cn | es |
|--------|-----|--------|-----|
| 首页 | `/` | `/zh-cn/` | `/es/` |
| Codes | `/codes/` | `/zh-cn/codes/` | `/es/codes/` |
| Progression | `/guides/progression/` | `/zh-cn/guides/progression/` | `/es/guides/progression/` |
| Luck 计算器 | `/tools/luck-calculator/` | `/zh-cn/tools/luck-calculator/` | `/es/tools/luck-calculator/` |
| Rebirth 规划器 | `/tools/rebirth-planner/` | `/zh-cn/tools/rebirth-planner/` | `/es/tools/rebirth-planner/` |
| Wiki hub | `/wiki/` | `/zh-cn/wiki/` | `/es/wiki/` |
| Goop（英） | `/guides/goop/` | `/zh-cn/guides/goop-rebirth/` | `/es/guides/goop-rebirth/` |
| Rebirth（英） | `/guides/rebirth/` | 同上 | 同上 |
| Recipes（英） | `/recipes/` | `/zh-cn/guides/recipes/` | `/es/guides/recipes/` |

英文 **Goop** 与 **Rebirth** 两路径刻意指向同一套多语 goop-rebirth 页，避免重复内容信号分裂。

## 当前仅有英文的页面（不进 `alternateRouteGroups`）

以下路径**不要**编造 `zh-cn` / `es` 的 alternate，除非先新增对称页面并更新本表：

- `/guides/beginner/`
- `/guides/items/`
- `/guides/best-upgrades/`
- `/guides/rarest-slimes/`
- `/privacy/`（隐私暂仅英文）

在上述页面访问时，`getAlternateHref` 会对未命中分组的 pathname 回落到各语言首页（见 `src/i18n/utils.ts`），属预期行为。

## 维护检查（改路由时）

1. 新增 `src/pages/es/**` 或 `zh-cn/**` 时：是否在 `alternateRouteGroups` 增加一组三语？
2. 若只补一种语言：不要输出三语 hreflang；可等对称齐全再合并。
3. `npm run build` 后抽查 HTML 中 `<link rel="alternate" hreflang=…>` 与真实 URL 是否一致。

**最后更新**：2026-05-13
