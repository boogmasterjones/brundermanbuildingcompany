# SEO Audit — Brunderman Building Co Inc (2026-09-17)

Method: a custom crawler over every built page (`node _generate/audit.js` — re-runnable), Lighthouse (mobile + desktop, run locally against the preview server), and a manual review of content, structure, schema, and local-SEO signals. The site is not live yet, so PageSpeed Insights, Seobility, and Ahrefs (which need a public URL) are queued for launch day.

## Scores (local Lighthouse)

| | Before | After |
|---|---|---|
| Mobile performance | 70 | **98** (homepage; inner pages 88–99 — local runs vary a few points) |
| Desktop performance | — | **100** |
| Accessibility | 100 | **100** |
| Best practices | 100 | **100** |
| SEO | 100 | **100** |
| Mobile FCP / LCP | 2.7 s / 4.3 s | **1.6 s / 1.8 s** |
| Total blocking time | 360 ms | **~0–110 ms** |
| CLS | 0 | **0.001** |
| Crawler problems | 3 + 3 duplicate-heading groups | **0** |

---

## ✅ Fixed in this pass

### Performance / Core Web Vitals
1. **Render-blocking Google Fonts** delayed first paint by ~1.6 s on mobile → fonts are now self-hosted (no Google Fonts connection at all); metric-matched fallback `@font-face` rules (size-adjust / ascent-override) keep layout from shifting when they swap in.
2. **Render-blocking stylesheet** → CSS is minified at build time and inlined in each page (one less blocking request; ~7 KB gzipped).
3. **Analytics script** (67 KB unused JS, most of the blocking time) → gtag loads ~1.2 s after page load; a `gtag()` stub queues events so call-click tracking still records. With the placeholder ID the script is not requested at all.
4. Dropped the `backdrop-filter` blur on mobile stat cards (expensive paint on low-end phones).
5. Mobile small text raised to ≥ 12 px where it had dipped below (Lighthouse "legible font sizes").

### Keyword targeting / cannibalization
6. **Homepage and the Port Charlotte location page both targeted "home builder Port Charlotte."** The location page is now retargeted to **"General Contractor in Port Charlotte, FL"** (title, H1, description, lead, body copy) — a separate, high-intent keyword — leaving the homepage as the sole "home builder" page.
7. The same ~90-word **service-area paragraph was duplicated on all 5 service pages** → replaced with five separately written paragraphs, each with different internal-link anchors.
8. **Identical intro H2 on all 5 service pages** → unique, keyword-bearing H2 per service.
9. Generic repeated H2s removed: "Let's Get in Touch!" (15 pages) is no longer a heading; "Request A Quote Today!" is now page-specific ("Request a Kitchen Remodeling Quote", "Request a Quote in Venice", …).
10. Footer column titles were `<h3>` on every page (heading bloat + level jumps on thank-you/404) → styled paragraphs.

### Site architecture / internal linking
11. **No service-areas hub** (location breadcrumbs pointed at a homepage anchor) → new `/service-areas.html` hub with unique copy; location breadcrumbs + BreadcrumbList schema are now Home › Service Areas › City.
12. **New content hub: 3 homeowner guides (700–900 words each) + `/guides.html`** for topical authority and long-tail queries: the FEMA 50% rule, building on your own lot in Port Charlotte/North Port, and which remodeling projects need a permit. Each links to relevant service/location pages and is linked back from them ("Related guide", "Helpful reading").
13. Homepage service-area copy now has contextual links to the city pages, hub, and guides (previously plain text).
14. Menu + footer link the hub and guides sitewide. Indexable pages: 15 → 20.

### Structured data
15. Business schema enriched: `geo` coordinates (from the GBP pin), `hasMap`, `logo` (new 512 px PNG), `hasOfferCatalog` listing all five services.
16. `WebPage` node on every page tied to `WebSite` (`#website`) and the business (`#business`) via `@id`.
17. `Service` schema added to each location page with city-level `areaServed`.
18. `Article` schema on guides; BreadcrumbList on hub/guides.

