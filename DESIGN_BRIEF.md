# Design Brief — Portfolio of Lại Minh Châu

> Purpose of this document: give a designer (or an AI design assistant) everything needed to **understand the project and redesign it** — the persona, goals, full content, information architecture, the current visual system, and the technical constraints. It is self-contained; you should not need to read the code to plan a redesign.

---

## 1. What this is

A **single-page personal portfolio website** for **Lại Minh Châu**, presented in a bold **comic / pop-art** visual style. It is fully **bilingual (Vietnamese default, English)** with an in-page language toggle. No backend — all content is static.

- **Live route:** one page (`/`).
- **Audience:** recruiters / hiring managers for **Product Owner / Product Management** roles (B2B / tech).
- **Goal of the site:** position Châu as a Product Owner by leading with a flagship self-initiated product, then backing it with results-focused work experience, leadership, and education.

## 2. The person (persona & tone)

- **Name:** Lại Minh Châu (female), 25, based in Ho Chi Minh City, ~4+ years experience.
- **Positioning:** transitioning into technology **Product Management**. Has actually done the PO work (delivery coordination of a B2B AI product, partner-ecosystem building) without always holding the title.
- **Signature line:** *"Không phải ai cũng có chức danh trước khi làm được việc — nhưng công việc luôn nói lên tất cả."* ("Not everyone earns a title before they earn the work — but the work always speaks for itself.")
- **Tone to convey:** confident, warm, friendly, characterful, pioneering. Professional but **not corporate-bland** — the comic style is intentional personality. Avoid heavy "combat/superhero weapon" metaphors (an earlier version had them; they were softened to product/delivery language).

## 3. Tech stack & where content lives

| Concern | Detail |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack), React 19 |
| Styling | Tailwind CSS v4 (config via `@theme inline` in `globals.css`) |
| Language | TypeScript (strict), path alias `@/* → src/*` |
| Icons | `lucide-react` |
| Fonts | `next/font`: **Bangers** (display/comic headers), **Nunito** (body) |
| Build/Run | `npm run dev`, `npm run build` (also type-checks), `npm start` |

**Content/presentation are separated** (important for redesign — change content without touching layout, and vice versa):

- `src/lib/data.ts` — locale-neutral structural data (`heroData`: name, contact, skill-group arrays, experience anchors, project meta).
- `src/lib/translations.ts` — all bilingual prose, keyed by locale: UI strings (`translations`), `experienceTranslations`, `projectTranslations` (index-aligned with `heroData`), and self-contained `leadershipData` / `educationData`.
- `src/context/LanguageContext.tsx` — `useLanguage()` → `{ locale, t, toggleLanguage }`; default `vi`. All content components are Client Components.

## 4. Information architecture (current page order)

1. **Hero** — name, role, tagline, contact, summary speech-bubble
2. **Core Competencies** (skills)
3. **Personal Project** ← *flagship, deliberately placed before experience*
4. **Work Experience** (results-only)
5. **Leadership & Community**
6. **Education**
7. **Contact footer** (CTA)

Sections are separated by a decorative zig-zag `SectionDivider`. Fixed floating comic stickers (`PageDecorations`) and a fixed `LanguageSwitcher` float above the page.

## 5. Full content inventory

### Hero
- **Name:** Lại Minh Châu
- **Role badge (A.K.A):** PRODUCT OWNER
- **Tagline:** "Phát triển Sản phẩm · Điều phối Delivery · Quản lý Đa chức năng" / "Product Development · Delivery Coordination · Cross-functional Management"
- **Contact:** (+84) 971 528 015 · chau.lm1347@gmail.com · TP. Hồ Chí Minh · 4+ năm kinh nghiệm
- **Summary:** short paragraph built around the signature line + headline achievements (coordinated full delivery lifecycle of a B2B AI product; built a partner ecosystem from zero contributing to 50% revenue growth; deliberately moving into tech product management).

