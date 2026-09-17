// Shared site constants + HTML partials.
// Everything that might change later (phone, domain, GA4 id, form inbox) lives HERE —
// change it once, run `node _generate/build.js`, and every page updates.

const SITE = {
  name: 'Brunderman Building Co Inc',
  legalName: 'Brunderman Building Co Inc',
  domain: 'https://www.brundermanbuildingcompany.com', // confirmed by client 2026-09-17
  phoneTel: '+19416254564',
  phoneDisplay: '(941) 625-4564',
  street: '4288 Pinnacle St',
  city: 'Punta Gorda',
  region: 'FL',
  zip: '33980',
  gbp: 'https://maps.app.goo.gl/7w4D8ZXbYE2CvKA96',
  ga4: 'G-XXXXXXXXXX', // PLACEHOLDER — replace with real GA4 Measurement ID
  formAction: 'https://formsubmit.co/brundermanbuilding@comcast.net', // lead inbox — swap if needed
  lastmod: '2026-09-17',
  lat: 26.9646837, // from the Google Business Profile pin
  lng: -82.0651628,
};

const fs = require('fs');
const path = require('path');
// CSS is minified and inlined into every page at build time (no render-blocking stylesheet request).
const minifyCss = (css) => css.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s+/g, ' ').replace(/\s*([{}:;,>])\s*/g, '$1').replace(/;}/g, '}').trim();
const CSS = minifyCss(fs.readFileSync(path.join(__dirname, '..', 'css', 'style.css'), 'utf8'));
const FONTS_URL = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Oswald:wght@500;600;700&display=swap';
const GA_LIVE = !/X{6,}/.test(SITE.ga4);

const SERVICES_NAV = [
  ['custom-home-construction', 'Custom Home Construction'],
  ['home-remodeling', 'Home Remodeling'],
  ['kitchen-remodeling', 'Kitchen Remodeling'],
  ['bathroom-remodeling', 'Bathroom Remodeling'],
  ['home-additions', 'Home Additions'],
];

const LOCATIONS_NAV = [
  ['port-charlotte', 'Port Charlotte', 'Charlotte County'],
  ['punta-gorda', 'Punta Gorda', 'Charlotte County'],
  ['north-port', 'North Port', 'Sarasota County'],
  ['englewood', 'Englewood', 'Charlotte & Sarasota'],
  ['venice', 'Venice', 'Sarasota County'],
  ['cape-coral', 'Cape Coral', 'Lee County'],
  ['fort-myers', 'Fort Myers', 'Lee County'],
];

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const callAttr = (label) =>
  `href="tel:${SITE.phoneTel}" onclick="gtag('event','call_click',{'event_category':'engagement','event_label':'${label}'})"`;

const ICON = {
  check: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>',
  star: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.8L6 21l1.7-7L2.3 9.2l7.1-.6z"/></svg>',
  phone: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
  home: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/></svg>',
  hammer: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M14 6l4 4"/><path d="M3 21l9-9"/><path d="M11 5l3-3 8 8-3 3-3-3-2 2-3-3 2-2z"/></svg>',
  kitchen: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 10h18"/><path d="M12 10v11"/><path d="M8 6.5h.01M16 6.5h.01M8 14v2M16 14v2"/></svg>',
  bath: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 12h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3z"/><path d="M6 12V6a2 2 0 0 1 4 0"/><path d="M7 19l-1 2M17 19l1 2"/></svg>',
  addition: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M2 12l6-5 6 5"/><path d="M4 11v9h8v-9"/><path d="M12 14h9v6h-9"/><path d="M18 5v6M15 8h6"/></svg>',
  ruler: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 17L17 3l4 4L7 21z"/><path d="M7 13l2 2M10 10l2 2M13 7l2 2"/></svg>',
  shield: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/></svg>',
  people: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17.5" cy="9" r="2.5"/><path d="M17 14.5a5 5 0 0 1 4.5 5"/></svg>',
  pin: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
};

