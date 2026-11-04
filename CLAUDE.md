# CLAUDE.md

Personal portfolio for Juan Hincapie (Full Stack Software Engineer). Nuxt 4 + Tailwind CSS v4, dark theme with a lavender accent, deployed on Vercel.

## Working with the owner

- **Plan before building, and ask about design choices.** For anything visual or multi-part, propose a plan and ask with concrete options (ASCII previews work well), with your recommendation marked. Don't pick a visual direction silently.
- **Keep it calm and simple.** The owner removed glows, vibrant gradients and animated backgrounds (DarkVeil, Beams, Dot Pattern were all tried and reverted). Prefer subtle fades, no resize-on-hover, no glow effects.
- **Commit only when the owner says "commit".** One commit per approved batch, conventional style (`feat(scope): …`, `refactor: …`, `chore: …`). Don't push, merge or open PRs without asking. Ongoing work lives on `refactor/hero`.
- **The owner edits files by hand between turns.** Treat those edits as intentional. If one breaks something (type error, class that generates no CSS), say so and suggest a fix. Don't revert it.
- **Verify before reporting done** (see Commands). Say what you could not check, e.g. how an animation looks.

## Commands

Package manager is **Bun only**. Never run `npm install` (it recreates `package-lock.json`).

```bash
bun install
bun dev                      # dev server
bun run build                # production build (must pass)

# Type check (expect exactly 5 errors, all in VueBits/TextAnimations/TextType.vue; ignore those)
npx nuxt prepare
npx -y -p vue-tsc@3 vue-tsc --noEmit -p .nuxt/tsconfig.app.json

# Check server-rendered HTML after a build
PORT=3123 node .output/server/index.mjs   # then curl http://localhost:3123/ and stop the server
```

Windows + Git Bash: "LF will be replaced by CRLF" warnings are harmless. Files may have CRLF endings; in regexes use `[ \t]` instead of `\s` for indentation so you don't swallow line breaks.

## Structure

```
app/
├── data/          Content (edit text here, not in components)
│   ├── profile.ts       name, roles (typing effect), tagline, careerStart, portrait, socials, cvUrl
│   ├── experience.ts    companies → roles, newest first; endDate 'Present' = current role
│   ├── skills.ts        frontend/backend/devops/other; each skill has logo + label + color
│   └── navigation.ts    navbar links
├── types/         Types for the data (explicit `import type`)
├── utils/         Auto-imported plain functions (getCurrentRole, getProfileStats, getRoleEntries, getSkill)
├── composables/   Auto-imported Vue composables (useWindowScrolled, useMediaQuery, useScrollLock)
├── components/
│   ├── Hero/        Hero.vue reads data; HeroStatus, HeroHeading, HeroActions, HeroPortrait take props
│   ├── Home/        Home page sections (HomeExperience, HomeExperienceRow)
│   ├── Navbar/      Navbar + Links, Toggle, MobileMenu, CvButton
│   ├── About/       About page (Experience timeline, Skills grid)
│   ├── Social/      SocialLinks
│   ├── UIKit/       Design system: Button, Badge, BrandIcon, TechChip, ScrollHint, Slide
│   └── VueBits/     Third-party (TextType typing effect)
├── pages/         index (Hero + Experience), about, projects (empty), contact (empty)
└── assets/css/main.css   Theme tokens, keyframes, custom utilities
```

### Conventions

- **Small files, one job each.** The section component (e.g. `Hero.vue`, `HomeExperience.vue`) reads from `data/`/`utils/`; its children only take props.
- **Only `.vue` files are components** (`components.extensions: ['.vue']` in `nuxt.config.ts`), so `types.ts`, `index.ts` and data files can live next to components.
- **Feature components are auto-imported** by folder + file name with duplicates removed: `components/Hero/HeroStatus.vue` → `<HeroStatus>`. Name files with their folder prefix.
- **UIKit components are imported explicitly** through their barrel: `import { Button } from '~/components/UIKit/Button'`. Each UIKit folder has `Component.vue`, `types.ts` (props) and `index.ts`.
- **Use `~/` imports**, `<script setup lang="ts">`, and typed `defineProps<…>()`.
- Don't spread objects with extra keys onto components (`v-bind="getSkill(x)"`). Undeclared keys fall through as HTML attributes. Pass props explicitly.
- Content that must render on the server (SEO) must not hide behind `v-if="mounted"`. Use CSS animations for entrances.

## Design system

Tokens live in `@theme` in `app/assets/css/main.css`. Use them, never hard-coded hex values.

| Token | Class | Use |
|---|---|---|
| `--color-accent` `#c8abff` | `bg-accent`, `text-accent` | Brand lavender: primary button, active nav link, company name in HeroStatus |
| `--color-accent-hover` | `hover:bg-accent-hover` | Accent hover |
| `--color-on-accent` | `text-on-accent` | Text on accent backgrounds |
| `--color-muted` | `text-muted` | Secondary text |
| `--font-sans` (Lato) | default | Body |
| `--font-mono` (JetBrains Mono) | `font-mono` | Technical bits: tech chips, terminal status, hero buttons, CV button. The owner asks for it by name. |

