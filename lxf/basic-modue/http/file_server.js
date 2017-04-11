var fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');

//var root  = path.resolve(process.argv[2] || '.');
var root = path.resolve('C:/Users/Administrator/Desktop/man0407/enterprise0401');
console.log('static root dir: ' + root);

//创建服务器
var server = http.createServer(function (request,response) {
    var pathname = url.parse(request.url).pathname;
    var filepath = path.join(root,pathname);
    console.log(filepath);

    //获取文件状态
    fs.stat(filepath, function(err, stats){
        if(!err && stats.isFile()){
            console.log('200' + request.url);
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response);

        }else if(!err && stats.isDirectory()){
            if( fs.existsSync(filepath + 'index.html')){
                filepath += 'index.html';
            }else{
                filepath += 'default.html'
            }
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response);
        }
        else{
            console.log('404' + request.url);
            response.writeHead(404);
            response.end('404 Not Found')
        }
    })
});

server.listen(8080);
console.log('Server is running at http://127.0.0.1:8080/');
