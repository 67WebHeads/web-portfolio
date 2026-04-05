# WebHeads Portfolio

Freelance web development team portfolio site for **WebHeads** (67WebHeads).

## Project Structure

Monorepo with a single `frontend/` directory — no backend.

```
frontend/                React SPA (Vite + React 19)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       Sticky nav, IntersectionObserver hero visibility, mobile hamburger menu
│   │   ├── Hero.jsx         Landing section with CTA → #contact
│   │   ├── ConveyorBelt.jsx Auto-scrolling tech stack icons (CSS keyframe animation)
│   │   ├── About.jsx        "Who we are" section
│   │   ├── Services.jsx     Horizontal scroll cards (Business Website, Custom System, BPA, Data Analytics)
│   │   ├── Projects.jsx     Portfolio showcase with DaisyUI mockup-browser cards (Akimi Studio, R. Angeles)
│   │   ├── FAQS.jsx         Accordion FAQ section
│   │   ├── Form.jsx         Contact form with EmailJS integration + Calendly booking link
│   │   └── Footer.jsx       Nav links + social links (GitHub, LinkedIn, Instagram)
│   ├── assets/              Images (webp/png), mock/ subfolder for project screenshots
│   ├── App.jsx              Root component — single-page layout, all sections in order
│   ├── main.jsx             Entry point — BrowserRouter with single route
│   └── index.css            Global styles, Tailwind/DaisyUI imports, form resets, keyframe animations
├── public/                  Static assets (favicon, logo_icons_2.png)
├── index.html               SPA shell — SEO meta tags, Google Material Icons font
└── package.json             Dependencies and scripts
```

## Tech Stack

- **Framework:** React 19 + React Router DOM 7 (single route currently)
- **Build:** Vite 8
- **Styling:** Tailwind CSS 4 + DaisyUI 5 + MUI 7 + Emotion (CSS-in-JS)
- **Animation:** Framer Motion 12 (scroll-triggered entrance animations)
- **Icons:** react-icons (tech logos), @mui/icons-material (UI controls)
- **Font:** Plus Jakarta Sans (imported in index.css)
- **Email:** @emailjs/browser (contact form → notification + auto-reply, no backend needed)
- **Scheduling:** Calendly (booking link sent in auto-reply email)

## Commands

All commands run from `frontend/`:

```sh
npm run dev       # Start dev server (Vite HMR)
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # ESLint
```

## Design System

- **Theme:** Dark background (#000), white text, blue accent (#0084ff / blue-400)
- **Effects:** Glassmorphism (backdrop-blur, semi-transparent bg, gradient borders)
- **Glass pill pattern:** Used for CTAs — blue gradient bg with inset highlights and blue glow shadow
- **Glass input pattern:** Used for form fields — subtle white gradient bg with inset shadow
- **Section badge pattern:** Rounded pill with blue dot indicator, glass bg, top highlight line
- **Layout:** Mobile-first responsive (Tailwind breakpoints: md, lg)
- **Animations:** Framer Motion `fadeUp` variant for entrance/scroll, CSS keyframes for conveyor belt
- **iOS Safari fixes:** Form resets with `!important` overrides in index.css (appearance, autofill, color-scheme)

## Conventions

- Components are `.jsx` files in `src/components/`
- Images use `.webp` format for performance (stored in `src/assets/`)
- Styling mixes Tailwind utility classes with inline style objects for glassmorphism effects
- Scroll navigation uses anchor `href="#section-id"` with CSS `scroll-behavior: smooth`
- Intersection Observer used in Navbar to detect hero visibility and toggle sticky nav appearance
- Framer Motion `fadeUp` variant is defined locally per component (not shared)
- Custom dropdown in Form.jsx replaces native `<select>` for consistent cross-browser styling

## Contact Form Flow

1. User fills out: Name, Email, Project Type (custom dropdown), Project Details
2. On submit, EmailJS sends two emails:
   - **Notification** → `webheadsph@gmail.com` (service_0wivdfa / template_0cnnwdw)
   - **Auto-reply** → sender's email with Calendly booking link (template_cyhdtsk)
3. Form shows success state with checkmark
4. Calendly link: `https://calendly.com/webheadsph/30min`

## Services Showcased

1. Business Website
2. Custom System Development
3. Business Process Automation
4. Data Analytics & Dashboards

## Portfolio Projects

1. **Akimi Studio** — Appointment booking system (live at akimistudio.cloud)
2. **R. Angeles** — Private CRM for property leasing company

## Social Links

- GitHub: github.com/67WebHeads
- LinkedIn: linkedin.com/company/webheadsph
- Instagram: instagram.com/webheads.67
