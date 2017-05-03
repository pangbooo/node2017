var connect = require('connect');

//导入中间件
var replyText = require('./reply_text');

var app = connect();
app.use(replyText('Hello World 123'));
app.listen(8080);