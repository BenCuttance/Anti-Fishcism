<script lang="ts">
	import { loadStripe } from '@stripe/stripe-js';
	import { PUBLIC_STRIPE_KEY } from '$env/static/public';
	import '../lib/global.css';
	import HeroSection from '$lib/components/heroSection.svelte';
	import Divider from '$lib/components/divider.svelte';

	const products = {
		herring: 'price_1STgTu59TjmEpGUDRKYeUx9t',
		test2: 'price_1STiz859TjmEpGUDE0jmDndB'
	};

	async function onclick(priceId: string) {
		const response = await fetch('/api/checkout', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				priceId,
				mode: 'payment'
			})
		});

		const { url } = await response.json();

		console.log(url)

		if (url) {
			window.location.href = url;
		} else {
			console.error('No checkout URL returned.');
		}
	}
</script>

<section>
	<HeroSection />
	<Divider color="var(--main-light-black)" text="" />

	<div>
		<h3>Main Here</h3>

		<button onclick={() => onclick(products.herring)}>Buy Red Herring T-Shirt</button>
		<button onclick={() => onclick(products.test2)}>Test 2</button>
	</div>
</section>

<style>
	section {
		display: grid;
		min-height: 100vh;
		grid-template-rows: auto auto 1fr auto;
	}

	div {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
</style>
