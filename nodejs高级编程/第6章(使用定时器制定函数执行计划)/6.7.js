/*
var interval = 1000;

setInterval(function () {
   my_async_function(function () {
       console.log('my_async_function finished')
   })
});*/


var interver = 1000;
(function schedule() {
    setTimeout(function do_it() {
        my_async_function(function () {
            console.log('my_async_function finished');
            schedule();
        })
    },interver)
})();