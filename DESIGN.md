# SZA Companion Design

## Intent

SZA Companion should feel like the tactical briefing layer beside Roblox Survive Zombie Arena, not a generic code tracker. The first viewport must make the game unmistakable through official game art, the game icon, and routes that match player intent: redeem codes, compare weapons, choose classes, and plan Credits.

## Visual Direction

- Build on a dark arena base with neon survival signals.
- Use official Survive Zombie Arena reference imagery in hero and media-led modules.
- Keep tools readable and practical. The visual language can be energetic, but planners, tables, warnings, and source notes must remain easy to scan.
- Use hard-edged panels, status labels, thin luminous borders, and restrained glow instead of soft SaaS cards.

## Palette

- `night`: deep blue-black page field for the arena atmosphere.
- `panel`: layered navy surfaces for cards, tools, tables, and rails.
- `acid`: green for primary actions, success, active routes, and code confidence.
- `cyan`: secondary links, route accents, and informational edge light.
- `plasma`: magenta for high-energy image accents only.
- `ember`: orange/red for wave pressure, warnings, and disputed information.
- Keep text near-white with cool blue muted copy. Do not return to a white-and-blue utility palette.

## Typography

- Use the existing Atkinson body font for legibility across guides and data-heavy pages.
- Let large homepage display headings use compact uppercase treatment through styling, not a new dependency.
- Keep letter spacing at `0` for primary type. Status labels may use modest uppercase treatment without cramped tracking.

## Layout

- Homepage hero is media-led and first-viewport game-led.
- Surface the main player routes immediately after the hero.
- Alternate wide briefing bands with tactical panels rather than stacking endless repeated cards.
- Shared pages keep compact page heroes, readable article widths, stable table dimensions, and clear form controls.

## Components

- Header brand uses the official game icon and a two-line title lockup.
- Buttons are purposeful: acid green for the primary route, bordered dark panels for secondary routes, ember only for pressure or warnings.
- Panels use 8px base corners. Larger hero/media frames can reach 16px when the image needs a cinematic crop.
- FAQ, notices, tables, planner results, and confidence tags must preserve their information hierarchy over decoration.

## Assets

- Approved official reference images live under `public/images/sza-game/`.
- Prefer official game thumbnails for hero/gallery treatment and the game icon for brand identity.
- Future image additions should show gameplay, classes, weapons, waves, or official state. Avoid generic zombie stock art and unrelated horror realism.

## Do Not Use

- White-blue SaaS dashboard styling as the site theme.
- Old slime mascot residue or unrelated blob decoration.
- Marketing hero splits that hide the actual game behind abstract gradients.
- Excessive bloom, dark unreadable screenshots, nested cards, or decorative UI text explaining how the interface works.

## Astro Notes

- Keep the visual system in `src/styles/global.css` and route-specific structure in Astro pages.
- Add local section classes for richer homepage composition before inventing new shared abstractions.
- Check localized home pages after shared style changes because they reuse common hero, card, FAQ, and data-grid components.
