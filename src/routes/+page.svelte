<script lang="ts">
	import HeaderInfo from '$lib/components/HeaderInfo.svelte';
	import LanguagePicker from '$lib/components/LanguagePicker.svelte';
	import Word from '$lib/components/Word.svelte';
	import WordSearch from '$lib/components/WordSearch.svelte';
	import { isEnglish, normalize } from '$lib/utils';
	import Icon from '@iconify/svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { wordlist: wordlists } = data;

	type Lang = keyof typeof wordlists;

	let lang: Lang = 'en';
	$: wordlist = wordlists[lang];

	let search = '';
	$: _search = search.toLowerCase().trim();
	const clearSearch = () => (search = '');

	const wordOrdinal = (word: string) => {
		return wordlist.indexOf(word) + 1;
	};

	const paddedOrdinal = (word: string) => {
		return wordOrdinal(word).toString().padStart(4, '0');
	};

	$: filteredWordlist = wordlist.filter((word) => {
		if (!isEnglish(_search)) {
			const nativeWordMatch = word.startsWith(_search);
			return nativeWordMatch;
		}

		const wordMatch = normalize(word).startsWith(normalize(_search));
		if (wordMatch) return true;

		const normalizedWordMatch = normalize(word).startsWith(normalize(_search));
		if (normalizedWordMatch) return true;

		const parsedNumber = parseInt(_search);
		if (isNaN(parsedNumber)) return false;

		const paddedOrdinalMatch = paddedOrdinal(word).startsWith(search);
		const ordinalMatch = wordOrdinal(word).toString().startsWith(parsedNumber.toString());

		return paddedOrdinalMatch || ordinalMatch;
	});

	const isFirstExampleOfLetter = (word: string, idx: number) => {
		if (['cn', 'cnt'].includes(lang)) return false;

		if (idx === 0) return true;

		const firstLetter = (word: string) => word.at(0);
		return firstLetter(word) !== firstLetter(filteredWordlist[idx - 1]);
	};
</script>

<header>
	<LanguagePicker bind:lang {wordlists} />
	<div class="mt-6 flex flex-col items-start justify-between gap-8 sm:flex-row">
		<HeaderInfo />

		<WordSearch bind:search />
	</div>
</header>

<section>
	{#if filteredWordlist?.length}
		<div class="mt-10 cursor-crosshair columns-1 gap-8 sm:mt-16 sm:columns-3 md:columns-4">
			{#each filteredWordlist as word, i}
				<Word {word} ordinal={wordOrdinal(word)} higlighted={isFirstExampleOfLetter(word, i)} />
			{/each}
		</div>
	{:else}
		<div class="mt-20 flex flex-col items-center justify-center gap-5 text-neutral-50/20">
			<p class="px-2">no words found</p>
			<button
				on:click={clearSearch}
				class="flex items-center gap-1 rounded-sm bg-neutral-50/5 px-2 py-1 text-sm ring-neutral-600 hover:text-neutral-50/40 focus:outline-none focus:ring-2"
			>
				clear
				<Icon icon="ic:sharp-clear" class="text-base" />
			</button>
		</div>
	{/if}
</section>
