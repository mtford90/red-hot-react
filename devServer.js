var express = require('express')
    , app = express()
    , webpack = require('webpack')
    , WebpackDevServer = require('webpack-dev-server')
    , config = require('./webpack.config')
    , conf = require('./dev.config')
    , open = require("open");

config.plugins.push(new webpack.DefinePlugin({
    dev: 'true'
}));

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    quiet: conf.webPack.silent
}).listen(conf.port, 'localhost', function (err, result) {
        if (err) {
            console.error(err);
        }
        if (conf.open) {
            open('http://localhost:' + conf.port.toString())
        }
    });