### Core Competencies (5 groups)
1. **Product & Delivery** (primary/largest): Requirements analysis, Backlog & prioritization, Cross-functional coordination, Timeline & milestones, Stakeholder communication, User stories, UAT & rollout, Post-launch stabilization
2. **Partnership & GTM:** Vendor/partner coordination, Go-to-market, Partner-ecosystem operations, Channel & community development
3. **Operations & Process:** Process & SOP design, KPI/OKR tracking, Data-driven reporting
4. **Tools:** Notion, Excel/Google Sheets, CRM, Jira/Trello, Zalo OA, Figma
5. **Languages:** Vietnamese (native), English — VSTEP B2 (~785 TOEIC)
- **Technical fluency note:** works effectively with engineering on AI & cloud products (specs, requirement breakdown, progress review, escalation) without writing code.

### Personal Project (FLAGSHIP)
- **Title:** Game Giáo dục STEM (STEM Education Game)
- **Role:** Product Owner & Business Analyst · status **Ongoing**
- **Overview:** self-initiated product; acted as PO leading a small cross-functional team through the full lifecycle (idea → playable prototype); practiced the full PO role with no ready-made process or title.
- **Highlights (numbered):** (1) defined product vision & target segments → Vision Brief, GDD, tiered backlog; (2) scoped & protected the MVP with MoSCoW + vertical slicing; (3) ran playtests as structured feedback loops across sprints; (4) bridged product & engineering using AI tools through the lifecycle (docs, design-logic checks, Prototype Brief spec).
- **Tools & methods:** Vision Brief, GDD, MoSCoW, Vertical Slice, Playtest, AI Tools
- **Outcome:** a working web demo was deployed and playtested with real users (two-person, AI-assisted team).

### Work Experience (results-only — keep concise)
1. **Điều phối Dự án & Triển khai — Epacific Telecom** (2025 – 2/2026). *Context:* coordinated delivery of a B2B AI Voice Agent, PRD → go-live. *Results:* first enterprise POC end-to-end → signed contract & B2B GTM foundation; live with ~80% feature coverage; zero emergency escalations.
2. **Trưởng phòng Phát triển Đối tác — Mat Bao Corp** (11/2024 – 9/2025). *Context:* built & ran a B2B partner ecosystem from zero. *Results:* +50% YoY product revenue via partners; 25+ active partners (~80% success); 400+ Zalo community + 6-webinar series → Google Fund recognition; shipped partner showcase page on Matbao.net.
3. **Giám đốc Vận hành — IMARU Co., Ltd.** (mid 2022 – 2/2024). *Context:* built ops & project delivery from scratch for a Vietnam–Japan trade startup. *Results:* ~50% efficiency gain via SOPs; managed trade/supply-chain projects ~600M VND; training for 200+ students across 3 universities.

### Leadership & Community
- **Org:** Junior Chamber International (JCI) — non-profit, 4+ years; program coordination, stakeholder/partner management, national-scale community leadership.
- **Roles:** VP Partnership & Sponsorship (2025); VP Leadership Development Program (2024 — designed a year-long national program, led 30 core members, mentored 50+ founders); Co-founder Creative Young Entrepreneur / CYE (2022–2023 — 23 mentors, 16 partners, 39 events, 100+ SMEs, 350k+ USD in-kind, reached 1,000+ CEOs).
- **Award (highlight):** ★ Best Vice President Nationwide — JCI Vietnam 2024 (selected by the National President / PNJ Group board vice-chair).

### Education
- **B.Eng. Pharmaceutical Chemical Engineering**, Hanoi University of Science and Technology — Advanced Program with University of Adelaide, Australia. Graduated 2024. Classification: Good (Khá).

### Footer CTA
- Headline "READY TO COLLABORATE?", message inviting contact for the next product opportunity, "GET IN TOUCH" button (mailto), copyright line.

## 6. Current design system (what a redesign is iterating on)

