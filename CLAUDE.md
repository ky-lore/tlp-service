# TopLevel Plumbing Services — Project Notes

Static HTML/CSS/JS Google Ads landing page for TopLevel Plumbing Services ("TLP"), North Hollywood CA, serving LA & Orange County.

## Git workflow — standing authorization

The user has authorized automatic git management for this repo. Unless told otherwise for a specific change:

- After making a meaningful set of file changes, stage, commit, and push to `origin main` without asking for confirmation each time.
- Still follow standard git hygiene: review `git status`/`git diff` before staging, write a clear commit message describing the "why," never force-push, never skip hooks, never amend existing commits (always create new ones).
- Still pause and ask before anything destructive or hard-to-reverse (history rewrites, branch deletion, resetting shared history) — auto-push of normal forward commits is in scope; those are not.
- If a commit touches something that looks like it could contain secrets/credentials, stop and flag it instead of pushing.

## Site structure

Pure static site, no build step, no backend. Root-relative paths (`/css/style.css`, `/assets/...`) throughout.

- `plumbing-services/index.html` — the paid LP (keywords: drain cleaning, hydro jetting, water heater installation), phone (818) 614-5787
- `thank-you/index.html` — post-lead confirmation page
- `index.html` — root redirect to `/plumbing-services`
- `css/style.css` — full design system, self-hosted Work Sans (`assets/fonts/WORKSANS-OTF`)
- `js/script.js` — FAQ accordion only. The lead form on `plumbing-services/index.html` is a GHL/Advanced Marketers widget iframe (`https://link.advancedmarketers.co/widget/form/aEnM1s75vkirmB9jdC39`, loaded via `form_embed.js`) — post-submit redirect to `/thank-you` is configured inside that GHL form, not in this repo's code
- Both LP pages are `noindex, nofollow` and excluded via `robots.txt` — paid-traffic only, not meant to be indexed
- GTM container `GTM-T6F3B8VM` is installed on `plumbing-services/index.html` and `thank-you/index.html` only (the actual LPs) — the root `index.html` is just a redirect stub and does not carry it
- No Google Ads conversion tag on `/thank-you` yet — needs the client's real conversion ID/label before adding (see comment placeholder in that file)

## Brand

- Colors: `#008cb4` (teal), `#004d65` (dark teal/navy), `#fecb3e` / `#ffd877` (gold), `#caf0fe` (sky)
- Font: Work Sans (self-hosted OTF)
- Logo: `assets/logo/581f47a9-cc67-4190-b8e6-8203c4a70956.jpg` (high-res, used as-is — has a white background, not transparent, so it's placed on white/light containers rather than altered)
- Full brand/business facts: `onboarding-info/top-level-plumbing-onboarding.md` (license #1139342, phones, hours 24/7, service pricing, socials)

## Open follow-ups

- Google Ads conversion tracking (ID/label) not yet wired on `/thank-you`.
- Confirm the GHL form (`aEnM1s75vkirmB9jdC39`) is configured to redirect to `/thank-you` on submit — that's set inside GoHighLevel, not in this repo.
- If TLP has a separate "main site" outside this repo (onboarding notes it may be built in Lovable), GTM has not been installed there — only the pages in this repo.
- Deploy note (2026-09-15): a Railway deploy of this repo was showing a raw directory listing at `/plumbing-services` instead of rendering the page — check the Railway service is running `npm start` (Nixpacks/Node), not a static/Caddy builder, and redeployed from the latest commit.
