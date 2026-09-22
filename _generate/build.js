// Static site generator for brundermanbuildingcompany — run: node _generate/build.js
// No dependencies. Writes plain .html files into the repo root; the site itself deploys with no build.
const fs = require('fs');
const path = require('path');
const P = require('./parts');
const SERVICES = require('./services');
const LOCATIONS = require('./locations');
const GUIDES = require('./guides');
const { SITE, ICON, esc, stars, callAttr } = P;

const ROOT = path.join(__dirname, '..');
const pages = []; // [path, priority]
const write = (rel, html, priority) => {
  const file = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html.replace(/\r\n/g, '\n'));
  if (priority) pages.push([rel === 'index.html' ? '/' : '/' + rel, priority]);
};

// ---------- Reviews (verbatim from the Google Business Profile) ----------
const REVIEWS = [
  ['Benson Davis', 5, 'Brian is a excellent builder and his wife lori is one of the best designers in the area as well. There quality is second to none.'],
  ['Craig Newman', 5, 'Brunderman building are the most experienced builders in the area. Maybe the state. Maybe the world. These people live and breathe building.'],
  ['Erin Schafers', 5, 'Responsiveness, Punctuality, Quality, Professionalism, Value'],
  ['Liquid Snake', 4, "Customer service was outstanding. Everyone there is super friendly and professional. The building at the time I was there was being renovated so it wasn't 5 star clean/sleek."],
  ['JJ', 5, "The owner Brian it's a great guy to work with"],
];

// ---------- "See Our Work" slides ----------
// PLACEHOLDERS: swap each /images/work/*.svg for a real project photo (see LAUNCH_TODO.md).
const WORK = [
  ['custom-home-exterior', 'Custom Home Construction', 'New build, Charlotte County'],
  ['kitchen-remodel', 'Kitchen Remodeling', 'Cabinetry, island & countertops'],
  ['bathroom-remodel', 'Bathroom Remodeling', 'Walk-in shower & vanity'],
  ['whole-home-remodel', 'Home Remodeling', 'Open-concept renovation'],
  ['home-addition', 'Home Additions', 'Primary suite addition'],
  ['waterfront-home', 'Waterfront Homes', 'Canal-front construction'],
  ['outdoor-living', 'Lanai & Outdoor Living', 'Covered lanai & summer kitchen'],
];

function workSection() {
  return `<section class="section-alt" id="work">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow-dark">See Our Work</span>
      <h2>Four Decades of Homes, Kitchens &amp; Baths</h2>
      <p>A look at the kind of custom homes and remodeling projects we build across Port Charlotte and Southwest Florida.</p>
    </div>
    <div class="work-gallery">
      <div class="work-track" tabindex="0" aria-label="Project photo carousel">
${WORK.map(([file, t, s]) => `        <div class="work-slide">
          <div class="work-slide-media"><img src="/images/work/${file}.svg" alt="${esc(t)} — ${esc(s)} (illustration)" loading="lazy" width="480" height="360"></div>
          <div class="work-slide-caption"><strong>${esc(t)}</strong><span>${esc(s)}</span></div>
        </div>`).join('\n')}
      </div>
      <div class="work-controls">
        <button class="work-arrow prev" aria-label="Previous photos"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg></button>
        <button class="work-arrow next" aria-label="Next photos"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg></button>
      </div>
    </div>
  </div>
</section>
`;
}

function reviewsSection() {
  return `<section id="reviews">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow-dark">Reviews</span>
      <h2>What Our Customers Are Saying</h2>
      <p>Real feedback from our Google Business Profile.</p>
      <div class="rating-badge"><b>4.7</b>${stars(5).replace('5 out of 5 stars', 'Rated 4.7 out of 5 on Google')}<span>on Google</span></div>
    </div>
    <div class="reviews-grid">
${REVIEWS.map(([name, n, text], i) => `      <div class="review-card${i >= 3 ? ' wide' : ''}">
        ${stars(n)}
        <p class="review-quote">&ldquo;${esc(text)}&rdquo;</p>
        <div class="review-meta"><span class="review-avatar" aria-hidden="true">${esc(name[0])}</span><span><strong class="review-author">${esc(name)}</strong><span class="review-source">Google Review</span></span></div>
      </div>`).join('\n')}
    </div>
    <div class="reviews-cta"><a href="${SITE.gbp}" target="_blank" rel="noopener" class="btn btn-outline-dark">Read Our Reviews on Google</a></div>
  </div>
</section>
`;
}

const serviceCards = (blurbs) =>
  SERVICES.map((s, i) => `      <a class="card" href="/services/${s.slug}.html">
        <span class="card-icon">${ICON[s.icon]}</span>
        <h3>${s.name}</h3>
        <p>${blurbs ? blurbs[i] : s.card}</p>
        <span class="card-link">Learn more</span>
      </a>`).join('\n');

const areaGrid = () =>
  `<div class="area-grid">
${P.LOCATIONS_NAV.map(([slug, n, c]) => `      <a class="area-card" href="/locations/${slug}.html"><strong>${n}</strong><span>${c}</span></a>`).join('\n')}
    </div>`;

