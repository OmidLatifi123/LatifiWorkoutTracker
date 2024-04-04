const User = require('../Models/user');

let Push = require('../Models/push');
let Pull = require('../Models/pull');
let Legs = require('../Models/legs');

/**
 * This function will display the home page
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */

async function DisplayHome(req, res, next) {
  let push = await Push.aggregate([{ $sample: { size: 3 } }]);
  let pull = await Pull.aggregate([{ $sample: { size: 3 } }]);
  let legs = await Legs.aggregate([{ $sample: { size: 3 } }]);

  res.render('home', { title: 'Latifi Workout Tracker', page: 'home', user: req.user, legs: legs, pull: pull, push: push});
}

function DisplayLogin(req, res, next){
  res.render('login', {title: 'Login', page:'login', user: req.user})
}

function DisplayRegister(req, res, next){
  res.render('register', {title: 'Register', page:'register', user: req.user})
}

function DisplayAbout(req, res,next){
  res.render('about', {title: 'About', page:'about', user: req.user})
}

module.exports = {
DisplayLogin: DisplayLogin,
 DisplayHome: DisplayHome,
 DisplayAbout: DisplayAbout,
 DisplayRegister: DisplayRegister
//  DisplayPush: DisplayPush,
//  DisplayPull: DisplayPull,
//  DisplayCreatePush: DisplayCreatePush,
//  DisplayCreatePull: DisplayCreatePull,
//  DisplayCreateLegs: DisplayCreateLegs 
}

  