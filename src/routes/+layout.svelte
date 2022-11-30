<script>
	import '../app.css';
	import Footer from '../lib/components/Footer.svelte';
</script>

<div class="pt-[30vh] pb-32 px-8 max-w-6xl mx-auto space-y-32 font-mono">
	<main>
		<slot />
	</main>

	<Footer />
</div>
