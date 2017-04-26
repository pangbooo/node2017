var request =require('request');
var inspect =require('util').inspect;
var body = {
    a:1,
    b:2
};
var options = {
    url:'http://localhost:4001/print/body',
//   form:body
    json:body
}

request.post(options, function (err,res,body) {
    if(err){throw err}
    console.log(inspect({
        err : err,
        res :res,
        body:JSON.stringify(body)
    }));

});