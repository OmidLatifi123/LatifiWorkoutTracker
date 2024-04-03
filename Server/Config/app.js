// required node modules
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const hbs = require('hbs');

// additional dependencies
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');

// Routing modules
const indexRouter = require('../Routes/index');
const exerciseRouter = require('../Routes/exercises');
const authRouter = require('../Routes/auth');



const app = express();

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// db connection - must be after express app instantiated
mongoose.connect(process.env.CONNECTION_STRING, {})
.then((res) => { console.log('Connected to MongoDB') })
.catch((err) => { console.log(`Connection failure: ${err}`) });

// view engine setup
app.set('views', path.join(__dirname, '../Views'));
app.set('view engine', 'hbs');

// register hbs helpers
hbs.registerPartials(path.join(__dirname, '../Views/components/'));
hbs.registerPartials(path.join(__dirname, '../Views/exercises/'));


hbs.registerHelper('loadPage', function (pageName) 
{
  console.log("pageName: " + pageName);
  return pageName
});

// middleware configuration
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../Client')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

app.use(session({
  secret: process.env.PASSPORT_SECRET,
  resave: true,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

let User = require('../Models/user');

const GoogleStrategy = require( 'passport-google-oauth20' ).Strategy;
passport.use(new GoogleStrategy({
  clientID:     process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL,
},
async(request, accessToken, refreshToken, profile, done) =>{
  try{
      let user = await User.findOne({username:profile.displayName})
      if(user){
          done(null, user)
      }
      else{
          user = await User.register(new User({ username: profile.displayName }), profile.id)
          done(null, user)
      }
  } catch(err){
      console.log(err)
  }
}
));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use('/', indexRouter);
app.use('/exercises', exerciseRouter);
app.use('/auth', authRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) 
{
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) 
{
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {title: `Error: ${err.status}`, page: 'error'});
});

module.exports = app;