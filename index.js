var gulp = require('./gulpfile')
    , express = require('express')
    , app = express()
    , conf = require('./dev.config')
    , open = require("open")
    , http = require('http').Server(app);

// Ensure that app has been built
gulp.run('compile');

app.use(express.static(conf.compilation.dir + '/public'));
app.get('/', function (req, res) {
    res.sendFile(conf.compilation.dir + '/public/index.html');
});
http.listen(3000);