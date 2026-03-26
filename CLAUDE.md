# WebHeads Portfolio

Freelance web development team portfolio site for **WebHeads** (67WebHeads).

## Project Structure

Monorepo with a single `frontend/` directory — no backend.

```
frontend/           React SPA (Vite + React 19)
├── src/
│   ├── components/ Navbar, Hero, ConveyorBelt, About, Services, FAQS, Footer
│   ├── assets/     Images (webp/png) and SVGs
│   ├── App.jsx     Root component — single-page layout with all sections
│   ├── main.jsx    Entry point
│   └── index.css   Global styles, Tailwind/DaisyUI imports, keyframe animations
├── public/         Static assets (favicon, icons SVG)
└── index.html      SPA shell — loads Google Material Icons font
```

## Tech Stack

- **Framework:** React 19 + React Router DOM 7 (single route currently)
- **Build:** Vite 8
- **Styling:** Tailwind CSS 4 + DaisyUI 5 + MUI 7 + Emotion (CSS-in-JS)
- **Animation:** Framer Motion 12 (scroll-triggered entrance animations)
- **Icons:** react-icons (tech logos), @mui/icons-material (UI controls)
- **Font:** Plus Jakarta Sans (imported in index.css)

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
- **Layout:** Mobile-first responsive (Tailwind breakpoints: md, lg)
- **Animations:** Framer Motion for entrance/scroll, CSS keyframes for conveyor belt

## Conventions

- Components are `.jsx` files in `src/components/`
- Images use `.webp` format for performance (stored in `src/assets/`)
- Styling mixes Tailwind utility classes with inline MUI/Emotion where needed
- Scroll behavior uses `useRef` + `scrollIntoView` (defined in App.jsx, passed as props)
- Intersection Observer pattern used for scroll-triggered animations and navbar style changes

## Services Showcased

1. Business Website
2. Custom System Development
3. Business Process Automation
4. Data Analytics & Dashboards
