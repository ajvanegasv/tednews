/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'paper-texture': "url('/src/assets/texture.png')"
			},
			colors: {
				'periodic-paper': '#c6c2b5',
				'periodic-paper-light': '#c2bdaf',
				'green-tednews': '#152d17',
				'color-tednews-text': '#152d17'
			},
			fontFamily: {
				nimbus: ['TAN-NIMBUS']
			},
		},
		screens: {
			'xxs': '320px',
			'xs': '375px',
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1440px',
		},
		plugins: [],
	}
}