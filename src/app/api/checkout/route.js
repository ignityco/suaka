import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = (items) => {
  // Replace this calculation as needed
  return 1400; // Example amount in cents
};

export async function GET() {
  return NextResponse.json({ message: 'Hello, World!' });
}

export async function POST(request) {
  try {
    // Parse JSON data from the request
    const { items } = await request.json();

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: "usd",
      automatic_payment_methods: { enabled: true },
      // customer: '06aea9587c53494623dd3659f59783bf',
      metadata: {
        uid: '06aea9587c53494623dd3659f59783bf',
        name: 'Villa Uma: A Modern Luxury Escape w/Pool in Umalas',
        description: `Indulge in the luxury of Villa Uma, a stunning 4-bedroom retreat set in the serene surroundings of Umalas. This exquisite villa offers an ideal blend of contemporary design, comfort, and convenience, perfect for those looking to experience the best of Bali’s vibrant lifestyle.`,
        price: 1235100,
      }, //product metadata
    });

    // Return the client secret and additional data if necessary
    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      dpmCheckerLink: `https://dashboard.stripe.com/settings/payment_methods/review?transaction_id=${paymentIntent.id}`,
    });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: err.statusCode || 500 });
  }
}
