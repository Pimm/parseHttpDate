const path = require('path');
const { babel } = require('@rollup/plugin-babel');

const packageConfiguration = require('./package.json');

module.exports = {
	input: 'index.js',
	output: [
		{
			format: 'esm',
			file: path.join('compiled', 'esm', `${packageConfiguration.name}.min.js`),
			compact: true
		},
		{
			format: 'cjs',
			file: path.join('compiled', 'cjs', `${packageConfiguration.name}.min.js`),
			compact: true
		},
		{
			format: 'iife',
			file: path.join('compiled', 'iife', `${packageConfiguration.name}.min.js`),
			name: 'parseHttpDate',
			compact: true
		}
	],
	plugins: [
		babel({	comments: false, babelHelpers: 'bundled' })
	]
};