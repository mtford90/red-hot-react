var webpack = require('webpack'),
    conf = require('./dev.config'),
    _ = require('underscore');


var ext = _.map(conf.ext.js, function (x) {return '.' + x});
ext = ext.concat('');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:' + conf.webPack.port.toString(),
        'webpack/hot/dev-server',
        conf.entry
    ],

    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: 'http://localhost:' + conf.webPack.port.toString() + '/' + conf.scripts + '/'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    resolve: {
        extensions: ext
    },

    devtool: "inline-source-map",

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
                test: /\.sass$/,
                loader: "style!css!sass?outputStyle=expanded"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!autoprefixer-loader"
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
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
