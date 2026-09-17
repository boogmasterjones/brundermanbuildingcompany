# Launch To-Do — Brunderman Building Co Inc

Site is built and ready to deploy (static, no build step needed to host). Items below need real business input before going live.

## How the site is maintained

All pages are generated from `_generate/` (plain Node, no dependencies):

```
node _generate/build.js
```

- `_generate/parts.js` — **phone, domain, GA4 ID, form inbox, address** (the `SITE` object), header/footer/quote form.
- `_generate/services.js` / `_generate/locations.js` — page copy.
- `_generate/build.js` — homepage, about, reviews, carousel slides, sitemap.

Edit there and rebuild rather than hand-editing the 17 HTML files. Deploy = drag-and-drop the folder (or connect the repo) on Netlify; `_headers` sets caching.

## Still needs your input

1. **Project photos (biggest visual gap).** The "See Our Work" carousel uses labelled blueprint placeholders in `images/work/*.svg` — the GBP has no photos to pull. Drop in real photos (export ~960×720 WebP, plus JPG fallback), update the `WORK` list in `_generate/build.js`, rebuild. I did not use stock photos because presenting them as the company's work would be misleading.
2. ~~Domain~~ — confirmed: `https://www.brundermanbuildingcompany.com`.
3. **GA4 Measurement ID** — `SITE.ga4` is `G-XXXXXXXXXX`. Name the property "Builder Port Charlotte" per portfolio convention.
4. **Form inbox** — quote form posts to FormSubmit at `brundermanbuilding@comcast.net`. The first submission triggers a one-time FormSubmit activation email to that inbox; the client must click it or leads will not arrive.
5. ~~License number~~ — client decision: not included. The site makes no "licensed & insured" claim.
6. ~~Business name~~ — site now uses "Brunderman Building Co Inc" everywhere, matching the Google Business Profile exactly. Address + phone also match: 4288 Pinnacle St, Punta Gorda, FL 33980 · (941) 625-4564.
7. **Client copy review.** Trust stats (4 decades, 800+ customers, 200+ homes, BuildZoom top 5%) and reviews are as supplied / verbatim from GBP (incl. the 4-star one shown as 4 stars). Process statements (we handle permits, order cabinets before demo, photo updates for seasonal owners, experience through Charley/Ian) are reasonable for a 40-year builder but have not been confirmed by the client — have them read the service + location pages once.
8. **Hours** — not in schema (GBP only showed "closes 4 PM"). Add `openingHoursSpecification` once known.
9. **Add the website to the GBP** — the profile currently has no website link ("Add website").

## Already done

- 15 indexable pages: home, services hub, 5 service pages (1,150–1,400 words), 7 location pages (1,000–1,150 words, each written separately with real local detail), about/contact; plus thank-you + 404 (noindex).
- Unique titles (≤65 chars) + meta descriptions, one H1 per page, canonical, lang, OG/Twitter tags, 1200×630 OG image, favicon, apple-touch-icon.
- Schema: HomeAndConstructionBusiness (all pages), Service, FAQPage, BreadcrumbList, WebSite.
- Every `tel:` link fires a GA4 `call_click` event with a distinct `event_label`; form fires `quote_form_submit`.
- Contrast-safe orange variants, underlined in-copy links, skip link, focus styles, reduced-motion support, no layout-shift (all images sized).
- sitemap.xml (lastmod 2026-09-17), robots.txt, `_headers` cache rules.
- Link/anchor check, JSON-LD parse check, and mobile overflow check all pass.

## Go-live checklist

- [ ] Real project photos in the carousel
- [ ] Confirm domain, swap GA4 ID, confirm form inbox, rebuild
- [ ] Deploy to Netlify, point DNS, force HTTPS
- [ ] Submit a test quote form + confirm FormSubmit activation
- [ ] Verify Search Console (DNS TXT) and submit `sitemap.xml`
- [ ] Add site URL to the Google Business Profile
- [ ] Run PageSpeed (mobile + desktop), Seobility, and Ahrefs backlink check on the live URL
