var connect = require('connect');

var dir_name = 'C:\Users\ECC01\Desktop\requests';

//导入中间件
var errorCreator = require('./error');
var saveRquest = require('../20.2.2(在中间件内部注册回调函数)/saveRquest');
var writeHeader = require('../20.2.1(创建异步中间件)/write_header');
var replyText =require('../reply_text');

var app = connect();
app.use(errorCreator());
app.use(saveRquest(dir_name));
app.use(writeHeader('X-Powered-By', 'node'));
app.use(replyText('Hello world v5'));

app.listen(8080);