var express = require('express')
    , bodyParser = require('body-parser')
    , app = express()
    , webpack = require('webpack')
    , WebpackDevServer = require('webpack-dev-server')
    , config = require('./webpack.config')
    , conf = require('./dev.config')
    , open = require("open");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.all('/*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:' + conf.port.toString());
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
});

app.listen(conf.webPack.port);
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