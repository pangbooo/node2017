//但是，如果某个函数做的事情是创建一个别的线程或进程，并与JS主线程并行地做一些事情，并在事情做完后通知JS主线程，那情况又不一样了
setTimeout(function () {
    console.log('world');
}, 1000);

console.log('hello');