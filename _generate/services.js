// Service page content. Each entry is written by hand — no shared body copy.
// Per-service "service area" paragraphs — written separately so no two pages share a block of copy.
const AREA = {
  "custom-home-construction": "Most of the custom homes we have built stand in <a href=\"/locations/charlotte-county.html\">Charlotte County</a> — on platted lots in <a href=\"/locations/port-charlotte.html\">Port Charlotte</a>, on the sailboat canals of <a href=\"/locations/punta-gorda.html\">Punta Gorda Isles</a>, on coastal lots around Rotonda West and Englewood, and on acreage out toward Deep Creek and East County. Just north of the county line we also build on owners' lots in <a href=\"/locations/north-port.html\">North Port</a>, where thousands of vacant parcels are still waiting for a house, and on infill and teardown sites around <a href=\"/locations/venice.html\">Venice</a>. Our custom home construction territory reaches roughly 50 miles from our office; see the full list on our <a href=\"/service-areas.html\">service areas page</a>.",
  "home-remodeling": "Home remodeling keeps our crews busy across the region. In <a href=\"/locations/port-charlotte.html\">Port Charlotte</a> and <a href=\"/locations/north-port.html\">North Port</a> the work is mostly 1960s–1990s block homes that need opening up and storm hardening. In <a href=\"/locations/punta-gorda.html\">Punta Gorda</a> and along the water in west <a href=\"/locations/charlotte-county.html\">Charlotte County</a>, renovations have to be planned around flood rules, and <a href=\"/locations/venice.html\">Venice</a> adds historic districts with design review. We also remodel in Gulf Cove, El Jobean, Rotonda West, Lake Suzy, Burnt Store, Nokomis, and Boca Grande — if the house is within about 50 miles of Port Charlotte, it is in range. Each community is covered on our <a href=\"/service-areas.html\">service areas</a> page.",
  "kitchen-remodeling": "We remodel kitchens from <a href=\"/locations/venice.html\">Venice</a> south through all of <a href=\"/locations/charlotte-county.html\">Charlotte County</a>. Closest to home are the ranch kitchens of <a href=\"/locations/port-charlotte.html\">Port Charlotte</a> and the builder-grade kitchens of <a href=\"/locations/north-port.html\">North Port</a> subdivisions such as Heron Creek and Bobcat Trail. Waterfront kitchens in <a href=\"/locations/punta-gorda.html\">Punta Gorda Isles</a> are often re-planned around the canal view, and seasonal owners in Englewood and Rotonda West frequently schedule a kitchen remodeling project for the months they are up north. Browse every community we cover on the <a href=\"/service-areas.html\">service areas page</a>.",
  "bathroom-remodeling": "Bathroom remodeling is available anywhere within about 50 miles of our office near Charlotte Harbor. That takes in the hall baths and small primary baths of older <a href=\"/locations/port-charlotte.html\">Port Charlotte</a> homes, the garden-tub bathrooms common in <a href=\"/locations/north-port.html\">North Port</a>, accessible shower conversions for long-term residents of <a href=\"/locations/punta-gorda.html\">Punta Gorda</a> and <a href=\"/locations/venice.html\">Venice</a>, and pool baths and guest baths all across <a href=\"/locations/charlotte-county.html\">Charlotte County</a>, from Englewood to Deep Creek. Smaller communities — Harbour Heights, South Gulf Cove, Placida, Nokomis — are covered too. Find your town under <a href=\"/service-areas.html\">service areas</a>.",
  "home-additions": "Where an addition can go depends on local zoning, so it helps that we work with every building department in our area: <a href=\"/locations/charlotte-county.html\">Charlotte County</a> Community Development for <a href=\"/locations/port-charlotte.html\">Port Charlotte</a>, Englewood, Rotonda West, and the rest of the unincorporated county; the City of <a href=\"/locations/punta-gorda.html\">Punta Gorda</a>; the City of <a href=\"/locations/north-port.html\">North Port</a>; and Sarasota County and the City of <a href=\"/locations/venice.html\">Venice</a> to the north. We build home additions in all of them, inside a service area that reaches about 50 miles from Port Charlotte. Details for each community are on the <a href=\"/service-areas.html\">service areas page</a>."
};

