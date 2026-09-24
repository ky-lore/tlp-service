# tlp-service

Google Ads landing page for TopLevel Plumbing Services (North Hollywood, CA — serving LA & Orange County).

Static HTML/CSS/JS, no build step, served via `serve` from the `public/` folder only (see `railway.json` / `public/serve.json`). Anything outside `public/` is never served.

- `/plumbing-services` — the paid LP (drain cleaning, hydro jetting, water heater installation)
- `/thank-you` — post-lead confirmation page
- `css/style.css` — design system (brand colors, components)
- `js/script.js` — FAQ accordion. Lead form is a GHL/Advanced Marketers widget iframe (redirect to `/thank-you` configured in GHL)
- `assets/logo`, `assets/fonts` — brand assets from client onboarding
- `onboarding-info/` — source onboarding doc (business facts, brand kit, pricing)

Both pages are `noindex, nofollow` (paid-traffic only) and carry Google Tag Manager (`GTM-T6F3B8VM`).