Page background is `bg-neutral-950`; raised panels use `bg-neutral-900` (see `Slide`). Borders are `border-white/10`–`/20`.

### Custom utilities (main.css)

- `motion-safe:animate-fade-up`: entrance fade (0.5s, 8px). Add `animation-delay-150`, `-200`, … to stagger.
- `motion-safe:reveal-on-scroll`: fades in as the element enters the viewport (pure CSS; unsupported browsers just show it).
- `full-bleed`: full viewport width from inside the `max-w-7xl` layout. `app.vue` has `overflow-x-clip` for this.
- `animate-blink` (terminal cursor), `animate-scroll-dot` (scroll hint).

Always prefix animations with `motion-safe:`.

### UIKit

- **Button**: `size` sm | md | lg (lg = 48px, lines up with social icons), `variant` default | outline | accent | ghost, `icon` (Lucide component, after the label), `to` (renders `NuxtLink`). For static files pass `external target="_blank"`. Opt-in arrow nudge: `class="hover:[&_svg]:translate-x-0.5"`.
- **TechChip**: `label` + `color`; mono, rounded-xl, color tints border/background only. Colors come from `skills.ts` via `getSkill(label)`; unknown labels render neutral.
- **Slide**: full-width panel with rounded top corners to separate a section from the one above.
- **ScrollHint**: mouse icon linking to an anchor; hides after scrolling; shown only on `pointer-fine` devices.
- **BrandIcon**: GitHub/LinkedIn/Instagram SVG paths, colored by `currentColor`.

## Adding content

- **Skill**: add to `data/skills.ts` with `logo`, `label`, `color`. Logos are from the [skill-icons](https://github.com/tandpfun/skill-icons) set (256×256 tile, rounded corners), saved to `public/About/Skills/<Category>/<name>.svg`. Check downloaded SVGs for `<script>`, `on*=` handlers and external links before copying them in. Colors are brand-inspired but light enough to read on `neutral-950` (e.g. Django uses blue `#60A5FA` by request).
- **Role**: add to `data/experience.ts` under its company, newest first. `technologies` labels should match `skills.ts` labels to get a color. `endDate: 'Present'` makes it the HeroStatus role.
- **Nav link**: `data/navigation.ts`.

## Gotchas

- **Tailwind v4 is configured in CSS.** `tailwind.config.ts` is a stale v3 leftover and is ignored; plugins would need `@plugin` in `main.css`. `scrollbar-hide` on `pages/about.vue` currently does nothing.
- **Radius scale stops at `rounded-4xl`.** `rounded-6xl` etc. generate no CSS unless a `--radius-*` token is added.
- **The `animation` shorthand resets `animation-delay`**, and variant utilities are emitted later in the CSS. That's why `--animate-*` tokens are in `@theme inline` and read `var(--animation-delay)`.
- **Two utilities for the same property on one element** (e.g. `text-muted` + `text-white`) resolve by CSS order, not class order. For states use variants: `aria-[current=page]:`, `not-aria-[current=page]:hover:`.
- **NuxtLink sets `aria-current="page"`** on the exact active route; the navbar styles the active link with that.
- **Lenis smooth scrolling** (`lenis/nuxt`, `<VueLenis root>` in `app.vue`): to lock scrolling use `useScrollLock(ref)`, which also calls `lenis.stop()`. Anchor links respect `scroll-margin` (`scroll-mt-*`) for the fixed navbar.
- **Vite pre-bundling:** new runtime deps that trigger "Vite discovered new dependencies" go in `vite.optimizeDeps.include` in `nuxt.config.ts`.
- **SSR-safe IDs:** use `useId()`. Browser-only APIs go in `onMounted`; client-only widgets in `<ClientOnly>` with a `#fallback` (see `HeroHeading` + `TextType`).
- **Porting shadcn-style registry components** (pasted Vue/React code): rewrite as an SFC in `UIKit/`, put its CSS in its own file imported by `main.css`, and drop `cn`, `@ark-ui/vue` (types only) and `lucide-vue-next` (the project uses `@lucide/vue`). Map shadcn variables: `--primary` → `--color-accent`, `--foreground` → white, `--muted-foreground` → `neutral-400`. The registry needs a login; ask the owner to paste the CSS part if it's missing.

## Known open items

- `public/Files/cv.pdf` doesn't exist yet, so the "View CV" link 404s (`cvUrl` in `data/profile.ts`).
- `pages/projects.vue` and `pages/contact.vue` are empty.
- `HeroStats.vue` and `stats` in `Hero.vue` are unused (stats row was removed); `ScrollHint`'s `label` prop is unused.
- `README.md` is the Nuxt starter text.
