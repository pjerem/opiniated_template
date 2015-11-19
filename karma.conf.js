// Karma configuration

module.exports = function(config) {
    config.set({
        // ... normal karma configuration
		browsers: [ 'Chrome' ], //run in Chrome
		singleRun: true, //just run once by default
		frameworks: [ 'mocha' ], //use the mocha test framework
		
        files: [
            // all files ending in "_test"
            'test/*.js',
            'test/**/*.js',
			'src/*.spec.js',
            'src/**/*.spec.js'
            // each file acts as entry point for the webpack configuration
        ],

        preprocessors: {
            // add webpack as preprocessor
            'test/*.js': ['webpack'],
            'test/**/*.js': ['webpack'],
			'src/*.spec.js': ['webpack'],
            'src/**/*.spec.js': ['webpack']
        },

        webpack: {
			devtool: 'inline-source-map', //just do inline source maps instead of the default
			module: {
				loaders: [
				{ test: /\.js$/, loader: 'babel-loader', query: { presets: ['es2015'] } }
				]
			}
        },
		
		reporters: [ 'dots' ], //report results in this format
		
        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
            noInfo: true
        },
    });
};