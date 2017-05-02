var  port = process.argv[2] && parseInt(process.argv[2],10) || 8080;

require('http').createServer(function (req,res) {
    var body = '';
    req.setEncoding('utf8');

    req.on('data', function (data) {
        body += data;
    });

    req.once('end', function () {
        var number = JSON.parse(body);
        var squsred = Math.pow(number,2);
        res.end(JSON.stringify(squsred));
    })
}).listen(port, function () {
    console.log('Squarug Server listening on port :' + port)
});

