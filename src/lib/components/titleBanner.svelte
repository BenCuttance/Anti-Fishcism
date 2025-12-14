<script lang="ts">
</script>

<section>
	<div class="loader">
		<h1>Anti-<br />Fishcism</h1>
	</div>
</section>

<style>
	section {
		background: var(--main-grey);
		font-family: arial;
	}
	.loader {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-bottom: 10vh;
		height: 50vh;
	}

	.loader h1 {
		margin: 0;
		padding: 0;
		text-transform: uppercase;
		font-size: clamp(4rem, 8vw, 10rem);
		color: rgb(255, 255, 255, 0.1);
		background-image: url(https://image.ibb.co/ciSeac/image.png);
		background-repeat: repeat-x;
		background-clip: text;
		-webkit-background-clip: text;
		animation: animate 15s linear infinite;
	}

	@keyframes animate {
		0% {
			background-position: left 0px top 80px;
		}
		40% {
			background-position: left 800px top -50px;
		}
		80% {
			background-position: left 1800px top -50px;
		}
		100% {
			background-position: left 2400px top 80px;
		}
	}
</style>
