<script lang="ts">
	import { goto } from "$app/navigation";
	import { PUBLIC_ABOUT_PAGE_HIDDEN } from "$env/static/public";

if (PUBLIC_ABOUT_PAGE_HIDDEN === 'true') {
	goto("/");
}

</script>

<section>
	<div id="about-banner">
		
	</div>
</section>

<style>
		#about-banner{
			/* background-image: url('../../lib/images/bluewave.jpg'); */
			background-size: cover;
			width: 100%;
			height: 500px;
		}

    	section {
		display: grid;
		min-height: 100vh;
		grid-template-rows: auto auto 1fr auto;
	}
</style>
