# SZA Companion

**Survive Zombie Arena** 非官方玩家工具站：兑换码、职业、武器、波次攻略与浏览器端规划工具。

## 文档

| 文档 | 说明 |
|------|------|
| [docs/BUSINESS_PLAN.md](./docs/BUSINESS_PLAN.md) | 商业计划书 |
| [docs/PRD.md](./docs/PRD.md) | 产品需求文档 |
| [docs/LANGUAGE_STRATEGY.md](./docs/LANGUAGE_STRATEGY.md) | 多语言策略（en / es / pt-br / zh-cn） |
| [docs/DEPLOY_CLOUDFLARE.md](./docs/DEPLOY_CLOUDFLARE.md) | Cloudflare Pages 上线与 GitHub Actions |

## 开发

```bash
npm install
npm run dev
npm run build
npm test
```

## Cloudflare Pages 部署

纯静态站：`npm run build` 产出 `dist/`，由 Cloudflare Pages 托管。跳转规则在 `public/_redirects`。

```bash
npm ci
npm run deploy:pages
```

推送到 GitHub `main` 后，Actions 会自动部署（需配置 `CLOUDFLARE_API_TOKEN`、`CLOUDFLARE_ACCOUNT_ID`，见 [docs/DEPLOY_CLOUDFLARE.md](./docs/DEPLOY_CLOUDFLARE.md)）。

若最终域名不是 `survivezombiearenaguide.com`，上线前同步修改：

- `src/data/site-meta.json` 的 `siteOrigin`
- `CNAME`
- 构建环境变量 `PUBLIC_SITE_ORIGIN`

## 语言与路由

| 语种 | 入口 |
|------|------|
| English | `/` |
| Español | `/es/` |
| Português (BR) | `/pt-br/` |
| 简体中文 | `/zh-cn/` |

每种小语种含 **7 个核心页**：首页、codes、新手指南、tier-list、Credit Planner、Galactic 活动、wiki 索引。其余内容暂为英文。

## 仓库

- GitHub：https://github.com/suixue-code/sza-companion

## 状态（2026-05-23）

- [x] Astro static build + Cloudflare Workers assets config
- [x] 81+ 页 build（含本地化路由）
- [x] 4 语种 + hreflang + 语言切换
- [x] 3 个浏览器端工具：Credit Planner、Loadout Builder、Wave Planner
- [x] 绑定正式域名 `survivezombiearenaguide.com`

## 技术栈

Astro 6 · Cloudflare Workers static assets · JSON 数据 · 浏览器端工具
