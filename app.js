var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http=require('http');
var util=require('util');
var urlLib=require('url');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
/*
//receive ajax 
http.createServer(function(req,res){
  var str='{"id":1}';

  console.log('Request received.');

  res.writeHead(200,{'Content-Type':'text/plain','charset':'utf-8','Access-Control-Allow-Methods':'POST,GET'});
  req.on('data',function(chunk){
    str+=chunk;
    console.log('Got data');
  });

  //res.end('callback(\'{\"msg\": \"我要一个女朋友\"}\')');
  res.write(str);
  res.end();

}).listen(3000,'127.0.0.1');
*/


//test
http.createServer(function(req,res){
  var data='';
  console.log('webserver is ok!');

  req.on('data',function(chunk){
    data+=chunk;
    console.log('got data');
  });

  res.writeHead(200,{
    'Content-Type' : 'text/plain',
    'charset':'utf-8'
  });

  //var parms=urlLib.parse(req.url,true);
  var str='callback'+'('+JSON.stringify(data)+')';
  //res.write(str);
  res.end(str);
  console.log('send back');
}).listen(3000,'127.0.0.1');

module.exports = app;
