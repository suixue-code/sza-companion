# SEO Keyword Structure

Research date: 2026-05-23

This document defines the keyword and page structure for the Survive Zombie Arena companion site. The goal is to keep the current landing page, guides, and tools aligned with real search demand without creating duplicate thin pages that will need to be reworked later.

## Evidence Checked

Live searches and page checks focused on these surfaces:

- `Survive Zombie Arena codes`
- `Survive Zombie Arena classes tier list`
- `Survive Zombie Arena best classes`
- `Survive Zombie Arena weapons guide`
- `Survive Zombie Arena best weapons`
- `Survive Zombie Arena waves guide enemies maps`
- `Survive Zombie Arena best loadouts credits farm`
- `Survive Zombie Arena Galactic event code void shards`
- `Survive Zombie Arena leaderboard guide`

Reference pages and competitors reviewed or cross-checked:

- `https://survivezombiearena.com/codes/`
- `https://survivezombiearena.com/classes/`
- `https://survivezombiearena.com/tier-list/`
- `https://survivezombiearena.com/weapons/`
- `https://survivezombiearena.com/waves/`
- `https://survivezombiearena.com/enemies/`
- `https://survivezombiearena.com/maps/`
- `https://survivezombiearena.com/update-log/`
- `https://www.progameguides.com/roblox/survive-zombie-arena-codes/`
- `https://www.destructoid.com/`
- `https://rocodes.gg/`
- `https://survivezombiearena.wiki/`

Local crawl and content planning evidence:

- `docs/CONTENT_CRAWL_REPORT.md`
- `docs/COMPETITOR_CONTENT.md`
- `src/data/source-ledger.json`
- `src/data/manual-verification-ledger.json`

Important limitation: no reliable search-volume tool was used in this pass, so this structure is based on live SERP/topic presence, competitor route coverage, and current game content gaps rather than exact monthly volume.

## Keyword Priority

### P0: Canonical Money Pages

These terms should map to stable, high-quality pages with answer-first copy, freshness labels, and internal links from the homepage and wiki hub.

| Keyword cluster | Canonical route | Intent | Notes |
| --- | --- | --- | --- |
| survive zombie arena codes | `/codes/` | Redeem active codes, check expired/disputed codes | Must stay the freshest page. Keep disputed `GALACTIC` status explicit. |
| survive zombie arena tier list | `/tier-list/` | Rank classes by strength | Keep S/A/B/C framing and explain solo, co-op, farm, and leaderboard differences. |
| survive zombie arena best classes, survive zombie arena classes | `/classes/` | Pick first class, compare costs and abilities | Do not create a separate "best class" page. This page owns that keyword. |
| survive zombie arena best weapons, survive zombie arena weapons | `/weapons/` | Upgrade path and named weapon choices | Do not split "best weapons" unless a future page has meaningfully deeper test data. |
| survive zombie arena beginner guide | `/beginner-guide/` | First sessions, first unlock, first weapon path | Link strongly to codes, credit planner, tier list, and weapons. |
| survive zombie arena credit planner, survive zombie arena credits farm | `/tools/credit-planner/` and `/guides/credit-farming/` | Plan unlock timing and farm decisions | Tool page owns calculator intent; guide owns strategy intent. |

### P1: Supporting Authority Pages

These pages build topical coverage and should be linked from the homepage, wiki hub, guide hub, and related pages.

| Keyword cluster | Canonical route | Intent | Notes |
| --- | --- | --- | --- |
| survive zombie arena best loadouts | `/best-loadouts/` | Assemble solo, team, farm, and high-wave setups | Cross-link classes, weapons, waves, maps, and leaderboard. |
| survive zombie arena waves, wave guide | `/waves/` | Understand loop, Auto Skip, Nightmare pacing | `/guides/waves/` may remain a deep guide, but `/waves/` owns canonical answer intent. |
| survive zombie arena enemies | `/enemies/` | Enemy types, priority targets, counters | Add explicit counters and tie back to class and weapon pages. |
| survive zombie arena maps, rooftop map | `/maps/` | Current map tactics and future map previews | Current canonical title should emphasize Rooftop Map because that is the playable map. |
| survive zombie arena galactic event | `/events/galactic/` | Event code, Void Shards, crates, event uncertainty | Keep conflict labels and update notes visible. |
| survive zombie arena updates | `/updates/` and `/update-log/` | Patch history and recent changes | Avoid letting update pages cannibalize event pages. |
| survive zombie arena discord | `/discord/` | Official/community link validation | Treat as trust/support page, not a high-volume hub. |

### P2: Long-Tail Guide Pages

These should support topical authority but should not become isolated pages.

- Class guides: Necromancer, Marksman, Medic, Tactician, Bastion, Demolitionist, Engineer, Pyro, Ninja.
- Weapon guides: World Ender, Gumdrop Blaster, Grenade Launcher, Tommy Gun, Handgun, Shotgun, Rifle.
- Mode and situation guides: Nightmare Mode, leaderboard runs, solo farming, team support, first 10k Credits, first 15k Credits.
- Event terms: Galactic code, Void Shards, X2 Credits, Galactic crates.

## Page Structure Rules

1. `/classes/` owns both "classes" and "best classes." `/tier-list/` owns ranked tier-list intent. Link both ways, but do not duplicate the same table and intro.
2. `/weapons/` owns "weapons" and "best weapons." Deep weapon articles may exist only when they add specific testing, stats, or scenario comparisons.
3. `/waves/` owns the quick waves answer. `/guides/waves/` can stay as a deep article, but the hub and homepage should point to `/waves/` first.
4. `/maps/` should lead with Rooftop Map until another playable map is confirmed. Atlantis should remain a preview note.
5. `/wiki/` is a directory, not a giant wiki article. It should route people to canonical pages instead of trying to answer every keyword directly.
6. Localized routes should prioritize the highest-intent pages only: codes, beginner guide, tier list, Galactic event, credit planner, and wiki hub.

## Internal Linking

Homepage first-screen and battlefield modules should link to:

- `/codes/`
- `/tier-list/`
- `/classes/`
- `/weapons/`
- `/beginner-guide/`
- `/tools/credit-planner/`
- `/best-loadouts/`
- `/waves/`
- `/enemies/`
- `/maps/`

Every P0 page should expose at least three next-step links:

- Codes -> beginner guide, credit planner, tier list.
- Tier list -> classes, credit planner, beginner guide.
- Classes -> tier list, credit planner, class guides.
- Weapons -> beginner guide, best loadouts, waves.
- Beginner guide -> codes, credit planner, tier list, weapons.
- Credit planner -> classes, beginner guide, codes.

Anchor text should use real search language where it reads naturally: "Best Classes," "Best Weapons," "Waves Guide," "Rooftop Map Guide," "Credit Planner," and "Best Loadouts."

## GEO and Answer-Engine Rules

Each P0 and P1 page should include:

- A direct answer block near the top.
- A visible freshness or review label.
- Source confidence labels where claims are imported from public material.
- FAQ schema for exact user questions.
- Honest conflict handling for disputed game facts.

Claims to keep carefully labeled:

- `GALACTIC` code status.
- Necromancer cost conflicts.
- Bastion tier placement.
- Galactic crate weapon availability.
- Any unreleased Atlantis map detail.

## Current Implementation Decisions

This pass keeps the current route tree and updates metadata, H1s, search index entries, wiki hub labels, and internal anchor text. The site should not create new pages for "best class," "best weapons," or "wave guide" unless future source evidence shows those intents need a substantially different format.

