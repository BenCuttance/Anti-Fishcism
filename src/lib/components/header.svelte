<script lang="ts">
	import '../global.css';
	import CartIcon from '$lib/heroIcons/cartIcon.svelte';
	import MagnifyingGlassIcon from '$lib/heroIcons/magnifyingGlassIcon.svelte';
	import HamburgerMenu from '../heroIcons/hamburgerMenu.svelte';
</script>

<section>
	<div id="hamburger-container">
		<a href="/">
			<HamburgerMenu />
		</a>
	</div>

	<div id="logo-title">
		<h1>Anti-Fishcism image will go here</h1>
	</div>

	<div id="nav-links">
		<a href="/"><MagnifyingGlassIcon /></a>
		<a href="/"><CartIcon /></a>
	</div>
</section>

<style>
	section {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background-color: black;
		color: white;
		font-family: var(--font-main);
	}

	div {
		margin: 1.5%;
	}

	#nav-links {
		display: flex;
	}

	#nav-links a {
		width: 2.5rem;
		height: 2.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#hamburger-container a {
		width: 2.5rem;
		height: 2.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
