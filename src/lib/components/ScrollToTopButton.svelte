<script lang="ts">
	import Icon from '@iconify/svelte';

	const scrollToTop = () => {
		window.scrollTo({ top: 0 });
	};
</script>

<div class="fixed bottom-8 right-8">
	<div class="bg-neutral-900 rounded-full">
		<button
			on:click={scrollToTop}
			class="z-100 p-2 bg-orange-400/20 hover:bg-orange-400/25 text-red-500 rounded-full focus:outline-none ring-orange-500 shadow focus-visible:ring-2 active:scale-95 transition"
		>
			<Icon icon="mdi:chevron-up" class="text-orange-400 text-4xl" />
		</button>
	</div>
</div>
