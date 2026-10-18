# Sasurie College of Engineering: landing page

Next.js 16.4.2 (App Router) · React 19 · no UI libraries, fonts bundled locally.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## How the site is built
A single page: nav, hero (headline on the left, the climbing arrow on the right), facts, marquee, a sticky-arrow story of the
four layers (Foundation, Skills, Industry, Career), programmes, admissions, the Sasurie family and the footer.

## Where to edit
- `components/Hero.jsx`                 headline, intro, buttons, the climbing arrow
- `components/Facts.jsx`                the four facts under the hero
- `components/Marquee.jsx`              the two scrolling rows
- `components/Story.jsx`                the four layers (years, lead, text, points)
- `components/Programmes.jsx`           department list (data in `lib/programmes.js`)
- `components/Admissions.jsx`           the three steps; the call-back form is `AdmissionForm.jsx`
- `components/Family.jsx`               the six Sasurie institutions
- `components/Footer.jsx`               footer, contact details and the "Create your future." watermark
- `app/layout.jsx`                      title, description, Open Graph card, canonical URL
- `app/robots.js`, `app/sitemap.js`     crawler files
- `app/globals.css`                     layout and motion
- `lib/layers.js`                       geometry and colours of the stacked-arrow mark
- `public/brand/`                       trimmed institutional logos + `sasurie-og.png` (social card)

## Environment
| variable | what it does |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | canonical origin used by metadata, `robots.txt` and `sitemap.xml` (defaults to `https://sasurieengg.com`) |
| `NEXT_PUBLIC_ADMISSION_ENDPOINT` | URL that accepts a JSON `POST` for call-back requests (form relay, CRM webhook, Apps Script). If it is unset or fails, the form hands the details to the admissions desk on WhatsApp instead |
| `NEXT_PUBLIC_ADMISSION_WHATSAPP` | WhatsApp number for that hand-off (defaults to `919488891111`, the college's admissions line) |

## Content: where every fact comes from
The copy was transferred from the live site (`sasurieengg.com`, crawled 17 Oct 2026) rather than invented. Spot-check before publishing:

- **Autonomous** — UGC and Anna University conferred autonomous status in January 2026; degrees are still awarded through Anna University, Chennai (site: home banner, `examinations`).
- **Founded 2001**, by the Ponmudi Muthusamy Gounder Trust, Tiruppur, founder Chairman Shri A.M. Kandaswami (site: `about-us`, `management`).
- **Campus** — 10.61 acres near Vijayamangalam, Coimbatore Bypass (NH544), Tiruppur district, Tamil Nadu – 638056 (site: `contact-us`, `about-us`).
- **Programmes** — eight B.E./B.Tech. departments plus Science and Humanities, with M.E. Computer Science and Engineering and MBA (HR / Finance / Marketing / Business Analytics) (site: `ug-courses`, `pg-courses`, department mega-menu).
- **Contact** — info@sasurie.com, 94888 91111 / 94888 92222 (board), admissions 94888 91111 / 94888 92222 / 94888 93333 (site: `contact-us`, `admission`, footer).
- **Online application** — admissions.sasurie.com; student portal — sasurie.kalvisalai.in (site: header and footer links).
- **Library** — 46,468 volumes, 815 m², 148 seats, DELNET databases (site: `library`).
- **Industry** — 350+ industry partners, 100+ MoUs, Centres of Excellence in Industry 4.0, automation, smart manufacturing and IoT (site: `principal-message`).
- **Placements** — Department of Placement and Career Development, full-time aptitude and soft-skills trainers, campus and off-campus drives (site: `placement`).
- **Social** — [Instagram](https://www.instagram.com/sasurieinstitution/), [Facebook](https://www.facebook.com/sasurieinstitution), [LinkedIn](https://www.linkedin.com/company/sasurie-institution/), [YouTube](https://www.youtube.com/@sasurieinstitutions1919), [X](https://twitter.com/sasurie_inst).

Claims that were on the old site as template filler (counters reading 0, "Established since 1900", "45 years", "2.4 million graduates") were deliberately left out; the figures above are the ones the college publishes.
