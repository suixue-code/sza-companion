# Codes Update Runbook — SZA Companion

**Trigger:** Discord post, user 👎 reports, competitor wiki change, or RoCodes drift  
**Files:** `src/data/codes.json`, `src/data/source-ledger.json`, `src/data/site-meta.json`

---

## Code status definitions

| Status | Meaning | UI treatment |
|--------|---------|--------------|
| `active` | High-confidence working (Discord + guides agree) | Green “Active” table |
| `disputed` | Sources conflict; may work for some accounts | Separate “Disputed” section |
| `expired` | Confirmed dead or superseded | “Expired / unverified” |
| `unverified` | Listed elsewhere, no positive proof | Lower table |

---

## Update workflow

1. **Verify signal**
   - Primary: Discord `#codes`
   - Secondary: RoCodes, competitor wikis, site 👍/👎 (localStorage aggregate — manual review)
   - Optional: in-game redeem test (note in `sourceNote`)

2. **Edit `codes.json` entry**
   ```json
   {
     "code": "EXAMPLE",
     "reward": "2,500 Credits",
     "status": "active",
     "confidence": "high",
     "lastCheckedAt": "2026-05-20",
     "source": "discord_codes",
     "sourceNote": "Posted in #codes 2026-02-01"
   }
   ```

3. **Update `source-ledger.json`** if a new third-party source was used.

4. **Bump review dates**
   - `site-meta.json` → `lastPublicReview`, display fields
   - Codes page FAQ if redemption steps changed

5. **Cross-link**
   - `/guides/how-to-redeem-codes/` — steps still accurate?
   - `/guides/redeem-galactic-code/` — if GALACTIC status changes

6. **Build check:** `npm run build`

---

## User feedback (P2-009)

- Codes page 👍/👎 stored in browser `localStorage` only.
- “Report issue” links to `/contact/?subject=Code+feedback:CODE`.
- Weekly: if 3+ reports of failure for an `active` code, downgrade to `disputed` pending Discord check.

---

## Crawl script (optional)

```bash
npm run crawl:codes        # dry run
npm run crawl:codes:write  # writes if schema matches
```

Always human-review before committing crawler output.

---

## Rollback

If a bad code was marked active:
1. Set `status: disputed` or `expired` immediately.
2. Add `updates.json` correction entry with timestamp.
3. Do not delete historical entries — transparency builds trust.
