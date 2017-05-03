var connect = require('connect');
var path = require('path');

var dir_name = 'C:\Users\ECC01\Desktop\requests';

//导入中间件
var saveRquest = require('./saveRquest');
var writeHeader = require('../20.2.1(创建异步中间件)/write_header');
var replyText =require('../reply_text');


var app = connect();
app.use(saveRquest(dir_name));
app.use(writeHeader('X-Powered-By', 'node'));
app.use(replyText('Hello world v4'));

app.listen(8080);