// ---------- Homepage ----------
const HOME_FAQS = [
  ['What areas does Brunderman Building Co Inc serve?', 'Port Charlotte is the center of our service area, and we work within about 50 miles of it. That includes Punta Gorda, North Port, Englewood, Venice, Cape Coral, Fort Myers, and the smaller communities of Charlotte, Sarasota, Lee, and DeSoto counties in between.'],
  ['What kinds of projects do you take on?', 'We are both a home builder and a remodeler. Our work includes custom home construction, whole-home remodeling, kitchen remodeling, bathroom remodeling, and home additions.'],
  ['How long has Brunderman Building Co Inc been in business?', 'We have four decades of experience building in Southwest Florida. In that time we have built more than 200 homes in Charlotte County and served more than 800 customers.'],
  ['Are your homes hurricane-proof?', 'We build hurricane-proof homes in the practical sense: concrete block construction, engineered roof-to-wall connections, impact-rated windows and doors, and correct flood elevation, all built to meet and exceed the Florida Building Code for our wind-borne debris region. Our motto is "Houses shouldn\'t break," and after four decades of Florida storms it is the standard every home we build is held to.'],
  ['Do you install impact-rated windows?', 'Yes. Impact-rated windows and doors are standard on our custom homes, and replacing older single-pane or shuttered openings with impact-rated units is one of the most common upgrades in our remodeling work across Port Charlotte and Southwest Florida.'],
  ['What are your hours?', `We are available 24/7. Call ${SITE.phoneDisplay} any time, or send the quote form and we will follow up.`],
  ['How do I get a quote for my project?', `Call us at ${SITE.phoneDisplay} or fill out the quote request form on this page. Tell us where the property is and what you have in mind, and we will follow up to discuss scope, budget, and timing.`],
];

