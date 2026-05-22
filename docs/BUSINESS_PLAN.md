# Survive Zombie Arena Companion — 商业计划书

**文档版本：** v1.0  
**最后更新：** 2026-05-20  
**项目代号：** SZA Companion  
**文档性质：** 非官方粉丝工具站商业规划（与 Nectarforge Studios / Roblox 无隶属关系）

---

## 1. 执行摘要

Survive Zombie Arena（以下简称 SZA）是 Nectarforge Studios 在 Roblox 上的 25 人合作 wave-survival 射击游戏，2025-12-13 上线。截至 2026-05-20，第三方追踪显示其处于 Roblox 头部梯队（RoCodes 约 12 万同时在线、全站排名第 13；YouTube 单条 codes 视频近 40 万播放；Roblox 总 visits 1.3 亿+）。

**商业机会不在「再做一个 codes/wiki 站」，而在：**

1. **Codes 监控** — 各站 codes 信息不一致（如 GALACTIC 在媒体标 Active，RoCodes 用户投票 0% 成功），玩家需要「最后验证时间 + 来源」。
2. **Credits 决策工具** — 竞品 SEO 最多页类是 credit farm / afk / get credits fast；脚本生态侧面证明 grind 重；目前无交互式 Planner。
3. **场景化攻略** — Solo / Team / Farm 需求不同，单一 Tier List 不够（Destructoid 与其他站对 Marksman 评级甚至不一致）。

**产品定位：** SZA Companion — 非官方「数据化攻略 + 玩家决策工具 + 更新监控」站。

**技术路径：** 复用 `slime-rng-guides-tools` 的 Astro 架构（i18n、codes 组件、tool 框架、SEO schema、来源账本）。

**变现路径（分阶段）：** 展示广告 → 赞助位 → 高级工具/去广告会员 → 长期可选数据报告。早期不碰 Robux 交易、脚本、冒充官方。

**首期目标（30 天）：** 上线 10–15 精品页 + 2 个核心工具 + Codes 监控 + Galactic Event 时效内容；验证自然搜索流量与工具使用率。

---

## 2. 问题与机会

### 2.1 玩家真实痛点（有证据 vs 推断）

| 痛点 | 证据等级 | 依据 |
|------|----------|------|
| Codes 不知道哪个有效 | **硬** | RoCodes：GALACTIC 0% vs Zombies 100%；Destructoid/ProGameGuides 5/19 标 GALACTIC Active |
| Codes 搜索需求大 | **硬** | YouTube Eagle 67 codes 视频 ~397K 播放（2026-05-08 发布） |
| Credits 怎么花/怎么刷 | **较强** | survivezombiearena.wiki 10+ credit/afk 长尾页；GAMES.GG 强调 economy > aim |
| Grind 太累 | **较强** | Lawod 等 script 攻略存在；Necromancer 20 万+ Credits |
| 职业/配装选择困难 | **较强** | 多站 tier list；Destructoid 区分 Solo vs Team combo |
| 找队友 / LFG | **弱** | 逻辑合理，但未找到 Reddit/公开帖大量讨论 |
| 中文攻略 | **弱** | 几乎空白，但 Roblox 中国区访问受限 |

### 2.2 为什么现在仍值得做

- 游戏热度仍在高位，且 **Galactic Event** 约至 2026-06-16，有时效 SEO 窗口。
- 专用竞品站 **2026-05-02** 才注册（survivezombiearena.com / .wiki），SEO 战刚开始，但静态 Wiki 已饱和。
- **交互工具空白**：同类 Survive Wave Z 有 Calculator，SZA 无。
- 已有 Slime RNG 站验证过「Codes + Tools + 来源标注」模式可开发、可维护。

### 2.3 为什么普通 Wiki 不够

- IGN、Dexerto、GamesRadar、Destructoid、ProGameGuides 等大媒体已覆盖 codes / tier。
- survivezombiearena.wiki 已程序化铺 50+ 长尾页。
- 全游戏仅 1–2 个有效 codes，codes 页 alone 无法构成护城河或高复访。

---

## 3. 目标用户