// Per-service hurricane-proof / impact-window section: [H2, paragraphs]
const STORM = {
  "custom-home-construction": [
    "Hurricane-Proof Custom Homes With Impact-Rated Windows",
    [
      "Ask anyone who has lived through Charley or Ian what matters in a Southwest Florida house, and the answer is not the countertops. Every custom home we build is designed as a hurricane-proof home: concrete block walls on an engineered foundation, poured tie-beams, trusses strapped into a continuous load path down to the footing, a hip roof where the design allows, and impact-rated windows, sliding doors, and entry doors in every opening. These are not upgrades; they are how we build.",
      "Impact-rated windows deserve special mention. They satisfy the Florida Building Code's opening-protection requirement without shutters, which means nothing to put up when a storm is coming and nothing to take down afterward. They also cut outside noise, block most UV, help the air conditioning, and often reduce insurance premiums. If you are comparing custom home builders, ask each one whether impact glass is standard or an allowance item. For us it is standard."
    ]
  ],
  "home-remodeling": [
    "Making an Older Home Hurricane-Proof",
    [
      "A large share of the remodeling we do in Port Charlotte and the surrounding communities is really about one thing: turning a 1970s or 1980s house into a home that will hold up in a hurricane. The block walls are usually fine. What has not kept up are the openings, the roof connections, and the garage door. Replacing original single-pane or aluminum-frame windows with impact-rated windows and doors is the single most valuable storm upgrade a homeowner can make, and it is the first thing we look at on a whole-home remodel.",
      "When the scope includes a re-roof, we add the engineered straps and secondary water barrier the code now requires, which also qualifies most homes for wind-mitigation insurance credits. A wind-rated garage door, properly attached soffits, and sealed roof-to-wall connections finish the job. The goal is the same as it is on our new homes: houses shouldn't break, and an older house does not have to."
    ]
  ],
  "kitchen-remodeling": [
    "Storm-Ready Details in a Kitchen Remodel",
    [
      "A kitchen remodel is also the right moment to deal with the openings in that part of the house. Many Port Charlotte kitchens still have a pass-through window to the lanai and a slider off the dining area that predate impact glass. Replacing them with impact-rated windows and sliding doors while the walls are open costs less than doing it later and leaves the kitchen quieter, brighter, and hurricane-ready.",
      "We build the rest of the kitchen to the same standard we apply to hurricane-proof homes: solid blocking behind wall cabinets, moisture-resistant drywall where it counts, and electrical brought up to current code with the dedicated circuits a modern kitchen needs. It is the difference between a kitchen that looks new and one that will still be sound in twenty years."
    ]
  ],
  "bathroom-remodeling": [
    "Built to Last, Not Just to Look New",
    [
      "Our motto is \"houses shouldn't break,\" and nowhere does a house break faster than in a bathroom that was waterproofed badly. That is why we treat waterproofing as its own trade rather than trusting tile and grout, and why every exhaust fan we install is ducted outside instead of into the attic. A bathroom built this way stays sound through decades of Florida humidity.",
      "If the bathroom has a window inside the shower or a jalousie-era opening, we replace it with an impact-rated window or glass block as part of the remodel, closing one more gap in the home's storm protection while we have the wall open."
    ]
  ],
  "home-additions": [
    "Additions Built to Hurricane Standards",
    [
      "A new addition has to be built to current code even when the original house was not, and that is a good thing: it means every home addition we build is a hurricane-proof structure in its own right, with engineered footings, block or properly strapped frame walls, a roof tied into the existing structure with a continuous load path, and impact-rated windows and doors throughout.",
      "Because we are tying new to old, we also look hard at the connection. A properly flashed and strapped roof tie-in is what keeps the seam between the addition and the original house from becoming the weak point in the next storm. Done right, the addition is often the strongest part of the house."
    ]
  ]
};

const INTRO_H2 = {
  "custom-home-construction": "A Custom Home Builder With 200+ Local Homes Behind It",
  "home-remodeling": "Home Remodeling Led by an Experienced Builder",
  "kitchen-remodeling": "Kitchen Remodeling That Starts With the Layout",
  "bathroom-remodeling": "Bathroom Remodeling Built for Florida Humidity",
  "home-additions": "Home Additions That Look Original to the House"
};

// [guide slug, link text] — related article shown on each service page
const GUIDE = {
  "custom-home-construction": [
    "building-on-your-lot-port-charlotte-north-port",
    "Building on your own lot in Port Charlotte or North Port: what to check first"
  ],
  "home-remodeling": [
    "fema-50-percent-rule-charlotte-county",
    "The FEMA 50% rule, explained for Southwest Florida homeowners"
  ],
  "kitchen-remodeling": [
    "remodeling-permits-southwest-florida",
    "Which remodeling projects need a permit in Southwest Florida?"
  ],
  "bathroom-remodeling": [
    "remodeling-permits-southwest-florida",
    "Which remodeling projects need a permit in Southwest Florida?"
  ],
  "home-additions": [
    "fema-50-percent-rule-charlotte-county",
    "The FEMA 50% rule, explained for Southwest Florida homeowners"
  ]
};