const stars = (n) =>
  `<span class="stars" role="img" aria-label="${n} out of 5 stars">${[1, 2, 3, 4, 5]
    .map((i) => (i <= n ? ICON.star : ICON.star.replace('<svg ', '<svg class="off" ')))
    .join('')}</span>`;

const LOGO_MARK =
  '<svg width="26" height="26" viewBox="0 0 64 64" fill="none" aria-hidden="true"><path d="M8 32L32 10l24 22" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 30v24h28V30" stroke="#fff" stroke-width="6" stroke-linejoin="round"/><path d="M28 54V40h8v14" stroke="#fff" stroke-width="5" stroke-linejoin="round"/></svg>';

function businessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${SITE.domain}/#business`,
    name: SITE.name,
    legalName: SITE.legalName,
    description:
      'Custom home builder and remodeling contractor based in Charlotte County, Florida, serving Port Charlotte and communities within about 50 miles.',
    url: `${SITE.domain}/`,
    telephone: SITE.phoneTel,
    image: `${SITE.domain}/images/og-image.png`,
    logo: `${SITE.domain}/images/logo-512.png`,
    hasMap: SITE.gbp,
    geo: { '@type': 'GeoCoordinates', latitude: SITE.lat, longitude: SITE.lng },
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.street,
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      postalCode: SITE.zip,
      addressCountry: 'US',
    },
    areaServed: LOCATIONS_NAV.map(([, n]) => ({ '@type': 'City', name: `${n}, FL` })),
    knowsAbout: SERVICES_NAV.map(([, n]) => n),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Building and remodeling services',
      itemListElement: SERVICES_NAV.map(([slug, n]) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: n, url: `${SITE.domain}/services/${slug}.html` } })),
    },
    sameAs: [SITE.gbp],
  };
}

function head({ title, description, path: pagePath, schemas = [], place = 'Port Charlotte, Florida', noindex = false }) {
  const url = `${SITE.domain}${pagePath}`;
  const webPage = { '@context': 'https://schema.org', '@type': 'WebPage', '@id': `${url}#webpage`, url, name: title, description, inLanguage: 'en-US', isPartOf: { '@id': `${SITE.domain}/#website` }, about: { '@id': `${SITE.domain}/#business` } };
  const ld = [businessSchema(), webPage, ...schemas]
    .map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`)
    .join('\n');
  // Analytics loads after the page is interactive; the gtag() stub queues events (incl. call clicks) until then.
  const ga = `<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
${GA_LIVE ? `  gtag('js', new Date());
  gtag('config', '${SITE.ga4}');
  window.addEventListener('load', function () {
    setTimeout(function () {
      var s = document.createElement('script');
      s.async = true;
      s.src = 'https://www.googletagmanager.com/gtag/js?id=${SITE.ga4}';
      document.head.appendChild(s);
    }, 1200);
  });` : `  /* GA4 not configured yet — set SITE.ga4 in _generate/parts.js and rebuild */`}
</script>`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="robots" content="${noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1'}">
<link rel="canonical" href="${url}">
<meta name="geo.region" content="US-FL">
<meta name="geo.placename" content="${esc(place)}">
<meta name="geo.position" content="${SITE.lat};${SITE.lng}">
<meta name="ICBM" content="${SITE.lat}, ${SITE.lng}">
<meta name="theme-color" content="#1c1c1c">
<meta name="format-detection" content="telephone=no">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="icon" type="image/png" sizes="48x48" href="/favicon-48.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<meta property="og:type" content="website">
<meta property="og:locale" content="en_US">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url}">
<meta property="og:site_name" content="${esc(SITE.name)}">
<meta property="og:image" content="${SITE.domain}/images/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(SITE.name)} — home builder and remodeler in Port Charlotte, FL">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${SITE.domain}/images/og-image.png">
<script>
  /* Web fonts load after first paint; metric-matched fallbacks in the CSS keep layout stable meanwhile. */
  window.addEventListener('load', function () {
    var l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = '${FONTS_URL}';
    document.head.appendChild(l);
  });
</script>
<noscript><link rel="stylesheet" href="${FONTS_URL}"></noscript>
<style>${CSS}</style>
${ga}
${ld}
</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>
`;
}

