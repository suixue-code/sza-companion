# Weekly Content Update SOP — SZA Companion

**Cadence:** Every Monday (30–45 min)  
**Skip deployment** until explicitly requested — local build + commit only.

---

## Week checklist

| Step | Task | Output |
|------|------|--------|
| 1 | Run [Discord Monitor Runbook](./DISCORD_MONITOR_RUNBOOK.md) | Updated JSON if needed |
| 2 | Run [Codes Update Runbook](./CODES_UPDATE_RUNBOOK.md) if codes changed | `codes.json` |
| 3 | Check competitor sitemap (survivezombiearena.com) for new URLs | Note gaps in IMPLEMENTATION_STATUS |
| 4 | Review RoCodes / public guides for class cost drift | `classes.json` |
| 5 | Add 0–1 update row to `updates.json` (even “no changes”) | Transparency log |
| 6 | Scan site search queries (when analytics live) for missing topics | New guide backlog |
| 7 | `npm run build` + `npm test` (when vitest enabled) | Green build |

---

## Content priorities (no deploy required)

1. **Codes accuracy** — highest traffic intent  
2. **Galactic event** — time-sensitive  
3. **Tier / class costs** — affects Planner + Loadout  
4. **Long-tail guides** — 1 new `/guides/` slug per week if backlog exists  
5. **English only** — keep core `/` pages in sync with JSON data; see [LANGUAGE_STRATEGY.md](./LANGUAGE_STRATEGY.md)

## Current proof gaps from 2026-06-15

- Re-check `GALACTIC` in-game before promoting it from disputed.
- Capture Discord `#codes` and patch/announcement notes for June update terms: Abandoned Farm, Overclocker, Arctic Striker.
- Keep `/updates/abandoned-farm/` wording as source-confidence / creator-reported until first-party evidence exists.

---

## Definition of done (weekly)

- [ ] `lastPublicReview` reflects this week if any public fact changed  
- [ ] At least one `updates.json` entry OR explicit “monitor only” note in team log  
- [ ] No broken internal links (`npm run build` sitemap count stable or increased)  
- [ ] IMPLEMENTATION_STATUS page updated if PRD items completed  

---

## Monthly extras (first Monday of month)

- Re-read `docs/PRD.md` Phase backlog  
- Compare tier list vs 2+ public guides  
- Review gamepass prices (Rolimon's) for `/guides/gamepass/`  
- Audit 👎 feedback themes from contact inbox  

---

## Out of scope until user requests

- Cloudflare Pages deploy  
- Google Search Console / AdSense  
- Automated Discord bot  
