# Apon UK Redesign

A lightweight Astro redesign of the current Apon UK public website. The project keeps the existing Apon UK content/CTA wording and current public URL structure while replacing the visual presentation with a clean study/career-focused design using Apon blue and orange.

## Stack

- Astro static site
- HTML/CSS/vanilla JavaScript
- `@astrojs/sitemap`
- No client framework required
- Node.js 22.12+ recommended

## Run locally

```bash
npm install
npm run dev
```

Production check:

```bash
npm run build
npm run preview
```

## Content editing

Each important public page has its own file so content is easy to find and update:

- Homepage: `src/pages/index.astro`
- Study Abroad: `src/pages/studyabroad.astro`
- Freelancing: `src/pages/freelancing.astro`
- Startup: `src/pages/startup.astro`
- Research Degree: `src/pages/researchdegree.astro`
- Job Abroad: `src/pages/jobabroad.astro`
- Guidance: `src/pages/guidance.astro`
- Scholarship: `src/pages/scholarship.astro`
- Free Training: `src/pages/free-training.astro`
- Financial Support: `src/pages/financial-support-by-apon.astro`
- Campus Ambassador: `src/pages/acp.astro`
- About: `src/pages/about.astro`
- Contact form: `src/pages/contact.astro`
- Newsletter: `src/pages/newsletter.astro`
- Opportunities: `src/pages/opportunities.astro`
- Opportunity archive: `src/pages/category/opportunities.astro`
- Blogs archive: `src/pages/blogs.astro`
- App: `src/pages/downoad-app.astro`
- Payment: `src/pages/payments.astro`
- Help in Need: `src/pages/help.astro`
- Work with us: `src/pages/work-with-us.astro`
- Sectors: `src/pages/sectors.astro`
- Government solution: `src/pages/government-solution.astro`
- Header/footer/SEO defaults: `src/layouts/Layout.astro`
- Brand styles: `src/styles/global.css`
- Navigation styles: `src/styles/menu.css`
- Logo: `public/apon-logo.svg`

A no-index `/admin/` utility page links directly to the relevant GitHub editors for maintainers.

The existing live URL typo `/downoad-app/` is deliberately preserved so external links and SEO are not broken. `/download-app/` redirects to it.

## Forms

Contact and newsletter forms keep the public form fields and use an email-client fallback to `info@apon.uk`, so they work on any static host without sending form data to a third-party service. If a direct server-side submission is required, connect the same form markup to the production mail/API endpoint during hosting setup.

## SEO

- Canonical URLs
- Page descriptions
- Open Graph/Twitter metadata
- Organization JSON-LD
- `robots.txt`
- generated sitemap
- favicon + web manifest
- branded 404 page
- legacy aliases for known URL variants

## QA

`.github/workflows/ci.yml` installs dependencies on Node 22, audits production dependencies, builds Astro and verifies important generated routes/files on every push to `main`.

## Deployment

The output is static and can be deployed to Cloudflare Pages, Vercel, Netlify, GitHub Pages, cPanel or any static host.

Build command: `npm run build`

Output directory: `dist`

Before replacing the existing production website, point a preview/staging domain at the new build, verify forms/URLs, then switch DNS or the host document root. Keep current Apon UK URLs unchanged to protect existing search indexing.
