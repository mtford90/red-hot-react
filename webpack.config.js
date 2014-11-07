var webpack = require('webpack');


module.exports = {
    // Entry point for static analyzer:
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/dev-server',
        './scripts/app'
    ],

    output: {
        // Where to put build results when doing production builds:
        // (Server doesn't write to the disk, but this is required.)
        path: __dirname,

        // JS filename you're going to use in HTML
        filename: 'bundle.js',

        // Path you're going to use in HTML
        publicPath: '/scripts/'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    resolve: {
        // Allow to omit extensions when requiring these files
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loaders: ['react-hot', 'jsx']
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass?outputStyle=expanded"
            },
            {
                test: /\.woff$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {
                test: /\.ttf$/,
                loader: "file-loader"
            },
            {
                test: /\.eot$/,
                loader: "file-loader"
            },
            {
                test: /\.svg$/,
                loader: "file-loader"
            }
        ]
    }
};
