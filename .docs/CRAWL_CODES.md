# 兑换码自动爬取（Draft PR）说明

目标：从你们**自行配置**的公开页面拉取 HTML，用启发式规则提取「可能是兑换码」的字符串，**仅追加**为 `codes.json` 里的 **`unverified` / `low` 置信度** 行；**不**自动删除或降级已有条目。变更通过 **GitHub Draft PR** 呈现，**只有你合并后**才会进 `main` 并参与部署。

## 配置来源

编辑仓库根目录下的：

`scripts/code-crawl-sources.json`

```json
{
  "sources": [
    {
      "id": "slimerng-org",
      "url": "https://slimerng.org/codes/",
      "label": "slimerng.org — Slime RNG codes",
      "extract": "code-tags-only"
    },
    {
      "id": "slimerngguide-com",
      "url": "https://slimerngguide.com/codes/",
      "label": "slimerngguide.com — Slime RNG codes",
      "extract": "code-tags-only"
    },
    {
      "id": "dexerto-en",
      "url": "https://www.dexerto.com/roblox/slime-rng-codes-3359029/",
      "label": "Dexerto (EN) Slime RNG codes",
      "extract": "code-tags-only"
    },
    {
      "id": "game8",
      "url": "https://game8.co/games/Slime-RNG-Roblox/archives/598569",
      "label": "Game8 Slime RNG codes",
      "extract": "code-tags-only"
    },
    {
      "id": "progameguides-en",
      "url": "https://progameguides.com/roblox/slime-rng-codes/",
      "label": "Pro Game Guides (EN) Slime RNG codes",
      "extract": "code-tags-only"
    }
  ]
}
```

仓库内 `scripts/code-crawl-sources.json` 已与上表对齐。**Dexerto / Game8 / Pro Game Guides** 等对部分数据中心 IP 常返回 **403**（脚本会跳过该源并继续）。**IGN** 未默认加入：全页启发式容易引入大量误报；若需要可自行追加一条 `sources`。

若某站长期不可用，从 `sources` 中删掉该条即可。

- `sources` 为空数组时，脚本与工作流会直接退出，不产生 PR。
- 每条可含 **`extract`**：`"code-tags-only"` 只解析 `<code>...</code>`，误报远少于默认全页；省略时等同 **`"full"`**（全页启发式，误报多，慎用）。若某站正文不用 `<code>` 展示兑换码，该模式下会得到 **0 条**，不宜作为来源。
- 仅支持 `http` / `https` URL。
- 请自行确认 **robots.txt、服务条款、访问频率**；默认 User-Agent 标明站点与用途。

## 本地命令

```bash
npm run crawl:codes          # 干跑：只打印日志，不写文件
npm run crawl:codes:write    # 写入 src/data/codes.json（适合本地试跑后自己 git diff）
```

本地试跑会在 `.crawl-cache/` 留下原始 HTML（已 `.gitignore`，不会提交）。

## CI 行为

- 工作流文件：`.github/workflows/crawl-codes-pr.yml`
- 触发：**每周一 14:00 UTC**（`cron`），以及 **手动 `workflow_dispatch`**。
- 步骤：`node scripts/crawl-codes.mjs --write` → `npm ci` && `npm run build` → 若有 `codes.json` 变更则 **`peter-evans/create-pull-request`** 打开 **Draft PR**。

若构建失败，不会创建 PR（工作流失败，需查看日志）。

## 合并前你应检查什么

1. 逐条在 **Roblox 游戏内** 试兑换；删光误报行。
2. 把确认可用的条目改为 `active` / 合适 `reward` / `confidence`，并写清 `notes` / `source`。
3. 视情况更新 `src/data/site-meta.json` 中的 **`lastPublicReview`** 与各语言展示日期。
4. 再合并 PR；`main` 推送后仍走现有 Cloudflare 部署。

## 局限与风险

- 启发式提取会有大量 **误报**（页面脚本、英文单词等）；**不能**替代人工。
- 不会自动标记 **expired**；过期仍依赖你们对照公开渠道后手改。
- 若目标站结构大变，可能短时间 **抓不到** 真码，这不会自动提醒「漏码」。

## 调整频率

修改 `crawl-codes-pr.yml` 里的 `cron` 表达式即可；注意 GitHub 对 inactive 仓库可能暂停 scheduled workflows。
