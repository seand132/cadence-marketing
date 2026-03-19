import { NextResponse } from 'next/server'
import { getStripe, STRIPE_PRICE_ID_STARTER } from '@/lib/stripe'

export async function POST() {
  try {
    const stripe = getStripe()
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [{ price: STRIPE_PRICE_ID_STARTER, quantity: 1 }],
      subscription_data: { trial_period_days: 14 },
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/pricing`,
    })
    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Stripe checkout error:', error)
    const msg = error instanceof Error ? error.message : String(error)
    return NextResponse.json({ error: 'Failed to create checkout session', detail: msg }, { status: 500 })
  }
}