| 用户类型 | 占比（估） | 核心诉求 | 对应产品 |
|----------|------------|----------|----------|
| 新手 | 高 | 怎么开始、codes、Credits 先花哪 | Beginner Guide、Codes、Credits Planner |
| 刷资源玩家 | 中高 | 最快 farm、afk 路线、武器升级顺序 | Credits Planner、Farm Guide |
| 进阶/冲榜 | 中 | 高波策略、Necromancer、队伍搭配 | Loadout Builder、Wave Guide、多维 Tier |
| 回流/活动玩家 | 中（脉冲） | Galactic、新 codes、更新 | Update Log、Event Guide |
| 内容创作者 | 低 | 可引用数据、更新快 | Update Log、结构化数据、分享卡（后期） |

**主要流量来源：** Google/Bing 搜索、YouTube 描述链接、Discord 外链（非运营 Discord 本身）。

**不在首期服务对象：** 脚本/外挂用户、Robux 灰产、账号交易。

---

## 4. 竞品分析

### 4.1 直接竞品

| 竞品 | 类型 | 优势 | 劣势 |
|------|------|------|------|
| survivezombiearena.com | 精品 Wiki | Discord 深扒、来源标注、结构化 | 无交互工具；2026-05-02 上线 |
| survivezombiearena.wiki | 程序化 SEO | 50+ 长尾页 | 内容同质、无工具、信任感一般 |
| IGN Wiki | 品牌 Wiki | 权威、Event 覆盖 | 非工具、更新频率不可控 |
| Dexerto/GamesRadar/Destructoid | 媒体 codes/tier | 域名权重高 | 非垂直、无 planner |
| RoCodes.gg | Codes 聚合 | 用户投票成功率 | 非 SZA 专属、无攻略深度 |

### 4.2 间接竞品 / 参照

| 参照 | 可借鉴 |
|------|--------|
| slime-rng-guides-tools（自有） | Astro 架构、codes 账本、calculator、i18n、诚实标注 |
| survivewavez.com | 计算器产品形态 |
| Tabbit 调研 | 三层结构：内容入口 → 工具留存 → 社群转化 |

### 4.3 差异化策略

```
Codes 监控（验证时间 + 来源 + 用户反馈）
        ↓
Credits Planner（核心工具，竞品空白）
        ↓
场景化 Tier + Loadout Builder（非单一 S/A/B/C）
        ↓
Update Log（Discord #patch-notes 摘要，抢时效词）
        ↓
（后期）邮件提醒 / 会员 · 可选 pt-BR
```

---

## 5. 产品战略

### 5.1 产品定位

**一句话：** 帮 SZA 玩家在每局开始前算清 Credits 怎么花、codes 是否还有效、当前 meta 怎么配装 — 非官方、带来源、可验证。

**品牌名候选：** SZA Companion / SZA Tools / Zombie Arena Companion  
**禁止：** Official、Nectarforge Wiki 等误导命名。

### 5.2 产品三层架构（采纳 Tabbit + 修正节奏）

| 层级 | 功能 | 首期 | 后期 |
|------|------|------|------|
| L1 内容入口 | Codes、Beginner、Tier、Event、Update | ✅ | 扩展长尾 guide |
| L2 工具留存 | Credits Planner、Loadout Builder | ✅ | Wave Planner、分享卡 |
| L3 社群变现 | Discord、邮件、会员、LFG | ❌ | Phase 3+ |

### 5.3 明确不做（首期）

- 完整 LFG / 私信系统
- Roblox 账号 OAuth 接入
- 脚本/外挂相关内容
- 50 页程序化 SEO 克隆
- 付费会员体系（6 月后再评估）
- Analytics Dashboard（Scheme C，长期可选）
- 中文站优先（**已否决**）
- ~~西语优先于中文~~ → **仅英语上线**；pt-BR 为可选 backlog（见 LANGUAGE_STRATEGY.md）

---

## 6. 商业模式

### 6.1 变现路径与时间线

| 阶段 | 时间 | 变现方式 | 预期 |
|------|------|----------|------|
| Phase 1 | 0–3 月 | Google AdSense / 同类广告 | 低 RPM，靠搜索量 |
| Phase 2 | 3–6 月 | 合规赞助（Discord 社区、创作者） | 需日 UV 稳定 |
| Phase 3 | 6 月+ | 会员：去广告 + Planner 多存档 + Code Alert | 需工具粘性数据 |
| 长期 | 12 月+ | B2B 小型数据报告（可选） | 非核心 |

