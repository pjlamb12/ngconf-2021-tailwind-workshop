module.exports = {
	purge: ['./src/**/*.{html,ts}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'brand-color': {
					DEFAULT: 'var(--my-custom-color)',
					50: 'var(--my-custom-color-50)',
					100: 'var(--my-custom-color-100)',
				},
			},
			fontSize: {
				xxs: '.2rem',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
