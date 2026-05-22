# 语言策略 — SZA Companion

**最后更新：** 2026-05-20  
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

## 3. 维护规则

1. 改 `codes.json` / 核心事实 → 同步更新 `src/i18n/localized/*.ts` 三语 + 英语页。
2. 新增英语 guide **不要求**立即翻译；仅在核心 7 页事实变更时更新小语种。
3. Weekly SOP：检查 3 语 codes 页与英语是否一致（Zombies / GALACTIC 状态）。

---

## 4. 可读性标准

- Hero：1 句价值 + 1 句行动。
- 段落 2–3 句；guide 长文用 `splitGuideParagraphs()`（英语）。
- 代码名、职业名保持英文（Roblox 游戏内一致）。

---

## 5. 战略备注

- **巴西葡语** 在 Roblox 份额上高于单一西语国家 → `pt-br` 与 `es` 同等核心页覆盖。
- **中文** 覆盖 PRD P4-006 核心 6+1 页；完整 wiki 仍英文。
- 全量 20 guides 三语翻译为 **后续 backlog**（非本次范围）。