### 6.2 单位 economics 假设（保守）

- 年轻用户 + 移动端为主 → .display RPM 偏低（$1–5 区间常见，需实际上线验证）
- Codes 页高跳出、低停留 → 广告位放在复制按钮下方，不挡操作
- 工具页停留更长 → 优先在 Planner 结果区上下投放

### 6.3 合规红线

- 页脚声明：非官方粉丝站
- 禁止：Robux 生成器、脚本推广、账号交易、冒充官方
- 素材：优先自制图标/图表；Roblox 截图注明来源，商业用途谨慎
- Codes：标注「最后验证时间」，不保证 100% 有效
- 未成年人：不做私信/LFG；后期社群需审核机制

---

## 7. 市场与 SEO 策略

### 7.1 已验证的高价值关键词主题

来自竞品 `.wiki` 页面标题 + YouTube 标签 + 媒体选题：

**P0（首期必打）**
- survive zombie arena codes
- survive zombie arena credits / credit farm / get credits fast
- survive zombie arena best class / tier list
- survive zombie arena beginner guide
- survive zombie arena galactic event / void shards

**P1（第二期）**
- survive zombie arena necromancer guide
- survive zombie arena afk farm
- survive zombie arena tactician medic combo
- survive zombie arena best weapon / loadout
- survive zombie arena high wave

### 7.2 SEO 执行原则

1. 每页顶部 **直接答案**（codes 列表、tier 摘要、planner 入口）
2. 结构化数据：FAQ、Breadcrumb、WebApplication schema
3. 每页标注 `last_reviewed` 日期
4. Codes 页引导至 Credits Planner（「输入你的 Credits，看下一步买什么」）
5. 不堆无关文字；功能介绍用文字而非纯图片（利于收录）

### 7.3 语言策略

详见 [LANGUAGE_STRATEGY.md](./LANGUAGE_STRATEGY.md)。

- **en**：全站主语言  
- **es / pt-br / zh-cn**：各 7 个核心页（codes、planner、beginner、tier、galactic、wiki）  
- 深度 guides / 工具页暂英文，wiki 索引页标明

---

## 8. 技术方案概要

### 8.1 技术栈（对齐 Slime RNG）

| 层 | 选型 |
|----|------|
| 框架 | Astro（SSG 为主，工具页少量 client JS） |
| 部署 | Cloudflare Pages（与 slime-rng 一致） |
| 数据 | JSON 文件（codes.json、classes.json、weapons.json、source-ledger.json） |
| i18n | en + es + pt-br + zh-cn（核心 7 页） |
| SEO | `@lib/seo.ts` 模式：collectionSchema、faqSchema、webApplicationSchema |

### 8.2 核心数据实体

- **CodeEntry**：code、reward、status、first_seen、last_verified、sources、community_success_rate
- **Class**：id、name、cost、role、tier_solo、tier_team、abilities、synergies
- **Weapon**：id、name、slot、cost_tier、stage、notes
- **UpdateEntry**：date、title、summary、sources、tags
- **Event**：id、name、start、end、currencies、rewards

### 8.3 非功能需求

- Lighthouse Performance ≥ 85（移动端）
- 工具纯浏览器端计算，不连 Roblox API
- 首次内容绘制 < 2s（Cloudflare CDN）
- 可访问性：表单 label、对比度、键盘可操作

---

## 9. 里程碑与 KPI

### 9.1 四期路线图概览

| 期 | 时间 | 交付 | 成功指标 |
|----|------|------|----------|
| **Phase 1** | 第 1–2 周 | Codes 监控 + Credits Planner + Beginner + Galactic + 合规页 | 站上线、10 页 index、Planner 可用 |
| **Phase 2** | 第 3–4 周 | Loadout Builder + 多维 Tier + Update Log + 8 篇精选 guide | 5+ 关键词进 Google 100 内（抽样） |
| **Phase 3** | 第 5–8 周 | 长尾 SEO + Code 反馈 + 广告 + 增长 | 周 UV 500+、Planner 使用率 10%+ |
| **Phase 4** | 第 3 月+ | Wave Planner 简版 + 邮件提醒 + 赞助位 + 会员评估 | 月收入覆盖域名/托管成本 |

