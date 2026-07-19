# সবজি Fresh

> A vegetable delivery website for Bikash Talukder — Sylhet's one-person, one-bicycle morning harvest service. Built as a single-page React app with an editorial "worn-paper market zine" aesthetic.

![Stack](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-3-38B2AC?logo=tailwind-css&logoColor=white)
![Deploy](https://img.shields.io/badge/Vercel-Auto--Deploy-000?logo=vercel&logoColor=white)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/bikash-20/sylhet-vegitable-website-)

## What it is

A small, opinionated landing page for a real vegetable vendor. Not a marketplace, not a SaaS template — a one-page site that answers:

1. What Bikash picked this morning
2. How much each item costs
3. Where he delivers (18 Sylhet neighborhoods)
4. How to order (WhatsApp-first, by design)
5. Who he is and why his vegetables are different

No shopping cart flow. No payment gateway. Just WhatsApp deep-links that pre-fill the order message.

## Stack

- **Vite 5** — bundler / dev server
- **React 18** — UI
- **Tailwind CSS 3** — utility-first styling
- **Framer Motion 11** — scroll-triggered reveals + cart drawer animations
- **Lucide React** — icons
- **Google Fonts** — Fraunces (display), Newsreader (body), JetBrains Mono (eyebrows)

No backend. No database. No analytics. The whole site is static.

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # serve the build locally
```

Requires Node 18+.

## Project layout

```
veggie-fresh/
├── public/
│   └── images/            # vegetables, harvest gallery, Bikash portrait
├── src/
│   ├── assets/
│   ├── components/        # Navbar, Footer, AnimatedSection, StaggerContainer
│   ├── context/           # CartContext (single source of truth for cart state)
│   ├── data/              # products.js, site.js (contact + payment)
│   ├── hooks/             # useScrollAnimation
│   ├── pages/
│   ├── sections/          # Hero, HarvestGallery, FeaturedProducts, About,
│   │                        HowToOrder, DeliveryInfo, Testimonials, FAQs, Contact
│   ├── styles/            # index.css (design tokens + custom CSS)
│   ├── App.jsx
│   └── main.jsx
├── vercel.json            # deployment config + SPA rewrites
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## Deployment

Hosted on **Vercel** with auto-deploy from the `main` branch.

Every push to `main` triggers:
1. GitHub Actions runs `npm run build` (catch build errors early)
2. Vercel builds and deploys to a preview URL
3. Merges to `main` go live to production

To deploy your own copy:

```bash
# 1. Push to GitHub
git init && git add . && git commit -m "feat: initial commit"
git branch -M main
git remote add origin https://github.com/bikash-20/vegitable-selling-wbsite.git
git push -u origin main

# 2. Import the repo at https://vercel.com/new
#    Vercel auto-detects Vite, no config needed
```

## Contact

- **Vendor:** Bikash Talukder
- **WhatsApp:** 01926240062
- **Email:** bikashtalukder040@gmail.com
- **Service area:** Sylhet Sadar + 17 surrounding neighborhoods

## License

Personal project. All rights reserved.
