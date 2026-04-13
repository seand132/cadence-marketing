# Cadence Marketing Site — Claude Code Guidelines

## Project Overview

This is the Cadence marketing site (cadencehq.co). It presents the product to prospective customers — managers and team leads at small-to-mid teams.

Brand promise: **"Management in rhythm."** Simple tools. Steady habits. Stronger teams.
Design philosophy: **mid-century modernism** — beautiful, functional, accessible. No complexity for its own sake.

**App repo:** `/Users/seandavis/Documents/Claude/Projects/Cadence/app`

---

## Brand & Design System

> Full brand reference: `/Users/seandavis/Downloads/cadence-brand-package/cadence-brand-guidelines.pdf`

### Color Palette

**Always use brand tokens — never raw Tailwind color classes** (no `text-red-600`, `bg-green-50`, `bg-amber-100`, `bg-blue-500`, etc.).

**Primary**
| Token / Hex | Use |
|---|---|
| `#C8782A` (Cadence Amber) | Primary actions, CTAs, brand moments — 10% of UI |
| `#D08835` | Hover state on amber elements |

**Secondary**
| Token / Hex | Use |
|---|---|
| `#3A7D7B` (Cadence Teal) | Accent, feature highlights |
| `#7B8F6A` (Cadence Sage) | Secondary accents, positive states |
| `#C2604A` (Cadence Terracotta) | Warnings, errors, high-urgency callouts |

**Neutrals**
| Token / Hex | Use |
|---|---|
| `#F5F0E8` (Cadence Cream) | Primary background — 60% of UI |
| `#2C2C2C` (Cadence Charcoal) | Primary text, UI elements — 30% of UI |
| `#EBE6DD` (Light Linen) | Secondary backgrounds, cards |
| `#9C968B` (Warm Stone) | Subdued text, captions |
| `#D0CAC0` | Borders, dividers |

**Color usage ratio: 60% Cream/White — 30% Charcoal text/UI — 10% Amber accents**

### Typography

- **Headings & UI**: DM Sans (geometric, friendly) — weights 400/500/600/700
- **Body text & long-form**: Source Sans 3 (warm humanist sans-serif) — weights 400/600
- Never use Inter, Roboto, Arial, or system-ui as primary fonts

**Type scale:**
| Level | Font | Size |
|---|---|---|
| H1 Hero | DM Sans Bold | 48-56px |
| H2 Section | DM Sans Semibold | 32-36px |
| H3 Feature | DM Sans Medium | 22-24px |
| Body | Source Sans 3 Regular | 16-18px |
| Caption | DM Sans Regular | 13-14px |

### Logo System

- **Logomark**: 4 rhythmic bars in Amber — never recolor, stretch, or rotate
- **Horizontal lockup**: primary (logomark + wordmark)
- **Reversed**: white on dark backgrounds
- **Minimum digital size**: 120px wide (horizontal)
- Assets: `/Users/seandavis/Downloads/cadence-brand-package/`

### UI Principles (Marketing)

- **Generous breathing room**: 80-120px between major sections
- **Rounded, not bubbly**: 8-12px radius for marketing cards/sections
- **Purposeful motion**: 300-500ms transitions on marketing hero elements
- **Hierarchy**: one primary CTA per section; visual weight guides attention
- **Warmth**: photography uses natural/warm lighting, real people, MCM-inspired environments
- **Rhythmic bars motif**: logomark bars used as section dividers, loading indicators

---

## Voice & Tone

Cadence speaks like a **thoughtful mentor with great taste**. Warm, clear, encouraging — without being cheerful or corporate.

| Principle | Do | Don't |
|---|---|---|
| Encouraging, not cheerful | "Your team deserves better than status updates in Slack." | "Amazing productivity platform!!!" |
| Clear, not blunt | Specific, benefit-focused, plain language | Corporate jargon, "leverage synergies" |
| Knowledgeable, not lecturing | Insights embedded naturally | Preachy, feature-dumping |
| Confident, not corporate | Direct, human | Buzzwords, hyperbole |

**Marketing copy tone:** Warmer and more narrative than the in-app voice. Tell a story about management rhythm, not a feature list. Speak to the manager's actual day — 1:1s, goals, keeping a team aligned without micromanaging.

**Copy patterns:**
- Hero: "Management in rhythm. For managers who want to lead without the overhead."
- Feature intro: "Your team has a rhythm. Cadence helps you keep it."
- Social proof: real outcomes, not vague superlatives
- CTA: "Start free" / "See how it works" — not "Sign up now!" or "Get started today!"
- Pricing: matter-of-fact, not salesy

**What to avoid:**
- Exclamation points (more than 1 per page, max)
- Superlatives without evidence ("the best", "most powerful")
- Passive voice
- Jargon: "synergy", "leverage", "unlock", "game-changing", "disruptive"
- Cheerful filler: "Exciting!", "We're thrilled to announce"

---

## Competitive Positioning

- More sophisticated than spreadsheets
- More approachable than enterprise PM (Asana, Jira, Monday)
- More focused than general-purpose productivity tools
- More human than surveillance-oriented management platforms

Target user: new and small-team managers who want to do right by their team. Not HR. Not executives. The person who has 3-8 direct reports and is figuring out the craft of management.

---

## Architecture

- **Framework**: Next.js App Router (`src/app/`)
- **Content**: MDX or CMS in `content/` directory
- **Components**: `src/components/`
- **Lib**: `src/lib/`

## Code Rules

- Use brand hex values or CSS variables everywhere — no raw Tailwind palette colors
- Write all copy in Cadence voice — warm, clear, mentor-like
- One primary CTA per section
- Never use `bg-red-*`, `text-blue-*`, `bg-green-*`, etc.
