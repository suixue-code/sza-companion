# Slime RNG Template Notes

Base template: AstroLingo (`jbolns/astrolingo`) cloned into `site/`.

Why this template:

- Astro static output fits the MVP: no runtime server required.
- Markdown / MDX content fits guide pages.
- Existing multilingual structure can be reduced to `en` and `zh-cn`.
- Minimal styling makes it easier to replace with the Slime RNG design system.
- Existing sitemap, RSS, and OpenGraph patterns are useful for SEO.

Immediate cleanup before implementation:

- Remove demo `es` and `fi` language content/routes.
- Replace default blog taxonomy with project collections: guides, recipes, tools, codes.
- Replace template styles with the OpenDesign visual system from `design-artifacts/slime-rng-homepage-v1.html`.
- Copy production-approved images into `public/images/`.
- Review `npm audit` findings before release. Current install reports 21 vulnerabilities, including 1 critical, saved at `../template-audit.json`.

Local validation already performed:

- `npm install`
- `npm run build`

