module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{html,json,svg,md,css,jsx,png,js,lock}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};