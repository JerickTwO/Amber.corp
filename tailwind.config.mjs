/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'movil': '	325px',
			
			'movil-md':'448px',
			
			'tablet': '640px',
	  
			'laptop': '1000px',

		  },
		extend: {},
	},
	plugins: [],
}
