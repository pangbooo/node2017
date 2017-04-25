var http  =require('http');
var util = require('util');

var options = {
    host:'www.baidu.com',
    port:80,
    path:'/index.html',
    method:'POST'
};

var request= http.request(options, function (res) {
    console.log('status:' + res.statusCode);
    console.log('headers:' + res.headers);
    res.setEncoding('utf8');

    res.on('data', function (chunk) {
        console.log('body:' + chunk)
    });

});

request.wtite('this is a pirce of data.' + '\n');
request.wtire('this is another piece of data' + '\n');
request.end();