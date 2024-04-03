let User = require('../Models/user');
const passport = require('passport');


let displayRegisterForm = (req, res, next) => {
    let messages = req.session.messages || [];
    req.session.messages = [];

    res.render('auth/register', { 
        title: 'Register',
        messages: messages
    });
};

let displayLoginForm = (req, res, next) => {
    let messages = '';

    console.log(req.params);
    if (req.params.invalid) {
        messages = 'Invalid Login';
    }

    res.render('auth/login', { 
        title: 'Login', 
        messages: messages 
    });
};

let submitRegister = (req, res, next) => {
    User.register(new User({ username: req.body.username }), req.body.password, (err, newUser) => {
        if (err) {
            return res.render('auth/register', { messages: err });
        }
        else {
            req.login(newUser, (err) => {
                res.redirect('/home');
            });
        }
    });
};

let submitLogin = (req, res, next) => {
    passport.authenticate('local', (err, user) => {
        console.log(err);
        if (err) {
            return res.redirect('/login/invalid');
        }
        else {
            req.login(user, (err) => {
                if (user) {
                    return res.redirect('/home');
                }
                else {
                    return res.redirect('/login/invalid');
                }             
            });
        }
    })(req, res, next);
};


let logout = (req, res, next) => {
    req.logout((err) => {
        return res.redirect('/');
    })
};

module.exports = {
     displayLoginForm, displayRegisterForm, submitRegister, submitLogin, logout
};