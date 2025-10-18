<script lang="ts">
	let { color }: { color: string } = $props();
</script>

<section id="divider" style="background-color: {color}"></section>

<style>
	section {
		height: 100px;

	}
</style>
