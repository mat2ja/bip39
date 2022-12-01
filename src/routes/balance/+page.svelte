<script lang="ts">
	import AddressInfo from '$lib/components/address/AddressInfo.svelte';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

{#if form}
	<AddressInfo data={form} />
{/if}
