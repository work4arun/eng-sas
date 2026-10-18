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
- `components/Admissions.jsx`           steps and the call-back form (wire `submit()` in `AdmissionForm.jsx` to your inbox / CRM / WhatsApp)
- `components/Family.jsx`               the six Sasurie institutions
- `components/Footer.jsx`               footer and the "Create your future." watermark
- `app/globals.css`                     layout and motion
- `lib/layers.js`                       geometry and colours of the stacked-arrow mark
- `public/brand/`                       trimmed logos (from the PNG folder)

Please check every claim in the copy (AICTE / Anna University lines, programme list, admission year, the industry belt) before publishing.
