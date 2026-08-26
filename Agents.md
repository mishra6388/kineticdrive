Build a complete, production-ready **Influencers / Creator Partnership page** for the existing KineticDrive Next.js website.

The goal of this page is to **attract influencers and creators to register with KineticDrive**, explain why they should partner with us, build trust, and collect their details for future page management, creator growth, and paid brand collaboration opportunities.

## 1. Existing Project Context

This is an existing **Next.js App Router + React + Tailwind CSS** project.

The current website uses a premium dark theme with:

* Black / near-black backgrounds
* KineticDrive yellow/gold accent
* White typography
* Glassmorphism cards
* Rounded buttons
* Subtle borders and gradients
* Modern digital-agency aesthetic

Use the existing website's design language and components wherever possible.

Do NOT redesign or break existing pages.

The new page should feel like it naturally belongs to the current KineticDrive website.

---

# 2. New Route

Create:

`/influencers`

This should be a complete, polished landing + registration page.

The page should be responsive for:

* Desktop
* Tablet
* Mobile

Use the existing navbar/header and footer if available.

---

# 3. Hero Section

Create a strong creator-focused hero section.

Suggested messaging:

**Small badge:**
"CREATOR PARTNERSHIP PROGRAM"

**Main heading:**
"Grow Your Influence. Build Your Brand."

**Supporting heading/text:**
"KineticDrive helps creators, influencers, and personal brands grow their digital presence, manage their pages, and connect with meaningful brand collaboration opportunities."

Primary CTA:

**"Join KineticDrive"**

Secondary CTA:

**"See How It Works"**

The hero should visually communicate:

* Creator growth
* Social media
* Digital branding
* Brand collaborations
* Professional management

Use a premium visual treatment consistent with the existing KineticDrive homepage.

Do not overcrowd the hero.

---

# 4. Trust / Why Register With KineticDrive Section

Create a dedicated component called something like:

`WhyRegisterWithUs`

Purpose:

Build trust before asking the influencer to submit their information.

Heading:

**"Why Creators Choose KineticDrive"**

Explain that KineticDrive can help creators professionally manage and grow their digital presence.

Create attractive cards for benefits such as:

### Page Management

We help maintain and manage your social media presence with consistent content, optimization, and audience-focused strategy.

### Creator Growth

Get guidance on improving your online presence, content positioning, discoverability, and overall digital growth.

### Paid Brand Collaborations

We help connect suitable creators with relevant paid collaboration opportunities when campaigns match their niche and audience.

### Brand Positioning

Build a stronger and more professional creator identity that makes your profile more attractive to potential brands.

### Content Strategy

Get strategic guidance around content direction, posting consistency, audience engagement, and growth opportunities.

### Campaign Support

Get support around campaign coordination, communication, deliverables, and professional brand collaboration workflows.

### Profile Optimization

Improve your social profiles so brands can quickly understand your niche, audience, content style, and creator value.

### Long-Term Partnership

Position KineticDrive as a growth partner rather than simply another platform asking creators to register.

Important:
Do NOT make unrealistic promises such as guaranteed followers, guaranteed income, or guaranteed brand deals.

Use trust-building language such as:

* "eligible opportunities"
* "relevant campaigns"
* "when suitable opportunities are available"
* "based on creator profile and campaign requirements"

---

# 5. Benefits Section

Create a visually strong section:

**"What You Get With KineticDrive"**

Use 6–8 benefit cards with icons.

Include:

* Social Media Page Management
* Creator Profile Optimization
* Content & Growth Strategy
* Brand Collaboration Opportunities
* Campaign Coordination
* Professional Digital Presence
* Creator Branding Support
* Growth Insights & Performance Guidance

Make this section visually premium and easy to scan.

---

# 6. How It Works Section

Create a simple 4-step process:

### 01 — Register

Submit your creator/influencer details.

### 02 — Profile Review

Our team reviews your niche, platforms, content, and digital presence.

### 03 — Growth & Collaboration

If there is a suitable fit, we can discuss management, growth support, or relevant brand opportunities.

### 04 — Grow Together

Build your creator brand with professional digital support and potential collaboration opportunities.

Make this visually clean with connecting lines/arrows on desktop and stacked cards on mobile.

---

# 7. Influencer Registration Form

Create a premium registration form component.

Heading:

**"Join the KineticDrive Creator Network"**

Subheading:

"Tell us about yourself and your creator presence. Our team will review your profile and get in touch if there is a suitable opportunity or next step."

## Required fields

Every field below is REQUIRED:

### Name

Input:
`Your full name`

### Phone Number

Input:
`Your contact number`

Validate basic phone number format.

### Address

Textarea:
`City, state and address`

### Niche

Input/select:
Examples:

* Fashion
* Beauty
* Fitness
* Travel
* Food
* Technology
* Education
* Finance
* Lifestyle
* Gaming
* Entertainment
* Business
* Other