function header(current = '') {
  const cur = (p) => (current === p ? ' aria-current="page"' : '');
  const cities = LOCATIONS_NAV.map(([, n]) => `<span>${n}</span>`).join('');
  return `<div class="city-strip" aria-hidden="true"><div class="city-strip-inner"><div class="city-set">${cities}</div><div class="city-set dup">${cities}</div></div></div>
<header class="site-header">
  <div class="container">
    <a href="/" class="logo" aria-label="${esc(SITE.name)} — home">
      <span class="logo-icon">${LOGO_MARK}</span>
      <span class="logo-name">Brunderman Building Co.<span class="logo-sub">Port Charlotte &amp; Southwest Florida</span></span>
    </a>
    <nav class="main-nav" aria-label="Main">
      <div class="nav-drop">
        <button class="nav-drop-btn" aria-expanded="false" aria-haspopup="true" aria-controls="site-menu">Menu <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 1l5 5 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        <div class="nav-drop-menu" id="site-menu">
          <span class="menu-label">Services</span>
${SERVICES_NAV.map(([slug, n]) => `          <a href="/services/${slug}.html"${cur(slug)}>${n}</a>`).join('\n')}
          <a href="/services.html"${cur('services')}>All Services</a>
          <span class="menu-label">Service Areas</span>
          <div class="menu-areas">
${LOCATIONS_NAV.map(([slug, n]) => `            <a href="/locations/${slug}.html"${cur(slug)}>${n}</a>`).join('\n')}
          </div>
          <a href="/service-areas.html"${cur('areas')}>All Service Areas</a>
          <span class="menu-label">Company</span>
          <a href="/about.html"${cur('about')}>About &amp; Contact</a>
          <a href="/guides.html"${cur('guides')}>Homeowner Guides</a>
          <a href="/about.html#quote">Request a Quote</a>
        </div>
      </div>
      <a ${callAttr('header_phone_button')} class="btn btn-primary btn-sm header-call" aria-label="Call ${SITE.phoneDisplay}">${ICON.phone}<span class="call-num">${SITE.phoneDisplay}</span><span class="call-short">Call</span></a>
    </nav>
  </div>
</header>
`;
}

function footer() {
  return `<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <a href="/" class="logo" style="margin-bottom:16px;"><span class="logo-icon">${LOGO_MARK}</span><span class="logo-name">Brunderman Building Co.</span></a>
        <p>Custom home builder and remodeling contractor. Four decades of building in Charlotte County and across Southwest Florida.</p>
        <address>
          <strong style="color:#fff;">${SITE.name}</strong><br>
          ${SITE.street}<br>
          ${SITE.city}, ${SITE.region} ${SITE.zip}<br>
          <a ${callAttr('footer_phone_button')}>${SITE.phoneDisplay}</a>
        </address>
      </div>
      <div>
        <p class="footer-title">Services</p>
        <ul>
${SERVICES_NAV.map(([slug, n]) => `          <li><a href="/services/${slug}.html">${n}</a></li>`).join('\n')}
          <li><a href="/services.html">All Services</a></li>
        </ul>
      </div>
      <div>
        <p class="footer-title">Service Areas</p>
        <ul>
${LOCATIONS_NAV.map(([slug, n]) => `          <li><a href="/locations/${slug}.html">${n}, FL</a></li>`).join('\n')}
        </ul>
      </div>
      <div>
        <p class="footer-title">Company</p>
        <ul>
          <li><a href="/about.html">About &amp; Contact</a></li>
          <li><a href="/about.html#quote">Request a Quote</a></li>
          <li><a href="/service-areas.html">All Service Areas</a></li>
          <li><a href="/guides.html">Homeowner Guides</a></li>
          <li><a href="${SITE.gbp}" rel="noopener" target="_blank">Find Us on Google</a></li>
        </ul>
        <a ${callAttr('footer_cta_phone_button')} class="btn btn-primary btn-sm" style="margin-top:18px;">Call ${SITE.phoneDisplay}</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2026 ${SITE.name}. All rights reserved.</span>
      <span>Serving Port Charlotte and communities within 50 miles.</span>
    </div>
  </div>
</footer>
<div class="mobile-bar">
  <a ${callAttr('mobile_bar_phone_button')} class="btn btn-primary">${ICON.phone} Call Now</a>
  <a href="#quote" class="btn btn-outline">Get a Quote</a>
</div>
<script src="/js/main.js?v=2" defer></script>
</body>
</html>
`;
}

