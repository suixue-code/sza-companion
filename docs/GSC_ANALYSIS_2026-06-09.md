# GSC Analysis - 2026-06-09

Source export: `/Users/suixue/Downloads/survivezombiearenaguide.com-Performance-on-Search-2026-06-09`

Date range: past 7 days shown in export, 2026-06-01 to 2026-06-07.

## Executive Read

The latest export does not show a week-over-week impression collapse compared with the 2026-06-01 export. It shows wider discovery but weaker click-through.

| Export | Dates | Clicks | Impressions | CTR | Weighted avg position |
| --- | --- | ---: | ---: | ---: | ---: |
| 2026-06-01 | 2026-05-24 to 2026-05-30 | 60 | 2,667 | 2.25% | 6.66 |
| 2026-06-09 | 2026-06-01 to 2026-06-07 | 51 | 4,109 | 1.24% | 7.28 |

Read: impressions are up 54%, clicks are down 15%, CTR almost halved, and average position softened by about 0.6. The recent daily chart did drop after June 4, but the weekly picture is mainly a CTR/snippet and query-mix problem.

## Technical Issue

GSC reported `https://survivezombiearenaguide.com/pt-br/privacy/` as a 404 not indexed.

Root cause: the localized code alert component linked non-English privacy URLs like `/${locale}/privacy/`, but the site only has canonical legal pages at `/privacy/`, `/terms/`, and `/contact/`.

Implemented:

- `CodeAlertSubscribe.astro` now points every locale to `/privacy/`.
- `_redirects` now maps localized privacy and terms URLs to the canonical English legal pages with 301 redirects.

## CTR Drag

High-impression pages with weak CTR in the latest export:

| Page | Clicks | Impressions | CTR | Position | Decision |
| --- | ---: | ---: | ---: | ---: | --- |
| `/waves/` | 27 | 1,484 | 1.82% | 6.31 | Keep; impressions are healthy. Improve snippet only if CTR stays under 2% after recrawl. |
| `/events/medal-quest/` | 4 | 431 | 0.93% | 6.71 | Sharpen title around "How to do" intent. |
| `/events/galactic/` | 1 | 424 | 0.24% | 8.38 | Needs refresh or stronger title if event is still live; verify current event state first. |
| `/codes/` | 1 | 302 | 0.33% | 8.57 | Remove stale month from title; keep Zombies/GALACTIC angle. |
| `/guides/void-shards/` | 0 | 204 | 0% | 7.59 | High-priority content refresh candidate after event verification. |
| `/guides/best-weapons/` | 0 | 197 | 0% | 8.43 | High-priority content refresh candidate; likely needs title/meta and freshness update. |
| `/maps/` | 1 | 127 | 0.79% | 6.83 | Query-level data shows `survive zombie arena map`; page should answer active map faster if CTR stays low. |

## Query Findings

Positive signals:

- `survive zombie arena medal quest`: 1 click / 10 impressions / position 4.8.
- `medal quest in survive zombie arena`: 1 click / 2 impressions / position 6.
- `survive zombie arena how many waves`: 1 click / 7 impressions / position 5.43.
- `gumdrop blaster survive zombie arena`: 1 click / 3 impressions / position 3.

CTR problems:

- False-positive `+1 damage per revive` queries continue to appear. Do not chase these; they are a different Roblox game.
- Medal terms are ranking but not earning enough clicks: `x medal`, `how to do the medal quest`, `medal`, `medalist`.
- `survive zombie arena map` ranks around 3.83 with 0 clicks, so the current map snippet likely does not look direct enough.

## Implemented From This Pass

- Fixed localized privacy 404 source.
- Added 301 redirects for localized privacy/terms URLs.
- Removed stale month language from main codes and tier-list title tags.
- Sharpened Medal Quest title/meta around "How to do" intent.
- Removed stale month language from localized codes/tier-list title tags.

## Next Actions

1. Deploy this technical + snippet fix.
2. In GSC URL Inspection, request recrawl for:
   - `/pt-br/privacy/`
   - `/privacy/`
   - `/codes/`
   - `/events/medal-quest/`
   - `/tier-list/`
   - `/events/galactic/`
3. Verify current Galactic/Event state before editing event facts. If still live, refresh `/events/galactic/`, `/guides/void-shards/`, `/guides/galactic-crate/`, and `/maps/`.
4. Do not bulk-publish new pages yet. The data says Google is discovering more URLs; the immediate bottleneck is CTR and freshness confidence, not index surface.
5. After 3-5 days, compare only the same URLs/query clusters, not total site impressions.
