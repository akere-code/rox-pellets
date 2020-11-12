var createError = require('http-errors');
var sendMail = require('./mail');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var homeRouter = require('./routes/home');
var holzRouter = require('./routes/holzpellets-kaufen');
var sackRouter = require('./routes/sackware');
var qualitatRouter = require('./routes/qualitat');
var liefRouter = require('./routes/lieferung');
var kontaktRouter = require('./routes/kontakt');
var bodyParser = require('body-parser');

var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false});
var jsonParser = bodyParser.json();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({
  extended : false
}))
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRouter);
app.get('/holzpellets-kaufen', holzRouter);
app.get('/sackware', sackRouter);
app.get('/qualitat', qualitatRouter);
app.get('/lieferung', liefRouter);
app.get('/kontakt', kontaktRouter);


app.post('/email', urlencodedParser, function(req, res){

    var {email, name, message} = req.body;
    console.log('Data: ', req.body);
    sendMail(email, name, message, function(err, body){
      if (err) {
        res.status(500).json({message:'Internal error'});
      } else {
        res.json({message:'Email sent'});
        res.redirect('/holzpellets-kaufen');
      }
   })
  });
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
