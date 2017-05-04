function errorHander(){
    return function (err,req,res, next) {
        if(err){
            res.writeHead(500,{'Content-Type':'text/html'});
            res.end('<h1>no! we have a error : </h1> ' + err.stack)
        }else {
            next();
        }
    }
}

module.exports = errorHander;