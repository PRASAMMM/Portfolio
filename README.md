# prasampradhan.name.np

Personal site for **Prasam Pradhan** — Project Manager, engineering leadership and delivery ownership.

Live at [www.prasampradhan.name.np](https://www.prasampradhan.name.np).

## Stack

React 18 · TypeScript (strict) · Vite · Tailwind CSS. No UI framework, no animation library, no router — the site is a single page and everything is hand-built to keep the bundle small.

Runtime dependencies: `react`, `react-dom`, `lucide-react`, `clsx`, `tailwind-merge`.

## Content

Every fact rendered on the site lives in **`src/content/profile.ts`**, and every claim in it traces back to `public/Prasam-Pradhan-CV.pdf`. Update the CV and that file together — `src/test/content.test.ts` guards the contact details, role ordering, metrics and skill claims against careless edits.

## Commands

```bash
npm install
npm run dev        # local dev server on :8080
npm run typecheck  # tsc --noEmit across app + config
npm run lint       # eslint
npm test           # vitest
npm run build      # typecheck + production build to dist/
npm run preview    # serve the built output
```

## Deployment

The site is served from **GitHub Pages** on the custom domain (`www.prasampradhan.name.np` → `prasammm.github.io`), and also builds on Vercel.

`CNAME` lives in **both** the repo root and `public/`. The `public/` copy is the important one: `npm run deploy` publishes `dist/` to the `gh-pages` branch, and without it the custom domain would be dropped on the next deploy.

```bash
npm run deploy     # build, then publish dist/ to the gh-pages branch
```

## Accessibility & motion

Scroll reveals are progressive enhancement via `IntersectionObserver`, and are disabled outright under `prefers-reduced-motion: reduce`. All interactive elements are keyboard reachable with a visible focus ring, and the page opens with a skip link.
