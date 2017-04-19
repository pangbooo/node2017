var fs = require('fs');

require('http').createServer(function (req,res) {
   res.writeHead(200,{'Content-Type':'audio/mp3'});
   var rs = fs.createReadStream('test.mp3');
   rs.pipe(res);
}).listen(4000);