<script lang="ts">
	import Word from '../lib/components/Word.svelte';
	import { wordlist } from '../wordlist';

	const isFirstExampleOfLetter = (word: string, index: number) => {
		if (index === 0) return true;
		return word[0] !== wordlist[index - 1][0];
	};
</script>

<main class="columns-2 sm:columns-3 lg:columns-4 gap-8">
	{#each wordlist as word, i}
		<div class="py-1">
			<Word {word} numeral={i + 1} higlighted={isFirstExampleOfLetter(word, i)} />
		</div>
	{/each}
</main>
