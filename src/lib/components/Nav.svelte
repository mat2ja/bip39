<script lang="ts">
	import { page } from '$app/stores';

	const links = [
		{
			href: '/bip39',
			label: 'bip39'
		},
		{
			href: '/balance',
			label: 'balance'
		}
	];
</script>

<nav class="flex items-center justify-end gap-2 py-5 text-sm text-neutral-50/20">
	{#each links as { href, label }}
		<a
			data-active={$page.url.pathname === href}
			{href}
			class="rounded-sm px-2 py-1 hover:text-neutral-500">{label}</a
		>
	{/each}
</nav>

<style lang="postcss">
	[data-active='true'] {
		@apply text-neutral-100;
	}
</style>
