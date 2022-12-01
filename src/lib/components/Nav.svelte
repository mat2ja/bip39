<script lang="ts">
	const links = [
		{
			href: '/bip39',
			label: 'bip39'
		}
	];
</script>

<nav class="flex items-center justify-end gap-2 py-5 text-sm text-neutral-50/20">
	{#each links as { href, label }}
		<a {href} class="rounded-sm px-2 py-1 hover:text-neutral-500">{label}</a>
	{/each}
</nav>
