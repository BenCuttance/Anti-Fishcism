<script lang="ts">
	import { onMount } from 'svelte';
	import { links } from '$lib/config/links';
	import '../global.css';
	import { ShoppingCart, Menu, Search } from '@lucide/svelte';

	let hamburgerMenuOpen = false;
	let width;

	let mobileDisplay;
	let svgSize: number;

	let menuContainer: HTMLElement;
	let hamburgerButton: HTMLElement;

	function toggleMenu() {
		hamburgerMenuOpen = !hamburgerMenuOpen;
		console.log(hamburgerMenuOpen);
	}

	function handleClickOutside(event: MouseEvent) {
		if (
			hamburgerMenuOpen &&
			!menuContainer.contains(event.target as Node) &&
			!hamburgerButton.contains(event.target as Node)
		) {
			hamburgerMenuOpen = false;
		}
	}

	onMount(() => {
		width = window.innerWidth;

		const updateWidth = () => {
			width = window.innerWidth;
			mobileDisplay = width < 450;
			svgSize = mobileDisplay ? 25 : 50;
			console.log(width);
		};

		updateWidth();

		window.addEventListener('resize', updateWidth);
		document.addEventListener('click', handleClickOutside);
	});
</script>

<section>
	<div id="hamburger-container">
		<button id="hamburger-button" bind:this={hamburgerButton} onclick={toggleMenu}>
			<Menu size={svgSize} />
		</button>
		<div id="hamburger-menu" bind:this={menuContainer} class:hamburger-open={!hamburgerMenuOpen}>
			<div id="inner-hamburger-button-container">
				<button id="hamburger-button-black" onclick={toggleMenu}>
					<Menu size={svgSize} />
				</button>
			</div>

			<div class="links-div">
				<a href={links.pageLinks.home} onclick={() => (hamburgerMenuOpen = false)}>Home</a>
				<a href={links.pageLinks.catalog} onclick={() => (hamburgerMenuOpen = false)}>Catalog</a>
				<a href={links.pageLinks.about} onclick={() => (hamburgerMenuOpen = false)}>About</a>
				<a href={links.pageLinks.contactUs} onclick={() => (hamburgerMenuOpen = false)}
					>Contact Us</a
				>
			</div>
		</div>
	</div>

	<div id="logo-title">
		<h1>Anti-Fishcism image will go here</h1>
	</div>

	<div id="nav-links">
		<a href="/"><Search size={svgSize} /></a>
		<a href="/"><ShoppingCart size={svgSize} /></a>
	</div>
</section>

<style>
	section {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background-color: var(--main-light-black);
		color: white;
		font-family: var(--font-main);
	}

	#nav-links {
		display: flex;
		gap: 20px;
		margin: 1.5%;
	}

	a {
		color: white;
		transition: 0.3s;
	}

	a:hover {
		color: red;
		transform: translateY(-5px);
	}

	.links-div {
		display: flex;
		flex-direction: column;
		text-align: left;
		align-items: flex-start;
		margin: 2.5rem;
	}

	.links-div a {
		color: black;
		font-size: 40px;
		padding: 2%;
	}

	.links-div a:hover {
		transform: translateX(15px);
	}

	#hamburger-container {
		position: relative;
	}

	#hamburger-menu {
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: 450px;
		background-color: white;
		transition:
			transform 0.5s ease,
			opacity 0.5s ease;
		z-index: 999;
		box-shadow: -5px 0 15px rgba(0, 0, 0, 1.6);
	}

	.hamburger-open {
		transform: translateX(0);
		opacity: 1;
		transform: translateX(-100%);
		opacity: 0;
	}

	#hamburger-button {
		background-color: transparent;
		color: white;
		border: none;
		transition: 0.3s;
	}

	#hamburger-button-black {
		background-color: transparent;
		color: black;
		border: none;
		transition: 0.3s;
	}

	#hamburger-button-black:hover {
		cursor: pointer;
		transform: translateX(15px);
	}

	#hamburger-button:hover {
		color: red;
		cursor: pointer;
		transform: translateY(-5px);
	}

	#inner-hamburger-button-container {
		text-align: left;
		align-items: flex-start;
		margin: 2.5rem;
	}
</style>
