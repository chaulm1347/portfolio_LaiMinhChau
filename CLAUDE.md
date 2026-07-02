# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the dev server (Turbopack) at http://localhost:3000
- `npm run build` — production build (also runs `tsc` type-checking; use this to verify changes)
- `npm start` — serve the production build
- `npm run lint` — ESLint (flat config, `eslint-config-next`)

There is no test suite in this project.

## Architecture

Single-page portfolio built with **Next.js 16 (App Router) + React 19 + Tailwind CSS v4 + TypeScript**. The entire site is one route (`src/app/page.tsx`) composed of section components. There is no backend, database, or API — all content is static and bilingual (Vietnamese/English).

### Content vs. presentation split (most important to understand)

Content is centralized in two files, separate from the components that render it:

- **`src/lib/data.ts`** — the `heroData` object: locale-neutral structural data (name, contact, skill group arrays, and per-experience anchors like `id`/`company`/`period`/`role`/`color`). Components iterate over these arrays.
- **`src/lib/translations.ts`** — all translatable prose, keyed by locale (`Record<Locale, ...>`):
  - `translations` — UI strings (section titles, labels, summary).
  - `experienceTranslations` / `projectTranslations` — per-item prose (`comicTitle`, `mission`, `achievements`, `desc`, `feat`), **index-aligned** with the arrays in `heroData`. Adding/removing an experience or project means updating both files at the same index.
  - `leadershipData` / `educationData` — self-contained bilingual data for the Leadership and Education sections (these do NOT pull from `data.ts`).

When editing content, change the data files — not JSX. To add a UI string, add the field to the `Translations` interface and provide both `vi` and `en` values.

### Localization

`src/context/LanguageContext.tsx` provides a client-side `LanguageProvider` (wraps the app in `layout.tsx`). Components call `useLanguage()` to get `{ locale, t, toggleLanguage }`, where `t` is the current locale's `translations` object. Default locale is `vi`; toggled via `LanguageSwitcher`. State is in-memory only (no persistence/routing). Every content-rendering component is a Client Component (`"use client"`).

### Page composition

`page.tsx` renders sections in order, separated by `<SectionDivider />`: Hero → Skills → Experience → Projects → Leadership → Education → Contact footer. Components are imported via the barrel file `src/components/index.ts` — add new components there. Path alias `@/*` maps to `src/*`.

### Comic design system

The visual identity ("comic"/superhero panel style) lives in `src/app/globals.css` via CSS variables and utility classes, surfaced to Tailwind v4 through `@theme inline`:

- Colors: `comic-primary` (#ea580c sunset coral), `comic-secondary` (#fbbf24 amber accent), defined as CSS variables in `globals.css` and used as Tailwind classes like `bg-comic-primary`, `text-comic-secondary`. To re-theme, change the two variables; hardcoded accent shadows reference `var(--comic-secondary)` so they track automatically.
- Effects: `.comic-shadow` / `.comic-shadow-sm` (hard offset drop shadows), thick `border-4 border-black`.
- Fonts: `font-comic-header` (Bangers, headers) and `font-body` (Nunito), wired in `layout.tsx` via `next/font`.
- Keyframe animations `float` / `wiggle` / `shake` are referenced inline with Tailwind arbitrary values, e.g. `animate-[float_4s_ease-in-out_infinite]`.

Icons come from `lucide-react`. The skill groupings in `SkillsSection.tsx` are configured in a local `sectorConfig` array (with hardcoded `label_vi`/`label_en`), not in `translations.ts`.
