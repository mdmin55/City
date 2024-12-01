/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			msm: '400px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px'
		},

		colors: {
			main: '#bb9457',
			primary: '#fdc500',
			secondary: '#DFAE02',
			danger: '#eb0914',
			success: '#44944A',
			new: '#f6d514',
			white: '#fff',
			black: '#000'
		},
		extend: {}
	},
	plugins: []
}
