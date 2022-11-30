import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import nested from 'postcss-nested';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: {
			plugins: [nested()]
		}
	}),

	kit: {
		adapter: adapter()
	}
};

export default config;
