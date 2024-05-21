import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				firstBackground: '#1D1B22',
				secondBackground: '#151F35',
				thirdBackground: '#0E1523',
				firstBlue: '#29a9ff',
				secondBlue: '#213E72',
				thirdBlue: '#213E72',
				firstGreen: '#8EFE00',
				secondGreen: '#A9E846',
				thirdGreen: '#48E580',
				fourthGreen: '#81FFAE',
				fifthGreen: '#C1FFD7',
				firstPink: '#FF0098',
			},
			screens: {
				xs: '475px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px',
			},
		},
	},
	plugins: [],
};

export default config;