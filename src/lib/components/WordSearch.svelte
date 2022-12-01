<script lang="ts">
	export let search = '';
</script>

<input
	aria-label="Search word"
	placeholder="Search"
	type="search"
	bind:value={search}
	class="py-2 px-3 bg-neutral-50/5 focus:ring-1 ring-orange-500 focus:outline-none placeholder:text-neutral-600 rounded-sm w-full sm:w-fit "
/>
