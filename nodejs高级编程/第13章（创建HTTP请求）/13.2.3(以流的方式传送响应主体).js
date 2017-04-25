var http = require('http');
var fs= require('fs');
var options = {
    host:'localhost',
    port:4000,
    path:'/tem/test.json',
    method:'GET'
};

var file = fs.createWriteStream('./tem/test.txt');

http.request(options, function (res) {
   res.pipe(file);
}).end();