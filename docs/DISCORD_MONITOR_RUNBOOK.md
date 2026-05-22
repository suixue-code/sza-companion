# Discord Monitor Runbook — SZA Companion

**Owner:** Site maintainer  
**Cadence:** Weekly (Monday) + within 24h of major Roblox trend spikes  
**Goal:** Keep `codes.json`, `updates.json`, and event pages aligned with official Discord signals.

---

## Channels to check

| Channel | What to capture |
|---------|-------------------|
| `#codes` | New/expired codes, reward text, casing |
| `#patch-notes` | Balance changes, class costs, map changes |
| `#announcements` | Events (Galactic), maintenance, code drops |

**Invite:** `site-meta.json` → `discordInviteUrl`

---

## Weekly checklist

1. Open Discord → `#codes` — screenshot or copy latest posts since last review date.
2. Compare against `src/data/codes.json`:
   - Active → needs Discord post OR multi-source agreement.
   - Disputed → media lists code but Discord silent (current GALACTIC pattern).
   - Expired → Discord says expired OR consistent community failure reports.
3. Update `lastCheckedAt` and `lastPublicReview` in `site-meta.json` when any code status changes.
4. Scan `#patch-notes` for class cost/ability changes → update `classes.json` + add row to `updates.json`.
5. Scan `#announcements` for event dates → update `events.json`.
6. Append a line to `updates.json` with `source: "discord_monitor"` when facts change.
7. Run `npm run build` locally to verify JSON validity.

---

## Escalation rules

| Signal | Action |
|--------|--------|
| New code in `#codes` | Set `status: active`, `confidence: high`, link Discord message if possible |
| Code removed / “expired” in Discord | Move to `expired` or `unverified` |
| Community reports mass failure (RoCodes, 👎 on site) | Lower confidence; consider `disputed` |
| Conflicting media vs Discord | Keep `disputed`; do **not** promote as active |

---

## What we do NOT do

- Scrape Discord with bots without permission.
- Claim in-game verification unless manually tested and noted in `codes.json`.
- Auto-publish codes from unverified third-party sites without Discord cross-check.

---

## Log template (paste into `updates.json` entry)

```json
{
  "date": "2026-05-20",
  "title": "Discord weekly monitor",
  "summary": "No new #codes posts. Zombies unchanged. Galactic event still preview-only.",
  "tags": ["discord", "codes"],
  "source": "discord_monitor"
}
```
