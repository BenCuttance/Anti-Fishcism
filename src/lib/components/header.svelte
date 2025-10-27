<script lang="ts">
	import '../global.css';
	import { ShoppingCart, Menu, Search } from '@lucide/svelte';

	let hamburgerMenuOpen = false;
</script>

<section>
	<div id="hamburger-container">
		<button
			id="hamburger-button"
			onclick={() => {
				hamburgerMenuOpen = !hamburgerMenuOpen;
				console.log(hamburgerMenuOpen);
			}}
		>
			<Menu size={50} />
		</button>
		<div id="hamburger-menu" class:hamburger-open={hamburgerMenuOpen}>
			<div id="inner-hamburger-button-container">
				<button
					id="hamburger-button-black"
					onclick={() => {
						hamburgerMenuOpen = !hamburgerMenuOpen;
						console.log(hamburgerMenuOpen);
					}}
				>
					<Menu size={50} />
				</button>
			</div>
		</div>
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

	#hamburger-container {
		position: relative;
	}

	#hamburger-menu {
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: 300px;
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
		transform: translateY(-5px);
	}

	#hamburger-button:hover {
		color: red;
		cursor: pointer;
		transform: translateY(-5px);
	}

	#inner-hamburger-button-container {
		display: flex;
		width: 100%;
		justify-content: center;
		margin-top: 2.5%;
	}
</style>