Allow "Other" as an option.

### Facebook Link

Input:
`https://facebook.com/...`

### Instagram Link

Input:
`https://instagram.com/...`

### YouTube Link

Input:
`https://youtube.com/...`

All fields must have client-side validation.

Social media fields should validate that the user enters a valid URL.

Do not make email a required field because the current business requirement only specifies:

* Name
* Number
* Address
* Niche
* Facebook
* Instagram
* YouTube

---

# 8. Form UX

The registration form should feel trustworthy and professional.

Include:

* Clear labels
* Helpful placeholders
* Required indicators
* Inline validation
* Loading state
* Disabled submit button while submitting
* Error handling
* Success state

Submit button:

**"Register With KineticDrive →"**

During submission:

**"Submitting..."**

After successful submission show a polished success message:

**"You're Registered!"**

"Thank you for registering with KineticDrive. Our team will review your profile and contact you if there is a suitable next step or collaboration opportunity."

Add a button:

**"Back to KineticDrive"**

Do not reload the page unnecessarily.

---

# 9. Supabase Database

Use the existing Supabase setup in the project.

Create a table:

`influencers`

Suggested columns:

```sql
id uuid primary key default gen_random_uuid(),
name text not null,
phone text not null,
address text not null,
niche text not null,
facebook_url text not null,
instagram_url text not null,
youtube_url text not null,
status text default 'new',
created_at timestamptz default now(),
updated_at timestamptz default now()
```

Use appropriate indexes where useful.

Status should support:

* `new`
* `contacted`
* `in_review`
* `onboarded`
* `rejected`

Do not store unnecessary personal information.

---

# 10. Supabase Security

Follow the existing Supabase architecture.

IMPORTANT:

Never expose:

* Supabase service role key
* Resend API key
* Any server secret

in client-side code.

Use the existing public Supabase client for allowed operations and server-side API routes where privileged operations are required.

Configure Row Level Security appropriately.

The public website should only be able to submit a new influencer registration.

Admin users should be able to:

* View registrations
* Update status
* Delete registrations if the existing admin architecture permits it

Do not expose all influencer records to unauthenticated website visitors.

---

# 11. Resend Email Notification

When a new influencer registers successfully:

1. Save the influencer data to Supabase.
2. Send an email notification to the KineticDrive admin team using Resend.

Use the existing Resend setup.

The current project already uses:

```js
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
```

and environment variables such as:

```env
RESEND_API_KEY=
RESEND_FROM=
```

Create an API route such as:

`app/api/influencers/route.js`

or integrate with the project's existing email API architecture if one already exists.

The admin notification should include:

**Subject:**
`New Influencer Registration — KineticDrive`

Email content:

* Name
* Phone
* Address
* Niche
* Facebook URL
* Instagram URL
* YouTube URL
* Registration date
* Current status

Send to the existing admin recipients:

```js
const recipients = [
  'mishra.pm443@gmail.com',
  'garima.komal@gmail.com',
];
```

Use:

```js
from: process.env.RESEND_FROM || 'KineticDrive <info@kineticdrive.in>'
```

Do not expose the Resend API key in frontend code.

If Supabase insertion succeeds but email fails, handle the error carefully and log it server-side. Do not expose sensitive backend information to the user.

---

# 12. Admin Panel Integration

The existing admin panel currently has navigation similar to:

* Dashboard
* Leads
* Anchors
* Bookings
* Settings

Add a new navigation item:

**Influencers**

Use an appropriate Lucide icon such as:

`UsersRound`
or
`BadgeCheck`

Route:

`/admin/influencers`

The active state should match the existing sidebar styling.

Do not break the existing sidebar or routes.

---

# 13. Admin Influencers Page

Create:

`app/admin/influencers/page.jsx`

Build a professional admin dashboard for all influencer registrations.

Page heading:

**"Influencer Registrations"**

Supporting text:

"Manage creators who have registered with KineticDrive."

Show summary cards:

* Total Influencers
* New
* In Review
* Contacted
* Onboarded

Create a searchable/filterable table.

Table columns:

| Column     |
| ---------- |
| Name       |
| Phone      |
| Niche      |
| Instagram  |
| YouTube    |
| Facebook   |
| Status     |
| Registered |
| Actions    |

For social media URLs, display clean labels such as:

`Instagram ↗`

instead of showing the full URL.

Clicking should open the profile in a new tab.

---

# 14. Admin Search & Filters

Add:

### Search

Search by:

* Name
* Phone
* Niche

### Status Filter

Options:

* All
* New
* In Review
* Contacted
* Onboarded
* Rejected

### Sorting

Allow newest registrations to appear first.

---

# 15. Admin Detail View

When an admin clicks a registration, open a modal/drawer/detail page.

Show:

### Creator Information

Name
Phone
Address
Niche

### Social Profiles

Facebook
Instagram
YouTube

Each social profile should have an external link.