### Meta / head
19. `robots` meta with `max-image-preview:large, max-snippet:-1` on indexable pages; proper `noindex, follow` on thank-you/404.
20. `geo.placename` is now the actual city on each location page (was "Port Charlotte" everywhere); added `geo.position` / `ICBM`.
21. `og:locale`, `og:image:width/height/alt`; `theme-color`; 48 px PNG favicon (Google's SERP favicon wants a multiple of 48 px).
22. Services-hub meta description trimmed (162 → 150); two over-length titles fixed. All titles 38–65 chars, descriptions 129–156, all unique.

### Trust / local
23. About page: lazy-loaded Google Map of the office (local relevance + directions), office blurb with NAP.
24. Carousel placeholder alt text no longer describes the illustrations as real company projects.

### Server / crawl
25. `_headers`: added `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, HSTS; `X-Robots-Tag: noindex` on `/_generate/`; cache rules for the new icons.
26. Sitemap regenerates automatically (20 URLs); crawler verifies every indexable page is in it and no noindex page is.

### Already in good shape (verified)
One H1 per page with its words present in body copy · no heading-level jumps · no broken links/anchors · no duplicate IDs · all images have alt + dimensions · valid JSON-LD everywhere · canonical + `lang` on every page · every `tel:` link GA-tracked · NAP identical everywhere and matching the GBP · location pages individually written (1,040–1,160 words) · service pages 1,180–1,430 words · mobile-friendly, no horizontal overflow.

---

## ⏳ Needs you / the client (can't be done from here)

### Highest impact
1. **Real project photos.** The single biggest gap — for conversions, image search, GBP, and E-E-A-T. Replace the 7 carousel placeholders (WebP, ~960×720, descriptive filenames like `punta-gorda-isles-custom-home.webp`, alt text naming the project type + city). A real photo should also replace the graphic OG image.
2. **Google Business Profile** — currently has no website link, no photos, 6 reviews. Add the site URL, hours, service list, service areas, a description, and 10+ photos. Primary category "Home builder"; add "Remodeler", "Kitchen remodeler", "Bathroom remodeler", "General contractor", "Custom home builder".
3. **Reviews.** 6 reviews / 4.7★ is thin for a 40-year company with 800+ customers. Ask recent clients; a steady trickle beats a burst. Reply to every review.
4. **Citations with identical NAP** ("Brunderman Building Co Inc", 4288 Pinnacle St, Punta Gorda, FL 33980, (941) 625-4564): BuildZoom (claim it and link the site — it is already a trust claim on the site), Bing Places, Apple Business Connect, Yelp, BBB, Houzz, Angi, Nextdoor, Facebook page, Charlotte County Chamber of Commerce, Charlotte-DeSoto Building Industry Association, Punta Gorda Chamber. Then add the profile URLs to `sameAs` in `_generate/parts.js`.
5. **Local backlinks**: suppliers/manufacturers' dealer pages, chambers, trade association, sponsorships, local press on notable builds.

### Launch day
6. Set the real **GA4 ID** in `_generate/parts.js` → rebuild.
7. **Search Console** (DNS TXT) + **Bing Webmaster Tools**; submit `sitemap.xml`; request indexing for the homepage.
8. Confirm the host 301s `http→https` and `non-www→www` (canonicals use `https://www.`). On Netlify set `www` as primary domain.
9. Decide on Netlify "Pretty URLs": leave **off** so `/about.html` is the only URL (canonicals already protect against duplicates either way).
10. Run **PageSpeed Insights** (mobile + desktop), **Seobility**, and the **Rich Results Test** on the live URL; run **Ahrefs** backlink checker on the domain and disavow spam if any exists.
11. Submit one test quote form and click the FormSubmit activation email in `brundermanbuilding@comcast.net`.

### Content the client must supply (not fabricated here)
12. ~~Owner bio~~ — done 2026-09-21 (Brian Brunderman bio on About, founder + foundingDate 1987 in schema). **Photos of Brian/team still to come** from the client.
13. ~~Business hours~~ — 24/7, in schema/footer/About/FAQ. Client is updating GBP + socials to match.
14. **Project case studies** (city, scope, before/after photos) — the strongest possible location-page content; one per city over time.
15. Contractor **license number** — owner chose to omit. Note that a visible license number is also a trust/ranking-adjacent signal in this niche; revisit if rankings or conversions lag.
16. Client read-through of process claims (unchanged from LAUNCH_TODO).

### Optional / later
17. ~~Self-host the two fonts~~ — done: Inter + Oswald variable WOFF2 (latin, 70 KB total) served from `/fonts/` with `font-display: swap` and a 1-year cache. The site now makes zero third-party requests until GA4 is configured.
18. `aggregateRating`/`review` schema intentionally **not** added: Google treats self-hosted LocalBusiness review markup as self-serving (no stars, and a policy risk).
19. Add a guide every month or two (ideas: impact windows vs. shutters, elevating a home in Punta Gorda Isles, lanai enclosure rules, remodel-vs-rebuild after flood damage, choosing a seawall-lot floor plan). Bump `SITE.lastmod` on each content change.
20. When call volume justifies it, swap in a call-tracking number — one line in `_generate/parts.js` (keep the real number in schema/GBP for NAP).

## Added 2026-09-21 (brand pass)
- Motto "Houses shouldn't break." in header tagline, hero, an orange motto band on home/service/location pages, footer, and schema .
- "Hurricane-proof homes" + "impact-rated windows" now appear in the homepage title-adjacent copy, meta description, hero, a dedicated homepage section, every service page (own H2 + two paragraphs each), every location page, FAQ (+FAQ schema), and a new guide: *Impact-Rated Windows vs. Hurricane Shutters*. 21 indexable pages.
- Note on wording: "hurricane-proof" is the client's chosen phrase; copy pairs it with concrete code-based specifics (block, load path, impact glass, elevation) and never promises a home cannot be damaged.

## Added 2026-09-21 (brand pass)
- Motto "Houses shouldn't break." in the header tagline, hero, an orange motto band on home/service/location pages, footer, and schema `slogan`.
- "Hurricane-proof homes" + "impact-rated windows" now appear in the homepage meta description, hero, a dedicated homepage section, every service page (own H2 + two paragraphs each), every location page, the FAQ (+ FAQ schema), and a new guide: *Impact-Rated Windows vs. Hurricane Shutters*. 21 indexable pages.
- Wording note: "hurricane-proof" is the client's chosen phrase; copy pairs it with concrete, code-based specifics (block, load path, impact glass, elevation) and never promises a home cannot be damaged.

## Changed 2026-09-21 (service-area restructure)
- Removed the Englewood, Cape Coral, and Fort Myers location pages; every link, schema entry, form option, and sitemap URL updated; `_redirects` 301s the old URLs.
- New **Charlotte County** location page (~1,190 unique words; `AdministrativeArea` in schema) covering West/Mid/South/East County — Englewood, Rotonda West, Boca Grande, Deep Creek, Babcock Ranch, etc.
- Service-area copy refocused on Charlotte County + southern Sarasota County (Lee County no longer named as served).
- Services hub 306 → ~1,090 words (per-service "which fits" guide + FAQ with schema); service-areas hub 433 → ~950 (FAQ with schema).
- Homepage trimmed to ~1,090 unique words: removed the "Why Brunderman" cards, which repeated the hero stats and trust bar verbatim.
- `node _generate/wordcount.js` reports total and page-unique word counts.

## How to re-run
```
node _generate/build.js    # rebuild all pages
node _generate/audit.js    # on-page crawl — should report 0 problems
```
