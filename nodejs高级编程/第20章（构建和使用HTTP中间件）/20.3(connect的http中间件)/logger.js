var connect = require('connect');
var morgan = require('morgan');

var app = connect();

//设置中间件
var format = ':method :url - :status - :response-time ms';
app.use(morgan(format));

//实际响应
app.use(function (req,res) {
    res.end('hello world')
});

app.listen(8080);