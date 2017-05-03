function errorCreator(){
    return function (req,res, next) {
        throw new Error('this is an error')
    }
}

module.exports = errorCreator;