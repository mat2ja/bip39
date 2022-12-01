<script lang="ts">
	export let languages: string[];
	export let lang = 'en';

	const setLang = (_lang: string) => {
		lang = _lang;
	};
</script>

<div class="text-neutral-50/20 hover:text-neutral-50/10 flex items-center justify-end gap-1">
	{#each languages as $lang}
		<button
			on:click={() => setLang($lang)}
			class:!text-neutral-300={lang === $lang}
			class="hover:text-neutral-50/40 p-1">{$lang}</button
		>
	{/each}
</div>
