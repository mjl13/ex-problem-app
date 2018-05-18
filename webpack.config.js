var path = require('path');

module.exports = {

	entry: path.resolve(__dirname, 'client', 'src', 'index.js'),

	output: {
		path: path.resolve(__dirname, 'client', 'dist'),
		filename: 'bundle.js'
	},

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				include: path.resolve(__dirname, 'client', 'src'),
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.s?css$/,
				loader: 'style-loader!css-loader!sass-loader'
				// style loader adds the styles into the dom
				// css loader loads css into js files
			}

		]

	}

}