//var webpack = require('webpack')
//    , WebpackDevServer = require('webpack-dev-server')
//    , config = require('./webpack.config')
//    , conf = require('./dev.config')
//    , open = require("open");
//
//config.plugins.push(new webpack.DefinePlugin({
//    dev: 'true'
//}));
//
//new WebpackDevServer(webpack(config), {
//    publicPath: config.output.publicPath,
//    hot: true,
//    quiet: conf.webPack.silent
//}).listen(conf.port, 'localhost', function (err, result) {
//        if (err) {
//            console.error(err);
//        }
//        if (conf.open) {
//            open('http://localhost:' + conf.port.toString())
//        }
//    });

var webpack = require('webpack')
    , WebpackDevServer = require('webpack-dev-server')
    , webpackConfig = require('./webpack.config')
    , url = require('url')
    , proxy = require('proxy-middleware')
    , express = require('express')
    , open = require('open')
    , conf = require('./dev.config');

webpackConfig.plugins.push(new webpack.DefinePlugin({
    dev: 'true'
}));

var app = require('./server');

app.use(express.static(__dirname));
app.use('/scripts', proxy(url.parse('http://localhost:' + conf.webPack.port.toString() + webpackConfig.output.publicPath)));
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

var webpackServer = new WebpackDevServer(webpack(webpackConfig), {
    publicPath: webpackConfig.output.publicPath,
    contentBase: __dirname,
    hot: true,
    noInfo: false,
    quiet: conf.webPack.silent,
    stats: {colors: true}
});

//var opened = false;
app.listen(conf.port);
webpackServer.listen(conf.webPack.port, 'localhost', function () {
    //if (!opened) {
    //    open('http://localhost:' + conf.port.toString());
    //    opened = true;
    //}
});