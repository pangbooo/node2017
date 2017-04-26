var request =require('request');
var inspect =require('util').inspect;

request.post('http://localhost:4001/abc/def', function (err,res,body) {
    if(err){throw err}
    console.log(inspect({
        err : err,
        res :res,
        body:JSON.stringify(body)
    }));

});