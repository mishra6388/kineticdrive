Build a "Google Ads Agency" landing page for KineticDrive at `app/google-ad-agency/page.jsx` (Next.js, App Router), styled consistently with the rest of the KineticDrive site (reuse existing header/footer components, color tokens, and fonts already used in `app/digital-services/page.jsx`).

This page will receive **paid Google Ads traffic**, so it must be optimized to convert as many visitors into leads as possible — not just look good. Lead capture is the primary goal of every section, not an afterthought at the bottom.

## Reference
Structure and copy tone should follow this competitor page (rewrite all copy in KineticDrive's voice — do not copy text verbatim): alphamedia.in/google-ad-agency.html

## Page sections (in order)

1. **Hero (with embedded quick-form)** — Headline "Google Ads Agency", subheadline, breadcrumb (Home / Google Ads Agency), background image. Include a compact 3-field form (Name, Phone, Service dropdown) directly in the hero, side-by-side with the headline on desktop, stacked below it on mobile — no scrolling required to submit. Sticky "Enquiry Now" side tab visible from here onward on every section.
2. **Intro** — "Work With a Google Ads Agency That Delivers Results" + short paragraph on ROI, A/B testing, campaign optimization, transparent reporting. Google Partner / AdWords badge graphic.
3. **Credibility banner** — "Increase Your Traffic & Leads With Experienced Google Ads Certified Partners in India" + years of experience blurb + CTA button "Talk to us today" (opens Quick Form Modal).
4. **Certified partner block** — "Certified Google Partner: KineticDrive" with 2–3 paragraphs on trust/experience, plus Google Partner badge image.
5. **Pain-point checklist + CTA** — Bulleted list of business-owner pain points (losing money on ads, no ROI, freelancers not delivering, competitors eating market share, etc.), each with a right-arrow icon, next to an orange callout box: "If your answer is yes to any of the above, reach out for a Free Consultancy" with a CTA button that opens the Quick Form Modal. This is the emotional-peak section — the CTA here should be visually the strongest on the page besides the hero.
6. **4-column value props** — icons + short blurbs: "Dominate Your Industry", "Be One Step Ahead of Competition", "We Create & Cultivate Online Experiences", "Success You Can Measure".
7. **URL checker CTA band** — "Ready To Give Boost To Your Business — Let's Talk" with a text input pre-filled placeholder (e.g. your website URL) and a "Next Step" button that opens the Quick Form Modal (pre-filling the URL as a hidden `requirements` note if provided).
8. **Services grid (6 cards)** — Search Ads, Display Ads, Re-Marketing, Shopping Ads, App Promotions, Google Ads Audit — icon, title, 3–4 line description each.
9. **Why hire us** — Bulleted list (10 items) of benefits, ending with a "Request a Proposal" button that opens the Quick Form Modal.
10. **How We Do It — accordion** — Research & Keyword Selection, Creating Ad Copy, Landing Page Optimization, Location Targeting Optimization, Campaign Management, Analyzing The Competitor, Conversion Tracking, ROI Tracking, A/B Testing. First item expanded by default.
11. **FAQ accordion** — 10–12 Google Ads FAQs (what are Google Ads, minimum budget, cost, payment methods, management services, campaign types, ranking guarantees, timelines, custom packages, switching packages).
12. **Full contact form + info panel + footer** — the detailed form (all fields) for visitors who scroll all the way — see Lead Capture spec below.

Keep it a single responsive page, mobile-first, Tailwind CSS, smooth-scroll anchor navigation between sections.

## Global lead-capture elements (not tied to one section)

- **Sticky "Enquiry Now" tab** — visible on desktop (side tab) and mobile (bottom bar), on screen at all times from the hero onward. Clicking it opens the Quick Form Modal (does NOT scroll to the bottom form — modal converts faster than a scroll+find+fill flow).
- **Exit-intent popup (desktop)** — trigger the Quick Form Modal when cursor moves toward the top of the viewport (leaving the page). Show at most once per session (use `sessionStorage` to suppress repeats).
- **Scroll-up-near-top trigger (mobile)** — since exit-intent doesn't work on mobile, trigger the same modal once if the user scrolls back up past 80% scroll depth without having submitted a form (i.e., they reached the bottom, didn't convert, and are scrolling back — show it once).
- **Quick Form Modal** — a reusable component (`components/QuickLeadModal.jsx`) with just Name, Phone, Service — used by the hero, sticky tab, pain-point CTA, URL-checker band, "Why hire us" CTA, exit-intent, and scroll-up trigger. Keep it to 3 fields max; friction kills conversion on modals.

## Lead capture (this is the important part)

We already have a Supabase project and a `leads` table with this schema (from the existing table editor):

