<script lang="ts">
	import { enhance } from '$app/forms';
	import SearchInput from '$lib/components/SearchInput.svelte';

	let address = '';
</script>

<div class="space-y-12">
	<header class="flex flex-col items-center justify-between gap-8 sm:flex-row">
		<form class="ml-auto" method="POST" use:enhance>
			<SearchInput name="address" bind:value={address} classes="w-full sm:min-w-[480px]" />
		</form>
	</header>

	<slot />
</div>
