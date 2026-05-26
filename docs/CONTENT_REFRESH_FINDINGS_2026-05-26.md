# Content Refresh Findings - 2026-05-26

## Summary

There are new public signals from the last few days. The biggest update is the Galactic Event: multiple media and wiki-style sites now treat it as live, while this project still labels several related facts as preview or media-reported.

Do not silently promote every claim to verified. The `GALACTIC` code has a real reward conflict across public sources, and official Roblox endpoints were not reachable from this environment.

Follow-up browser research corrected part of that picture: the official Roblox page could request the games API successfully from inside the browser, and the JSON body was extracted with `agent-browser eval`. The official Roblox API confirms the experience updated on 2026-05-26, but it does not confirm Galactic, Atlantis, or code details.

## P0 Updates Recommended

### Official Roblox Stats

Current local posture:

- `src/data/site-stats.json` was last checked on 2026-05-20.
- The local snapshot had 170,807,365 visits, 125,636 favorites, and a 2026-05-17 Roblox updated timestamp.

New official API values captured through `agent-browser`:

- `rootPlaceId`: `114204398207377`
- `universeId`: `9348272796`
- `name`: `生存僵尸竞技场`
- `creator`: `Nectarforge Studios`
- `playing`: `95,091`
- `visits`: `267,801,365`
- `favoritedCount`: `196,573`
- `maxPlayers`: `25`
- `updated`: `2026-05-26T01:51:14.1030286Z`
- `canonicalUrlPath`: `/games/114204398207377/Survive-Zombie-Arena`

Recommended action:

- Update `src/data/site-stats.json`.
- Add a 2026-05-26 API update entry to `src/data/updates.json`.
- Do not use the Roblox updated timestamp as evidence for Galactic/code details by itself.

### Galactic Event

Current local posture:

- `src/data/events.json` marks Galactic as `upcoming_or_partial`.
- `src/data/events.json` marks Atlantis as `preview`.
- `/events/galactic/` copy still says Atlantis Map `(preview)`.

New public signals:

- IGN published a Galactic Event Update page on 2026-05-19 and describes the event as live.
- IGN reports Atlantis is available to all players.
- IGN reports Void Shards as the event currency, manually picked up from Galactic Zombies.
- IGN reports Galactic Zombies have a 1% chance to appear.
- IGN reports the Galactic Crate costs at least 50 Void Shards.
- IGN lists Galactic Crate weapons: Cosmic Pistol, Quasar, Pulsar, Interstellar, Void Scythe.
- IGN reports Galactic Weaver as a Robux purchase at 1,199 Robux.
- IGN says the new class did not arrive in this part of the event.
- IGN lists the event end date as 2026-06-16.
- Roblox virtual-events API returned an empty `data` array for universe `9348272796` when checked on 2026-05-26.
- The official Roblox page visible description did not mention Galactic, Atlantis, or codes.

Recommended action:

- Change event posture from `upcoming_or_partial` to a cautious live label such as `media_reported_live`.
- Change Atlantis from `preview` to `media_reported_live`.
- Keep official/in-game verification fields separate until Roblox or Discord can be checked.
- Add a 2026-05-19 update entry to `src/data/updates.json`.

### GALACTIC Code

Current local posture:

- `src/data/codes.json` lists `GALACTIC` as `disputed`.
- Local reward text still leans toward `2,500 Credits` with older source notes.

New public signals:

- GamesRadar and PCGamesN list `GALACTIC` as a 24-hour double Void Shards reward.
- Roblox Den, Game.Guide, and The Tech Basket also report a Void Shard reward.
- Beebom, Dexerto, Pro Game Guides, and Destructoid still report a Credits reward.
- Dexerto says it confirmed active codes on 2026-05-26, but this was not independently verified in-game here.

Recommended action:

- Keep `GALACTIC` status as `disputed` or `active_unverified`, not fully verified.
- Update reward copy to show the conflict: `2x Void Shards for 24h reported by several trackers; 2,500 Credits reported by other media`.
- Update `lastCheckedAt` and conflict notes to 2026-05-26.
- Keep `/codes/` title framing around `Zombies Active, GALACTIC Disputed`.

### Weapons And Event Economy

Current local posture:

- The project already has some Galactic weapon references, but several are framed as previews.

New public signals:

- Void Scythe now has Reddit/Roonby-style discussion around drop odds and value.
- IGN lists the crate weapon set and crate access path.
- Public sources still do not provide reliable official stats for most event weapons.

Recommended action:

- Add or refresh a weapon/event source note for Cosmic Pistol, Quasar, Pulsar, Interstellar, and Void Scythe.
- Avoid publishing invented DPS tables.
- Add Galactic Weaver as a separate Robux/event weapon note if the data model supports it.

## P1 Competitor And Topic Updates

### Competitor Sitemap / Content Expansion

