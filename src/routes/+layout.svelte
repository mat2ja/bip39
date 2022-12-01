<script>
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';

	let y = 0;
	let height = 0;

	const scrollToTop = () => {
		y = 0;
	};

	$: scrollToTopShown = y > height * 0.3;
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={height} />

<div class="pt-[30vh] pb-32 px-8 max-w-6xl mx-auto space-y-32 font-mono relative">
	<main>
		<slot />
	</main>

	<Footer />

	{#if scrollToTopShown}
		<div class="fixed bottom-8 right-8">
			<button
				on:click={scrollToTop}
				class="p-2 bg-orange-400/20 hover:bg-orange-400/25 text-red-500 rounded-full focus:outline-none ring-orange-500 shadow focus-visible:ring-2 active:scale-95 transition"
			>
				<svg width="32" height="32" viewBox="0 0 24 24"
					><path
						fill="none"
						class="stroke-orange-500"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="m6 15l6-6l6 6"
					/></svg
				>
			</button>
		</div>
	{/if}
</div>