// Quote form section, modelled on the Clearvant layout (form card + "let's chat" column).
function quoteSection({ alt = true, label = 'quote_section_phone_button', heading = 'Request A Quote Today!', defaultArea = '' } = {}) {
  const areas = [...LOCATIONS_NAV.map(([, n]) => n), 'Other'];
  const services = [...SERVICES_NAV.map(([, n]) => n), 'Other'];
  return `<section class="${alt ? 'section-alt' : ''}" id="quote">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow-dark">Start Your Project</span>
      <h2>${heading}</h2>
    </div>
    <div class="quote-layout">
      <div class="quote-card">
        <form class="quote-form" name="quote-request" method="POST" action="${SITE.formAction}">
          <input type="hidden" name="_subject" value="New Quote Request — ${esc(SITE.name)}">
          <input type="hidden" name="_next" value="${SITE.domain}/thank-you.html">
          <input type="hidden" name="_captcha" value="false">
          <input type="hidden" name="_template" value="table">
          <p style="display:none"><label>Leave this field blank: <input name="_honey" tabindex="-1" autocomplete="off"></label></p>

          <div class="form-progress" aria-hidden="true"><span class="form-progress-bar"></span></div>

          <fieldset class="form-step" data-step="contact">
            <legend class="field-label">How Can We Reach You? *</legend>
            <input type="text" name="name" placeholder="Full Name" autocomplete="name" aria-label="Full name" required>
            <div class="field-row">
              <input type="tel" name="phone" placeholder="Phone" autocomplete="tel" aria-label="Phone number">
              <input type="email" name="email" placeholder="Email" autocomplete="email" aria-label="Email address">
            </div>
            <p class="field-hint">Phone or email — whichever you prefer.</p>
          </fieldset>

          <fieldset class="form-step" data-step="area">
            <legend class="field-label">Where Is The Project? *</legend>
            <select name="service-area" aria-label="City or service area" required>
              <option value="" disabled${defaultArea ? '' : ' selected'}>City / Service Area</option>
${areas.map((a) => `              <option${a === defaultArea ? ' selected' : ''}>${a}</option>`).join('\n')}
            </select>
          </fieldset>

          <fieldset class="form-step" data-step="service">
            <legend class="field-label">What Are You Planning? *</legend>
            <div class="check-grid">
${services.map((s) => `              <label class="check-item"><input type="checkbox" name="service[]" value="${esc(s)}"> ${esc(s)}</label>`).join('\n')}
            </div>
          </fieldset>

          <fieldset class="form-step" data-step="timing">
            <legend class="field-label">When Would You Like To Start?</legend>
            <div class="radio-grid">
              <label class="radio-item"><input type="radio" name="timing" value="Timing is flexible"> Flexible</label>
              <label class="radio-item"><input type="radio" name="timing" value="Within 3 months"> Within 3 Mo.</label>
              <label class="radio-item"><input type="radio" name="timing" value="3+ months out"> 3+ Mo. Out</label>
            </div>
          </fieldset>

          <fieldset class="form-step" data-step="status">
            <legend class="field-label">Project Status</legend>
            <div class="radio-grid two">
              <label class="radio-item"><input type="radio" name="status" value="Ready to build"> Ready to Build</label>
              <label class="radio-item"><input type="radio" name="status" value="Gathering quotes"> Gathering Quotes</label>
            </div>
          </fieldset>

          <fieldset class="form-step" data-step="message">
            <legend class="field-label">Anything Else? <span class="optional">(optional)</span></legend>
            <textarea name="message" aria-label="Project details" placeholder="Address, square footage, rooms involved, plans you already have…"></textarea>
          </fieldset>

          <button type="submit" class="btn btn-primary form-submit">Send My Request</button>
        </form>
      </div>

      <div class="quote-chat">
        <span class="eyebrow-dark">Let's Talk</span>
        <p class="h2-like">Let's Get in Touch!</p>
        <p>Tell us what you're planning — a new custom home, a kitchen or bath remodel, an addition — and we'll follow up to talk through scope, budget, and timing. Prefer the phone? Call and talk to a builder directly.</p>
        <a ${callAttr(label)} class="btn btn-primary">${ICON.phone} Call ${SITE.phoneDisplay}</a>
        <div class="quote-trust">
          <span class="item">${ICON.check} Four Decades of Experience</span>
          <span class="item">${ICON.check} 200+ Homes Built in Charlotte County</span>
          <span class="item">${ICON.check} Trusted by 800+ Customers</span>
          <span class="item">${ICON.check} Rated Top 5% of Builders by BuildZoom</span>
        </div>
        <address class="nap-block">
          <strong>${SITE.name}</strong><br>
          ${SITE.street}, ${SITE.city}, ${SITE.region} ${SITE.zip}<br>
          ${SITE.phoneDisplay}
        </address>
      </div>
    </div>
  </div>
</section>
`;
}

