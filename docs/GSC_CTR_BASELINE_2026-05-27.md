# GSC CTR Baseline - 2026-05-27

This is the observation baseline for the May 27 CTR/content update. It is not a completed 3-7 day result yet; it records the current Search Console snapshot and the exact follow-up checks to run after Google has time to recrawl.

## Current Snapshot

- Source: user-provided Google Search Console screenshot.
- UI date range: 7 days.
- Visible chart dates: 2026-05-22 to 2026-05-25.
- Total clicks: 4.
- Total impressions: 212.
- Average CTR: 1.9%.
- Average position: 7.

Visible low-click queries:

| Query | Clicks | Impressions |
| --- | ---: | ---: |
| survive zombie arena codes | 0 | 4 |
| survive zombie arena c | 0 | 1 |
| coach map zombie arena | 0 | 1 |
| how to change map in survive zombie arena | 0 | 1 |
| sobrevivir a la arena de zombies code | 0 | 1 |
| sobrevivir a la arena de zombies codigos | 0 | 1 |

## Pages To Watch

| Page | Why it matters |
| --- | --- |
| `/` | Homepage title and hub changed to codes/planner intent. |
| `/codes/` | Main codes page now front-loads Zombies, GALACTIC status, redeem path, and Credit next steps. |
| `/codes/galactic/` | New conflict-resolution page for GALACTIC long-tail searches. |
| `/events/galactic/` | Event search intent and Void Shards context. |
| `/es/codes/` | Spanish query row already appeared in GSC. |

## Query Checks After Recrawl

- `survive zombie arena codes`
- `survive zombie arena code`
- `survive zombie arena galactic code`
- `galactic code survive zombie arena`
- `survive zombie arena zombies code`
- `sobrevivir a la arena de zombies codigos`
- `sobrevivir a la arena de zombies code`

## Decision Rules

- If average position stays around 6-8 and CTR is still below 3%, test a sharper title on `/codes/`.
- If impressions rise but CTR drops, compare the displayed Google title/snippet against the page title and first paragraph.
- If `/codes/galactic/` gets impressions but no clicks, make the title more direct: `Does GALACTIC Work in Survive Zombie Arena?`
- If rankings do not improve after 7-14 days, add one or two supporting internal pages only where the query exists in GSC. Do not add bulk pages from keyword imagination.
- If a source confirms in-game GALACTIC success, update `src/data/codes.json` first, then rebuild all dependent pages.

## Verification Notes

- This baseline intentionally avoids future claims. The 3-7 day CTR result can only be judged after new GSC data appears.
- The page update should be reviewed for accidental internal notes, AI-chat language, and unsupported code claims before publishing.
