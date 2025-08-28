/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		fontFamily: {
			inter: ["Inter", "sans-serif"],
		},
			extend: {
				colors: {
					trauck: {
						DEFAULT: '#4328EB',
						50: '#F5F3FF',
						100: '#EDE9FE',
						200: '#D6CBFD',
						300: '#BDABFB',
						400: '#9A7CF8',
						500: '#4328EB',
						600: '#3A21CF',
						700: '#301AAF',
						800: '#261488',n
						900: '#1D0F66'
					},
					secondary: {
						DEFAULT: '#00B67F',
						500: '#00B67F',
					},
					neutral: {
						50: '#F9FAFB',
						100: '#F3F4F6',
						200: '#E5E7EB',
						300: '#D1D5DB',
						400: '#9CA3AF',
						500: '#6B7280',
						600: '#4B5563',
						700: '#374151',
						800: '#1F2937',
						900: '#111827'
					}
				}
			},
	},
	plugins: [],
};
