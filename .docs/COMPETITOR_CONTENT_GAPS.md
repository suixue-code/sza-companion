# 竞品内容抓取与内页缺口（2026-05-19）

**目的**：对照高流量竞品 URL 结构，决定我们加哪些**可维护**内页，而不是复制其 SEO 农场式长尾。

**竞品样本**（当日抓取）：

| 站点 | 定位 | 我们借鉴什么 |
|------|------|----------------|
| [slimerng.cc](https://slimerng.cc/) | 数据+工具，强调交叉验证 | 拆分 luck / goop / rebirth / crafting 专页；不编造未公布数值 |
| [slime-rng.wiki](https://www.slime-rng.wiki/) | 大量长尾文章 | **不跟**成百上千的变体标题页；只取主题簇 |
| [Beebom](https://beebom.com/slime-rng-codes/) | Codes + 外链到 rebirth/goop/recipes | 兑换步骤独立页；文内链到我们的专页 |
| [Games.gg beginner](https://games.gg/roblox/guides/slime-rng-beginners-guide/) | Auto Roll 200 币叙事 | 独立 Auto Roll 内页 |

**GSC 已有信号**（见 `gsc-baseline-queries.csv`）：

- `slime rng calculator` / `slime rng luck calculator` → 需要 **luck 说明页 + 计算器** 组合，而非只有首页
- `slime rng progression guide` → 已有 `/guides/progression/`
- `/codes/` 展示低 → 需要 **redeem** 专页承接「怎么兑换」意图

---

## 竞品有、我们曾缺的内页（本轮已做）

| URL | 目标查询/意图 | 状态 |
|-----|----------------|------|
| `/guides/how-to-redeem-codes/` | redeem codes, code not working | ✅ 已上线 |
| `/guides/luck/` | luck mechanics, calculator 配套 | ✅ 已上线 |
| `/guides/auto-roll/` | auto roll upgrade, beginner | ✅ 已上线 |
| `/guides/crafting/` | crafting machine heaven, 配方机制 | ✅ 已上线（数据表仍在 `/recipes/`） |

内链已接：首页 shortcut、wiki、codes 页、ToolsGuidesStrip、beginner/progression related。

---

## 建议下一轮（未做，需数据或负责人）

| 主题 | 竞品参考 | 说明 |
|------|----------|------|
| `/guides/zones/` | slimerng.cc 区域解锁成本 | 需统一 zone 成本 JSON，避免与 progression 重复 |
| Slime 数据库轻量页 | slimerng.cc `/slimes` | 可扩展现有 `lightweight-slimes.json`，勿做全 wiki |
| 中文 mirror | 竞品多语言 | 优先 codes + progression + luck 三篇 |
| Codes 长尾 | slime-rng.wiki 变体 | **不做**「slime rng new codes 2026」独立 URL；用 codes 表 + FAQ 覆盖 |

---

## 内容原则（抓取后写作）

1. **只写公开来源能交叉核对的事实**；冲突写进 confidence / codes 状态。
2. **专页 + 工具/数据页**：说明文用 `GuideTemplate`，表格用 `codes.json` / `recipes.json`。
3. 每篇文末 **related** 扇出 3–5 条内链，从 hub（首页、wiki、codes）链入新页。
4. 部署后在 GSC **网址检查** 请求编入索引，28 天后对比 `gsc-baseline-*.csv`。

---

## 变更记录

| 日期 | 说明 |
|------|------|
| 2026-05-19 | 竞品扫描 + 4 篇英文 guide 内页上线 |
