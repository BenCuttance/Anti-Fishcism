<script>
	import '../lib/global.css';
	import HeroSection from '$lib/components/heroSection.svelte';
	import Divider from '$lib/components/divider.svelte';
</script>

<section>
	<HeroSection />
	<Divider color="var(--main-light-black)" text="" />

	<div>Main Here</div>

</section>

<style>
	section {
		display: grid;
		min-height: 100vh;
		grid-template-rows: auto auto 1fr auto;
	}
</style>
