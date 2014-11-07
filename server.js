/*
 Used to serve the app in dev, enabling react hot reload etc via webpack.
 In prod, the app is just bundled and served on gh-pages
 */

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var comments = [{author: 'Pete Hunt', text: 'Hey there!'}];

//var staticPath = __dirname + '/public';
//console.log('staticPath', staticPath);
//app.use(express.static(staticPath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.all('/*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
});

app.get('/comments.json', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(comments));
    app.post('/comments.json', function (req, res) {
        res.send(JSON.stringify(comments));
    });
});

app.listen(3001);

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true
}).listen(3000, 'localhost', function (err, result) {
        if (err) {
            console.log(err);
        }
        console.log('Listening at localhost:3000');
    });