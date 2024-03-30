const User = require('../Models/user');

/**
 * This function will display the home page
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */

async function DisplayHome(req, res, next) {

  res.render('home', { title: 'Latifi Workout Tracker', page: 'home'});
}

function DisplayPush(req, res, next)
{
  res.render('push', {title: 'Push Excercises', page: 'push'});
}

function DisplayPull(req, res, next)
{
  res.render('pull', {title: 'Pull Excercises', page: 'pull'});
}

function DisplayLegs(req, res, next)
{
  res.render('legs', {title: 'Leg Excercises', page: 'legs'});
}

function DisplayCreatePush(req, res, next)
{
  res.render('createPush', {title: 'Create Push Excercise', page: 'createPush'});
}

function DisplayCreatePull(req, res, next)
{
  res.render('createPull', {title: 'Create Pull Excercise', page: 'createPull'});
}

function DisplayCreateLegs(req, res, next)
{
  res.render('createLegs', {title: 'Create Leg Excercise', page: 'createLegs'});
}

function DisplayLogin(req, res,next){
  res.render('login', {title: 'Login', page:'login'})
}

module.exports = {
DisplayLogin: DisplayLogin,
 DisplayHome: DisplayHome,
 DisplayPush: DisplayPush,
 DisplayPull: DisplayPull,
 DisplayLegs: DisplayLegs,
 DisplayCreatePush: DisplayCreatePush,
 DisplayCreatePull: DisplayCreatePull,
 DisplayCreateLegs: DisplayCreateLegs 
}

  