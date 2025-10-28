<script lang="ts">
	import { goto } from "$app/navigation";
	import { PUBLIC_ABOUT_PAGE_HIDDEN } from "$env/static/public";

if (PUBLIC_ABOUT_PAGE_HIDDEN === 'true') {
	goto("/");
}

</script>

<section>
	<h1>About page here</h1>
</section>

<style>
	h1 {
		color: black;
	}

    	section {
		display: grid;
		min-height: 100vh;
		grid-template-rows: auto auto 1fr auto;
	}
</style>
