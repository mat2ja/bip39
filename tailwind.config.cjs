/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				mono: ['SF Mono', 'ui-monospace', 'monospace']
			}
		}
	},
	plugins: []
};
