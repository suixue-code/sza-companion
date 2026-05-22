# Slime RNG 站点上线方案

## 1. 先说结论

这个项目可以上线，核心代码不是阻塞项。

我已经确认过：

- 这是一个 `Astro` 静态站点。
- 在 `site/` 目录执行 `npm run build` 可以成功产出 `dist/`。
- 这类项目非常适合托管在 `Cloudflare Pages`。

当前真正缺的，主要是发布链路和生产配置，而不是业务代码本身。

## 2. 当前还缺什么

### 必须补齐

1. 你自己的 GitHub 仓库
   当前 `site/` 目录里的 `origin` 还是模板仓库 `jbolns/astrolingo`，不能直接拿来上线。

2. 仓库边界确认
   现在真正的 Git 仓库根目录是 `site/`，不是外层目录。
   如果你要尽快上线，建议直接把 `site/` 当成正式仓库来推到 GitHub。

3. Cloudflare Pages 项目
   需要在 Cloudflare 后台创建一个 Pages 项目，作为生产站点承载容器。

4. GitHub 到 Cloudflare 的自动部署凭证
   需要在 GitHub 仓库里配置：
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
   - `CLOUDFLARE_PAGES_PROJECT_NAME`（建议放到 GitHub Repository Variables）

5. 最终生产域名
   当前 `astro.config.mjs` 里的正式站点地址还是：
   `https://slime-rng-guides-tools.pages.dev`
   如果你后面改成自定义域名，上线前一定要把这里改掉再重新部署。

### 建议补齐

- `robots.txt`
- 自定义 `404` 页面
- Cloudflare Web Analytics
- Google Search Console / Bing Webmaster
- 把当前遗留的 `CNAME` 文件视为历史模板残留，不要再把它当成 Cloudflare 的配置入口

## 3. 推荐上线方案

我建议你采用这条路径：

`GitHub` -> `GitHub Actions` -> `Cloudflare Pages` -> `自定义域名`

这样做的原因：

- 你可以把代码托管和部署权限分开管理。
- 每次推送到 `main` 都会自动构建和发布。
- 这条链路对 `Astro` 静态站非常简单。
- 比直接绑定 Cloudflare Git Integration 更可控。
- Cloudflare 官方文档明确说明：如果先用了 Pages 的 Git integration，后面不能再切回 Direct Upload。
  所以如果你本来就想让 GitHub Actions 接管部署，现在直接走 Direct Upload 更合适。

## 4. 我建议你把哪个目录放到 GitHub

### 推荐做法

直接把 `site/` 目录作为正式 GitHub 仓库。

原因很简单：

- `site/` 已经是独立 Git 仓库。
- 工作流文件也在 `site/.github/workflows/`。
- Cloudflare 部署参数已经围绕 `site/` 这一层写好了。

### 不推荐你现在就做的做法

把外层整个 `Slime_RNG_copy/` 直接推成一个新仓库。

这是可行的，但你需要先处理嵌套 Git 仓库问题，否则后面 GitHub Actions、Cloudflare root directory、版本历史都会比较乱。

如果你后面确实想把外层整包成一个 monorepo，再单独整理一次仓库结构会更稳。

## 5. 上线操作步骤

以下步骤默认你采用推荐做法，也就是把 `site/` 作为正式仓库。

### 第一步：在 GitHub 创建新仓库

建议仓库名直接和站点项目名保持一致，例如：

- `slime-rng-guides-tools`

创建仓库时：

- 不要勾选自动生成 `README`
- 不要勾选 `.gitignore`
- 不要勾选 `LICENSE`

保持一个空仓库即可。

### 第二步：把本地仓库 remote 改成你自己的 GitHub

在本机终端进入 `site/` 目录后执行：

```sh
git remote rename origin template-upstream
git remote add origin git@github.com:<你的 GitHub 用户名>/slime-rng-guides-tools.git
git push -u origin main
```

如果你不用 SSH，也可以把第二行改成 HTTPS：

```sh
git remote add origin https://github.com/<你的 GitHub 用户名>/slime-rng-guides-tools.git
```

### 第三步：在 Cloudflare 创建 Pages 项目

进入 Cloudflare 后台：

`Workers & Pages` -> `Create application` -> `Pages`

这里推荐你使用和 GitHub Actions 配套的方式：

- 先创建一个 Pages 项目
- 不要再额外开启 Cloudflare 自己的 Git 自动构建

建议项目名和仓库名一致：

- `slime-rng-guides-tools`

