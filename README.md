# Alejandra Almonacid Portfolio

My personal portfolio as a Product Designer and Design Engineer. I designed it in Figma and built it myself in React, TypeScript and Tailwind CSS.

I treated the site as a product rather than a single layout that shrinks to fit. The project cards and the About page have their own mobile designs and content. A phone shows a different component, with shorter copy and a different interaction pattern, instead of a compressed version of the desktop page. The [Responsive design](#responsive-design) section explains how this works in the code.

## Live site

**[alejandraalmonacid.com/](https://www.alejandraalmonacid.com/)**

<!-- Screenshots: add desktop and mobile captures side by side, e.g.
| Desktop | Mobile |
|---|---|
| ![Home on desktop](docs/screenshots/home-desktop.png) | ![Home on mobile](docs/screenshots/home-mobile.png) |
-->

## Tech stack

| Technology | What it's used for |
|---|---|
| [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org) | UI components. Content names (tags, tools) are typed, so a misspelled tag fails the build instead of rendering unstyled. |
| [Vite](https://vite.dev) | Dev server and production build. The `@/` alias maps to `src/`. |
| [Tailwind CSS v4](https://tailwindcss.com) | Styling. Configured entirely in CSS (`@theme`), with no `tailwind.config.js`. |
| [shadcn/ui](https://ui.shadcn.com) on [Base UI](https://base-ui.com) | Accessible primitives: `Button` and the mobile `Drawer`. |
| [React Router](https://reactrouter.com) | Client-side routing and active-link styling in the navbar. |
| [Lucide](https://lucide.dev) | Interface icons (arrows, clock, user, close). |
| [Inter Variable](https://fontsource.org/fonts/inter) | Typeface, self-hosted through Fontsource. |
| [Vercel Analytics](https://vercel.com/docs/analytics) | Page-view analytics. |
| ESLint, Prettier + `prettier-plugin-tailwindcss` | Linting, formatting and automatic sorting of Tailwind classes. |

## Project structure

```
web-portfolio/
├── index.html                  # HTML shell: page title, meta description, favicon
├── vercel.json                 # SPA rewrite so deep links like /about-me resolve on Vercel
├── vite.config.ts              # React + Tailwind plugins, "@" → src alias
├── components.json             # shadcn/ui configuration
├── public/
│   └── favicon.svg
└── src/
    ├── main.tsx                # Entry: ThemeProvider → BrowserRouter → App
    ├── App.tsx                 # Route table + Vercel Analytics
    ├── index.css               # Design tokens, light/dark themes, base styles
    │
    ├── pages/
    │   ├── HomePage.tsx        # Hero, project list, CTA cards
    │   ├── AboutMePage.tsx     # Bio, contact links, tech-stack grid
    │   ├── NotFoundPage.tsx    # Catch-all route
    │   └── projects/           # One page per case study
    │       ├── DevSecToolPage.tsx
    │       ├── BetterLifePage.tsx
    │       └── ItinotePage.tsx
    │
    ├── components/
    │   ├── Navbar.tsx          # Sticky header with active-route highlighting
    │   ├── Footer.tsx
    │   ├── ProjectCardDesktop.tsx   # Project presentation for ≥1280px
    │   ├── ProjectCardMobile.tsx    # Project presentation for <1280px
    │   ├── TechStackDrawer.tsx      # Bottom sheet listing a project's tools (mobile)
    │   ├── CardCTA.tsx         # Linked card used at the end of the home page
    │   ├── Tag.tsx             # Coloured project tag
    │   ├── ToolTile.tsx        # Tool icon + label, used on the About page
    │   ├── theme-provider.tsx  # Light / dark / system theme
    │   └── ui/                 # shadcn/ui primitives (button, drawer)
    │
    ├── data/                   # Content, kept separate from presentation
    │   ├── projects.ts         # Project content + the Project type
    │   ├── tags.ts             # Tag name → colour classes
    │   └── tools.ts            # Tool name → icon
    │
    ├── assets/
    │   ├── bg/                 # Project backgrounds (desktop and mobile) and app UI screens
    │   ├── tech-stack/         # Tool logos (SVG)
    │   ├── profile/            # Profile photo
    │   └── *.svg               # Social icons
    │
    └── lib/utils.ts            # cn() class-name helper
```

### Routes

| Path | Page |
|---|---|
| `/` | `HomePage` |
| `/about-me` | `AboutMePage` |
| `/projects/devsectool` | `DevSecToolPage` |
| `/projects/better-life` | `BetterLifePage` |
| `/projects/itinote` | `ItinotePage` |
| `*` | `NotFoundPage` |

## Component architecture

### Content is data, components are presentation

Project content lives in [`src/data/projects.ts`](src/data/projects.ts) as an array of typed `Project` objects. The home page maps over that array, so adding a project means adding one object, not new markup. Each project's `slug` builds its case-study URL (`/projects/${slug}`).

The same pattern applies to tags and tools:

- [`tags.ts`](src/data/tags.ts) maps each tag name to its colour classes. `TagName` is derived from that map, so `Project.tags` only accepts tags that have a defined style.
- [`tools.ts`](src/data/tools.ts) maps each tool name to its logo. `ToolName` is derived from that map and used by `ToolTile`, `TechStackDrawer` and the About page.

### Main components

| Component | Used in | Role |
|---|---|---|
| `Navbar` | Every page | Sticky header. Uses `NavLink`'s `isActive` to highlight the current route. |
| `Footer` | Every page | Contact email and social links. Stacks on mobile and becomes a row from `md`. |
| `ProjectCardDesktop` | Home (≥ `xl`) | Full-width banner: the project background, with a white info panel showing tags, summary, and labelled Timeline / Role / Tech stack rows. |
| `ProjectCardMobile` | Home (< `xl`) | Tall visual card with background art and the app's UI screens, then compact metadata and the summary. |
| `TechStackDrawer` | `ProjectCardMobile` | Bottom-sheet drawer (with swipe handle) showing the project's tools as logos, plus a link to the case study. |
| `CardCTA` | Home | Linked card with eyebrow, title, description and an arrow that shifts on hover (Tailwind `group-hover`). |
| `Tag` | Both project cards | Coloured label. Has a white underlay in dark contexts so the colours stay readable. |
| `ToolTile` | About | Tool logo and name, sized for each breakpoint. |

Every project page shares `Navbar` and `Footer`. There is no separate layout component; each page renders both directly.

### Paired desktop and mobile components

The project list has **two separate components** instead of one component restyled with breakpoints:

```tsx
// HomePage.tsx
<div className="hidden xl:block"><ProjectCardDesktop project={project} /></div>
<div className="xl:hidden"><ProjectCardMobile project={project} /></div>
```

The two cards don't share a structure, so a single component would need breakpoint overrides on almost every element. The desktop card is a two-column grid with a text panel. The mobile card is image-led, shows its metadata as icons, and moves the tech stack into a drawer. Keeping them separate keeps each one readable, and changing one never risks breaking the other.

The switch uses CSS (`hidden` / `xl:hidden`) rather than a JavaScript media-query hook. The correct card is visible on first paint with no layout flash, and resizing the window doesn't trigger re-renders.

## Responsive design

### Breakpoints in use

The project uses Tailwind's mobile-first breakpoints. Each one has a specific job:

| Breakpoint | Width | What changes |
|---|---|---|
| base | < 640px | Phone layout: stacked content, smaller type, mobile project cards, drawer for tech stack |
| `sm` | ≥ 640px | Navbar text size steps up |
| `md` | ≥ 768px | Larger headings; CTA cards and footer go from stacked to two columns / a row; mobile project screens are centred instead of bleeding off the edge |
| `lg` | ≥ 1024px | About page switches to its desktop layout |
| `xl` | ≥ 1280px | Project cards switch to the desktop design; page gutters change from fluid `5vw` to fixed `9rem` (`px-36`) |

### Content designed per screen size

The clearest sign that each screen size was designed separately is in the data model. A `Project` stores separate copy and assets for mobile:

| Desktop field | Mobile field | Example |
|---|---|---|
| `timeline` | `timelineMobile` | "2021 – 2025" → "2021–25" |
| `role` | `roleMobile` | "Founding Product Designer" → "Product Designer" |
| `tools` (text list) | `toolsMobile` (typed, shown as logos) | "Figma · Zeplin · Jira · Adobe" → six individual tool icons |
| `bgImage` | `bgImageMobile` + `uiImageMobile` | One wide banner → a portrait background plus a separate image of the app screens |

The mobile copy is written for the space and the way people read on a phone. It isn't truncated with CSS.

### Project cards

**Desktop (`ProjectCardDesktop`)**
- Full-bleed background image, capped at 1632px wide.
- A two-column grid (`1.8fr / 3fr`). The info panel sits in the narrower column and leaves the wider column to the artwork.
- Timeline, role and tech stack appear as labelled rows, with room for the full role title.

**Mobile (`ProjectCardMobile`)**
- A fixed-height (619px) visual area: title, a "Case study" button and tags on top, with the app's UI screens below.
- On phones, the screens are anchored to the right and allowed to overflow (`ml-auto`, `max-w-none`), so they bleed off the edge like a device mock-up. From `md` they're centred and contained.
- Timeline and role are compressed into icon + short label pairs (`Clock5`, `UserPen`).
- The tech stack moves into a **bottom-sheet drawer** (`TechStackDrawer`). On a phone this keeps the card short, and a swipeable sheet is a familiar mobile pattern. The drawer also repeats the case-study link at thumb height.
- **Per-card dark mode.** Projects with dark artwork set `darkBg: true`, which adds the `dark` class to that card only. The `dark` variant is defined as `&:is(.dark *)`, so the card's text, buttons and tags switch to their dark-theme tokens and stay readable on top of the image, whatever theme the rest of the page uses.

### About page

The About page changes structure at `lg`, not just its spacing.

| | Mobile (< `lg`) | Desktop (≥ `lg`) |
|---|---|---|
| Hero | Photo above the text, 128px | Photo beside the text, 200px |
| Contact links | Stacked list | Single inline row with `·` separators |
| Tech stack groups | **2 groups**: Design, Development | **3 groups**: Design, Front-end, Backend & Data |
| Tech stack grid | Uniform 4-column grid per group | Three side-by-side panels (`2fr / 3fr / 2fr`), each with its own column count |

The two layouts come from two separate configurations in [`AboutMePage.tsx`](src/pages/AboutMePage.tsx) (`skillGroups` and `skillGroupsMobile`). On mobile, Front-end and Backend & Data merge into one "Development" group. Three narrow panels don't fit a phone screen, and a single longer grid scrolls more comfortably.

### Larger screens

- Page content is capped at `max-w-[1920px]` and centred, so very wide monitors get margins instead of overlong text lines.
- Below `xl`, side gutters are proportional (`px-[5vw]`) so the spacing scales with the device. From `xl` they're fixed at `px-36` to keep a consistent column.
- Text blocks such as the hero heading are limited to `max-w-2xl` for comfortable line length at any width.

## Design system and styling

All styling is configured in [`src/index.css`](src/index.css) using Tailwind v4's CSS-first configuration. The tokens are organised in three layers, mirroring a Figma variables setup.

**1. Primitives (`@theme`)**
Raw values: a custom **bluegray** brand scale (`50`–`950`), white and black, a global letter-spacing token (`--tracking-default`) and an extra `3xl` breakpoint (1920px).

**2. Semantic tokens (`:root` and `.dark`)**
Each one names a purpose, not a colour, and points to a primitive. Comments in the CSS record the matching Figma variable:

```css
--foreground: var(--color-bluegray-950);   /* text/primary */
--brand:      var(--color-bluegray-500);   /* text/accent */
--card:       var(--color-bluegray-50);    /* surface/tertiary */
--border:     var(--color-bluegray-200);   /* border/border */
```

`.dark` reassigns the same semantic names to different primitives, so components never need to know which theme is active. Tokens that shadcn/ui requires but that don't exist in the Figma file are grouped and labelled separately.

**3. Tailwind utilities (`@theme inline`)**
Maps the semantic tokens to utility classes such as `text-brand`, `bg-card` and `border-border`.

### Typography
- **Inter Variable** for all text.
- A global letter spacing of `-0.02em` on `body`. Headings tighten further (`-0.03em` for card titles, `-0.04em` for page headings).
- Section labels ("Selected Work", tech-stack group titles) use wide-tracked uppercase (`tracking-[0.25em]`–`[0.3em]`) in the brand colour.

### Theming
[`theme-provider.tsx`](src/components/theme-provider.tsx) follows the operating system's light/dark setting by default and remembers a manual choice in `localStorage`. Pressing **D** toggles the theme. There's no visible theme switch in the UI yet.

### Tag colours
Each tag has its own colour pair, defined in [`tags.ts`](src/data/tags.ts) as a 15%-opacity background with a darker text colour from the same hue.

## Getting started

**Prerequisites:** Node.js `20.19+` or `22.12+` (required by Vite 8) and npm.

```bash
git clone https://github.com/ale-almonacid/web-portfolio.git
cd web-portfolio
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

| Script | What it does |
|---|---|
| `npm run dev` | Starts the Vite dev server with hot reload |
| `npm run build` | Type-checks the project (`tsc -b`), then builds to `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Runs ESLint |
| `npm run format` | Formats `.ts`/`.tsx` files with Prettier and sorts Tailwind classes |
| `npm run typecheck` | Runs `tsc --noEmit` |

## Environment variables

None. The project has no `.env` file and doesn't read `import.meta.env`. Vercel Analytics doesn't need a key; it's enabled in the Vercel project settings.

## Deployment

The site is hosted on **[Vercel](https://vercel.com)**, which detects the Vite setup and runs `npm run build`.

[`vercel.json`](vercel.json) rewrites every path to `index.html`:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

This is needed because routing happens in the browser. Without the rewrite, opening or refreshing a URL like `/about-me` would ask the server for a file that doesn't exist and return a 404.

To deploy a fork, import the repository in Vercel. No extra configuration is needed.

## Work in progress

- **Case-study pages:** the three routes under `/projects/` exist and are linked from both project cards, but currently show only the project title.
- **404 page:** `NotFoundPage` is a placeholder and doesn't use the site's navbar or styling yet.
- **Desktop project visuals:** the mobile card includes app UI screenshots (`uiImageMobile`). The desktop card shows only the background artwork for now.
- **Dark mode on desktop cards:** the desktop info panel uses a fixed `bg-white` rather than a theme token.
- **Theme switch:** dark mode works but can only be toggled with the keyboard shortcut.
- **`3xl` breakpoint:** defined in the tokens (1920px) for very large screens, but not used by any layout yet.
