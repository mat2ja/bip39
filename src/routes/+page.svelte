<script lang="ts">
	import Word from '../lib/components/Word.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ wordlist } = data);

	const isFirstExampleOfLetter = (word: string, index: number) => {
		if (index === 0) return true;
		return word[0] !== wordlist[index - 1][0];
	};
</script>

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
