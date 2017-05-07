var express = require('express');
var app = express();

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

app.use( require('cookie-parser')(credentials.cookieSecret()));
app.use(require('express-session')());




app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' + app.get('port') + ';')
});
