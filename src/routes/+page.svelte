<script lang="ts">
	import '../lib/global.css';
	import { stripeCheckout } from '$lib/stripe/checkout';
	import TitleBanner from '$lib/components/titleBanner.svelte';

	const products = {
		herring: 'price_1STgTu59TjmEpGUDRKYeUx9t',
		test2: 'price_1STiz859TjmEpGUDE0jmDndB'
	};
</script>

<section>
	<TitleBanner />
	<div>
		<h3>Main Here</h3>

		<button onclick={() => stripeCheckout(products.herring)}>Buy Red Herring T-Shirt</button>
		<button onclick={() => stripeCheckout(products.test2)}>Test 2</button>
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
