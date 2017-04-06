var head  = require('./head');
var body  = require('./body');

module.exports = function(name){
  return {
      name : name,
      head : head.create,
      body : body.create
  };
};