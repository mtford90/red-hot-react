var express = require('express')
    , bodyParser = require('body-parser')
    , app = express()
    , webpack = require('webpack')
    , WebpackDevServer = require('webpack-dev-server')
    , config = require('./webpack.config')
    , conf = require('./build.config');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
if (conf.livereload.enabled) app.use(require('connect-livereload')({port: conf.livereload.port}));

app.all('/*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:' + conf.port.toString());
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
});

app.listen(conf.webPackPort);
new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true
}).listen(conf.port, 'localhost', function (err, result) {
        if (err) {
            console.log(err);
        }
        console.log('Listening at localhost:3000');
    });