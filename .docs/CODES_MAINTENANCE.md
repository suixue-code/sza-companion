# Slime RNG Codes — 维护清单

面向维护者：每次游戏热更新、公开大规模换码、或站内数据复核时按顺序执行。玩家向的说明见 `/codes/` 页面。

- 自动化爬取（仅追加 `unverified` 候选、**Draft PR** 人工合并）见 **`.docs/CRAWL_CODES.md`**。
2. 打开 `src/data/site-meta.json`，准备在本次 PR 中更新：
   - **`lastPublicReview`**（ISO 日期，用于 schema）
   - **`lastPublicReviewDisplay`** / **`lastPublicReviewDisplayZhCn`** / **`lastPublicReviewDisplayEs`**（各语言页脚与 codes 眉条展示）
   - **`gameContentVersionLabel`** 及 **`gameContentVersionLabelZhCn`**、**`gameContentVersionLabelEs`**（版本说明三语同步）

## 数据文件

1. 编辑 **`src/data/codes.json`**：
   - 新码：补 `lastCheckedAt`、`source`、`confidence`、`notes`；若多源不一致，填 **`sources`** 与 **`conflictNote`**。
   - 失效：将 `status` 改为 `expired`，保留一行说明为何判失效。
   - 不确定：用 `unverified`，不要勉强标 `active`。
2. 若某条与 **`source-ledger.json`** 或 **`manual-verification-ledger.json`** 中的记录对应，在 PR 描述里写清交叉引用（便于审计）。

## 构建与发布

1. 本地执行 `npm run build`，确认无报错。
2. 检查 `dist/codes/index.html` 中表格与 Discord 说明区块渲染正常。
3. 合并并部署后，在 GSC 用「网址检查」抽测 `/codes/`（可选：请求编入索引）。

## PR 自检（勾选）

- [ ] `site-meta.json` 已随本次数据更新（若仅改文案未动数据可跳过，但 codes 变更通常应更新）。
- [ ] 未删除过期码行（除非确认重复或错误录入）；优先改 `status`。
- [ ] 至少一条高争议记录带有 `conflictNote` 或 `sources`（若当前列表无争议可跳过）。
- [ ] `npm run build` 通过。
