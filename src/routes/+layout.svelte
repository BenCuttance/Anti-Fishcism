<script>
	import favicon from '$lib/assets/favicon.svg';
	import Divider from '$lib/components/divider.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
	import TitleBanner from '$lib/components/titleBanner.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<!-- <Header /> -->
<TitleBanner />
{@render children?.()}

<Divider color="var(--main-light-black)" text="Something to go here" />
<Footer />
