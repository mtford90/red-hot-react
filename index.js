var express = require('express')
    , app = express()
    , conf = require('./dev.config')
    , open = require("open");

app.use(express.static(conf.compilation.dir + '/public'));
app.get('/', function (req, res) {
    res.sendFile(conf.compilation.dir + '/public/index.html');
});
app.listen(3000);