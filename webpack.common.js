const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	module: {
		rules: [
			{
				test: /\.jsx?$/i,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.html/i,
				use: ['html-loader'],
			},
			{
				test: /\.svg$/,
				loader: 'svg-inline-loader',
			},
		],
	},
};
