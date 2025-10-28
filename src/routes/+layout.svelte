<script>
	import favicon from '$lib/assets/favicon.svg';
	import Divider from '$lib/components/divider.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />
{@render children?.()}

<Divider color="var(--main-light-black)" text="Something to go here" />
<Footer />
