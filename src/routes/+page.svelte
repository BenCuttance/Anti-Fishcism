<script>
    import "../lib/global.css"
	import Header from "../lib/components/header.svelte";
	import HeroSection from "$lib/components/heroSection.svelte";
	import Divider from "$lib/components/divider.svelte";
	import Footer from "$lib/components/footer.svelte";

</script>

<section>
<Header/>
<HeroSection/>
<Divider color="var(--main-light-black)" text=""/>

<div>Main Here</div>
<Divider color="var(--main-light-black)" text="Something to go here"/>
<Footer/>

</section>

<style>
	section{
		display: grid;
		min-height: 100vh;
		grid-template-rows: auto auto 1fr auto;
	}
</style>




