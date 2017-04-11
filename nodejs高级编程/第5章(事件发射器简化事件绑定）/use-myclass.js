var MyClass = require('./MyClass');

var myInstance = new MyClass();
myInstance.on('custom-event', function (str1,str2) {
    console.log('got a custom event:' + str1 + ',' + str2)
});
myInstance.someMethod();
