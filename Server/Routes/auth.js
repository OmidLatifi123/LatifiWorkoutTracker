const express = require('express');
const router = express.Router();
const passport = require('passport');

const AuthController = require('../Controllers/auth');

router.get('/login', (req, res, next)=>{
    AuthController.displayLoginForm(req, res, next);
})

router.post('/login', (req, res, next) => {
    AuthController.submitLogin(req, res, next);
})

router.get('/register', (req, res, next)=>{
    AuthController.displayRegisterForm(req, res, next);
})

router.post('/register', (req, res, next)=>{
    AuthController.submitRegister(req, res, next);
})

/* GET Login Page */
router.get('/login/:invalid', (req, res, next) => {
    AuthController.displayLoginForm(req, res, next);
});

router.get('/logout', (req, res, next) => {
    AuthController.logout(req, res, next);
});

router.get('/google',
    passport.authenticate('google',{scope:
    ['profile']}))

router.get('/google/callback',
    passport.authenticate('google',{failureRedirect: '/'}), (req, res, next)=>{
        res.redirect('/home')
    })

    module.exports = router;