```
id             uuid (pk, default gen)
created_at     timestamptz (default now())
name           text
email          text
phone          text
company        text
service        text
website_type   text
budget         text
requirements   text
source         text
campaign       text
utm_source     text
utm_medium     text
utm_campaign   text
utm_term       text
utm_content    text
gclid          text
status         text (default 'New')
notes          text
updated_at     timestamptz
```

Reuse the existing Supabase client (`lib/supabase.js` or wherever it's already configured in this repo — check `lib/` before creating a new one).

### Two form variants

**A. Quick Form (used in hero, sticky tab modal, mid-page CTAs, exit-intent, scroll-up trigger)**
- Name (required)
- Phone (required)
- Service — dropdown: "Web Development", "Digital Marketing", "App Development", "Google Ads" (maps to `service`)
- All other columns sent as `null`/empty except the auto-captured ones below.

**B. Full Form (bottom-of-page contact section only)**
- Name (required)
- Email (optional)
- Phone (required)
- Company (optional)
- Service — dropdown, same options as above (maps to `service`)
- Website Type — dropdown: "Business Website", "E-Commerce App", "Complete Digital Marketing" etc. (maps to `website_type`)
- Budget — dropdown: "Below ₹25,000", "Below ₹20,000", "Below $5k", "Custom" (maps to `budget`)
- Requirements — textarea (optional, maps to `requirements`)

### `source` values — tag every submission by where it came from
Set the `source` column based on which form instance was submitted, so you can measure which placement converts best in Supabase later:
- `"Hero Form"`
- `"Sticky Tab Modal"`
- `"Pain Point CTA"`
- `"URL Checker CTA"`
- `"Why Hire Us CTA"`
- `"Exit Intent Modal"`
- `"Scroll Up Modal"`
- `"Bottom Full Form"`

Pass this as a prop into `QuickLeadModal` (e.g. `<QuickLeadModal source="Pain Point CTA" />`) and the standalone bottom form, so each button/trigger declares its own source.

### Auto-captured fields (do NOT show these to the user — capture silently on page load from the URL query string)
- `source` → hardcode `"Website"` (or `"Google Ads Landing Page"`)
- `campaign` → from `?campaign=` or `?utm_campaign=` param, fallback null
- `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content` → read directly from `window.location.search` using `URLSearchParams`
- `gclid` → read `?gclid=` param (Google Ads click ID — critical for attributing which ad/keyword generated the lead)
- `status` → `"New"` (default, don't send explicitly if column already defaults it)

Store these UTM/gclid values in React state on mount (`useEffect` reading `useSearchParams()` from `next/navigation`), so they persist even if the user scrolls/fills the form later, and attach them to the payload on submit.

### On submit (both Quick Form and Full Form use the same insert shape)
```js
const { error } = await supabase.from('leads').insert([{
  name, email: email || null, phone,
  company: company || null,
  service, website_type: websiteType || null,
  budget: budget || null,
  requirements: requirements || null,
  source, // e.g. "Hero Form", "Pain Point CTA", "Bottom Full Form" — passed in per instance
  campaign: utmParams.utm_campaign || null,
  utm_source: utmParams.utm_source || null,
  utm_medium: utmParams.utm_medium || null,
  utm_campaign: utmParams.utm_campaign || null,
  utm_term: utmParams.utm_term || null,
  utm_content: utmParams.utm_content || null,
  gclid: utmParams.gclid || null,
}]);
```
- Read UTM/gclid params once at the top-level page component (`useSearchParams()`), then pass them down via context or props to every form instance and modal — don't re-parse the URL in each component.
- Show inline validation (required fields) before submit.
- On success:
  - Quick Form (modal): close the modal and show a small inline "Thanks! We'll call you shortly." confirmation inside the modal — do NOT navigate away, since that would lose the user's place on a page they were still scrolling.
  - Full Form (bottom): redirect to (or reuse) the existing `/thank-you` page, matching the "Thank You for Contacting KineticDrive" style already in the codebase.
- On error: show an inline error message, log to console, don't lose the user's input.
- Disable the submit button + show a loading state while the request is in flight.
- After ANY successful submission (any source), set a flag (e.g. `sessionStorage.setItem('kd_lead_submitted', 'true')`) and suppress exit-intent/scroll-up modals for the rest of the session — don't re-prompt someone who already converted.

### Testing note
Add a comment at the top of the file listing example test URLs, e.g.:
`/google-ad-agency?utm_source=google&utm_medium=cpc&utm_campaign=search_brand&gclid=TEST123`
so it's easy to verify the UTM capture manually before wiring up real Google Ads campaigns. Also manually test: hero form submit, sticky tab modal, exit-intent trigger (desktop, move mouse to top), scroll-up trigger (mobile, scroll to bottom then back up), and confirm each row lands in Supabase with the correct `source` value.

## Do not
- Do not create a new Supabase client instance — use the existing one.
- Do not hardcode the Supabase URL/key in this file.
- Do not change the `leads` table schema.