# GSC Analysis - 2026-06-01

Source export: `/Users/suixue/Downloads/survivezombiearenaguide.com-Performance-on-Search-2026-06-01`

Date range: past 7 days.

## Summary

The site is now getting meaningful impressions. The main issue is not "more content everywhere"; it is matching the right query intent.

## High Impressions, Low Clicks

| Query | Clicks | Impressions | CTR | Avg position | Decision |
| --- | ---: | ---: | ---: | ---: | --- |
| `+1 dmg per revive codes` | 0 | 39 | 0% | 10.49 | Do not target. Different Roblox game. |
| `+1 damage per revive codes` | 0 | 29 | 0% | 9.9 | Do not target. Different Roblox game. |
| `survive zombie arena x medal` | 0 | 18 | 0% | 7.72 | Target with a dedicated Medal Quest page. |
| `survive zombie arena medal quest` | 0 | 17 | 0% | 6.82 | Target with a dedicated Medal Quest page. |
| `codes for +1 damage per revive` | 0 | 11 | 0% | 7.91 | Do not target. Different Roblox game. |
| `codigos de sobrevivir a la arena de zombies` | 0 | 11 | 0% | 9.09 | Watch Spanish codes/home snippets; not enough data for a new page. |

The `+1 DMG Per Revive` cluster is a false-positive exposure source. Chasing it would add irrelevant traffic and make the site look spammy. We should let Google learn that SZA Companion is about Survive Zombie Arena, not +1 DMG Per Revive.

The Medal cluster is a real opportunity because it includes the game name and sits around positions 6-8 with no clicks. It needs a page that says "Medal Quest is not a code" and gives the task path.

## Low Impressions, High Clicks

| Query | Clicks | Impressions | CTR | Avg position | Decision |
| --- | ---: | ---: | ---: | ---: | --- |
| `survive zombie arena guide` | 1 | 2 | 50% | 2 | Add "Guide" back into homepage title/description. |
| `survive zombie arena waves` | 2 | 7 | 28.57% | 3 | Keep waves page structure; expand around "how many waves" and link Wave Planner. |
| `survive zombie arena codes` | 1 | 12 | 8.33% | 29.17 | Clicks are acceptable for low rank; ranking is the issue, not only CTR. Keep codes page freshness and internal links. |

## Page Findings

| Page | Clicks | Impressions | CTR | Avg position | Read |
| --- | ---: | ---: | ---: | ---: | --- |
| `/waves/` | 26 | 967 | 2.69% | 5.09 | Strong exposure, moderate CTR; expand exact-answer sections. |
| `/` | 17 | 840 | 2.02% | 7.89 | Good hub, but "guide" intent is under-expressed in title. |
| `/events/galactic/` | 5 | 112 | 4.46% | 6.75 | Event pages can win; link Medal Quest from here. |
| `/codes/` | 3 | 332 | 0.90% | 8.02 | Needs ongoing code freshness and source confidence; avoid unrelated code-game queries. |
| `/tools/credit-planner/` | 1 | 23 | 4.35% | 5.43 | Tool intent works when shown; expose via related pages. |

## Locale SEO Findings

Multilingual SEO should not be treated as English-page translation. Each language needs its own search-term map.

| Locale | Signal | Decision |
| --- | --- | --- |
| Spanish | `codigos de sobrevivir a la arena de zombies` had 11 impressions; accented and shorter variants also appeared. | Update Spanish home/codes title and description to include the natural translated game phrase. |
| Traditional Chinese style query | `roblox 在殭屍競技場存活下來代碼` appeared with low impressions. | Watch only. The current route is Simplified Chinese (`zh-cn`), so do not create a Traditional Chinese SEO system from 5 impressions. |
| Portuguese (BR) | `/pt-br/` received 3 clicks from 138 impressions, but query-level pt-br terms were not visible in this export. | Keep current copy; wait for actual pt-br queries before changing titles. |

## Implemented Changes

- Added `/events/medal-quest/` for `survive zombie arena x medal` and `survive zombie arena medal quest`.
- Updated `/events/galactic/` to route Medal Quest users away from code confusion.
- Updated `/waves/` title/description and added a "How many waves" answer block.
- Updated homepage title/description to include `Guide` while retaining codes/planner intent.
- Updated Spanish home/codes title and description around the real query `Sobrevivir a la Arena de Zombies`.
- Added Medal Quest to site search index.

## Acquisition Notes

- Built-in web search was used first for Medal Quest, +1 DMG Per Revive, and related query intent.
- `curl -I https://medal.tv/quests/5o2ixPiwW4/survive_zombie_arena_x_medal` returned HTTP 200 and rewrote to the English quest path. Full live page body extraction was not completed here, so reward copy remains cautious.
- `agent-browser open` and `agent-browser snapshot -i` were attempted for the Medal page after search/curl. Both hung without returning page content and were terminated, so full rendered-page extraction is still missing.
- We should re-check Medal page content with a browser or manual review before claiming new reward details beyond the visible public snippets and current page copy.
