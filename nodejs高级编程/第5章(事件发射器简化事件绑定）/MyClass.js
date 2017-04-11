var util = require('util');
var EventEmitter = require('events').EventEmitter;

var MyClass = function () {};
util.inherits(MyClass, EventEmitter);

MyClass.prototype.someMethod = function () {
  this.emit('custom-event','argument1','argument2')
};

module.exports = MyClass;



