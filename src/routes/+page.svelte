<script lang="ts">
	import Word from '$lib/components/Word.svelte';
	import type { PageData } from './$types';
	import Icon from '@iconify/svelte';

	export let data: PageData;
	const { wordlist } = data;

	let search = '';
	const clearSearch = () => {
		search = '';
	};

	$: filteredWordlist = wordlist.filter((word) => {
		return word.toLowerCase().startsWith(search.toLowerCase());
	});

	const wordOrdinal = (word: string) => {
		return wordlist.indexOf(word) + 1;
	};

	const isFirstExampleOfLetter = (word: string, index: number) => {
		if (index === 0) return true;
		const firstLetter = (word: string) => word.at(0);
		return firstLetter(word) !== firstLetter(filteredWordlist[index - 1]);
	};
</script>

<header class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
	<div>
		<h1 class="text-2xl">BIP39 Wordlist</h1>
		<a
			href="https://halborn.com/what-is-a-bip39/"
			class="inline-block -ml-1 px-1 mt-2 underline text-sm text-neutral-300/90 decoration-orange-400/50  hover:decoration-orange-400 hover:bg-orange-400/20 hover:opacity-100 rounded-sm"
		>
			What is BIP39?
		</a>
	</div>

	<input
		aria-label="Search word"
		placeholder="Search"
		type="search"
		bind:value={search}
		class="py-2 px-3 bg-neutral-50/5 focus:ring-1 ring-orange-500 focus:outline-none placeholder:text-neutral-600 rounded-sm w-full sm:w-fit "
	/>
</header>

{#if filteredWordlist?.length}
	<main class="mt-10 sm:mt-16 columns-1 sm:columns-3 md:columns-4 gap-8 cursor-crosshair">
		{#each filteredWordlist as word, i}
			<Word {word} ordinal={wordOrdinal(word)} higlighted={isFirstExampleOfLetter(word, i)} />
		{/each}
	</main>
{:else}
	<div class="mt-20 flex flex-col items-center justify-center gap-5 text-neutral-50/40">
		<p class="px-2">No words found</p>
		<button
			on:click={clearSearch}
			class="bg-neutral-50/5 px-2 hover:text-neutral-50/50 focus:ring-2 ring-neutral-600 focus:outline-none flex items-center gap-2"
		>
			Clear
			<Icon icon="ic:twotone-clear" />
		</button>
	</div>
{/if}