## 6. GitHub 自动部署已经帮你准备好了

我已经把仓库里的工作流改成了 Cloudflare Pages 版本：

- 文件：`.github/workflows/deploy.yml`

这个工作流会在你推送 `main` 分支时自动执行：

1. 拉代码
2. 按 `.nvmrc` 使用 Node 22
3. `npm ci`
4. `npm run build`
5. 用 Wrangler 把 `dist/` 发布到 Cloudflare Pages

### 你还需要手动配置的 GitHub Secrets / Variables

进入 GitHub 仓库：

`Settings` -> `Secrets and variables` -> `Actions`

添加以下内容：

#### Secrets

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

#### Variables

- `CLOUDFLARE_PAGES_PROJECT_NAME`

建议它的值就填：

```txt
slime-rng-guides-tools
```

## 7. Cloudflare 凭证怎么拿

### 7.1 获取 `CLOUDFLARE_API_TOKEN`

Cloudflare 后台路径：

`My Profile` -> `API Tokens` -> `Create Token`

按 Cloudflare Pages 官方文档，至少要给这个 token：

- Account
- Cloudflare Pages
- Edit

token 作用域尽量只限定在你要部署的那个账号上。

### 7.2 获取 `CLOUDFLARE_ACCOUNT_ID`

Cloudflare 后台右侧或账户概览页可以看到 `Account ID`。

复制后放进 GitHub Secret 即可。

## 8. 域名怎么接

你有两种常见选择。

### 方案 A：用根域名

例如：

- `slimerng.xxx.com`
- `example.com`

如果你要用根域名（apex domain，例如 `example.com`），Cloudflare 官方要求这个域名所在的 zone 也要接入 Cloudflare，也就是：

- 域名 DNS 托管到 Cloudflare
- nameserver 切到 Cloudflare

然后到：

`Workers & Pages` -> 你的项目 -> `Custom domains`

添加根域名即可。

### 方案 B：用二级域名

例如：

- `slime.example.com`
- `tools.example.com`

二级域名会更灵活。

如果你的 DNS 还不想整站迁到 Cloudflare，二级域名通常更容易先接起来。

但有一个很重要的点：

不要只在 DNS 提前手动加 CNAME。

正确顺序是：

1. 先去 Cloudflare Pages 项目里添加 `Custom domain`
2. 再按 Cloudflare 页面提示补 DNS 记录

Cloudflare 官方文档明确说明，如果你只是自己先手动加 CNAME，没有先在 Pages 里完成域名关联，域名可能会直接报错。

## 9. 自定义域名生效后要改哪些文件

当你把正式域名定下来以后，要至少改下面这项：

- `astro.config.mjs` 里的 `site`

例如把：

```js
site: 'https://slime-rng-guides-tools.pages.dev'
```

改成：

```js
site: 'https://你的正式域名'
```

原因：

- canonical URL 依赖它
- sitemap 依赖它
- Open Graph / Twitter URL 依赖它

如果这里不改，搜索引擎和社交分享会继续把 `pages.dev` 当成正式地址。

## 10. 当前项目的上线前检查结论

### 已满足

- 可本地构建
- 可生成静态文件
- 适合 Cloudflare Pages
- 已具备 GitHub Actions 自动部署工作流

### 仍待你操作

- 创建你自己的 GitHub 仓库
- 把 `origin` 切到你的仓库
- 在 Cloudflare 创建 Pages 项目
- 配置 GitHub Secrets / Variables
- 选定最终域名
- 域名接入后更新 `astro.config.mjs`

## 11. 上线前最后检查清单

- `main` 分支已经推到你自己的 GitHub 仓库
- GitHub Actions 首次运行成功
- Cloudflare Pages 能看到最新部署
- `pages.dev` 访问正常
- 自定义域名已在 Pages 项目中绑定成功
- 自定义域名证书状态为 Active
- `astro.config.mjs` 已改成正式域名并重新部署
- sitemap 和 canonical 已切到正式域名
- 首页、`/codes/`、`/recipes/`、`/tools/luck-calculator/`、`/tools/rebirth-planner/` 可正常访问

## 12. 我对这个项目的建议

如果你的目标是“先尽快上线再迭代”，最省事的方式就是：

1. 直接把 `site/` 推到你自己的 GitHub
2. 用我已经改好的 GitHub Actions 自动部署到 Cloudflare Pages
3. 先用 `pages.dev` 跑通
4. 最后再接自定义域名

这样最快，也最不容易在仓库结构上出岔子。
