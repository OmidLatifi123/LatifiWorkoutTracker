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



module.exports = router;
