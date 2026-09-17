# Launch To-Do — Brunderman Building Company

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
2. **Domain.** Assumed `https://www.brundermanbuildingcompany.com` (canonical, OG, sitemap, schema, form redirect). Change `SITE.domain` if different.
3. **GA4 Measurement ID** — `SITE.ga4` is `G-XXXXXXXXXX`. Name the property "Builder Port Charlotte" per portfolio convention.
4. **Form inbox.** The quote form posts to FormSubmit at `gobiggify@gmail.com` (same pattern as clearvantwc.com). First submission triggers a one-time FormSubmit activation email. Change `SITE.formAction` to route leads elsewhere.
5. **Florida contractor license number.** Not provided, so the site makes **no** "licensed & insured" claim. Florida requires the license number in contractor advertising — add it to the footer + About page before launch.
6. **Business name / NAP.** Site uses "Brunderman Building Company"; the Google Business Profile says "Brunderman Building Co Inc" (used as `legalName` in schema). Address + phone match the GBP exactly: 4288 Pinnacle St, Punta Gorda, FL 33980 · (941) 625-4564. Pick one name and make GBP + directories match.
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
- [ ] Add license number
- [ ] Deploy to Netlify, point DNS, force HTTPS
- [ ] Submit a test quote form + confirm FormSubmit activation
- [ ] Verify Search Console (DNS TXT) and submit `sitemap.xml`
- [ ] Add site URL to the Google Business Profile
- [ ] Run PageSpeed (mobile + desktop), Seobility, and Ahrefs backlink check on the live URL