write('index.html',
  P.head({
    title: 'Home Builder in Port Charlotte, FL | Brunderman Building Co Inc',
    description: 'Port Charlotte home builder since 1987. Hurricane-proof custom homes with impact-rated windows, plus kitchen, bath and whole-home remodeling. 200+ homes built.',
    path: '/',
    schemas: [P.faqSchema(HOME_FAQS), { '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${SITE.domain}/#website`, name: SITE.name, url: `${SITE.domain}/`, publisher: { '@id': `${SITE.domain}/#business` } }],
  }) +
  P.header() +
  `<main id="main">
<section class="hero">
  <div class="container">
    <div>
      <span class="eyebrow">Port Charlotte &amp; Southwest Florida</span>
      <h1>Home Builder in <span class="accent">Port Charlotte, FL</span></h1>
      <p class="hero-motto">&ldquo;${SITE.motto}&rdquo;</p>
      <p class="hero-lead">Hurricane-proof custom homes and remodels with impact-rated windows, from a builder with four decades of experience and more than 200 homes built in Charlotte County.</p>
      <div class="hero-actions">
        <a ${callAttr('hero_phone_button')} class="btn btn-primary">${ICON.phone} Call ${SITE.phoneDisplay}</a>
        <a href="#quote" class="btn btn-outline">Request a Quote</a>
      </div>
      <ul class="hero-badges">
        <li>${ICON.check} Hurricane-Proof Homes</li>
        <li>${ICON.check} Impact-Rated Windows</li>
        <li>${ICON.check} Kitchens, Baths &amp; Additions</li>
        <li>${ICON.star} 4.7 on Google</li>
      </ul>
    </div>
    <div class="stat-grid">
      <div class="stat-card"><span class="stat-num">4</span><span class="stat-label">Decades of building experience</span></div>
      <div class="stat-card"><span class="stat-num">800<em>+</em></span><span class="stat-label">Customers who trusted us</span></div>
      <div class="stat-card"><span class="stat-num">200<em>+</em></span><span class="stat-label">Homes built in Charlotte County</span></div>
      <div class="stat-card"><span class="stat-num">Top 5<em>%</em></span><span class="stat-label">Of builders, rated by BuildZoom</span></div>
    </div>
  </div>
</section>
` +
  workSection() +
  P.quoteSection({ alt: false, label: 'home_quote_section_phone_button', heading: 'Request a Quote From a Port Charlotte Home Builder' }) +
  reviewsSection().replace('<section id="reviews">', '<section id="reviews" class="section-alt">') +
  `${P.MOTTO_BAND}
<section id="built-to-last">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow-dark">Hurricane-Proof Construction</span>
      <h2>Homes Built to Stand Up to Florida Weather</h2>
      <p>Every custom home and remodel we build is engineered for the wind-borne debris region we live in &mdash; so the house holds together when the weather does not.</p>
    </div>
    <div class="card-grid row-cards">
      <div class="card"><span class="card-icon">${ICON.shield}</span><h3>Impact-Rated Windows &amp; Doors</h3><p>Impact-rated windows, sliders, and entry doors are standard on our new homes and the first upgrade we recommend on a remodel. No shutters to hang, no plywood, and a quieter, more efficient house every day of the year.</p></div>
      <div class="card"><span class="card-icon">${ICON.home}</span><h3>Concrete Block &amp; a Continuous Load Path</h3><p>Concrete block walls, poured tie-beams, and engineered hurricane straps from the trusses down to the footing, so the roof, walls, and foundation act as one structure under hurricane loads.</p></div>
      <div class="card"><span class="card-icon">${ICON.ruler}</span><h3>Built Above the Flood Line</h3><p>Finished floors set at or above the required flood elevation, with drainage planned so water moves away from the house &mdash; the difference between a bad storm and a rebuild.</p></div>
    </div>
  </div>
</section>

<section id="services">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow-dark">What We Do</span>
      <h2>Builder &amp; Remodeler Services</h2>
      <p>One experienced home builder for new construction and remodeling alike — every trade coordinated under a single contract.</p>
    </div>
    <div class="card-grid">
${serviceCards()}
      <a class="card" href="/services.html" style="background:var(--charcoal);border-color:var(--charcoal);">
        <span class="card-icon" style="background:var(--orange-btn);color:#fff;">${ICON.ruler}</span>
        <h3 style="color:#fff;">Not Sure Where It Fits?</h3>
        <p style="color:#d6d1c7;">Storm rebuilds, lanai enclosures, window and door replacement, garage conversions — if it involves building, ask us.</p>
        <span class="card-link" style="color:var(--orange-light);">See all services</span>
      </a>
    </div>
  </div>
</section>

<section class="section-dark" id="why">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow">Why Brunderman</span>
      <h2>A Builder Port Charlotte Has Trusted for Four Decades</h2>
      <p>Building in Southwest Florida means building for wind, water, and heat. Experience is what keeps those from becoming your problem.</p>
    </div>
    <div class="card-grid row-cards">
      <div class="card"><span class="card-icon">${ICON.home}</span><h3>200+ Local Homes</h3><p>More than 200 homes built in Charlotte County — on platted lots, canal lots, and acreage. We know what each one demands before the first form board goes down.</p></div>
      <div class="card"><span class="card-icon">${ICON.people}</span><h3>800+ Customers</h3><p>New builds and remodels for more than 800 customers. One of them put it simply: &ldquo;These people live and breathe building.&rdquo;</p></div>
      <div class="card"><span class="card-icon">${ICON.shield}</span><h3>Top 5% on BuildZoom</h3><p>BuildZoom rates Brunderman Building Co Inc among the top 5% of builders — an independent measure of track record.</p></div>
    </div>
  </div>
</section>
${P.TRUST_BAR}
<section id="process">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow-dark">How It Works</span>
      <h2>From First Call to Final Walkthrough</h2>
    </div>
    <ol class="steps">
      <li class="step"><h3>Talk It Through</h3><p>Call or send the form. We discuss your property, your goals, and a realistic budget range.</p></li>
      <li class="step"><h3>Plan &amp; Price</h3><p>Plans, selections, and a written scope of work with pricing you can understand.</p></li>
      <li class="step"><h3>Permit &amp; Schedule</h3><p>We handle permit submittals with the local building department and line up the trades.</p></li>
      <li class="step"><h3>Build It Right</h3><p>Construction, inspections, and a final walkthrough with the builder responsible for the job.</p></li>
    </ol>
  </div>
</section>

<section class="section-alt" id="areas">
  <div class="container">
    <div class="split">
      <div class="prose collapsible">
        <span class="eyebrow-dark">Service Area</span>
        <h2>Port Charlotte and 50 Miles Around It</h2>
        <p>Our office is on Pinnacle Street near Charlotte Harbor, minutes from US-41 and the heart of Port Charlotte. From there our service area reaches about 50 miles in every direction: north through <a href="/locations/north-port.html">North Port</a> to <a href="/locations/venice.html">Venice</a>, west along State Road 776 to <a href="/locations/englewood.html">Englewood</a> and Rotonda West, across the Peace River to <a href="/locations/punta-gorda.html">Punta Gorda</a>, and south down Burnt Store Road and I-75 to <a href="/locations/cape-coral.html">Cape Coral</a> and <a href="/locations/fort-myers.html">Fort Myers</a>.</p>
        <p>The region shares a climate and a building code, but every community has its own character. Port Charlotte and North Port are defined by platted lots and canals. Punta Gorda Isles and Cape Coral are waterfront markets where flood elevation and seawalls shape every plan. Englewood has coastal high-hazard zones on Manasota Key, while Venice and Fort Myers have historic districts with design review. As a home builder working across all of them, we plan each project around the local rules rather than finding out about them halfway through. See <a href="/service-areas.html">all service areas</a>, or read our <a href="/guides.html">homeowner guides</a> on flood rules, permits, and building on your own lot.</p>
      </div>
      <div>
        ${areaGrid().replace('class="area-grid"', 'class="area-grid two"')}
      </div>
    </div>
  </div>
</section>
` +
  P.faqBlock(HOME_FAQS) +
  P.ctaBand('home_cta_band_phone_button') +
  `</main>
` +
  P.footer(),
  '1.0');

// ---------- Services hub ----------
write('services.html',
  P.head({
    title: 'Building & Remodeling Services in Port Charlotte, FL | Brunderman',
    description: 'Building and remodeling services in Port Charlotte, FL: custom homes, home remodeling, kitchens, bathrooms and additions from one experienced builder.',
    path: '/services.html',
    schemas: [P.breadcrumbSchema([['Home', '/'], ['Services', '/services.html']])],
  }) +
  P.header('services') +
  `<main id="main">
` +
  P.pageHero({
    crumbs: [['Home', '/'], ['Services', '/services.html']],
    eyebrow: 'Builder · Remodeler · General Contractor',
    h1: 'Building &amp; Remodeling Services in Port Charlotte, FL',
    lead: 'New custom homes and every kind of remodeling, from one builder with four decades of Southwest Florida experience.',
    label: 'services_hub_hero_phone_button',
  }) +
  `<section>
  <div class="container">
    <div class="section-head">
      <span class="eyebrow-dark">Our Services</span>
      <h2>What We Build</h2>
      <p>Brunderman Building Co Inc offers building and remodeling services to homeowners in Port Charlotte and within about 50 miles. Choose a service to see what is involved.</p>
    </div>
    <div class="card-grid">
${serviceCards()}
    </div>
  </div>
</section>
<section class="section-alt">
  <div class="container">
    <div class="split">
      <div class="prose collapsible">
        <h2>One Builder for the Whole Project</h2>
        <p>Many remodeling companies specialize in a single room or a single trade. We are home builders first, which means we are comfortable with every part of a house — foundation, structure, roof, mechanical systems, and finishes. That matters when a kitchen remodel uncovers a plumbing problem in the slab, or when an addition needs an engineered roof tie-in.</p>
        <p>It also keeps things simple for you. Whether you need custom home construction or a bathroom update, our building and remodeling services come with one contract, one schedule, and one company accountable for the result. We coordinate the permits, the subcontractors, the inspections, and the punch list.</p>
        <h3>Other Work We Are Often Asked About</h3>
        <ul class="cols">
          <li>Hurricane and water damage rebuilds</li>
          <li>Impact window and door replacement</li>
          <li>Lanai enclosures and outdoor kitchens</li>
          <li>Garage additions and conversions</li>
          <li>Open floor plan conversions</li>
          <li>Aging-in-place modifications</li>
        </ul>
      </div>
      <aside class="fact-card">
        <h3>At a Glance</h3>
        <dl>
          <div><dt>Experience</dt><dd>Four decades</dd></div>
          <div><dt>Homes built</dt><dd>200+ in Charlotte County</dd></div>
          <div><dt>Customers</dt><dd>800+</dd></div>
          <div><dt>BuildZoom</dt><dd>Rated top 5% of builders</dd></div>
        </dl>
        <a ${callAttr('services_hub_card_phone_button')} class="btn btn-primary">Call ${SITE.phoneDisplay}</a>
      </aside>
    </div>
  </div>
</section>
` +
  P.quoteSection({ alt: false, label: 'services_hub_quote_phone_button', heading: 'Tell Us What You Want Built' }) +
  `</main>
` +
  P.footer(),
  '0.8');

// ---------- Service pages ----------
for (const s of SERVICES) {
  const crumbs = [['Home', '/'], ['Services', '/services.html'], [s.name, `/services/${s.slug}.html`]];
  write(`services/${s.slug}.html`,
    P.head({
      title: s.title,
      description: s.description,
      path: `/services/${s.slug}.html`,
      schemas: [
        P.breadcrumbSchema(crumbs),
        P.faqSchema(s.faqs),
        { '@context': 'https://schema.org', '@type': 'Service', name: s.name, serviceType: s.name, provider: { '@id': `${SITE.domain}/#business` }, areaServed: P.LOCATIONS_NAV.map(([, n]) => `${n}, FL`), url: `${SITE.domain}/services/${s.slug}.html` },
      ],
    }) +
    P.header(s.slug) +
    `<main id="main">
` +
    P.pageHero({ crumbs, eyebrow: s.eyebrow, h1: s.h1, lead: s.lead, label: 'service_page_hero_phone_button' }) +
    `<section>
  <div class="container">
    <div class="split">
      <div class="prose collapsible">
        <span class="eyebrow-dark">${s.name}</span>
        <h2>${s.introH2}</h2>
${s.intro.map((p) => `        <p>${p}</p>`).join('\n')}
      </div>
      <aside class="fact-card">
        <h3>Quick Facts</h3>
        <dl>
${s.facts.map(([k, v]) => `          <div><dt>${k}</dt><dd>${v}</dd></div>`).join('\n')}
        </dl>
        <a ${callAttr('service_page_card_phone_button')} class="btn btn-primary">Call ${SITE.phoneDisplay}</a>
      </aside>
    </div>
  </div>
</section>
<section class="section-alt">
  <div class="container">
    <div class="section-head"><span class="eyebrow-dark">Scope</span><h2>${s.includesTitle}</h2></div>
    <div class="card-grid acc-grid">
${s.includes.map(([t, d]) => `      <details class="card card-acc" open><summary><h3>${t}</h3></summary><p>${d}</p></details>`).join('\n')}
    </div>
  </div>
</section>
<section class="section-dark">
  <div class="container">
    <div class="section-head"><span class="eyebrow">Our Process</span><h2>How a ${s.name} Project Works</h2></div>
    <ol class="steps">
${s.steps.map(([t, d]) => `      <li class="step"><h3>${t}</h3><p>${d}</p></li>`).join('\n')}
    </ol>
  </div>
</section>
${P.TRUST_BAR}
<section>
  <div class="container">
    <div class="prose collapsible narrow">
      <h2>${s.seoH2}</h2>
${s.seo.map((p) => `      <p>${p}</p>`).join('\n')}
      <h3>${s.variantsH3}</h3>
      <ul class="cols">
${s.variants.map((v) => `        <li>${v}</li>`).join('\n')}
      </ul>
      <h3>${s.name} Service Area</h3>
      <p>${s.areaP}</p>
      <p>Looking for something else? See our other services: ${SERVICES.filter((o) => o.slug !== s.slug).map((o) => `<a href="/services/${o.slug}.html">${o.name.toLowerCase()}</a>`).join(', ')}.</p>
      <p><strong>Related guide:</strong> <a href="/guides/${s.guide[0]}.html">${s.guide[1]}</a>.</p>
    </div>
  </div>
</section>
${P.MOTTO_BAND}
<section class="section-alt">
  <div class="container">
    <div class="prose collapsible narrow">
      <h2>${s.stormH2}</h2>
${s.storm.map((p) => `      <p>${p}</p>`).join('\n')}
    </div>
  </div>
</section>
` +
    P.faqBlock(s.faqs, `${s.name} FAQ`, true) +
    P.quoteSection({ alt: false, label: 'service_page_quote_phone_button', heading: `Request a ${s.name} Quote` }) +
    `</main>
` +
    P.footer(),
    '0.9');
}

// ---------- Location pages ----------
for (const l of LOCATIONS) {
  const crumbs = [['Home', '/'], ['Service Areas', '/service-areas.html'], [`${l.city}, FL`, `/locations/${l.slug}.html`]];
  write(`locations/${l.slug}.html`,
    P.head({
      title: l.title,
      description: l.description,
      path: `/locations/${l.slug}.html`,
      place: `${l.city}, Florida`,
      schemas: [
        P.breadcrumbSchema(crumbs),
        P.faqSchema(l.faqs),
        { '@context': 'https://schema.org', '@type': 'Service', name: `Home building and remodeling in ${l.city}, FL`, serviceType: 'Home construction and remodeling', provider: { '@id': `${SITE.domain}/#business` }, areaServed: { '@type': 'City', name: `${l.city}, FL` }, url: `${SITE.domain}/locations/${l.slug}.html` },
      ],
    }) +
    P.header() +
    `<main id="main">
` +
    P.pageHero({ crumbs, eyebrow: l.eyebrow, h1: l.h1, lead: l.lead, label: 'location_page_hero_phone_button' }) +
    `<section>
  <div class="container">
    <div class="split">
      <div class="prose collapsible">
        <span class="eyebrow-dark">${l.city}, Florida</span>
        <h2>Building in ${l.city}</h2>
${l.intro.map((p) => `        <p>${p}</p>`).join('\n')}
      </div>
      <aside class="fact-card">
        <h3>${l.city} at a Glance</h3>
        <dl>
${l.facts.map(([k, v]) => `          <div><dt>${k}</dt><dd>${v}</dd></div>`).join('\n')}
        </dl>
        <a ${callAttr('location_page_phone_button')} class="btn btn-primary">Call ${SITE.phoneDisplay}</a>
      </aside>
    </div>
  </div>
</section>
<section class="section-alt">
  <div class="container">
    <div class="section-head"><span class="eyebrow-dark">Services</span><h2>What We Build in ${l.city}</h2></div>
    <div class="card-grid">
${serviceCards(l.svc)}
    </div>
  </div>
</section>
<section class="section-dark">
  <div class="container">
    <div class="prose collapsible narrow">
      <span class="eyebrow">Local Knowledge</span>
      <h2>${l.localH2}</h2>
${l.local.map((p) => `      <p>${p}</p>`).join('\n')}
    </div>
  </div>
</section>
${P.MOTTO_BAND}
${P.TRUST_BAR}
<section>
  <div class="container">
    <div class="prose collapsible narrow">
      <h2>${l.seoH2}</h2>
${l.seo.map((p) => `      <p>${p}</p>`).join('\n')}
      <h3>${l.variantsH3}</h3>
      <ul class="cols">
${l.variants.map((v) => `        <li>${v}</li>`).join('\n')}
      </ul>
      <h3>${l.nearbyH3}</h3>
      <p>${l.nearby}</p>
      <p><strong>Helpful reading:</strong> ${GUIDES.map((g) => `<a href="/guides/${g.slug}.html">${g.short}</a>`).join(' · ')}</p>
    </div>
  </div>
</section>
` +
    P.faqBlock(l.faqs, `${l.city} Building &amp; Remodeling FAQ`, true) +
    P.quoteSection({ alt: false, label: 'location_page_quote_phone_button', defaultArea: l.city, heading: `Request a Quote in ${l.city}` }) +
    `</main>
` +
    P.footer(),
    l.slug === 'port-charlotte' ? '0.9' : '0.8');
}

// ---------- About & Contact ----------
write('about.html',
  P.head({
    title: 'About Brian Brunderman | Brunderman Building Co Inc',
    description: `Meet Brian Brunderman, building hurricane-proof custom homes in Port Charlotte since 1987. Available 24/7 at ${SITE.phoneDisplay}. Request a quote for your project.`,
    path: '/about.html',
    schemas: [P.breadcrumbSchema([['Home', '/'], ['About & Contact', '/about.html']])],
  }) +
  P.header('about') +
  `<main id="main">
` +
  P.pageHero({
    crumbs: [['Home', '/'], ['About &amp; Contact', '/about.html']],
    eyebrow: 'About &amp; Contact',
    h1: 'About Brunderman Building Co Inc',
    lead: 'Founded by Brian Brunderman in 1987. Four decades of experience, more than 200 local homes, over 800 customers, and one motto: houses shouldn\'t break.',
    label: 'about_hero_phone_button',
  }) +
  `<section>
  <div class="container">
    <div class="split">
      <div class="prose collapsible">
        <span class="eyebrow-dark">Our Story</span>
        <h2>Meet Brian Brunderman</h2>
        <p>Brian Brunderman has been in construction his whole life. In his twenties he ran his own framing business, and in 1987 he founded Brunderman Building Company, specializing in custom home building and remodeling. Four decades later he is still on the job, and the company has built more than 200 homes in Charlotte County and worked for more than 800 customers.</p>
        <p>Brian lives in Port Charlotte with his wife Lori &mdash; a designer whose eye customers mention in their reviews &mdash; in a house he built himself. They have three children and six grandchildren. Building here is not a sideline for the Brundermans: it is the family business, and it has been for nearly forty years.</p>
        <h3>&ldquo;Houses Shouldn&rsquo;t Break.&rdquo;</h3>
        <p>That is Brian&rsquo;s motto, and it is the standard behind every project. A house should stand for decades without major problems, and in Southwest Florida that means building for the weather: concrete block, engineered roof connections, impact-rated windows and doors, and floors set above the flood line. Brian is known for hurricane-proof homes because he has spent a career watching what holds up in Florida storms and what does not, and he builds accordingly.</p>
        <p>Customers describe him as a friend and a pleasure to work with. Their reviews call him &ldquo;a great guy to work with&rdquo; and the company people who &ldquo;live and breathe building.&rdquo; BuildZoom rates Brunderman Building Co Inc in the top 5% of builders. We are proud of that, but prouder of the homes themselves &mdash; many of which you drive past every day in Port Charlotte, Punta Gorda, and the communities around them.</p>
        <h3>What We Do</h3>
        <ul class="cols">
${SERVICES.map((s) => `          <li><a href="/services/${s.slug}.html">${s.name}</a></li>`).join('\n')}
        </ul>
      </div>
      <aside class="fact-card">
        <h3>Contact</h3>
        <dl>
          <div><dt>Phone</dt><dd><a ${callAttr('about_card_phone_link')} style="color:#fff;">${SITE.phoneDisplay}</a></dd></div>
          <div><dt>Office</dt><dd>${SITE.street}<br>${SITE.city}, ${SITE.region} ${SITE.zip}</dd></div>
          <div><dt>Hours</dt><dd>Available 24/7</dd></div>
          <div><dt>Founded</dt><dd>${SITE.founded}, by Brian Brunderman</dd></div>
          <div><dt>Service area</dt><dd>Port Charlotte and about 50 miles around it</dd></div>
          <div><dt>Google</dt><dd><a href="${SITE.gbp}" target="_blank" rel="noopener" style="color:var(--orange-light);">View our Business Profile</a></dd></div>
        </dl>
        <a ${callAttr('about_card_phone_button')} class="btn btn-primary">Call Now</a>
      </aside>
    </div>
  </div>
</section>
${P.TRUST_BAR}
<section>
  <div class="container">
    <div class="section-head">
      <span class="eyebrow-dark">Find Us</span>
      <h2>Our Office Near Charlotte Harbor</h2>
      <p>${SITE.street}, ${SITE.city}, ${SITE.region} ${SITE.zip} — just off US-41, minutes from Port Charlotte and the Peace River bridges.</p>
    </div>
    <div class="map-embed"><iframe title="Map showing the ${esc(SITE.name)} office" src="https://www.google.com/maps?q=${encodeURIComponent(SITE.legalName + ', ' + SITE.street + ', ' + SITE.city + ', ' + SITE.region + ' ' + SITE.zip)}&amp;output=embed" width="600" height="340" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div>
    <div class="reviews-cta"><a href="${SITE.gbp}" target="_blank" rel="noopener" class="btn btn-outline-dark">Get Directions on Google Maps</a></div>
  </div>
</section>
<section class="section-alt">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow-dark">Service Area</span>
      <h2>Where We Work</h2>
      <p>Port Charlotte is the center of our service area, which extends roughly 50 miles across Charlotte, Sarasota, Lee, and DeSoto counties. Select a community to read about building and remodeling there.</p>
    </div>
    ${areaGrid()}
  </div>
</section>
` +
  reviewsSection() +
  P.quoteSection({ alt: true, label: 'about_quote_section_phone_button', heading: 'Contact Us About Your Project' }) +
  `</main>
` +
  P.footer(),
  '0.7');

// ---------- Service areas hub ----------
const AREA_BLURBS = {
  'port-charlotte': 'Our home market: platted lots, 165 miles of canals, and most of the 200+ homes we have built.',
  'punta-gorda': 'Waterfront building in Punta Gorda Isles and Burnt Store Isles, plus the downtown historic district.',
  'north-port': 'Build-on-your-lot homes with well, septic, and site work, and remodels in established communities.',
  'englewood': 'Coastal construction on both sides of the county line — Rotonda West, Manasota Key, Cape Haze.',
  'venice': 'Character-sensitive remodeling on the island and practical updates in South Venice and Venice Gardens.',
  'cape-coral': 'Canal-front custom homes and post-storm renovations across 400 miles of waterways.',
  'fort-myers': 'From 1920s bungalows to riverfront homes off McGregor Boulevard and new construction out east.',
};
write('service-areas.html',
  P.head({
    title: 'Service Areas in Southwest Florida | Brunderman Building Co Inc',
    description: 'Brunderman Building Co Inc serves Port Charlotte and about 50 miles around it: Punta Gorda, North Port, Englewood, Venice, Cape Coral and Fort Myers, FL.',
    path: '/service-areas.html',
    schemas: [P.breadcrumbSchema([['Home', '/'], ['Service Areas', '/service-areas.html']])],
  }) +
  P.header('areas') +
  `<main id="main">
` +
  P.pageHero({
    crumbs: [['Home', '/'], ['Service Areas', '/service-areas.html']],
    eyebrow: 'Charlotte · Sarasota · Lee · DeSoto Counties',
    h1: 'Service Areas: Port Charlotte &amp; Southwest Florida',
    lead: 'Port Charlotte is the center of our service area, which reaches about 50 miles in every direction.',
    label: 'areas_hub_hero_phone_button',
  }) +
  `<section>
  <div class="container">
    <div class="section-head">
      <span class="eyebrow-dark">Where We Build</span>
      <h2>Seven Communities, One Experienced Builder</h2>
      <p>Each of these Southwest Florida communities has its own building department, flood maps, and housing stock. Choose yours for local detail.</p>
    </div>
    <div class="card-grid">
${P.LOCATIONS_NAV.map(([slug, n, c]) => `      <a class="card" href="/locations/${slug}.html"><span class="card-icon">${ICON.pin}</span><h3>${n}, FL</h3><p>${AREA_BLURBS[slug]} <em>${esc(c)}.</em></p><span class="card-link">Building in ${n}</span></a>`).join('\n')}
    </div>
  </div>
</section>
<section class="section-alt">
  <div class="container">
    <div class="prose collapsible narrow">
      <h2>How Far Our Service Area Reaches</h2>
      <p>Our office sits on Pinnacle Street near Charlotte Harbor, close to the middle of Charlotte County. From there, a 50-mile radius covers all of Charlotte County, the southern half of Sarasota County, most of Lee County, and the western edge of DeSoto County — the heart of Southwest Florida.</p>
      <p>Beyond the seven communities above, that includes Deep Creek, Harbour Heights, Lake Suzy, Charlotte Harbor, El Jobean, Gulf Cove and South Gulf Cove, Rotonda West, Cape Haze, Placida, Boca Grande, Burnt Store, Nokomis, Laurel, Osprey, North Fort Myers, Matlacha, and Arcadia. If you are not sure whether your property is inside our service areas, call <a ${callAttr('areas_hub_inline_phone_link')}>${SITE.phoneDisplay}</a> and ask.</p>
      <h3>Why Local Knowledge Matters</h3>
      <p>The Florida Building Code is statewide, but almost everything else about building is local. Port Charlotte and Englewood are unincorporated, so permits run through the county; Punta Gorda, North Port, Venice, Cape Coral, and Fort Myers each run their own building divisions. Flood zones, utility availability, deed restrictions, and historic-district review change from one neighborhood to the next. Four decades of working across this region means we have dealt with nearly all of it before.</p>
      <h3>Services Available in Every Area</h3>
      <ul class="cols">
${SERVICES.map((s) => `        <li><a href="/services/${s.slug}.html">${s.name}</a></li>`).join('\n')}
      </ul>
    </div>
  </div>
</section>
` +
  P.quoteSection({ alt: false, label: 'areas_hub_quote_phone_button', heading: 'Request a Quote in Your Area' }) +
  `</main>
` +
  P.footer(),
  '0.8');

// ---------- Guides ----------
const renderBlock = ([tag, html]) => {
  if (tag === 'ul') return `      <ul>\n${html.map((li) => `        <li>${li}</li>`).join('\n')}\n      </ul>`;
  if (tag === 'note') return `      <p class="guide-note">${html}</p>`;
  return `      <${tag}>${html}</${tag}>`;
};
write('guides.html',
  P.head({
    title: 'Building & Remodeling Guides for SW Florida | Brunderman',
    description: 'Plain-English guides for Southwest Florida homeowners: the FEMA 50% rule, building on your own lot, and which remodeling projects need a permit.',
    path: '/guides.html',
    schemas: [P.breadcrumbSchema([['Home', '/'], ['Guides', '/guides.html']])],
  }) +
  P.header('guides') +
  `<main id="main">
` +
  P.pageHero({ crumbs: [['Home', '/'], ['Guides', '/guides.html']], eyebrow: 'Homeowner Guides', h1: 'Building &amp; Remodeling Guides for Southwest Florida Homeowners', lead: 'Straight answers to the questions we hear most, from a builder with four decades of local experience.', label: 'guides_hub_hero_phone_button' }) +
  `<section>
  <div class="container">
    <div class="section-head"><span class="eyebrow-dark">Guides</span><h2>Read Before You Build or Remodel</h2><p>Practical homeowner guides on the rules and site conditions that shape building and remodeling projects in Charlotte, Sarasota, and Lee counties.</p></div>
    <div class="card-grid">
${GUIDES.map((g) => `      <a class="card" href="/guides/${g.slug}.html"><span class="card-icon">${ICON.ruler}</span><h3>${g.h1}</h3><p>${g.card}</p><span class="card-link">Read the guide</span></a>`).join('\n')}
    </div>
  </div>
</section>
` +
  P.ctaBand('guides_hub_cta_phone_button', 'Have a Question About Your Project?', 'Call and talk it through with a builder.').replace('href="#quote"', 'href="/about.html#quote"') +
  `</main>
` +
  P.footer().replace('<a href="#quote" class="btn btn-outline">Get a Quote</a>', '<a href="/about.html#quote" class="btn btn-outline">Get a Quote</a>'),
  '0.6');

for (const g of GUIDES) {
  const crumbs = [['Home', '/'], ['Guides', '/guides.html'], [g.h1, `/guides/${g.slug}.html`]];
  write(`guides/${g.slug}.html`,
    P.head({
      title: g.title,
      description: g.description,
      path: `/guides/${g.slug}.html`,
      schemas: [
        P.breadcrumbSchema(crumbs),
        { '@context': 'https://schema.org', '@type': 'Article', headline: g.h1, description: g.description, datePublished: SITE.lastmod, dateModified: SITE.lastmod, author: { '@id': `${SITE.domain}/#business` }, publisher: { '@id': `${SITE.domain}/#business` }, image: `${SITE.domain}/images/og-image.png`, mainEntityOfPage: `${SITE.domain}/guides/${g.slug}.html` },
      ],
    }) +
    P.header('guides') +
    `<main id="main">
` +
    P.pageHero({ crumbs: [['Home', '/'], ['Guides', '/guides.html'], ['This guide', `/guides/${g.slug}.html`]], eyebrow: 'Homeowner Guide', h1: g.h1, lead: g.lead, label: 'guide_hero_phone_button' }) +
    `<section>
  <div class="container">
    <article class="prose narrow guide">
${g.body.map(renderBlock).join('\n')}
      <h2>${g.moreH2}</h2>
      <ul>
${g.related.map(([href, tx]) => `        <li><a href="${href}">${tx}</a></li>`).join('\n')}
${GUIDES.filter((o) => o.slug !== g.slug).map((o) => `        <li><a href="/guides/${o.slug}.html">${o.h1}</a></li>`).join('\n')}
      </ul>
    </article>
  </div>
</section>
` +
    P.quoteSection({ alt: true, label: 'guide_quote_phone_button', heading: g.quoteH2 }) +
    `</main>
` +
    P.footer(),
    '0.6');
}

// ---------- Thank-you + 404 ----------
const simplePage = (file, title, h1, body, robots) =>
  write(file,
    P.head({ title, description: body.replace(/<[^>]+>/g, ''), path: `/${file}`, noindex: robots }) +
    P.header() +
    `<main id="main">
<section class="center-page">
  <div class="container">
    <span class="eyebrow-dark">${SITE.name}</span>
    <h1 style="font-size:clamp(2.2rem,5vw,3.4rem);">${h1}</h1>
    <p>${body}</p>
    <div class="hero-actions" style="justify-content:center;">
      <a href="/" class="btn btn-primary">Back to Home</a>
      <a ${callAttr(file.replace('.html', '').replace('-', '_') + '_phone_button')} class="btn btn-outline-dark">Call ${SITE.phoneDisplay}</a>
    </div>
  </div>
</section>
</main>
` +
    P.footer().replace('<a href="#quote" class="btn btn-outline">Get a Quote</a>', '<a href="/about.html#quote" class="btn btn-outline">Get a Quote</a>'));
simplePage('thank-you.html', 'Thank You | Brunderman Building Co Inc', 'Thank You — We Got Your Request', 'Your quote request is on its way to our office. We will be in touch to talk through your project. If it is urgent, call us directly.', true);
simplePage('404.html', 'Page Not Found | Brunderman Building Co Inc', 'Page Not Found', 'That page does not exist or has moved. Head back to the homepage, or give us a call and we will point you in the right direction.', true);

// ---------- sitemap, robots ----------
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(([p, pr]) => `  <url><loc>${SITE.domain}${p}</loc><lastmod>${SITE.lastmod}</lastmod><priority>${pr}</priority></url>`).join('\n')}
</urlset>
`);
write('robots.txt', `User-agent: *\nAllow: /\nDisallow: /_generate/\n\nSitemap: ${SITE.domain}/sitemap.xml\n`);

// ---------- Placeholder carousel artwork ----------
const ART = {
  'custom-home-exterior': '<path d="M90 250V170l150-80 150 80v80z"/><path d="M60 180l180-96 180 96"/><rect x="215" y="195" width="50" height="55"/><rect x="120" y="190" width="55" height="35"/><rect x="305" y="190" width="55" height="35"/>',
  'kitchen-remodel': '<rect x="70" y="95" width="340" height="55"/><path d="M155 95v55M240 95v55M325 95v55"/><rect x="70" y="190" width="340" height="60"/><path d="M155 190v60M325 190v60"/><rect x="200" y="172" width="80" height="18"/><path d="M240 150v22"/>',
  'bathroom-remodel': '<rect x="80" y="90" width="150" height="160"/><path d="M80 130h150M120 90v40"/><circle cx="175" cy="110" r="8"/><rect x="275" y="175" width="125" height="75"/><rect x="295" y="95" width="85" height="60" rx="6"/>',
  'whole-home-remodel': '<rect x="70" y="90" width="340" height="160"/><path d="M70 170h130M260 170h150M200 90v50M200 200v50M300 170v80"/><path d="M200 140a30 30 0 0 1 30 30"/>',
  'home-addition': '<path d="M70 250v-80l95-55 95 55v80z"/><path d="M260 250v-65h150v65z" stroke-dasharray="9 7"/><path d="M260 185l75-38 75 38" stroke-dasharray="9 7"/><path d="M335 205v30M320 220h30"/>',
  'waterfront-home': '<path d="M110 205v-60l130-62 130 62v60z"/><path d="M85 152l155-74 155 74"/><path d="M60 225c30-14 60 14 90 0s60 14 90 0 60 14 90 0 60 14 90 0M60 250c30-14 60 14 90 0s60 14 90 0 60 14 90 0 60 14 90 0"/>',
  'outdoor-living': '<path d="M70 120h340M90 120v130M390 120v130M70 120l30-30h280l30 30"/><rect x="130" y="205" width="110" height="45"/><ellipse cx="320" cy="238" rx="55" ry="14"/>',
};
for (const [file, t] of WORK) {
  write(`images/work/${file}.svg`, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 360" width="480" height="360" role="img" aria-label="${esc(t)} placeholder">
<defs><pattern id="g" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0V24" fill="none" stroke="#fff" stroke-opacity=".07"/></pattern></defs>
<rect width="480" height="360" fill="#23272b"/><rect width="480" height="360" fill="url(#g)"/>
<g fill="none" stroke="#ff8a4c" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">${ART[file]}</g>
<text x="240" y="300" text-anchor="middle" font-family="Oswald,Impact,Arial Narrow,sans-serif" font-size="22" letter-spacing="3" fill="#fff">${esc(t.toUpperCase())}</text>
<text x="240" y="326" text-anchor="middle" font-family="Arial,sans-serif" font-size="12" letter-spacing="2" fill="#c9c4ba">PROJECT PHOTO COMING SOON</text>
</svg>
`);
}

write('favicon.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#c9480d"/><path d="M12 32L32 14l20 18" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><path d="M19 30v20h26V30" fill="none" stroke="#fff" stroke-width="6" stroke-linejoin="round"/></svg>
`);

console.log(`Built ${pages.length} indexable pages.`);
