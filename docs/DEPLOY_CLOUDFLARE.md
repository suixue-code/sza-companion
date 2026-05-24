# Cloudflare 上线清单 — survivezombiearenaguide.com

本项目使用 **Astro 静态构建 + Cloudflare Pages（纯静态托管）**，无 Worker、无服务端运行时。

## 仓库内已配置

- `public/_redirects`：www → apex、旧路径 301
- `.github/workflows/deploy.yml`：推 `main` → 构建 → `pages deploy dist`
- Pages 项目名：`sza-companion`
- 站点 canonical / sitemap：`https://survivezombiearenaguide.com`

## 架构说明

| 项目 | 说明 |
|------|------|
| 构建产物 | `dist/` 纯静态 HTML/CSS/JS |
| 托管 | Cloudflare Pages |
| 跳转 | `_redirects`（Pages 边缘处理） |
| 工具脚本 | Credit Planner 等均在浏览器内运行 |

## GitHub ↔ Cloudflare 自动部署

### 1. GitHub Secrets（一次性）

仓库 `suixue-code/sza-companion` → **Settings → Secrets and variables → Actions**：

| Secret | 值 |
|--------|-----|
| `CLOUDFLARE_API_TOKEN` | [API Token](https://dash.cloudflare.com/profile/api-tokens)：需同时能 **Pages 部署** + **Zone DNS 编辑**。推荐自定义权限：`Account` → Cloudflare Pages → Edit；`Zone` → `survivezombiearenaguide.com` → DNS → Edit |
| `CLOUDFLARE_ACCOUNT_ID` | `057efc99ed7cb4797a3f379e13600206` |

### 2. 推送 `main`

```bash
git push origin main
```

Actions workflow **Deploy to Cloudflare Pages** 会自动：`npm ci` → `npm run build` → `pages deploy dist --project-name=sza-companion`。

### 3. Pages 自定义域（一次性）

在 Cloudflare Dashboard → **Workers & Pages → sza-companion → Custom domains** 添加：

- `survivezombiearenaguide.com`
- `www.survivezombiearenaguide.com`

或用脚本（需本机 `wrangler login`）：

```bash
node scripts/finish-dns-and-deploy.mjs --skip-spaceship
```

旧 **Worker** 自定义域已删除后，只需在 **Pages** 上保留上述两个域名。

### 4. DNS 记录（Pages 显示 Active 前必做）

公网 Zone 里需要两条 **Proxied CNAME**（指向 Pages 子域）：

| 类型 | 名称 | 目标 |
|------|------|------|
| CNAME | `@`（apex） | `sza-companion.pages.dev` |
| CNAME | `www` | `sza-companion.pages.dev` |

有 **Zone DNS Edit** 权限的 API Token 时，可一键写入：

```bash
export CLOUDFLARE_API_TOKEN=...   # 须含 Zone DNS Edit，不能只用 Wrangler OAuth
npm run ensure:pages-dns
```

或在 Dashboard 手动添加后，到 **Custom domains** 等待状态变为 **Active**（通常 1–5 分钟）。

## 本机手动部署

```bash
npm ci
npx wrangler login   # 首次
PUBLIC_SITE_ORIGIN=https://survivezombiearenaguide.com npm run deploy:pages
```

预览地址：`https://sza-companion.pages.dev`（以 Dashboard 为准）

## DNS / Zone

| 项目 | 值 |
|------|-----|
| Zone ID | `dbd9b267c309c37ad06687eeee12b88a` |
| Cloudflare NS | `carlos.ns.cloudflare.com`、`emely.ns.cloudflare.com` |

### Spaceship 与 Cloudflare 各管什么

昨天在 **Spaceship** 上已完成的是：把 Nameserver 改成 Cloudflare（「使用自定义 DNS 管理」）。这一步**只做一次**。

改完 NS 之后，**解析记录不再在 Spaceship 里生效**。Spaceship 高级 DNS 页会显示「Dns记录 (0)」并提示：要在这里管记录，需把 NS 改回 Spaceship——**不要改回去**。

当前需要在 **Cloudflare → DNS → Records** 添加指向 Pages 的 CNAME（见上文 §4）。注册商侧 NS 保持 Cloudflare 即可，Zone 状态为 **Active**。

## 验证

```bash
curl -I https://survivezombiearenaguide.com
curl -I https://www.survivezombiearenaguide.com   # 应 301 到 apex
curl -I https://survivezombiearenaguide.com/sitemap-index.xml
```

或使用 skill 验证脚本：

```bash
export CLOUDFLARE_API_TOKEN=...
python ~/.cursor/skills/github-cloudflare-pages-deploy/scripts/verify_deploy.py \
  --cloudflare-account-id 057efc99ed7cb4797a3f379e13600206 \
  --cloudflare-project-name sza-companion \
  --domain survivezombiearenaguide.com \
  --domain www.survivezombiearenaguide.com
```

## 常见问题

**Actions 失败：缺少 Secret**  
补全 `CLOUDFLARE_API_TOKEN` 与 `CLOUDFLARE_ACCOUNT_ID`。

**域名冲突 code 100117**  
Worker 与 Pages 不能同时占同一自定义域；删掉 Worker 侧域名，只保留 Pages。

**www 未跳转到 apex**  
确认 `public/_redirects` 已部署，且访问的是 Pages 而非旧 Worker。
