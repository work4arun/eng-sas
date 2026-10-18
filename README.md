# Sasurie College of Engineering: website

Next.js 16.4.2 (App Router) · React 19 · no UI libraries, fonts bundled locally.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Pages

**`/` — the landing page.** Nav, hero (headline left, climbing arrow right), facts, marquee, the sticky-arrow story of the
four layers (Foundation, Skills, Industry, Career), programmes, admissions, the Sasurie family and the footer.

The seeded pages below share that landing page's nav, footer, cards and type scale — no new stylesheet rules, so the
look is unchanged. Each one is content transferred from the college's existing site:

| route | what it carries |
|---|---|
| `/about` | history, trust and founder, vision and mission, chairman / secretary / principal, campus facts, accreditations |
| `/departments` | the nine undergraduate departments with descriptions and inboxes, plus M.E. CSE and MBA |
| `/facilities` | library, hostels, 12 buses, canteen, dispensary and ambulance, ATM, sports and gym, seminar halls, incubation centre, R&D cell, Wi-Fi and power, accessibility |
| `/placements` | the DPCD office, its objectives and what it runs; recruiter contact |
| `/admissions` | TNEA and TANCET routes, UG and PG eligibility, scholarships (STE, sports, differently-abled, single parent), refund policy |
| `/disclosures` | NAAC, NIRF, AQAR, AICTE EOA, IQAC, acts and statutes, Board of Studies, finance committee, examinations, admission brochure |
| `/contact` | phone numbers, emails, address, map link, department inboxes, online services and the call-back form |

## Where to edit

- `lib/site.js`                          all seeded content: contacts, facilities, disclosures, admissions, about
- `app/*/page.jsx`                       one file per page above
- `components/PageShell.jsx`             nav + footer for the inner pages (routes instead of anchors)
- `components/FactCards.jsx`             the card grid used by every inner page
- `components/PointList.jsx`             chevron bullet list
- `components/Hero.jsx`                  landing headline, intro, buttons, the climbing arrow
- `components/Facts.jsx`                 the four facts under the hero
- `components/Story.jsx`                 the four layers (years, lead, text, points)
- `components/Programmes.jsx`            landing programme list (data in `lib/programmes.js`)
- `components/Admissions.jsx`            landing steps; the call-back form is `AdmissionForm.jsx`
- `components/Family.jsx`                the six Sasurie institutions
- `components/Footer.jsx`                footer, contact details, "Create your future." watermark
- `components/Nav.jsx`                   nav; takes `links`, `logoHref`, `ctaHref`, `ctaLabel` props
- `app/layout.jsx`                       title, description, Open Graph card, canonical URL
- `app/robots.js`, `app/sitemap.js`      crawler files (sitemap lists every route)
- `app/globals.css`                      layout and motion — unchanged by the content work
- `lib/layers.js`                        geometry and colours of the stacked-arrow mark
- `public/brand/`                        institutional logos + `sasurie-og.png` (social card)
- `public/campus/`                       three campus photographs (library, seminar hall, sports)

## Environment