function ctaBand(label, heading = 'Ready to Build or Remodel?', text = 'Talk with a builder who has spent four decades working in Southwest Florida.') {
  return `<div class="cta-band">
  <div class="container">
    <div><h2>${heading}</h2><p>${text}</p></div>
    <div class="cta-actions">
      <a ${callAttr(label)} class="btn btn-primary">${ICON.phone} Call ${SITE.phoneDisplay}</a>
      <a href="#quote" class="btn btn-outline">Request a Quote</a>
    </div>
  </div>
</div>
`;
}

function faqBlock(faqs, heading = 'Frequently Asked Questions', alt = false) {
  return `<section${alt ? ' class="section-alt"' : ''}>
  <div class="container">
    <div class="section-head"><span class="eyebrow-dark">FAQ</span><h2>${heading}</h2></div>
    <div class="faq">
${faqs.map(([q, a]) => `      <details><summary>${q}</summary><p>${a}</p></details>`).join('\n')}
    </div>
  </div>
</section>
`;
}

const stripTags = (s) => s.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&');
const faqSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: stripTags(q), acceptedAnswer: { '@type': 'Answer', text: stripTags(a) } })),
});
const breadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: `${SITE.domain}${path}` })),
});

function pageHero({ crumbs, eyebrow, h1, lead, label }) {
  return `<section class="hero page-hero">
  <div class="container">
    <div>
      <nav class="breadcrumb" aria-label="Breadcrumb">${crumbs.map(([n, p], i) => (i < crumbs.length - 1 ? `<a href="${p}">${n}</a> / ` : `<span>${n}</span>`)).join('')}</nav>
      <span class="eyebrow">${eyebrow}</span>
      <h1>${h1}</h1>
      <p class="hero-lead">${lead}</p>
      <div class="hero-actions">
        <a ${callAttr(label)} class="btn btn-primary">${ICON.phone} Call ${SITE.phoneDisplay}</a>
        <a href="#quote" class="btn btn-outline">Request a Quote</a>
      </div>
    </div>
  </div>
</section>
`;
}

const TRUST_BAR = `<div class="trust-bar"><div class="container">
  <div class="trust-item"><strong>4 Decades</strong><span>Of Experience</span></div>
  <div class="trust-item"><strong>800+</strong><span>Customers Served</span></div>
  <div class="trust-item"><strong>200+</strong><span>Homes Built in Charlotte County</span></div>
  <div class="trust-item"><strong>Top 5%</strong><span>Of Builders on BuildZoom</span></div>
</div></div>
`;

module.exports = { CSS, SITE, SERVICES_NAV, LOCATIONS_NAV, ICON, esc, stars, callAttr, head, header, footer, quoteSection, ctaBand, faqBlock, faqSchema, breadcrumbSchema, pageHero, TRUST_BAR };
