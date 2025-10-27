<script lang="ts">
	import '../global.css';
	import { Menu } from '@lucide/svelte';
	import { Search } from '@lucide/svelte';
	import { ShoppingCart } from '@lucide/svelte';

	let hamburgerMenuOpen = false;
</script>

<section>
	<div id="hamburger-menu" style="display: {hamburgerMenuOpen ? 'none' : 'block'};">menu here</div>
	<div id="hamburger-container">
		<button
			id="hamburger-button"
			onclick={() => {
				hamburgerMenuOpen = hamburgerMenuOpen ? false : true;
				console.log(hamburgerMenuOpen);
			}}
		>
			<Menu size={50} />
		</button>
	</div>

	<div id="logo-title">
		<h1>Anti-Fishcism image will go here</h1>
	</div>

	<div id="nav-links">
		<a href="/"><Search size={50} /></a>
		<a href="/"><ShoppingCart size={50} /></a>
	</div>
</section>

<style>
	section {
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background-color: var(--main-light-black);
		color: white;
		font-family: var(--font-main);
	}

	div {
		margin: 1.5%;
	}

	#nav-links {
		display: flex;
		gap: 20px;
	}

	a {
		color: white;
		transition: 0.3s;
	}

	a:hover {
		color: red;
		transform: translateY(-5px);
	}

	#hamburger-container {
		position: relative;
	}

	#hamburger-menu {
		position: absolute;
		background-color: red;
		height: 100vh;
		width: 300px;
	}

	#hamburger-button {
		background-color: transparent;
		color: white;
		border: none;
		transition: 0.3s;
	}

	#hamburger-button:hover {
		color: red;
		cursor: pointer;
		transform: translateY(-5px);
	}
</style>
