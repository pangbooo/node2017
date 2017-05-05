var express = require('express');
var app = express();

// 设置 handlebars 视图引擎
var handlebars = require('express-handlebars')
    .create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//指派静态目录
app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || 3001);

//禁用Express 的 X-Powered-By 头信息
app.disable('x-powered-by');

var fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple."
];

app.get('/', function (req,res) {
   //res.type('html');
   // res.send('Meadowlark Travl');
    res.render('home');
});

app.get('/about', function (req,res) {
    //res.type('html');
    //res.send('About Meadowlark Travl');
    var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)]
    res.render('about', { fortune : randomFortune });

});

//没有布局的视图
app.get('/noLayout', function (req,res) {
    res.render('noLayout' , {layout:null})
});

//使用定制的布局渲染视图
app.get('custom-layout', function (req,res) {
   res.render('custom-layout', {layout:custom})
});

//404页面
app.use(function (req,res) {
    //res.type('html');
    //res.status(404);
    //res.send('404 - Not Found');
    res.render('404')
});

//500页面
app.use(function (err,req,res,next) {
    console.error(err.stack);
    //res.type('html');
    //res.status(500);
    //res.send('500 - Server Error')
    res.render('500');

});

app.listen(app.get('port'), function () {
   console.log('Express started on http://localhost:' + app.get('port') + ';')
});
