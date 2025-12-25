<script lang="ts">
	import '../../lib/global.css';
	import { goto } from '$app/navigation';
	import { Earth, Palette, Heart, Scale } from '@lucide/svelte';
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
	<!-- <div class="gradient-1"></div> -->

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

	<div class="icons-div-container">
		<div class="icons-left">
			<div class="icons-div">
				<Scale size="50" />
				Sustainably made
			</div>
			<div class="icons-div">
				<Palette size="50" />
				Art from local artists
			</div>
		</div>
		<div class="icons-right">
			<div class="icons-div">
				<Earth size="50" />
				Independantly Owned
			</div>
			<div class="icons-div">
				<Heart size="50" />
				People Over Profit
			</div>
		</div>
	</div>

	<div class="about-cards-container">
		<div id="about-title">
			<h1>Story So Far</h1>
		</div>

		<div class="about-cards">
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
						The idea was to wrap something meaningful in the disguise of something lighthearted:
						fish.
					</p>
					<p>
						What started as a playful concept grew into a brand that uses design to spark
						reflection. Each piece carries a quiet message beneath the surface
					</p>
					<p>
						A reminder to think critically, to question the current, and to swim against it when the
						tide feels wrong.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.icons-div-container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		background-color: var(--main-dark-blue);
		height: auto;
		padding-top: 1.5%;
		padding-bottom: 1.5%;
		color: white;
	}

	.icons-div {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 15px;
		font-family: var(--font-main);
		font-size: 25px;
		width: 350px;
		height: 100px;
		margin: 25px;
		padding: 15px;
		background-color: black;
		border: 2.5px solid white;
		border-radius: 15px;
	}

	#about-title {
		padding-top: 25px;
		padding-bottom: 25px;
		width: 60%;
		font-family: var(--font-main);
		font-size: 20px;
	}

	#about-title h1 {
		color: var(--main-dark-blue);
	}

	.about-cards-container {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
	}

	#definition-text {
		font-size: clamp(15px, 1.5vw, 20px);
	}

	#about-banner {
		background-repeat: repeat-x;
		background-size: 800px auto;
		width: 100%;
		height: 50vh;
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
		width: 60%;
		border: 2px solid black;
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
	}

	.right-content {
		padding: 2rem 2rem 2rem 2rem;
		width: 50%;
		font-size: clamp(15px, 1.5vw, 18px);
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-left: auto;
		margin-right: auto;
	}

	.right-content p {
		margin-left: auto;
		margin-right: auto;
		max-width: 55ch;
	}

	.right-content p {
		padding: 0.25rem;
	}

	.split-container {
		display: flex;
		height: 100%;
	}

	.about-cards {
		font-family: var(--font-main);
		border-radius: 15px;
		color: grey;
	}

	h1 {
		text-align: center;
		color: black;
	}

	section {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media (max-width: 850px){
		.icons-div-container{
			flex-direction: column;
		}

	}

	@media (max-width: 760px) {
		#typewriter-font {
			padding: unset;
			align-items: center;
			width: 90%;
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
			height: unset;
		}

		.split-container {
			flex-direction: column;
			align-items: center;
		}

		.right-content {
			width: 95%;
			margin: unset;
			padding: unset;
		}

		.left-content {
			width: 95%;
		}

		@media (max-width: 450px) {
			.icons-left, .icons-right{
				width: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
			}

			.icons-div{
				height: auto;
				width: 90%;
				margin: unset;
				margin-top: 15px;
				margin-bottom: 15px;
				padding: 5px;
			}

			#about-banner{
				height: auto;
				margin-top: 10px;
				margin-bottom: 10px;
			}
			
		}
	}
</style>
