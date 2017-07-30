require('http').createServer(function (req,res) {
   var rs = fs.createReadStream('/path/to/big/file');

    rs.on('data', function (data) {
        res.write(data);
    });
    rs.on('end', function () {
        res.end();
    })
}).listen(8080);