| variable | what it does |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | canonical origin used by metadata, `robots.txt` and `sitemap.xml` (defaults to `https://sasurieengg.com`) |
| `NEXT_PUBLIC_ADMISSION_ENDPOINT` | URL that accepts a JSON `POST` for call-back requests (form relay, CRM webhook, Apps Script). If it is unset or fails, the form hands the details to the admissions desk on WhatsApp instead |
| `NEXT_PUBLIC_ADMISSION_WHATSAPP` | WhatsApp number for that hand-off (defaults to `919488891111`, the college's admissions line) |

## Content: where every fact comes from

The copy was transferred from the live site (`sasurieengg.com`, crawled 17 Oct 2026) rather than invented.
Spot-check before publishing:

- **Autonomous** — UGC and Anna University conferred autonomous status in January 2026; the Controller of Examinations office was set up in January 2026 and CGPA is still sent to Anna University, Chennai for degree certificates (site: home banner, `examinations`).
- **Founded 2001**, by the Ponmudi Muthusamy Gounder Trust, Tiruppur, founder Chairman Shri A.M. Kandaswami; Secretary Smt. K. Savitha Moganraj; Principal Dr. R. Kiruba Shankar (site: `about-us`, `management`, `principal-message`).
- **Campus** — 10.61 acres near Vijayamangalam, Coimbatore Bypass (NH544), Tiruppur district, Tamil Nadu – 638056 (site: `contact-us`, `about-us`).
- **Programmes** — eight B.E./B.Tech. departments plus Science and Humanities, with M.E. Computer Science and Engineering and MBA (HR / Finance / Marketing / Business Analytics) (site: `ug-courses`, `pg-courses`, department mega-menu). Establishment years are only given where the college states them (CSE/IT 2001, EEE 2002).
- **Eligibility** — UG: Physics + Chemistry + Maths 45% general, 40% BC/MBC/SC/ST, same for three-year diploma; PG: M.E. subject list, MBA degree and TANCET/Consortium CET (site: `admission`).
- **Scholarships** — Sasurie Talent Examination (up to 100% waiver), sports quota 100% waiver, differently-abled and single-parent scholarships; academic-year-wise fee refund policy (site: `admission`).
- **Facilities** — library 46,468 volumes / 815 m² / 148 seats / DELNET; 12 GPS buses within 50 km; canteen 900 m² seating 600; dispensary with beds and an ambulance; 24-hour ATM; separate hostels; ramps and washrooms for differently-abled students; solar, UPS and inverters (site: `facilities`, `library`).
- **Industry** — 350+ industry partners, 100+ MoUs, Centres of Excellence in Industry 4.0, automation, smart manufacturing and IoT, ₹40 lakh in grants and ₹15 crore of R&D facilities (site: `principal-message`).
- **Placements** — Department of Placement and Career Development, its block with AV facilities, full-time aptitude and soft-skills trainers, campus and off-campus drives (site: `placement`). The college publishes no placement percentages, so none are claimed.
- **Documents** — NAAC (IIQA, SSR, certificate, extended profile), NIRF 2023-24 and 2024-25 with DCS, AQAR 2018-19 → 2023-24, AICTE EOA 2020-21 → 2025-26, IQAC, acts and statutes, Board of Studies, finance committee, admission brochure (site: `naac`, `nirf-ranking`, `aqar`, `eoa`, `policies-strategic-plan`).
- **Contact** — info@sasurie.com, sceprincipal@sasurie.com, 94888 91111 / 94888 92222 / 94888 93333, department inboxes (`scecse@`, `sceece@`, `sceeee@`, `scemech@`, `scecivil@`, `scesh@`, `scemba@`, `sceplacement@`, `coe@`), online application at admissions.sasurie.com, student portal at sasurie.kalvisalai.in.
- **Social** — [Instagram](https://www.instagram.com/sasurieinstitution/), [Facebook](https://www.facebook.com/sasurieinstitution), [LinkedIn](https://www.linkedin.com/company/sasurie-institution/), [YouTube](https://www.youtube.com/@sasurieinstitutions1919), [X](https://twitter.com/sasurie_inst).

### Still to do
- **Document files live on the old site.** The links on `/disclosures` point at `sasurieengg.com/wp-content/uploads/...`; copy the PDFs into `public/` and re-point them when the site moves.
- **Claim check.** The autonomy line, the AICTE approval years, the programme list and the scholarship percentages should be confirmed with the college before publishing.
- Anything on the old site that this site still does not carry: the per-department pages, individual committee pages, gallery, alumni, RTI/IDP pages, the exam timetable pages, and the NAAC/AQAR tables themselves (only their summaries are here).

Claims that were on the old site as template filler (counters reading 0, "Established since 1900", "45 years", "2.4 million graduates") were deliberately left out; the figures above are the ones the college publishes.
