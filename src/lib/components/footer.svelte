<script lang="ts">
	import { links } from '$lib/config/links';
	import { Facebook } from '@lucide/svelte';
	import { Instagram } from '@lucide/svelte';
	import { Twitter } from '@lucide/svelte';

</script>

<section>
	<div id="link-container">
		<h2>Quick Links</h2>

		<div id="links">
			<a href={links.pageLinks.home}>Home</a>
			<a href={links.pageLinks.catalog}>Catalog</a>
			<a href={links.pageLinks.about}>About</a>
			<a href={links.pageLinks.contactUs}>Contact Us</a>
		</div>
	</div>
	<div id="social-media-icons">
		<a href={links.socialMediaLinks.facebook}>
			<Facebook size={50} />
		</a>

		<a href={links.socialMediaLinks.instagram} aria-label="Instagram link">
			<Instagram size={50} />
		</a>

		<a href={links.socialMediaLinks.twitter} aria-label="Twitter link">
			<Twitter size={50} />
		</a>
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

	#social-media-icons {
		display: flex;
		flex-direction: row;
		gap: 30px;
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
		transition: 0.3s;
		font-size: 20px;
	}

	#social-media-icons a:hover {
		transform: translateY(-5px);
	}

	a:hover {
		color: red;
		transform: translateX(5px);
	}
</style>
