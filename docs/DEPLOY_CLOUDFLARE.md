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

仓库 `s-kuswin/sza-companion` → **Settings → Secrets and variables → Actions**：

| Secret | 值 |
|--------|-----|
| `CLOUDFLARE_API_TOKEN` | [API Token](https://dash.cloudflare.com/profile/api-tokens)，模板 **Edit Cloudflare Workers**（含 Pages 部署权限）或自定义：`Account` → Cloudflare Pages → Edit |
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

若之前 Worker 绑过同名域名，需先在 **Workers → sza-companion → Domains & Routes** 删除旧 Worker 自定义域，再绑到 Pages。

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

注册商（Spaceship）Nameserver 需指向上述 NS，Zone 状态为 **Active**。

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