**Color (CSS variables in `globals.css` — re-theme by editing two values):**
- `--comic-primary: #ea580c` (Sunset Coral / Tangerine) — fills Hero block, section banners, badges; carries white text.
- `--comic-secondary: #fbbf24` (Amber) — small accents only: highlight chips, dots, hard-shadow color, sticker fills (black text on it).
- Black (`#000000`) borders everywhere; white (`#ffffff`) surfaces; light-grey page background (`#f0f0f0`) with a subtle dot grid.
- *(History: started Starbucks-green + yellow; user requested a warm, friendly, pioneering scheme → current coral + amber. Palette is intentionally flexible.)*

**Typography:** Bangers (`font-comic-header`) for big uppercase headings/labels; Nunito (`font-body`) for readable body.

**Comic visual language (the personality — preserve the spirit, restyle freely):**
- Thick `border-4 border-black` on cards/blocks.
- Hard offset drop shadows (`.comic-shadow` = `6px 6px 0 black`, hover lifts to `10px 10px`); smaller `.comic-shadow-sm`.
- Rotated elements (badges/stickers slightly tilted), speech-bubble for the summary, halftone dot patterns, zig-zag dividers.
- Playful animations (keyframes in `globals.css`): `float`, `wiggle`, `shake`, plus pulse/spin/bounce used inline via Tailwind arbitrary values e.g. `animate-[float_4s_ease-in-out_infinite]`.
- Floating decorative stickers (`PageDecorations` + `ComicSticker`): PO-themed words "SHIP IT", "ROADMAP", "DELIVER", "GO!", "WIN!" with Rocket/Target/Handshake icons.
- Flagship project treatment: yellow/amber offset frame behind the card + a rotating "★ FLAGSHIP" sticker + a bold "PRODUCT OWNER" stamp.

## 7. Component map

| Component | Role |
|---|---|
| `app/page.tsx` | Section composition & order |
| `app/layout.tsx` | Fonts, metadata/SEO, `LanguageProvider` |
| `HeroSection` | Name, role badge, tagline, contact card, summary speech-bubble |
| `SkillsSection` | 5 competency sectors (config + labels live in the component) + technical-fluency status bar |
| `ProjectsSection` | Flagship project card(s): banner, role stamp, highlights, tools, outcome callout |
| `ExperienceTimeline` | Per-role cards: left info panel + animated `RoleVisual`, right "RESULTS DELIVERED" list |
| `LeadershipSection` | Org intro, 3 role cards, award highlight |
| `EducationSection` | Single degree card |
| `ContactFooter` | CTA card + mailto button |
| `SectionHeader` | Reusable icon-badge + title used by each section |
| `SectionDivider` | Zig-zag separator |
| `LanguageSwitcher` | Fixed VI/EN toggle |
| `PageDecorations` / `ComicSticker` | Floating decorative stickers |
| `SkillTag` | Small skill chip (utility) |

## 8. Redesign guidance

**Must preserve (functional requirements):**
- Single-page, fully responsive (mobile → desktop).
- Bilingual VI/EN with a visible toggle; all copy comes from `translations.ts`/`data.ts` (don't hardcode new copy in JSX).
- The 7 sections and their content; **Personal Project stays prominent and before Work Experience**; Work Experience stays results-focused/concise.
- PO positioning and the warm, friendly, characterful, pioneering tone.
- Accessibility: legible contrast (primary carries white text only at large/bold sizes today — keep this in mind if changing the primary), keyboard-focusable links.

**Free to change (design surface):**
- The entire visual language — it does **not** have to stay comic/pop-art. Color palette, typography, layout grid, card styling, shadows, dividers, decorations, animations, and section internal layouts are all open.
- Skill-group presentation, experience timeline layout, flagship project framing, hero composition.

**If keeping the comic direction:** re-theme via the two CSS variables; accent shadows already reference `var(--comic-secondary)` so they track automatically.

**If proposing a new direction:** keep the "personality-forward, content-confident" intent — the site should feel like a product person who ships, not a generic résumé template.
