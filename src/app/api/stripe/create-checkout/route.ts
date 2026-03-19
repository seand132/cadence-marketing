import { NextResponse } from 'next/server'
import Stripe from 'stripe'

export const runtime = 'nodejs'

export async function POST() {
  const sk = process.env.STRIPE_SECRET_KEY
  const priceId = process.env.STRIPE_PRICE_ID_STARTER
  const appUrl = process.env.NEXT_PUBLIC_APP_URL
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  if (!sk) return NextResponse.json({ error: 'Missing STRIPE_SECRET_KEY' }, { status: 500 })
  if (!priceId) return NextResponse.json({ error: 'Missing STRIPE_PRICE_ID_STARTER' }, { status: 500 })

  try {
    const stripe = new Stripe(sk.trim(), { apiVersion: '2025-02-24.acacia' })
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [{ price: priceId.trim(), quantity: 1 }],
      subscription_data: { trial_period_days: 14 },
      success_url: `${appUrl}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/pricing`,
    })
    return NextResponse.json({ url: session.url })
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error)
    console.error('Stripe error:', msg)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
