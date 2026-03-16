# cadence-marketing

Marketing site for [Cadence](https://cadencehq.co) — the operating system for new managers.

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Stripe** — Checkout + subscription webhooks
- **Resend** — transactional email (wired up post-launch)
- **Supabase** — user data (wired up post-launch)

## Local Setup

```bash
git clone https://github.com/seand132/cadence-marketing
cd cadence-marketing
npm install
cp .env.example .env.local
# Fill in your env vars
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Required Environment Variables

| Variable | Description |
|---|---|
| `STRIPE_SECRET_KEY` | Stripe secret key (sk_live_... or sk_test_...) |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret (whsec_...) |
| `STRIPE_PRICE_ID_STARTER` | Stripe price ID for the Starter plan |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key |
| `NEXT_PUBLIC_SITE_URL` | This site's public URL (e.g. https://cadencehq.co) |
| `NEXT_PUBLIC_APP_URL` | App URL (e.g. https://app.cadencehq.co) |
| `SUPABASE_URL` | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key |
| `RESEND_API_KEY` | Resend API key |
| `RESEND_FROM_EMAIL` | From address for transactional email |

## Deploy

Deployed on Vercel. Connect the GitHub repo, add env vars, and point `cadencehq.co` DNS.

## Phase 1 scope

Homepage, pricing page, Stripe Checkout, webhook handler, brand components (RhythmMark, ColorStripe), thank-you page, placeholder privacy/terms pages.

**Next:** Maya fills copy → Vercel deploy → DNS cutover.
