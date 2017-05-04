var connect = require('connect');
var errorhandler = require('errorhandler');

var app = connect();

app.use(function (req, res, next) {
   next(new Error('Hey'));
});

//实际响应
app.use(function(req, res, next){
    res.end('hello world');
});

app.use(errorhandler());

app.listen(8080);
