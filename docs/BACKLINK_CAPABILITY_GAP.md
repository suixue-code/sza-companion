# Backlink Capability Gap

Generated: 2026-05-26

Scope: compare high-value competitor backlink patterns against current SZA Companion capabilities, then identify what we should add before outreach.

## Summary

Competitor backlinks are working because they point to quotable assets, not just articles. The strongest patterns are:

1. A wiki-style source that other sites cite by name.
2. Code pages with screenshots, update timestamps, and newsletter hooks.
3. Reddit-friendly short posts that solve one problem fast.
4. Multi-language guide clusters that create many entry points.
5. Contributor/publication pages where a guest article can naturally cite a tool.

SZA Companion already has better trust mechanics than most competitors: source labels, disputed code handling, tools, and a source ledger. The missing piece is packaging those strengths into backlinkable assets.

## Capability Matrix

| Competitor backlink pattern | Evidence | What they have | What we already have | Gap | Priority |
| --- | --- | --- | --- | --- | --- |
| GAMES.GG cites `survivezombiearena.wiki` as an authority | GAMES.GG beginner and credits guides repeatedly mention `survivezombiearena.wiki` methods | A broad wiki hub with many plain-language guide modules | `/wiki/`, 26 guides, source labels, planner tools | No public "methodology/data source" page designed for journalists or guide writers to cite | P0 |
| GamesRadar/Dexerto/Destructoid code pages | Code pages use active code lists, update dates, screenshots, newsletter hooks | Fast code table, images, share/newsletter modules | `/codes/`, active/disputed split, source details, code alert component | Need screenshot-ready redeem flow and public changelog/feed for code changes | P0 |
| Reddit code/forum posts | Reddit posts can rank/drive discovery even with UGC links | Short answer, one link, low-friction title | Share text helpers exist for tools, but not packaged as Reddit snippets | Need ready-to-post Reddit snippets for codes, planner, tier list, and wave planner | P0 |
| Roonby content cluster and submission route | Roonby has SZA tag cluster and author/contact route | Many narrow posts around AFK, weapons, codes, tiers | Similar pages and richer tools | Need guest-post/media kit: pitch angles, canonical URLs, screenshots, one-paragraph source notes | P1 |
| Wiki-to-site deep linking | `survivezombiearena.wiki` links to `survivezombiearena.com` deep pages | Related topical domains with deep links | One site with full internal graph | No second citation surface; should avoid thin self-owned site unless it adds real value | P2 |
| Multi-language GAMES.GG pages | Same guide replicated across many locales | Localized versions expand index surface | Localized routes for high-intent pages only | Need localized outreach snippets, not full localization blast | P2 |

## Missing Backlinkable Assets

### P0: Public Source & Verification Ledger

Create a public page that other writers can cite when code lists disagree.

Suggested route:

- `/sources/` or `/methodology/`

What it should include:

- Current active code status.
- Disputed code status, especially `GALACTIC`.
- Last checked date.
- Source confidence rules.
- Links to Roblox, Discord invite, and tracked public guides.
- Short "How to cite this page" block.

Why this matters:

GAMES.GG cites `survivezombiearena.wiki` because it looks like a source. We have the better data model in `src/data/source-ledger.json`, but it is not exposed as a clean public citation asset.

### P0: Screenshot-Ready Code Evidence Page

Create a compact code evidence block that is easy for media sites and Reddit posts to quote.

Suggested implementation:

- Add a "Code status receipt" section to `/codes/`.
- Include one compact table: code, reward, status, basis, checked date.
- Add a copy button for a short citation sentence.
- Add image/screenshot guidance after in-game verification exists.

Why this matters:

GamesRadar, Dexerto, Destructoid, Beebom, TechShout, and similar code pages win links and shares because the answer is simple and visual. We already have the best disputed-code handling. We need it to be easy to cite.

### P0: Reddit Snippet Pack

Create ready-to-post snippets for natural UGC.

Suggested file:

- `docs/REDDIT_SNIPPETS.md`

Snippet targets:

- Codes: "Zombies works; GALACTIC is disputed."
- Credit Planner: "How many sessions to Marksman/Tactician/Necromancer?"
- Tier List: "Best first class: Marksman solo, Medic co-op."
- Wave Planner: "When should you Auto Skip?"

