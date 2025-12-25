<script lang="ts">
	import { links } from '$lib/config/links';
	import { ShoppingCart, Menu, Search } from '@lucide/svelte';
	import { onMount } from 'svelte';

	let hamburgerMenuOpen = false;
	let svgSize: number = 50;
	let menuContainer: HTMLElement;
	let hamburgerButton: HTMLElement;

	function toggleMenu() {
		hamburgerMenuOpen = !hamburgerMenuOpen;
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
		document.addEventListener('click', handleClickOutside)
	})
</script>

<section>
	<div class="links">
		<button
			class="hamburger-button"
			class:blue={hamburgerMenuOpen}
			bind:this={hamburgerButton}
			onclick={toggleMenu}
		>
			<Menu size={svgSize} />
		</button>
		<div id="hamburger-menu" bind:this={menuContainer} class:hamburger-open={!hamburgerMenuOpen}>
			<div class="links-div">
				<a href={links.pageLinks.home} onclick={() => (hamburgerMenuOpen = false)}>Home</a>
				<a href={links.pageLinks.catalog} onclick={() => (hamburgerMenuOpen = false)}>Catalog</a>
				<a href={links.pageLinks.about} onclick={() => (hamburgerMenuOpen = false)}>About</a>
				<a href={links.pageLinks.contactUs} onclick={() => (hamburgerMenuOpen = false)}
					>Contact Us</a
				>
			</div>
		</div>
		<a href="/" class:blue={hamburgerMenuOpen}><Search size={svgSize} /></a>
		<a href="/" class:blue={hamburgerMenuOpen}><ShoppingCart size={svgSize} /></a>
	</div>
</section>

<style>
	section {
		background: var(--main-grey);
		font-family: arial;
	}

	.links {
		display: flex;
		align-items: center;
		gap: 15px;
		padding: 20px;
	}

	.hamburger-button {
		background-color: transparent;
		color: white;
		border: none;
		transition: 0.3s;
		cursor: pointer;
	}

	a {
		color: white;
		transition: 0.3s;
	}

	a:hover,
	.hamburger-button:hover {
		color: var(--main-light-blue);
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
		z-index: 1;
		box-shadow: -5px 0 15px rgba(0, 0, 0, 1.6);
	}

	.hamburger-open {
		transform: translateX(0);
		opacity: 1;
		transform: translateX(-100%);
		opacity: 0;
	}

	.blue {
		color: var(--main-dark-blue);
		z-index: 2;
	}

	.links-div {
		display: flex;
		flex-direction: column;
		text-align: left;
		align-items: flex-start;
		margin-top: 100px;
		padding-left: 20px;
	}

	.links-div a {
		color: black;
		font-size: 40px;
		padding: 2%;
	}

	.links-div a:hover {
		transform: translateX(15px);
		text-decoration-color: var(--main-light-blue);
	}
</style>
