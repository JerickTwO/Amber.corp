/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'movil-l':'425px',
			
			'tablet': '640px',
	  
			'laptop': '1000px',

		  },
		extend: {},
	},
	plugins: [],
}
