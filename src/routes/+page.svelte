<script lang="ts">
	import Word from '$lib/components/Word.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { wordlist } = data;

	const isFirstExampleOfLetter = (word: string, index: number) => {
		if (index === 0) return true;
		const firstLetter = (word: string) => word.at(0);
		return firstLetter(word) !== firstLetter(wordlist[index - 1]);
	};
</script>

<svelte:head>
	<title>BIP39 Wordlist</title>
	<style>
		@import url('https://fonts.cdnfonts.com/css/sf-mono?styles=36554,36555');
	</style>
</svelte:head>

<header>
	<h1 class="text-2xl">BIP39 Wordlist</h1>
	<a
		href="https://halborn.com/what-is-a-bip39/"
		class="inline-block -ml-1 px-1 mt-2 underline text-sm text-neutral-300/90 decoration-orange-400/50  hover:decoration-orange-400 hover:bg-orange-400/20 hover:opacity-100"
	>
		What is BIP39?
	</a>
</header>

<main class="mt-16 columns-1 sm:columns-3 md:columns-4 gap-8 cursor-crosshair">
	{#each wordlist as word, i}
		<Word {word} numeral={i + 1} higlighted={isFirstExampleOfLetter(word, i)} />
	{/each}
</main>
