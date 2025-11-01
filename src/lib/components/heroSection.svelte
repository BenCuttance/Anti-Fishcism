<script lang="ts">
	import design1 from '../images/FishAreHappyandHealthy.png';
	import design2 from '../images/fightingFish.jpg';
	import design3 from '../images/poofy.jpg';
	import { onMount } from 'svelte';

	const slideShowImages = [
		{ design: design1, caption: 'Design 1', link: '/' },
		{ design: design2, caption: 'Design 2', link: '/' },
		{ design: design3, caption: 'Design 3', link: '/' }
	];

	let slideIndex = 0;

	function nextSlide() {
		slideIndex = (slideIndex + 1) % slideShowImages.length;
	}

	function prevSlide() {
		slideIndex = (slideIndex - 1 + slideShowImages.length) % slideShowImages.length;
	}

	onMount(() => {
		const interval = setInterval(nextSlide, 4000);
		return () => clearInterval(interval);
	});
</script>

<section>
	<div class="slideshow-container">
		{#each slideShowImages as slide, i}
			<div class="mySlides fade" style="display: {i === slideIndex ? 'block' : 'none'}">
				<img src={slide.design} alt={`display ${slide.caption}`} />
				<a href={slide.link} class="text">{slide.caption}</a>
			</div>
		{/each}

		<button on:click={prevSlide} class="prev">❮</button>
		<button on:click={nextSlide} class="next">❯</button>
	</div>
</section>

<style>
	* {
		font-family: var(--font-main);
		box-sizing: border-box;
	}

	.text {
		position: absolute;

		bottom: 10%;
		left: 50%;
		transform: translateX(-50%);
		color: white;
		font-size: 1.5rem;
		font-weight: bold;
		background-color: black;
		text-decoration: none;
		padding: 0.5%;
		border-radius: 15px;
	}

	.text:hover {
		color: black;
		background-color: white;
	}

	section {
		height: 500px;
		display: flex;
		align-items: center;
		justify-content: center;

		background-color: rgba(0, 0, 0, 0.87);
		background-image: url('../images/fishBanner.png');
		background-repeat: repeat-x;
		background-size: 800px auto;
	}

	.slideshow-container {
		max-width: 1000px;
		position: relative;
		margin: auto;
	}

	.mySlides {
		position: relative;
		display: none;
		text-align: center;
		min-width: 400px;
	}

	.mySlides img {
		width: 100%;
		aspect-ratio: 2 / 1;
		height: auto;
		border-radius: 15px;
		object-fit: cover;
	}

	.mySlides.fade {
		display: block;
		animation: fade 1s;
	}

	@keyframes fade {
		from {
			opacity: 0.6;
		}
		to {
			opacity: 1;
		}
	}

	.prev,
	.next {
		cursor: pointer;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		padding: 8px 12px;
		color: white;
		font-weight: bold;
		font-size: 18px;
		background-color: rgba(0, 0, 0, 0.5);
		border: none;
		border-radius: 4px;
	}

	.prev:hover,
	.next:hover {
		background-color: rgba(0, 0, 0, 0.8);
	}

	.prev {
		left: 0;
	}
	.next {
		right: 0;
	}

	@media (max-width: 400px) {
		.mySlides {
			min-width: 0px;
		}
	}
</style>
