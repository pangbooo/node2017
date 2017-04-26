var request =require('request');
var inspect =require('util').inspect;

request('http://localhost:4001/abc/def', function (err,res,body) {
   if(err){ throw err}
    console.log(inspect({
        err:err,
        res:{
            statusCode : res.statusCode
            //各种信息都在res里面
        },
        body : JSON.parse(body)
    }))
});