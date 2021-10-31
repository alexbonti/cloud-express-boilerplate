require('dotenv').config()
var createError = require('http-errors');
var express = require("express")
var cors = require("cors")
var app = express()
var indexRouter = require('./routes/index');
app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use('/', indexRouter);

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

var port = process.env.port || 3000;

app.listen(port,()=>{
    console.log("App listening to: "+port);
})