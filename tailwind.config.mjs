/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'ted': ['TAN-NIMBUS']
			},
			colors: {
				'ted-green': '#142d17',
				'ted-gray': '#879788'
			},
			backgroundImage: {
				'ted-image': "url('/ted-image-1.png')"
			},
			fontSize: {
				'xl-ted': ['1.25rem', '1.5625rem']
			},
			height: {
				'85': '21.1875rem'
			}
		},
	},
	plugins: [],
}
