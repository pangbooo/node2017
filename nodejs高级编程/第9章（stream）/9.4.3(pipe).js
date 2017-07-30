require('http').createServer(function (req,res) {
   var rs = fs.createReadStream('/path/to/big/file');
    rs.pipe(res);
}).listen(8080);