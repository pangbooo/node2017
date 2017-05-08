var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3001);

app.use(function (req, res, next) {
    console.log('processing request for "' + req.url + '"....');
    next();
});

app.use(function (req, res, next) {
    console.log('terminating request');
    res.send('thanks for playing!');
    // 注意， 我们没有调用 next()……这样请求处理就终止了
});

app.use(function(req, res, next){
    console.log('whoops, i\'ll never get called!');
});

app.listen(app.get('port'));