<script lang="ts">
	import Icon from '@iconify/svelte';

	export let y = 0;

	const scrollToTop = () => {
		y = 0;
	};
</script>

<div class="fixed bottom-8 right-8">
	<button
		on:click={scrollToTop}
		class="p-2 bg-orange-400/20 hover:bg-orange-400/25 text-red-500 rounded-full focus:outline-none ring-orange-500 shadow focus-visible:ring-2 active:scale-95 transition"
	>
		<Icon icon="mdi:chevron-up" class="text-orange-400 text-4xl" />
	</button>
</div>
