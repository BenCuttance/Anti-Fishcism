<script>
	import favicon from '$lib/assets/favicon.svg';
	import Divider from '$lib/components/divider.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Navbar from '$lib/components/navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<Navbar />

{@render children?.()}

<Divider color="var(--main-light-black)" text="Something to go here" />
<Footer />