`survivezombiearena.wiki` has expanded aggressively. Search and sitemap checks show a broad page cluster across guides, classes, weapons, tiers, credits, waves, and localized paths.

Topics worth checking against our roadmap:

- Noob to pro / how to play / progression / secrets / worth it
- Money Bags
- Wave 200
- Zombies enemy guide
- Arctic Striker
- Minigun
- Plasma Gun
- AFK credits and Void Shards
- Locales: Spanish, Japanese, Polish

Recommended action:

- Prioritize pages where we can be more source-honest and more useful than the wiki clone pages.
- Avoid copying broad AI-style wiki copy. Use source-led, player-task pages with clear uncertainty labels.

### Existing Competitor `.com`

`survivezombiearena.com` did not show the same freshness in the checks here. Its codes page still appeared to focus on `Zombies` and older review timing.

Recommended action:

- This is an opening: our `/codes/`, `/events/galactic/`, `/weapons/`, and `/updates/` can become fresher if updated carefully.

## Suggested Update Order

1. Update `src/data/codes.json` conflict note for `GALACTIC`.
2. Update `src/data/events.json` for Galactic and Atlantis as media-reported live.
3. Add a 2026-05-19 Galactic Event entry to `src/data/updates.json`.
4. Refresh `/events/galactic/` visible copy from preview wording to cautious live wording.
5. Refresh `/weapons/` and related guide pages with crate weapons, but keep unknown stats explicit.
6. Update `src/data/site-meta.json` `lastPublicReview` only after the above data changes are made.

## Acquisition Log

Built-in web/search was used first, per project rules. It found current public pages and snippets from IGN, GamesRadar, PCGamesN, Dexerto, Beebom, Roblox Den, Game.Guide, The Tech Basket, and `survivezombiearena.wiki`.

Direct HTTP checks were also used for pages and sitemaps. Several public HTML pages were fetchable; official Roblox API/game-event checks were blocked or unavailable from this environment.

`bb-browser` was attempted as the second-step fallback for browser-based verification, but the local daemon failed to start with: `Failed to start daemon. Run manually: bb-browser daemon`.

`agent-browser` was then used successfully as a browser fallback:

- Opened the official configured Roblox experience URL: `https://www.roblox.com/games/114204398207377/Survive-Zombie-Arena`.
- Browser title rendered as `生存僵尸竞技场 | 在 Roblox 上游玩`, confirming the configured place page is reachable in browser.
- Network telemetry confirmed `placeId=114204398207377` maps to `universeId=9348272796`.
- The Roblox page made successful in-page XHR requests:
  - `https://games.roblox.com/v1/games?universeIds=9348272796&languageCode=zh_cn&urlLocale=zh_cn` returned HTTP 200 inside the browser.
  - `https://games.roblox.com/v1/games/multiget-playability-status?universeIds=9348272796&urlLocale=zh_cn` returned HTTP 200 inside the browser.
  - `https://apis.roblox.com/virtual-events/v1/universes/9348272796/virtual-events?...` returned HTTP 200 inside the browser.
  - `https://badges.roblox.com/v1/universes/9348272796/badges?...` returned HTTP 200 inside the browser.
- Direct navigation to the API endpoints through `agent-browser open` was blocked with `net::ERR_BLOCKED_BY_CLIENT`; the browser page itself could still request them as XHR.
- A screenshot attempt hung and was terminated; this does not affect the network evidence above.
- A second `agent-browser eval` pass extracted the official games API JSON body from the Roblox page context. It confirmed visits `267,801,365`, favorites `196,573`, live playing `95,091`, and game updated timestamp `2026-05-26T01:51:14.1030286Z`.
- The same eval pass extracted the Roblox virtual-events response: `{"nextPageCursor":"","previousPageCursor":"","data":[]}`.
- Browser-visible page text included the basic Chinese game description and `更新时间 2026/5/26`, but did not include `Galactic`, `Atlantis`, or `codes`.

One important correction from the browser run: opening `https://www.roblox.com/games/9348272796/Survive-Zombie-Arena` is the wrong shape because `9348272796` is the universe ID, not the place ID. The configured public URL using place ID `114204398207377` is the correct Roblox page.

Discord was also attempted through `agent-browser`:

- `https://discord.com/invite/fPQDZ2Svtv` failed with `net::ERR_BLOCKED_BY_CLIENT`.
- `https://discord.gg/fPQDZ2Svtv` failed with `net::ERR_BLOCKED_BY_CLIENT`.
- No Discord `#codes` or `#announcements` content was retrieved in this browser pass.

Still missing:

- In-game redemption result for `GALACTIC`.
- Official Discord `#codes` confirmation after 2026-05-20.
- Official Roblox page or virtual-events evidence that explicitly names Galactic, Atlantis, or `GALACTIC`.
