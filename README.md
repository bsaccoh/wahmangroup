# WAHMAN ABU Group — Corporate Website

Official corporate website for **WAHMAN ABU Group**, a diversified conglomerate investing in Africa's future across six core sectors: Mining, Oil & Gas, Agriculture, Real Estate, Aviation, and Trade. The Group's subsidiary **AABS Investment & Trading Group** operates across Logistics, Construction, Technology, Trading, Investment, and Charity.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 with lazy loading + Suspense |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS 3 |
| Routing | React Router DOM v7 |
| Animations | Framer Motion 12 |
| SEO | React Helmet Async |
| Forms | EmailJS Browser |
| Icons | React Icons 5 |
| Maps | Leaflet + React Leaflet |
| Notifications | React Hot Toast |

---

## Features

- **Multi-page SPA** — Home, About, Sectors (6 detail pages), Sustainability, News, Investors, Contact, Privacy, Terms
- **Responsive design** — Mobile-first, breakpoints for sm / md / lg / xl
- **Sector photo cards** — Full-bleed background images with hover reveal animations
- **News system** — Category filter, article detail pages, local image support
- **Contact form** — Inline validation, EmailJS integration, character count
- **Investor Relations** — Key metrics, investment types, governance, reports, key contact
- **ESG / Sustainability** — Animated hero, metrics grid, ESG pillars, SDG alignment
- **AABS Subsidiary** — Dedicated section on About page showcasing the 6 AABS divisions
- **Accessibility** — Keyboard nav, focus traps, aria-expanded, aria-label, role attributes
- **SEO** — Per-page Open Graph + Twitter Card meta tags, JSON-LD structured data, canonical URLs
- **Error Boundary** — Graceful crash UI with refresh / return home actions
- **Custom favicon** — WAHMAN diamond W SVG mark

---

## Project Structure

```
src/
├── assets/              # Images, video, logo files
├── components/
│   ├── about/           # CompanyOverview, LeadershipTeam, Timeline, AABSSection, ...
│   ├── common/          # Navbar, Footer, Button, SectionTitle, ErrorBoundary, ...
│   ├── contact/         # ContactForm, MapEmbed
│   ├── home/            # HeroSection, SectorsGrid, WhyWahman, StatsCounter, NewsTeaser
│   ├── investors/       # InvestorSection
│   ├── news/            # NewsCard, NewsGrid
│   ├── sectors/         # SectorsOverview
│   └── sustainability/  # ESGSection
├── context/             # AppContext (mobile menu state)
├── data/                # sectors.js, news.js, team.js, stats.js, timeline.js
├── hooks/               # useScrollAnimation, useCounterAnimation
├── pages/               # Home, About, Sectors, SectorDetail, Sustainability,
│                        # News, NewsDetail, Investors, Contact, Privacy, Terms, NotFound
└── utils/               # helpers.js
public/
├── favicon.svg          # Diamond W logo mark
└── mining-vid1.mp4      # Hero background video
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/bsaccoh/wahmangroup.git
cd wahmangroup

# Install dependencies
npm install

# Start development server
npm run dev
```

The site runs at `http://localhost:5173` by default.

### Build for Production

```bash
npm run build
npm run preview
```

---

## Configuration

### EmailJS (Contact Form)

Open [`src/components/contact/ContactForm.jsx`](src/components/contact/ContactForm.jsx) and replace the placeholder credentials:

```js
const SERVICE_ID  = 'YOUR_SERVICE_ID';
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
```

Sign up at [emailjs.com](https://www.emailjs.com) to obtain your credentials.

---

## Contact

**WAHMAN ABU Group**  
13 Walpole Street, Freetown, Sierra Leone, West Africa  
Email: info@wahmangroup.com  
Africa: +232 76 920000 | Europe: +39 329 3661921 | USA: +1 914 918 5695

---

## License

© 2026 WAHMAN ABU Group. All rights reserved.