### Registration Information

Registration date
Current status

Allow admin to change status.

Example:

```text
New
↓
In Review
↓
Contacted
↓
Onboarded
```

Also allow:

`Rejected`

Use confirmation before destructive actions such as delete.

---

# 16. Admin UI Design

Follow the existing admin design visible in the current project.

Use:

* `#050505`
* `#0a0a0a`
* Yellow/gold KineticDrive accent
* White text
* Gray secondary text
* Glass cards
* `border-white/5`
* Rounded-xl / rounded-2xl
* Subtle hover effects
* Responsive table

The admin interface should look like a real SaaS/admin dashboard.

Do not create a completely different design system.

---

# 17. Empty State

If there are no influencer registrations:

Show a polished empty state:

**"No influencer registrations yet"**

"New creator registrations will appear here once influencers join the KineticDrive network."

Include an appropriate icon.

---

# 18. Loading & Error States

Implement proper states for:

* Initial page loading
* Form submission
* Supabase loading
* Admin table loading
* Supabase errors
* Email errors
* Empty data
* Network failures

Do not leave the user with a blank screen.

---

# 19. Form Submission Flow

The expected flow is:

```text
Influencer
     ↓
/influencers
     ↓
Fills registration form
     ↓
Client-side validation
     ↓
POST /api/influencers
     ↓
Validate server-side
     ↓
Insert into Supabase
     ↓
Send notification through Resend
     ↓
Return success
     ↓
Show success UI
     ↓
Admin sees registration
     ↓
/admin/influencers
```

Make sure the database insert happens before relying on the email notification.

---

# 20. UX / Trust Details

Add small trust-building messaging near the form:

"Your information is used only to review your creator profile and communicate relevant KineticDrive opportunities."

Add a small privacy link if the website already has:

`/privacy-policy`

Do not make the page feel like a generic lead-generation form.

The overall feeling should be:

**Professional Creator Network + Digital Growth Partner + Brand Collaboration Platform**

---

# 21. Mobile Responsiveness

On mobile:

* Hero typography should scale down properly
* Form should become one column
* Benefits should become one-column cards
* Process should stack vertically
* Social inputs should not overflow
* Admin table should become horizontally scrollable or use responsive cards
* Buttons should have comfortable touch targets
* Navbar should use the existing mobile menu

No horizontal page overflow.

---

# 22. Component Structure

Prefer reusable components.

Suggested structure:

```text
app/
├── influencers/
│   └── page.jsx
│
├── api/
│   └── influencers/
│       └── route.js
│
├── admin/
│   └── influencers/
│       └── page.jsx
│
components/
├── influencers/
│   ├── InfluencerHero.jsx
│   ├── WhyRegisterWithUs.jsx
│   ├── InfluencerBenefits.jsx
│   ├── HowItWorks.jsx
│   ├── InfluencerRegistrationForm.jsx
│   └── InfluencerCTA.jsx
```

Adapt this structure to the existing project if equivalent components already exist.

Do not duplicate existing navbar/footer components.

---

# 23. Important Existing Code Rules

Before creating new code:

1. Inspect the existing project structure.
2. Reuse existing components.
3. Reuse existing Supabase client from:

```text
@/lib/supabase
```

4. Reuse existing authentication/admin protection.
5. Reuse existing Tailwind configuration.
6. Reuse existing typography and global styles.
7. Do not modify unrelated pages.
8. Do not replace existing admin architecture.
9. Do not create duplicate Supabase clients.
10. Do not expose secret environment variables.

---

# 24. Quality Requirements

The final implementation should be:

* Production-ready
* Clean React code
* Properly componentized
* Fully responsive
* Accessible
* Keyboard friendly
* Properly validated
* Secure
* Error handled
* Consistent with KineticDrive branding

Use Lucide React icons if icons are needed.

Avoid excessive animations.

Use subtle animations only where they improve the experience.

---

# 25. Final Goal

The final `/influencers` page should make an influencer think:

**"KineticDrive can actually help me grow my creator brand and connect me with professional opportunities."**

The page should guide the visitor naturally:

```text
Discover KineticDrive
        ↓
Understand the benefits
        ↓
Build trust
        ↓
See how it works
        ↓
Register
        ↓
Get confirmation
```

And the business workflow should be:

```text
Influencer Registration
        ↓
Supabase
        ↓
Resend Admin Notification
        ↓
Admin Influencers Dashboard
        ↓
Review Creator
        ↓
Update Status
        ↓
Contact / Onboard
```

Implement the complete frontend, API route, Supabase integration, Resend notification, admin navigation, admin dashboard, status management, validation, loading states, error handling, and responsive UI.

Before finishing, verify that:

* `/influencers` works
* form validation works
* Supabase insertion works
* Resend notification works
* `/admin/influencers` loads data
* status updates work
* social links work
* mobile UI works
* existing KineticDrive pages remain unaffected
