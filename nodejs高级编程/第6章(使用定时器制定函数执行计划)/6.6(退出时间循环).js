var stream = require('stream');
var fs = require('fs');

stream.on('data', function(data){
   stream.end('my response');
    process.nextTick(function () {
        fs.unlink('/path/to/file')
    })
});