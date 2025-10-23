<script lang="ts">
	import { Facebook } from '@lucide/svelte';
	import { Instagram } from '@lucide/svelte';
	import { Twitter } from '@lucide/svelte';

	let facebookHovered = false;
	let instagramHovered = false;
    let twitterHovered = false;

	let links = {
		home: '/',
		catalog: '/',
		about: '/',
		contactUs: '/'
	};
</script>

<section>
	<div id="link-container">
		<h2>Quick Links</h2>

		<div id="links">
			<a href={links.home}>Home</a>
			<a href={links.catalog}>Catalog</a>
			<a href={links.about}>About</a>
			<a href={links.contactUs}>Contact Us</a>
		</div>
	</div>
	<div>
		<button
			onmouseenter={() => (facebookHovered = true)}
			onmouseleave={() => (facebookHovered = false)}
			onfocus={() => (facebookHovered = true)}
			onblur={() => (facebookHovered = false)}
			aria-label="Facebook link"
		>
			<Facebook color={facebookHovered ? 'red' : 'white'} size={50} />
		</button>

         <!-- TODO:   -->
		<button
			onmouseenter={() => (instagramHovered = true)}
			onmouseleave={() => (instagramHovered = false)}
			onfocus={() => (instagramHovered = true)}
			onblur={() => (instagramHovered = false)}
			aria-label="Instagram link"
		>
			<Instagram color={instagramHovered ? 'red' : 'white'} size={50} />
		</button>

		<button
			onmouseenter={() => (twitterHovered = true)}
			onmouseleave={() => (twitterHovered = false)}
			onfocus={() => (twitterHovered = true)}
			onblur={() => (twitterHovered = false)}
			aria-label="Twitter link"
		>
			<Twitter color={twitterHovered ? 'red' : 'white'} size={50} />
		</button>
	</div>
	<div>Brand Logo?</div>
</section>

<style>
	* {
		color: white;
		font-family: var(--font-main);
	}

	section {
		height: 300px;
		background-color: var(--main-light-black);
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		text-align: center;
		padding: 1rem;
		align-items: center;
		justify-items: center;
		color: white;
		font-family: var(--font-main);
	}

	#facebook-icon {
		width: 100px;
		height: 100px;
	}

	#link-container {
		display: flex;
		flex-direction: column;
		text-align: left;
		align-items: flex-start;
	}

	#links {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
	}

	a {
		text-decoration: none;
		transition: 0.2s;
		font-size: 20px;
	}

	a:hover {
		color: red;
		transform: translateX(5px);
	}

	button {
		background-color: transparent;
		border: none;
	}
</style>
