var express = require('express');
var formidable = require('formidable');
var app = express();
app.use(require('body-parser')());

// 设置 handlebars 视图引擎
var handlebars = require('express-handlebars').create({
    defaultLayout:'main',
    helpers: {
        section: function(name, options){
            if(!this._sections) this._sections = {};
            this._sections[name] = options.fn(this);
            return null;
        }
    }
});
app.engine('handlebars', handlebars.engine);

app.set('view engine', 'handlebars');

//指派静态目录
app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || 3001);

app.get('/', function (req,res) {
    res.render('home');
});

app.get('/newsletter', function (req,res) {
   res.render('newsletter', {csrf: 'CSRF token goes here'})
});
app.get('/newsletter-ajax', function (req,res) {
    res.render('newsletter-ajax', {csrf: 'CSRF token goes here'})
});

app.get('/contest/vacation-photo', function (req,res) {
   var now = new Date();
   res.render('contest/vacation-photo', {year:now.getFullYear(),month:now.getMonth()+1})
});

app.get('/thank-you', function (req,res) {
    res.render('thank-you')
});
app.post('/process', function (req, res) {
    console.log('Form (from querystring): ' + require('util').inspect(req.query));
    console.log('CSRF token(from hidden form field): ' + req.body._csrf);
    console.log('Name(from visible form field): ' + req.body.name);
    console.log('Email (from visible form field): ' + req.body.email);
    res.redirect(303, '/thank-you')
});

app.post('/process-ajax', function (req, res) {
    if(req.xhr || req.accepts('json,html') === 'json'){
        res.send({success: true})
    }else{
        res.send({error: 'error description'});
        res.redirect(303, 'thank-you');
    }
});
app.post('/contest/vacation-photo/:year/:month', function (req,res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        if(err) return res.redirect(303, '/error');
        console.log('received fields:' + require('util').inspect(fields));
        console.log('received files:' + require('util').inspect(files));
        res.redirect(303, '/thank-you');
    })
});

app.listen(app.get('port'), function () {
   console.log('Express started on http://localhost:' + app.get('port') + ';')
});


