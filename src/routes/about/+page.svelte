<script lang="ts">
	import { goto } from '$app/navigation';
	import { PUBLIC_ABOUT_PAGE_HIDDEN } from '$env/static/public';
	import { links } from '$lib/config/links';
	import fishFillerimage from '../../lib/images/poofy.jpg';

	if (PUBLIC_ABOUT_PAGE_HIDDEN === 'true') {
		goto('/');
	}

	const pageText = {
		definitionText:
			'A populist movement or regime that exalts reef (and often species) above the individual, associated with a centralised, autocratic government headed by a dictatorial leader, and characterized by severe economic and social regimentation and forcible suppression of opposition.'
	};
</script>

<section>
	<div id="about-banner">
		<div id="typewriter-font">
			<h1>Fishcism</h1>
			<h2><i>[ fish-iz-uhm ] - noun</i></h2>
			<br />
			<p id="definition-text">{pageText.definitionText}</p>
			<p id="offical-definition">
				Official definition of fascism by <a
					href={links.socialMediaLinks.merrianWebster}
					target="_blank">Merriam-Webster</a
				>
			</p>
		</div>
	</div>

	<div class="about-cards">
		<h1>Story So Far</h1>

		<div class="split-container">
			<div class="left-content">
				<!-- TODO: GET AN IMAGE - ADD ALT TEXT -->
				<img src={fishFillerimage} alt="" />
			</div>
			<div class="right-content">
				<p>
					Anti-Fishcism began as a creative outlet born from frustration with the state of the
					world.
				</p>
				<p>Division, conformity, and fear can quietly shape how we see one another.</p>
				<p>
					The idea was to wrap something meaningful in the disguise of something lighthearted: fish.
				</p>
				<p>
					What started as a playful concept grew into a brand that uses design to spark reflection.
					Each piece carries a quiet message beneath the surface
				</p>
				<p>
					A reminder to think critically, to question the current, and to swim against it when the
					tide feels wrong.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	#definition-text {
		font-size: clamp(15px, 1.5vw, 20px);
	}

	#about-banner {
		background-image: url('../../lib/images/fishBanner.png');
		background-repeat: repeat-x;
		background-size: 800px auto;
		background-color: black;
		width: 100%;
		height: 500px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#typewriter-font h1,
	#typewriter-font h2 {
		margin: 0;
	}

	#offical-definition {
		font-family: var(--font-main);
	}

	p > a {
		text-decoration: none;
		font-size: 20px;
	}

	p > a:hover {
		text-decoration: underline;
	}

	#typewriter-font {
		font-family: 'Courier New', Courier, monospace;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		background-color: white;
		padding: 2.5rem;
		border-radius: 15px;
		width: 50%;
	}

	.left-content {
		width: 50%;
		display: flex;
		align-items: flex-start;
		justify-content: center;
		align-items: center;
	}

	.left-content img {
		width: 75%;
		height: 75%;
		margin-left: 1.5rem;
	}

	.right-content {
		padding: 0 2rem 2rem 2rem;
		width: 50%;
		font-size: clamp(15px, 1.5vw, 18px);
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.right-content p {
		padding: 0.25rem;
	}

	.right-content p:nth-child(odd) {
		color: #daac75;
	}

	.split-container {
		display: flex;
		height: 100%;
	}

	.about-cards {
		font-family: var(--font-main);
		box-shadow: 0 0 20px 6px rgba(0, 0, 0, 0.2);
		background-color: black;
		width: 80%;
		margin: 2.5rem;
		border-radius: 15px;
		color: white;
	}

	h1 {
		text-align: center;
	}

	section {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media (max-width: 760px) {
		#typewriter-font {
			padding: unset;
			align-items: center;
			width: 95%;
		}

		#definition-text {
			font-size: 15px;
			width: 85%;
			text-align: justify;
		}

		#offical-definition {
			text-align: center;
			font-size: 12px;
		}

		p > a {
			font-size: 12px;
		}

		.about-cards {
			width: 95%;
			height: unset;
		}

		.split-container {
			flex-direction: column;
			align-items: center;
		}

		.right-content {
			width: 85%;
			margin: unset;
		}

		.left-content {
			width: 95%;
		}
	}
</style>