### 9.2 核心 KPI

| KPI | Phase 1 目标 | Phase 3 目标 |
|-----|--------------|--------------|
| 收录页面数 | 10–12 | 25–30 |
| 周 organic UV | 50（上线后 4 周） | 500+ |
| Credits Planner 会话/周 | 20 | 200+ |
| Codes 页 → Planner 点击率 | 5% | 15% |
| 平均 last_reviewed 间隔 | ≤ 7 天 | ≤ 3 天（codes） |

### 9.3 Go / No-Go 决策门

**Phase 1 结束评估：**
- 若 4 周内 organic UV < 20 且 0 关键词进 100 位 → 暂停 Phase 3 长尾，聚焦 1 个工具 + Event 内容
- 若 Planner 使用率 > 10% → 加速 Loadout Builder 与会员设计

---

## 10. 风险与应对

| 风险 | 概率 | 影响 | 应对 |
|------|------|------|------|
| 游戏热度下滑 | 中 | 高 | 工具化提高留存；Event 时效内容；可迁移架构到其他 Roblox 游戏 |
| SEO 竞争加剧 | 高 | 中 | 工具差异化；来源信任；不拼页面数量 |
| Codes 信息不准被喷 | 中 | 中 | 验证时间 + 用户反馈 + 来源链接；快速更正 |
| 广告/平台合规 | 低 | 高 | 非官方声明；禁灰产广告 |
| 竞品复制工具 | 中 | 低 | 先发布 + 更新频率 + 数据账本深度 |
| Roblox IP 投诉 | 低 | 高 | 非官方命名；谨慎使用官方素材 |

---

## 11. 资源与预算（估算）

### 11.1 人力（单人开发者假设）

| 角色 | 投入 |
|------|------|
| 全栈开发 + 内容整理 | 1 人，Phase 1 约 40–60 小时 |
| 游戏内 codes 验证 | 每周 15 分钟 |
| Discord 监控 | 每周 30 分钟 |

### 11.2 成本（年）

| 项目 | 费用 |
|------|------|
| 域名 | ~$12–15/年 |
| Cloudflare Pages | $0 |
| 邮箱（联系/form，可选） | $0–$50/年 |
| Ahrefs/Semrush（可选） | $0–$129/月 |

---

## 12. 结论与建议

1. **值得做**，条件是走 **工具站** 路线，不是纯 Wiki。
2. **Tabbit 战略方向正确**；**节奏需修正**：工具与 MVP 同期上线，页面控制在 15 精品内，LFG/会员/Analytics 后移。
3. **首期杀手锏**：Codes 监控（信任）+ Credits Planner（差异化）+ Galactic Event（时效）。
4. **技术复用** slime-rng-guides-tools，2 周内可上线 Phase 1。
5. **下一步**：按《PRD.md》逐条开发验收。

---

## 附录 A：调研来源索引

| 来源 | URL/说明 | 用途 |
|------|----------|------|
| Roblox 官方游戏页 | roblox.com/games/114204398207377 |  visits、活动 |
| RoCodes | rocodes.gg/codes/survive-zombie-arena | codes 投票、在线人数 |
| YouTube Eagle 67 | youtube.com/watch?v=7seWGuOkpvA | codes 需求量级 |
| survivezombiearena.com | 竞品精品 Wiki | 结构、Discord 深扒 |
| survivezombiearena.wiki | 竞品程序化 SEO | 搜索词地图 |
| Destructoid | tier list + codes | Solo/Team 框架、GALACTIC |
| ProGameGuides | codes | GALACTIC 状态 |
| Lawod | script guide | grind 痛点侧面证据 |
| Tabbit 深度分析 | 用户提供的全文 | 产品方向、变现、合规 |
| slime-rng-guides-tools | 自有项目 | 技术模板 |

## 附录 B：证据等级说明

- **硬**：可量化第三方数据（播放量、投票率、WHOIS 日期）
- **较强**：多源内容共识 + 竞品 SEO 行为
- **弱~中**：逻辑推导或单一来源
- **推断**：无直接数据，需上线验证

---

*本文档随产品迭代更新。下一文档：《PRD.md》— 分阶段功能需求与验收标准。*
