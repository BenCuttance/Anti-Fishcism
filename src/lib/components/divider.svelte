<script lang="ts">
	let { color, text  }: { color: string, text: string } = $props();
</script>

<section id="divider" style="background-color: {color}"><h2>{text}</h2></section>

<style>
	section {
		height: 100px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	h2{
		font-family: var(--font-main);
		color: white;

	}
</style>
