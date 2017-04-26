require('http').createServer(function (req,res) {
    function printBack() {
        res.writeHead(200,{'Content-Type':'text-plain'});
        res.end(JSON.stringify({
            url:res.url,
            method:res.method,
            headers:req.headers
        }))
    }

    switch (req.url){
        case '/redirect':
            res.writeHead(301,{'Location':'/'});
            res.end();
            break;
        case '/print/body':
//            req.setEnCoding('utf8');
            var body = '';
            req.on('data',function(d){ //当有请求发送时
                body += d.toString();
            });
            req.on('end',function(){ //当请求结束时
                res.end(JSON.stringify(body))
            });
            break;
        default :
            printBack();
            break;

    }

}).listen(4001);

