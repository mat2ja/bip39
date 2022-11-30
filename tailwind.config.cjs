/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				mono: ['"IBM Plex Mono"', 'monospace']
			}
		}
	},
	plugins: []
};
