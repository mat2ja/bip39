<script lang="ts">
	import Icon from '@iconify/svelte';

	export let search = '';
</script>

<div
	class="relative flex items-center rounded-sm bg-neutral-800/60 px-3 pr-7 ring-orange-500 focus-within:ring-2 focus-visible:outline-none focus-visible:ring-2 sm:w-fit"
>
	<Icon icon="ic:sharp-search" class="text-xl text-neutral-600" />
	<input
		aria-label="Search word"
		placeholder="search"
		type="text"
		bind:value={search}
		class="w-full bg-transparent py-2 px-3 placeholder:text-neutral-600 focus:outline-none focus-visible:outline-none"
	/>
	{#if search}
		<button
			on:click={() => (search = '')}
			class="absolute top-[50%] right-3 flex translate-y-[-50%] items-center justify-center text-xl text-neutral-600 hover:text-neutral-500 focus:outline-none"
		>
			<Icon icon="ic:sharp-clear" />
		</button>
	{/if}
</div>
