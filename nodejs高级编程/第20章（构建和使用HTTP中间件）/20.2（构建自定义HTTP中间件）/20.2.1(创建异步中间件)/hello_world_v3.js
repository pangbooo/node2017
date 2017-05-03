var connect = require('connect');

//导入 中间件
var writeHeader = require('./write_header');
var replyText = require('../reply_text');

var app = connect();
app.use(writeHeader('X-Power-By','Node'));
app.use(replyText('Hello World v3'));

app.listen(8080);

