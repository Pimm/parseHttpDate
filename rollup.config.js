const path = require('path');
const babel = require('rollup-plugin-babel');
const minify = require('rollup-plugin-babel-minify');

const packageConfiguration = require('./package.json');

export default {
	input: 'index.js',
	output: [
		{
			format: 'esm',
			file: path.join('compiled', 'esm', `${packageConfiguration.name}.min.js`)
		},
		{
			format: 'cjs',
			file: path.join('compiled', 'cjs', `${packageConfiguration.name}.min.js`)
		},
		{
			format: 'iife',
			file: path.join('compiled', 'iife', `${packageConfiguration.name}.min.js`),
			name: 'parseHttpDate'
		}
	],
	plugins: [
		babel(),
		minify({ comments: false })
	]
};