Rules:

- No spam wording.
- One useful answer before any link.
- Mention unofficial status.
- Use one deep link only.

Why this matters:

Reddit links may be nofollow/ugc, but they can still help discovery, crawl paths, and early trust signals.

### P1: Media/Guest Post Kit

Create a pitch package for Roonby-style article submission and small Roblox guide sites.

Suggested file:

- `docs/OUTREACH_MEDIA_KIT.md`

Include:

- Site description in one sentence.
- Best URLs to cite.
- 3 guest-post angles:
  - "Why GALACTIC is disputed across Survive Zombie Arena code sites"
  - "Best first class: Medic vs Marksman with Credit Planner math"
  - "When Auto Skip hurts Credits per minute"
- Screenshots to capture.
- Author/contact line.

Why this matters:

Roonby has the right shape for submissions: narrow game posts, author contact, and topic cluster. We need a clean package before outreach.

### P1: Share Cards for Tools

We already have share text helpers. The gap is visual/social proof.

Suggested additions:

- Open Graph image variants for Credit Planner, Loadout Builder, Wave Planner.
- "Copy Discord/Reddit result" button on each tool.
- Optional lightweight image export for planner output.

Why this matters:

External posts perform better when the shared result is self-explanatory. A generic tool link is weaker than "I need 6 runs to reach Marksman" with a share card.

### P2: Localized Outreach Snippets

Do not mass-produce full translations just because GAMES.GG has many locales. Instead, create 4-6 localized short snippets for high-intent pages:

- Spanish: codes and beginner guide.
- Portuguese: codes and tier list.
- German: credits farm.
- Japanese: codes and class tier.

Why this matters:

Localized pages create more surfaces, but thin translation is risky. Short outreach snippets are safer and cheaper.

## What We Have Already

Strong:

- `/codes/` active vs disputed split.
- Source details in code tables.
- `src/data/source-ledger.json`.
- `src/data/manual-verification-ledger.json`.
- `/tools/credit-planner/`.
- `/tools/loadout-builder/`.
- `/tools/wave-planner/`.
- `/wiki/` directory.
- 26 guide articles.
- Source confidence and update runbooks.

Weak or missing:

- Public source ledger page.
- Copyable citation sentence.
- Screenshot-ready proof blocks.
- Reddit snippet pack.
- Media kit for outreach.
- Tool result social cards.
- Live in-game receipt screenshots.

## Recommended Next Sprint

1. Build `/methodology/` or `/sources/` from `source-ledger.json`.
2. Add "Code status receipt" and "Copy citation" to `/codes/`.
3. Create `docs/REDDIT_SNIPPETS.md`.
4. Create `docs/OUTREACH_MEDIA_KIT.md`.
5. Add copyable Reddit/Discord result text to Credit Planner and Wave Planner.

This order turns existing trust and tool work into assets that people can link to.

## Implementation Status - 2026-05-28

- Done: `/sources/` public ledger and citation route.
- Done: `/codes/` code status receipt and copyable citation.
- Done: `docs/REDDIT_SNIPPETS.md` and `docs/OUTREACH_MEDIA_KIT.md`.
- Done: `/codes/galactic/` conflict explainer for GALACTIC long-tail searches.
- Done: Credit Planner and Wave Planner now expose copyable Discord summaries, share links, and Reddit-ready drafts.

Next backlog should start from actual GSC/query evidence, not from duplicating the same resource-pack work.

## Acquisition Log

- Built-in web/search was used first.
- Checked public search results and pages for GAMES.GG, GamesRadar, Destructoid, Dexerto, Beebom, Roonby, FinalBoss, TechShout, and `survivezombiearena.wiki`.
- Local project context checked: `docs/COMPETITOR_MAPPED_CONTENT_BATCH.md`, `docs/COMPETITOR_CONTENT.md`, `docs/SEO_KEYWORD_STRUCTURE.md`, `src/pages/codes.astro`, `src/data/codes.json`, `src/data/source-ledger.json`, and `src/data/manual-verification-ledger.json`.
- bb-browser was not used because built-in web/search returned enough public page data for this gap analysis.
- Missing information: no paid Ahrefs/Semrush/Majestic backlink metrics, no private Discord content, and no fresh in-game screenshot receipts.
