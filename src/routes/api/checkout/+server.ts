import { SECRET_STRIPE_KEY } from '$env/static/private';
import { PUBLIC_FRONTEND_URL } from '$env/static/public';
import { json } from 'stream/consumers';
import Stripe from 'stripe';

const stripe = new Stripe(SECRET_STRIPE_KEY);

export async function POST({ request }) {
	try {
		const { priceId } = await request.json();
		const session = await stripe.checkout.sessions.create({
			mode: 'payment',
			line_items: [
				{
					price: priceId,
					quantity: 1
				}
			],
			//TODO: Keep return to success and failure? Or return to catalogue?
			success_url: `${PUBLIC_FRONTEND_URL}/success`,
			cancel_url: `${PUBLIC_FRONTEND_URL}/failure`
		});

		return new Response(JSON.stringify({ url: session.url }), {
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (err: unknown) {
		if (err instanceof Error) {
			return new Response(JSON.stringify({ error: err.message }), { status: 500 });
		} else {
            return new Response(JSON.stringify({ error: "unknown error" }))
        }
	}
}
