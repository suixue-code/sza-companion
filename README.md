# SZA Companion

**Survive Zombie Arena** 非官方玩家工具站 — 竞品对标 + PRD 差异化工具。

## 文档

| 文档 | 说明 |
|------|------|
| [docs/BUSINESS_PLAN.md](./docs/BUSINESS_PLAN.md) | 商业计划书 |
| [docs/PRD.md](./docs/PRD.md) | 产品需求文档 |
| [docs/LANGUAGE_STRATEGY.md](./docs/LANGUAGE_STRATEGY.md) | 多语言策略（en / es / pt-br / zh-cn） |
| [docs/COMPETITOR_CONTENT.md](./docs/COMPETITOR_CONTENT.md) | 竞品内容库 |

## 开发

```bash
npm install
npm run dev
npm run build
npm test
```

## 语言与路由

| 语种 | 入口 |
|------|------|
| English | `/` |
| Español | `/es/` |
| Português (BR) | `/pt-br/` |
| 简体中文 | `/zh-cn/` |

每种小语种含 **7 个核心页**：首页、codes、新手指南、tier-list、Credit Planner、Galactic 活动、wiki 索引。其余内容暂为英文。

## 状态（2026-05-20）

- [x] 74 页 build（含 21 本地化路由）
- [x] 4 语种 + hreflang + 语言切换
- [ ] 部署 szacompanion.com

## 技术栈

Astro 6 · JSON 数据 · 浏览器端工具