module.exports = [
  {
    slug: 'custom-home-construction',
    name: 'Custom Home Construction',
    icon: 'home',
    title: 'Custom Home Construction in Port Charlotte, FL | Brunderman',
    description: 'Hurricane-proof custom homes in Port Charlotte, FL with impact-rated windows standard. 200+ homes built in Charlotte County by a builder founded in 1987.',
    eyebrow: 'Custom Home Builder · Charlotte County',
    h1: 'Custom Home Construction in Port Charlotte, FL',
    lead: 'Hurricane-proof custom homes with impact-rated windows, built on your lot by a builder with more than 200 Charlotte County homes behind him. Houses shouldn\'t break, and ours are built not to.',
    card: 'Hurricane-proof new homes with impact-rated windows, designed around your lot and budget.',
    intro: [
      'A custom home is the largest thing most families will ever commission, and in Southwest Florida it has to do more than look good. It has to sit at the right elevation for its flood zone, stand up to hurricane-force wind, shed summer rain, and stay comfortable through a long humid season without punishing electric bills. Custom home construction done well here is equal parts design and local engineering knowledge.',
      'Brunderman Building Co Inc has been building homes in Charlotte County for four decades — more than 200 of them. That history matters in practical ways. We have built on the quarter-acre platted lots that make up most of Port Charlotte, on saltwater canal lots where the seawall and the setback drive the floor plan, and on acreage east of I-75 where well, septic, and driveway access have to be planned before the first form board goes down.',
      'Every custom home construction project we take on starts with your lot and your list: how you live, who visits, what you want to see when you walk in the front door. From there we work through plans, selections, pricing, and permitting so that by the time construction begins, the major decisions are made and the surprises are few.',
    ],
    facts: [
      ['Experience', 'Four decades building in Southwest Florida'],
      ['Track record', '200+ homes built in Charlotte County'],
      ['Construction', 'Concrete block, engineered load path, impact-rated windows'],
      ['Where we build', 'Your lot, within about 50 miles of Port Charlotte'],
    ],
    includesTitle: 'What Custom Home Construction Covers',
    includes: [
      ['Lot Evaluation', 'Before you commit to a plan, we look at the lot itself — flood zone, required finished-floor elevation, fill needs, setbacks, utilities or well and septic, and any deed restrictions that shape what can be built.'],
      ['Plans & Design', 'Start from your own architect\'s drawings, adapt a plan you like, or develop a new one. We help fit the layout to the lot, the view, and the sun so the home lives the way you want.'],
      ['Pricing & Selections', 'A clear scope and allowances for cabinetry, flooring, tile, fixtures, and finishes, so you can see where the money is going and adjust before construction — not during it.'],
      ['Permitting', 'We prepare and submit the permit package to the county or city building department and coordinate the engineering, energy calculations, and surveys the jurisdiction requires.'],
      ['Hurricane-Proof Construction', 'Site prep, foundation, block and tie-beam, strapped trusses, roofing, impact-rated windows and doors, mechanical trades, drywall, and finishes — scheduled and supervised by a builder who has done it hundreds of times.'],
      ['Walkthrough & Closeout', 'Final inspections, certificate of occupancy, a detailed walkthrough with you, and a punch list that gets finished rather than forgotten.'],
    ],
    steps: [
      ['Consultation', 'We talk through your lot, your wish list, and your budget range, and tell you honestly what is realistic.'],
      ['Design & Pricing', 'Plans are developed or refined, selections are made, and you receive a detailed scope and price.'],
      ['Permits & Site Prep', 'We handle permit submittals while the lot is cleared, filled, and compacted as required.'],
      ['Build & Handover', 'Construction proceeds through inspections to a final walkthrough and your keys.'],
    ],
    seoH2: 'A Custom Home Builder Near You in Charlotte County',
    seo: [
      'If you have been searching for a custom home builder near me in Port Charlotte, Punta Gorda, or anywhere in Charlotte County, you have likely noticed two kinds of companies: national production builders working from a fixed catalog, and local custom builders who build one home at a time on the owner\'s lot. Brunderman Building Co Inc is the second kind. Custom home construction means the plan can change to fit the lot, the kitchen can be where you want it, and the person you shake hands with at the start is accountable at the end. BuildZoom rates us in the top 5% of builders, and more than 800 customers have trusted us with their homes.',
      'Building a new home in Southwest Florida brings requirements that buyers from up north rarely expect. The Florida Building Code places most of our service area in a wind-borne debris region, which means impact-rated windows and doors or approved shutters, engineered roof-to-wall connections, and a continuous load path from the trusses to the footing. FEMA flood maps set a base flood elevation for many lots, and the finished floor has to meet or exceed it — sometimes by adding fill and a stem wall, sometimes with an elevated design. A local new home builder accounts for these things in the first budget conversation, not as change orders later.',
    ],
    variantsH3: 'Types of Custom Homes We Build',
    variants: [
      'Hurricane-proof concrete block homes with impact-rated windows and doors',
      'Single-story CBS homes on platted Port Charlotte and North Port lots',
      'Waterfront and canal-front custom homes with seawall and dock considerations',
      'Elevated and stem-wall homes built to FEMA flood-zone requirements',
      'Homes on acreage with well, septic, and long-driveway site work',
      'Build-on-your-lot homes from your own architect\'s plans',
      'Florida-style, coastal, and Mediterranean-influenced designs',
      'Homes with large lanais, summer kitchens, and pool-ready layouts',
      'Multi-generational plans with in-law suites or detached guest quarters',
    ],
    areaLead: 'We provide custom home construction throughout Southwest Florida.',
    faqs: [
      ['How long does custom home construction take in Charlotte County?', 'It depends on the size and complexity of the home, how complete the plans are when you come to us, and how quickly the local building department is processing permits. Design, pricing, and permitting happen before construction and have their own timeline. We give you a realistic schedule for your specific project once plans and selections are settled, and we keep you updated as it moves.'],
      ['Can you build on a lot I already own?', 'Yes — most of our custom homes are built on the owner\'s lot. Before you finalize a plan, we recommend a lot evaluation so you understand the flood zone, required floor elevation, fill, setbacks, and utility situation. If you have not purchased a lot yet, we are glad to look at one with you before you close.'],
      ['Do I need my own architect or plans?', 'Not necessarily. Some clients arrive with completed drawings; others have a sketch, a folder of photos, or a plan they like and want to modify. We can work from any of those starting points and coordinate the drafting and engineering required for a permit.'],
      ['What makes building in Southwest Florida different?', 'Wind and water. The Florida Building Code requires engineered wind resistance and protected openings in our region, and FEMA flood maps dictate minimum floor elevations on many lots. Concrete block construction, hip roofs, impact glass, and correct elevation are standard parts of building a home that lasts here.'],
    ],
  },

  {
    slug: 'home-remodeling',
    name: 'Home Remodeling',
    icon: 'hammer',
    title: 'Home Remodeling in Port Charlotte, FL | Brunderman Building',
    description: 'Whole-home remodeling contractor in Port Charlotte, FL. Renovations, layout changes & storm rebuilds from a builder with four decades of experience.',
    eyebrow: 'Remodeling Contractor · Southwest Florida',
    h1: 'Home Remodeling in Port Charlotte, FL',
    lead: 'Home remodeling by a builder, not a handyman crew. We open up floor plans, rebuild tired interiors, and bring older Port Charlotte homes up to the way people live today.',
    card: 'Whole-home renovations, impact-rated window replacement, and updates for older Florida houses.',
    intro: [
      'A great many homes in Port Charlotte were built between the 1960s and the 1980s: solid concrete block shells with low ceilings, small closed-off kitchens, narrow hallways, and original terrazzo hiding under carpet. The bones are good. The layouts are dated. Home remodeling is how those houses become bright, open, and comfortable without giving up a neighborhood or a canal view you already love.',
      'Because Brunderman Building Co Inc builds new homes as well as remodels existing ones, we approach a renovation with a builder\'s understanding of structure. Removing a wall in a block home means knowing what the tie-beam and trusses are doing above it. Moving a kitchen means rerouting plumbing through a slab. Replacing windows means meeting current wind-load and impact requirements. We plan for those realities up front so the remodeling budget you approve is the one you actually live with.',
      'Our home remodeling work ranges from single-room updates to complete interior gut-and-rebuilds, and it includes the storm-related repairs this region has needed more than once. Whatever the scope, you get one point of contact, a written scope of work, and a crew that treats an occupied house with respect.',
    ],
    facts: [
      ['Experience', 'Four decades of building and remodeling'],
      ['Customers', 'Trusted by 800+ homeowners'],
      ['Common projects', 'Open floor plans, whole-home updates, storm rebuilds'],
      ['Rating', 'Top 5% of builders on BuildZoom'],
    ],
    includesTitle: 'Home Remodeling Services',
    includes: [
      ['Whole-Home Renovation', 'Flooring, drywall, doors, trim, lighting, kitchens, and baths redone together, so the finished house feels consistent rather than patched room by room.'],
      ['Open Floor Plans', 'Removing or relocating interior walls to connect the kitchen, dining, and living areas — with proper engineering wherever a wall is carrying load.'],
      ['Impact-Rated Window & Door Replacement', 'Impact-rated windows, sliders, and entry doors sized and installed to current Florida Building Code requirements for our wind zone — the biggest single storm upgrade for an older home.'],
      ['Storm & Water Damage Rebuilds', 'Putting a home back together after hurricane or flood damage: drywall, insulation, cabinetry, flooring, and the permits that go with them.'],
      ['Flooring, Ceilings & Finishes', 'Tile, luxury vinyl plank, and wood-look flooring; popcorn ceiling removal; new trim, interior doors, and paint-ready drywall finishing.'],
      ['Lanai & Outdoor Living', 'Enclosing, extending, or rebuilding lanais, adding summer kitchens, and reworking the transition between the great room and the pool deck.'],
    ],
    steps: [
      ['Walkthrough', 'We see the house, listen to what is not working, and talk through options and rough budget ranges.'],
      ['Scope & Price', 'You receive a written scope of work with pricing and allowances for your finish selections.'],
      ['Permits & Prep', 'We pull the required permits, order long-lead materials, and protect the parts of the house staying as-is.'],
      ['Remodel & Review', 'Work proceeds in a planned sequence through inspections to a final walkthrough with you.'],
    ],
    seoH2: 'A Home Remodeling Contractor Near You',
    seo: [
      'Homeowners looking for a home remodeling contractor near me in Port Charlotte usually want the same three things: someone who shows up, someone who communicates, and someone who knows what is behind the wall before they open it. After four decades and more than 800 customers, that is the reputation Brunderman Building Co Inc has worked to earn. Our reviews mention responsiveness, punctuality, and quality for a reason. Whether you need a general contractor for a whole-house renovation or a remodeler for a few key rooms, you will deal with experienced builders from the first call.',
      'Remodeling in Southwest Florida also carries rules that do not exist in most of the country. If your home is in a FEMA special flood hazard area, the "50% rule" limits how much you can spend on improvements relative to the structure\'s value before the whole house must be brought up to current flood elevation requirements. That rule shapes many home remodeling projects near the water in Charlotte County, Punta Gorda, Englewood, and along the Peace and Myakka rivers. We help you understand where your project stands before design goes too far, and we phase or scope the work accordingly.',
    ],
    variantsH3: 'Remodeling Projects We Take On',
    variants: [
      'Whole-house interior renovations and gut remodels',
      'Kitchen and bathroom remodeling as part of a larger project',
      'Load-bearing wall removal and open-concept conversions',
      'Impact-rated window, slider, and entry door replacement',
      'Hurricane hardening: roof straps, wind-rated garage doors, sealed soffits',
      'Hurricane and flood damage restoration and rebuilds',
      'Garage conversions and interior reconfigurations',
      'Flooring replacement — tile, LVP, and engineered wood',
      'Lanai enclosures, outdoor kitchens, and entry updates',
    ],
    areaLead: 'Our home remodeling crews work across the region.',
    faqs: [
      ['Can I live in my house during a remodel?', 'Often, yes — particularly when the work is confined to part of the home. For whole-house renovations, or projects that take the kitchen and every bathroom out of service at the same time, most clients find it easier to stay elsewhere for the heaviest phase. We will talk through sequencing options so you can decide what works for your household.'],
      ['Do home remodeling projects need permits in Charlotte County?', 'Most meaningful remodeling does. Structural changes, electrical, plumbing, mechanical work, window and door replacement, and roofing all require permits. Cosmetic work such as painting and flooring generally does not. We handle the permit applications and inspections for the work we perform.'],
      ['What is the FEMA 50% rule and does it affect my remodel?', 'If your home is in a special flood hazard area and its lowest floor is below the current required elevation, improvements costing 50% or more of the structure\'s market value trigger a requirement to bring the entire building into compliance. Each jurisdiction administers the rule a little differently. We help you understand how it applies to your home before you commit to a scope.'],
      ['Can you remove a wall in a concrete block home?', 'Interior walls in most block homes are wood or metal framed and can often be removed or moved. Some carry roof or ceiling loads and need an engineered beam. We determine which kind you have before pricing the work, so there are no surprises mid-project.'],
    ],
  },

  {
    slug: 'kitchen-remodeling',
    name: 'Kitchen Remodeling',
    icon: 'kitchen',
    title: 'Kitchen Remodeling in Port Charlotte, FL | Brunderman Building',
    description: 'Kitchen remodeling in Port Charlotte, FL — cabinets, countertops, islands & full layout changes by a builder with four decades of local experience.',
    eyebrow: 'Kitchen Remodeler · Port Charlotte',
    h1: 'Kitchen Remodeling in Port Charlotte, FL',
    lead: 'Kitchen remodeling that fixes the layout, not just the finishes. New cabinetry, countertops, islands, and lighting — planned and built by a company that has worked in Port Charlotte homes for four decades.',
    card: 'New cabinets, countertops, islands, and full kitchen layout changes.',
    intro: [
      'The kitchen is where an older Florida home shows its age first. Galley layouts walled off from the living room, soffits eating the space above the cabinets, a single fluorescent box light, laminate counters with a drop-in sink. Kitchen remodeling is the project that changes how the entire house feels, because it is the room everyone ends up in.',
      'At Brunderman Building Co Inc, a kitchen remodeling project begins with how you cook and gather, not with a cabinet catalog. Do you want an island with seating or a peninsula? A view to the lanai from the sink? A pantry where the old laundry closet was? Once the layout is right, we help you choose cabinetry, countertops, tile, fixtures, and lighting that suit the house and the budget.',
      'Then we build it the way a builder should: plumbing and electrical permitted and inspected, walls opened with the structure understood, cabinets installed level and scribed tight, and the finish details — crown, light rail, outlet placement, under-cabinet lighting — handled with care. One reviewer described our quality as "second to none," and the kitchen is where that standard is most visible.',
    ],
    facts: [
      ['Experience', 'Four decades in Southwest Florida homes'],
      ['Scope', 'Pull-and-replace updates to full layout changes'],
      ['Trades handled', 'Carpentry, plumbing, electrical, drywall, tile'],
      ['Customers', 'Trusted by 800+ homeowners'],
    ],
    includesTitle: 'What a Kitchen Remodel Can Include',
    includes: [
      ['Layout & Design', 'Reworking the footprint — removing the wall to the living room, adding an island, relocating the range or sink — with drawings you can review before anything is ordered.'],
      ['Cabinetry', 'Semi-custom and custom cabinets with soft-close hardware, full-extension drawers, pull-out trash, and storage sized for the way you actually use the kitchen.'],
      ['Countertops', 'Quartz, granite, and quartzite countertops templated after cabinet install for a precise fit, with undermount sinks and clean seams.'],
      ['Backsplash & Flooring', 'Tile backsplashes from classic subway to full-height slab, and new flooring tied into adjoining rooms so the transition disappears.'],
      ['Lighting & Electrical', 'Recessed LED lighting, pendants over the island, under-cabinet lights, dedicated appliance circuits, and outlets placed where you need them.'],
      ['Plumbing & Appliances', 'Sink and faucet installation, gas or electric range hookups, vented range hoods, icemaker lines, and coordination of your appliance delivery and install.'],
    ],
    steps: [
      ['Consult & Measure', 'We see the existing kitchen, take measurements, and talk through what you want to change.'],
      ['Design & Selections', 'Layout drawings, cabinet and countertop choices, and a written price for the full scope.'],
      ['Order & Demo', 'Cabinets are ordered first; demolition is timed to their arrival so you are without a kitchen for as short a time as possible.'],
      ['Install & Finish', 'Rough trades, drywall, cabinets, countertops, tile, and final fixtures — then a walkthrough.'],
    ],
    seoH2: 'Kitchen Remodeling Near You in Port Charlotte',
    seo: [
      'When people search for kitchen remodeling near me or a kitchen remodeler in Port Charlotte FL, they are often comparing cabinet showrooms, big-box installers, and general contractors. The difference with a builder-led kitchen remodel is scope. A showroom sells cabinets. Brunderman Building Co Inc handles the whole project — the wall that needs to come out, the plumbing that needs to move through the slab, the electrical panel that may need capacity for an induction range, and the permit and inspections that tie it together. You have one contractor responsible for the result.',
      'Port Charlotte kitchens have their own patterns. Many 1970s and 1980s homes have a pass-through window to the lanai, a dropped soffit with fluorescent lighting, and a kitchen separated from the family room by a partial wall. Opening that wall, raising the ceiling line by removing soffits, and adding an island is one of the most common kitchen renovation requests we see, and one of the most rewarding. For waterfront homes in Punta Gorda Isles or along the Port Charlotte canals, we often reorient the kitchen so the sink or island faces the water.',
    ],
    variantsH3: 'Kitchen Remodeling Options',
    variants: [
      'Full kitchen renovations with layout changes',
      'Cabinet replacement with quartz or granite countertops',
      'Kitchen island and peninsula additions',
      'Soffit removal and ceiling updates',
      'Wall removal for open-concept kitchens',
      'Walk-in and cabinet-style pantry builds',
      'Tile backsplash and kitchen flooring installation',
      'Lighting, electrical, and range hood upgrades',
    ],
    areaLead: 'We remodel kitchens from Venice down through Charlotte County.',
    faqs: [
      ['How long will I be without a kitchen?', 'We order cabinetry before demolition begins, so the downtime is limited to the actual construction period rather than the manufacturer\'s lead time. The length depends on scope — a pull-and-replace is much quicker than a remodel that moves walls and plumbing. You will get a schedule specific to your project before work starts.'],
      ['Can you remove the wall between my kitchen and living room?', 'In most Port Charlotte homes, yes. We first determine whether the wall is load-bearing and what runs through it — plumbing vents, electrical, and ductwork are common. If a beam is required, it is engineered and permitted as part of the kitchen remodeling project.'],
      ['Do you supply the cabinets and countertops?', 'Yes. We work with cabinet and stone suppliers and help you choose lines that fit your budget and the look you want. Countertops are templated after cabinets are installed so the fit is exact.'],
      ['Does a kitchen remodel require a permit?', 'If the project involves electrical, plumbing, mechanical, or structural changes, it does. A simple countertop swap typically does not. We handle permitting with the appropriate building department for the work we perform.'],
    ],
  },

  {
    slug: 'bathroom-remodeling',
    name: 'Bathroom Remodeling',
    icon: 'bath',
    title: 'Bathroom Remodeling in Port Charlotte, FL | Brunderman Building',
    description: 'Bathroom remodeling in Port Charlotte, FL: walk-in showers, tub conversions, vanities & accessible baths from a builder with four decades of experience.',
    eyebrow: 'Bathroom Remodeler · Port Charlotte',
    h1: 'Bathroom Remodeling in Port Charlotte, FL',
    lead: 'Bathroom remodeling built to last in Florida humidity — properly waterproofed walk-in showers, new vanities, better lighting, and safer, more accessible layouts.',
    card: 'Walk-in showers, tub conversions, vanities, tile, and accessible bathrooms.',
    intro: [
      'A bathroom is the smallest room in the house and the least forgiving. Water finds every shortcut. In Southwest Florida\'s humidity, a shower that was tiled over the wrong backer board or a fan that vents into the attic will show its problems within a few years. Bathroom remodeling done right is mostly about what you cannot see once the tile goes up.',
      'Brunderman Building Co Inc remodels bathrooms the way we build them in new homes: a sound substrate, a continuous waterproofing system behind the tile, correctly sloped shower pans, solid blocking for glass and grab bars, and ventilation ducted to the exterior. On top of that foundation go the things you will enjoy every day — a walk-in shower with a bench and niche, a double vanity with real storage, good mirrors and lighting, and tile chosen to suit the house.',
      'Many of our bathroom remodeling clients in Port Charlotte, Punta Gorda, and Englewood are planning to stay in their homes for the long term. For them we design with accessibility in mind: curbless or low-threshold showers, wider doorways, comfort-height fixtures, and grab bars that look like they belong there. A bathroom can be both safe and good-looking.',
    ],
    facts: [
      ['Experience', 'Four decades of building and remodeling'],
      ['Most requested', 'Tub-to-walk-in-shower conversions'],
      ['Built for Florida', 'Full waterproofing and exterior-vented fans'],
      ['Rating', 'Top 5% of builders on BuildZoom'],
    ],
    includesTitle: 'Bathroom Remodeling Services',
    includes: [
      ['Walk-In Showers', 'Custom tiled showers with waterproofed walls and pans, benches, recessed niches, frameless glass, and rain or handheld fixtures.'],
      ['Tub-to-Shower Conversions', 'Replacing an unused bathtub with a low-threshold or curbless shower — one of the most popular bathroom remodeling upgrades in the area.'],
      ['Vanities & Countertops', 'Single and double vanities, quartz or granite tops, undermount sinks, and storage that ends the cluttered counter.'],
      ['Tile & Flooring', 'Porcelain and ceramic floor tile, shower wall tile, and accent details installed over proper underlayment with clean, consistent layout.'],
      ['Accessible & Aging-in-Place Baths', 'Curbless entries, widened doors, blocking and grab bars, comfort-height toilets, and slip-resistant flooring.'],
      ['Plumbing, Lighting & Ventilation', 'New valves and supply lines, relocated drains, vanity and recessed lighting, and quiet exhaust fans ducted outdoors.'],
    ],
    steps: [
      ['Consult & Measure', 'We review the existing bathroom, what bothers you about it, and what you would like instead.'],
      ['Design & Selections', 'Layout, tile, vanity, fixtures, and glass are chosen and priced in a written scope.'],
      ['Demo & Rough-In', 'The room is taken to the studs where needed; plumbing and electrical are updated and inspected.'],
      ['Waterproof, Tile & Finish', 'Waterproofing, tile, vanity, fixtures, glass, and paint — then a final walkthrough.'],
    ],
    seoH2: 'Bathroom Remodeling Near You in Charlotte County',
    seo: [
      'Searching bathroom remodeling near me in Port Charlotte will turn up one-day bath-liner franchises, tile installers, and general contractors. They are not the same service. A liner covers the old tub. A tile installer tiles. Builder-led bathroom remodeling from Brunderman Building Co Inc covers everything from the drain line in the slab to the last towel hook, under one contract and one permit. That matters most when the project involves moving a drain for a larger shower, widening a doorway, or correcting hidden water damage found during demolition.',
      'Older Port Charlotte bathrooms tend to share a few traits: a 5-foot alcove tub with a sliding door, a small vanity with a cultured-marble top, a narrow door, and a window inside the shower. Bathroom renovation in these homes often means replacing that shower window with an impact-rated unit or glass block, converting the tub to a walk-in shower, and borrowing a few square feet from a hall closet to make the primary bath work better. With four decades of experience in these exact floor plans, we know where the pipes usually run and what the options really are.',
    ],
    variantsH3: 'Bathroom Projects We Handle',
    variants: [
      'Primary (master) bathroom remodeling',
      'Guest and hall bathroom renovations',
      'Tub-to-shower conversions',
      'Curbless and roll-in accessible showers',
      'Custom tile showers with frameless glass',
      'Double vanity and countertop installation',
      'Pool bath and cabana bath updates',
      'Water-damage repair and bathroom rebuilds',
    ],
    areaLead: 'Bathroom remodeling is available throughout our service area.',
    faqs: [
      ['How long does a bathroom remodel take?', 'It varies with scope. Replacing fixtures and tile in the same layout is quicker than a remodel that moves plumbing in the slab or changes walls. Material lead times — especially custom glass, which is measured after tile — also play a part. We give you a project-specific schedule before we start.'],
      ['Can you convert my bathtub to a walk-in shower?', 'Yes. It is one of the most common bathroom remodeling requests we receive. The drain usually needs to be resized and sometimes relocated, and the new shower is fully waterproofed before tile. Low-threshold and curbless entries are both options in most homes.'],
      ['How do you prevent leaks and mold behind the tile?', 'By treating waterproofing as its own step rather than relying on tile and grout, which are not waterproof. We use a continuous waterproofing system on shower walls and pans, slope pans correctly to the drain, and vent exhaust fans to the outside of the house.'],
      ['Can you make a bathroom safer for aging in place?', 'Absolutely. Curbless showers, built-in benches, grab bars anchored to solid blocking, wider doorways, comfort-height toilets, and better lighting all make a meaningful difference, and they can be designed to look like deliberate upgrades rather than medical equipment.'],
    ],
  },

  {
    slug: 'home-additions',
    name: 'Home Additions',
    icon: 'addition',
    title: 'Home Additions in Port Charlotte, FL | Brunderman Building Co.',
    description: 'Home additions in Port Charlotte, FL — primary suites, in-law suites, garages & lanai conversions built to Florida code by a four-decade builder.',
    eyebrow: 'Room Additions · Southwest Florida',
    h1: 'Home Additions in Port Charlotte, FL',
    lead: 'Home additions that look like they were always part of the house: primary suites, in-law suites, extra bedrooms, garages, and enclosed lanais built by an experienced custom home builder.',
    card: 'Primary suites, in-law suites, extra bedrooms, garages, and lanai conversions.',
    intro: [
      'Sometimes the house is almost right. The neighborhood is right, the canal is right, the mortgage is right — it just needs another bedroom, a real primary suite, or a place for a parent to live independently. Home additions solve that problem without the cost and upheaval of moving.',
      'An addition is new construction attached to an existing building, which makes it one of the more technically demanding projects a contractor takes on. The new foundation has to meet the old one properly. The new roof has to tie into the existing trusses and shed water where they join. Exterior finishes have to match, floor heights have to align, and the HVAC and electrical systems have to be sized for the extra load. Because Brunderman Building Co Inc has built more than 200 homes from the ground up, the construction side of home additions is familiar territory.',
      'We also help you think through the rules before you fall in love with a design. Setbacks, lot coverage limits, easements, septic drain field locations, and flood zone requirements all determine where an addition can go and how large it can be. A short feasibility conversation at the start saves a great deal of redesign later.',
    ],
    facts: [
      ['Experience', 'Four decades; 200+ ground-up homes'],
      ['Popular additions', 'Primary suites, in-law suites, garages'],
      ['Construction', 'Block or frame to match the existing home'],
      ['Customers', 'Trusted by 800+ homeowners'],
    ],
    includesTitle: 'Types of Home Additions',
    includes: [
      ['Primary Suite Additions', 'A new bedroom with a walk-in closet and a full bathroom, often oriented toward the pool or the water, freeing the old primary bedroom for guests or an office.'],
      ['In-Law Suites', 'Private living space for a family member — bedroom, bath, sitting area, and sometimes a kitchenette — attached to the main home with its own entrance where zoning allows.'],
      ['Bedroom & Living Space Additions', 'Extra bedrooms, a larger family room, a home office, or a dining room bump-out that gives a tight floor plan room to breathe.'],
      ['Garage Additions', 'New attached garages, third-bay additions, and oversized garages for boats, RVs, and workshop space, built with wind-rated doors.'],
      ['Lanai Enclosures & Conversions', 'Turning a covered lanai into conditioned living space with a proper slab, insulated walls, impact windows, and HVAC — permitted as real square footage.'],
      ['Second-Story & Bonus Rooms', 'Where the structure and zoning permit, building up rather than out to preserve yard space on a smaller lot.'],
    ],
    steps: [
      ['Feasibility', 'We review the survey, setbacks, flood zone, and septic or utility locations to confirm what is possible.'],
      ['Design & Pricing', 'Plans are drawn to match the existing home, engineered, and priced in a detailed scope.'],
      ['Permits & Foundation', 'We submit for permits, then form and pour the new foundation and tie it to the existing structure.'],
      ['Build, Tie-In & Finish', 'Walls, roof tie-in, openings, mechanicals, and finishes are completed and the wall between old and new is opened.'],
    ],
    seoH2: 'Home Addition Contractors Near You',
    seo: [
      'If you are looking for home addition contractors near me in Port Charlotte or a room addition builder anywhere in Charlotte County, experience with ground-up construction should be at the top of your checklist. Home additions involve foundations, structural block or framing, trusses, roofing, and every mechanical trade — the same skills as building a new house, plus the added challenge of joining new to old. Brunderman Building Co Inc brings four decades of that experience, a top 5% rating on BuildZoom, and the confidence of more than 800 customers.',
      'Local conditions shape home additions here more than most people expect. Standard Port Charlotte and North Port lots are roughly 80 by 125 feet, and side and rear setbacks limit how far an addition can extend. Homes on septic systems must keep additions clear of the tank and drain field, or the system has to be relocated. In flood zones, a new addition generally has to be built at the current required elevation, which can mean a step up from the existing floor — and a large enough project can trigger FEMA\'s substantial improvement rule for the whole house. We sort through these questions with you at the feasibility stage so the design you pay for is one that can actually be permitted.',
    ],
    variantsH3: 'Addition Projects We Build',
    variants: [
      'Primary bedroom and bathroom suite additions',
      'In-law suites and attached guest quarters',
      'Additional bedrooms and home offices',
      'Family room and great room expansions',
      'Attached garage and third-bay additions',
      'Lanai enclosures converted to living space',
      'Kitchen bump-outs and dining room extensions',
      'Second-story additions and bonus rooms',
    ],
    areaLead: 'We build home additions across Southwest Florida.',
    faqs: [
      ['Is it cheaper to add on or to move?', 'It depends on your home, your lot, and the market, and we cannot answer it for every situation. What we can say is that an addition lets you keep a location you like and design the new space exactly as you want it. We can give you realistic pricing for the addition so you can compare the two paths with real numbers.'],
      ['How close to the property line can I build an addition?', 'Setbacks vary by jurisdiction and zoning district, and waterfront lots often have additional rear setbacks from the seawall. We review your survey and the applicable zoning rules during the feasibility stage, before design begins.'],
      ['Will the addition match my existing house?', 'That is the goal. We match the construction type, roof pitch and material, stucco texture, window style, and floor height as closely as possible so the addition reads as original. Where an exact roofing or tile match is no longer made, we will show you the closest options.'],
      ['Can my lanai be converted into a real room?', 'Frequently, yes — but it has to be done properly to count as living area. That usually means verifying or upgrading the slab and footing, building insulated exterior walls, installing impact-rated windows and doors, extending HVAC, and permitting the work.'],
    ],
  },
].map((s) => ({ ...s, areaP: AREA[s.slug], introH2: INTRO_H2[s.slug], guide: GUIDE[s.slug], stormH2: STORM[s.slug][0], storm: STORM[s.slug][1] }));
