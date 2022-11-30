<script lang="ts">
	export let numeral: number;
	export let word: string;
	export let higlighted: boolean = true;

	$: paddedNumeral = numeral.toString().padStart(4, '0');
	$: firstLetter = word[0].toUpperCase();
</script>

<div
	class="px-2 relative py-1 hover:bg-neutral-50/5"
	class:higlighted
	style={`--letter: '${firstLetter}'`}
>
	<span class="numeral text-neutral-50/20">{paddedNumeral}</span>
	<span>{word}</span>
</div>

<style lang="postcss">
	.higlighted {
		--letter: 'A';
		@apply bg-orange-400/10;
		color: var(--hg-color);

		.numeral {
			@apply text-orange-400/40;
		}

		&:hover {
			@apply bg-neutral-50/5;
		}

		&::before {
			content: var(--letter);
			@apply absolute left-[-20px] text-orange-500;
		}
	}
</style>
