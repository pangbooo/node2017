var http  =require('http');
var util = require('util');

var options = {
    host:'www.baidu.com',
    port:80,
    path:'/index.html'
};

http.get(options, function (res) {
    console.log('Got response:' + util.inspect(res))
});