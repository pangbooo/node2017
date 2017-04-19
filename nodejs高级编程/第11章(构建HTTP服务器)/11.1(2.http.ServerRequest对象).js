var writeStream;

//req可读流， res可写流
require('http').createServer(function (req,res) {
   req.on('data', function (data) {
      writeStream.write(data)
   })
});