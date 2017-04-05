//一个模块中的JS代码仅在模块第一次被使用时执行一次，并在执行过程中初始化模块的导出对象。
// 之后，缓存起来的导出对象被重复利用。

var counter1 =require('./util/counter');
var counter2 =require('./util/counter');

console.log(counter1.count());
console.log(counter2.count());
console.log(counter2.count());

//counter.js并没有因为被require了两次而初始化两次