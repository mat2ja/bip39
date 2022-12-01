<script>
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import ScrollToTopButton from '$lib/components/ScrollToTopButton.svelte';

	let y = 0;
	let height = 0;

	// TODO: fix this being false while scrolling
	$: scrollToTopShown = y > height * 0.3;
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={height} />

<svelte:head>
	<title>BIP39 Wordlist</title>
	<style>
		@import url('https://fonts.cdnfonts.com/css/sf-mono?styles=36554,36555,36556');
	</style>
</svelte:head>

<div
	class="pt-[30vh] pb-32 px-8 max-w-6xl mx-auto space-y-32 relative flex flex-col min-h-screen font-mono"
>
	<main class="flex-1">
		<slot />
	</main>

	{#if scrollToTopShown}
		<ScrollToTopButton bind:y />
	{/if}

	<div class="mt-auto">
		<Footer />
	</div>
</div>
