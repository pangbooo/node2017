var express = require('express');
var app = express();

//设置handlebars视图引擎
var handlebars = require('express3-handlebars').create({defaultLayout:'main'}); //默认布局页面
app.engine('handlebars',handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.get('/', function (req,res) {
//   res.type('html');
//    res.send('Meadowlark Travl')
    res.render('home');
});

app.get('/about', function (req,res) {
//    res.type('html');
//    res.send('About Meadowlark Travl');
    res.render('about');

});

//404页面
app.use(function (req,res) {
//    res.type('html');
    res.status(404);
//    res.send('404 - Not Found')
    res.render('404')
});

//500页面
app.use(function (err,req,res,next) {
    console.error(err.stack);
//    res.type('html');
    res.status(500);
    res.render('500');
//    res.send('500 - Server Error')
});

app.listen(app.get('port'), function () {
   console.log('Express started on http://localhost:' + app.get('port') + ';')
});