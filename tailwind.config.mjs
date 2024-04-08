const { nextui } = require("@nextui-org/react");

const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['"Inter"', ...defaultTheme.fontFamily.sans],
			  },
		},
	},
	darkMode: "class",
	plugins: [nextui()],
}
