<script>
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import ScrollToTopButton from '$lib/components/ScrollToTopButton.svelte';
	import { fade } from 'svelte/transition';

	let y = 0;
	let height = 0;

	$: scrollToTopShown = y > height * 0.3;
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={height} />

<svelte:head>
	<title>bip39</title>
	<style>
		@import url('https://fonts.cdnfonts.com/css/sf-mono?styles=36554,36555,36556');
	</style>
</svelte:head>

<div class="relative mx-auto flex min-h-screen max-w-6xl flex-col px-8 pb-12 font-mono sm:pb-24">
	<Nav />

	<div class="flex flex-1 flex-col space-y-12 pt-[20vh] sm:space-y-24">
		<main class="flex h-full flex-1 flex-col">
			<slot />
		</main>

		{#if scrollToTopShown}
			<div in:fade={{ duration: 100 }} out:fade={{ duration: 100 }}>
				<ScrollToTopButton />
			</div>
		{/if}

		<div class="mt-auto">
			<Footer />
		</div>
	</div>
</div>
