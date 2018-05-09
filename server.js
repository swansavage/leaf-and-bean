const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const productsController = require('./controllers/products');
const usersController = require('./controllers/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api/products', productsController);
app.use('/api/users', usersController);

// catch 404 and forward to error handler
app.use((req, res, next)=> {
  next(createError(404));
});

// error handler
app.use((err, req, res, next)=> {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const mongoUri =  process.env.MONGODB_URI || 'mongodb://localhost:27017/leafandbean';
mongoose.connect(mongoUri);

mongoose.connection.once('open', ()=>{
    console.log('connected to mongod');
});

const port = process.env.PORT || 3001;
app.listen(port);

console.log(`leaf-and-bean listening on ${port}`);
module.exports = app;
