require('http').createServer(function (req,res) {
   var rs = fs.createReadStream('/path/to/big/file');
    rs.pipe(res, {end:false});

    rs.on('end', function () {
        res.write('and that is all, folks');
        res.end();
    })
}).listen(8080);