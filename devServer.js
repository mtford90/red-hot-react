var webpack = require('webpack')
    , WebpackDevServer = require('webpack-dev-server')
    , webpackConfig = require('./webpack.config')
    , url = require('url')
    , proxy = require('proxy-middleware')
    , express = require('express')
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

app.listen(conf.port);
webpackServer.listen(conf.webPack.port, 'localhost', function () {});