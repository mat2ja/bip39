<script>
	import { page } from '$app/stores';
</script>

<div class="flex items-center justify-center pt-20">
	<p class="w-fit rounded-sm bg-red-400/20 px-8 py-4 text-center">
		{$page.error?.message || 'Something went wrong'}
	</p>
</div>
