require('dotenv').config();
const express = require('express');
const router = express.Router();
const passport = require('passport');

// import the index controller
const IndexController = require('../Controllers/index');

/* GET Default Route */
router.get('/', (req, res, next)=>
{
    IndexController.DisplayHome(req, res, next);
});

/* GET Home Page */
router.get('/home', (req, res, next)=>
{
    IndexController.DisplayHome(req, res, next);
});

/* GET Login Page */
router.post('/login', (req, res, next)=>{
    IndexController.SubmitLogin(req, res,next);
})

router.get('/login/google',
    passport.authenticate('google',{scope:
    ['profile']}))

router.get('/login/google/callback',
    passport.authenticate('google',{failureRedirect: '/'}), (req, res, next)=>{
        res.redirect('/')
    })

/* GET Push Excercise Page */
router.get('/exercises/push', (req, res, next)=>
{
    IndexController.DisplayPush(req, res, next);
});

/* GET Pull Excercise Page */
router.get('exercises/pull', (req, res, next)=>
{
    IndexController.DisplayPull(req, res, next);
});

/* GET Legs Excercise Page */
router.get('/exercises/legs', (req, res, next)=>
{
    IndexController.DisplayLegs(req, res, next);
});

/* GET create Legs Excercise Page */
router.get('/createLegs', (req, res, next)=>
{
    IndexController.DisplayCreateLegs(req, res, next);
});

/* GET create Pull Excercise Page */
router.get('/createPull', (req, res, next)=>
{
    IndexController.DisplayCreatePull(req, res, next);
});

/* GET create push Excercise Page */
router.get('/createPush', (req, res, next)=>
{
    IndexController.DisplayCreatePush(req, res, next);
});

module.exports = router;
