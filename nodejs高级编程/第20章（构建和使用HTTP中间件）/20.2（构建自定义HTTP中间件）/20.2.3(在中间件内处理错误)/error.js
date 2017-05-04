function errorCreator(){
    return function (req,res, next) {
       next(new Error('this is an error'))
    }
}

module.exports = errorCreator;