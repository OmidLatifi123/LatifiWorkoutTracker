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

router.get('/about', (req, res, next)=>
{
    IndexController.DisplayAbout(req, res, next);
});
/* GET Home Page */
router.get('/home', (req, res, next)=>
{
    IndexController.DisplayHome(req, res, next);
});

router.get('/login', (req, res, next)=>{IndexController.DisplayLogin(req, res, next);});

router.get('/register', (req, res, next)=>{IndexController.DisplayRegister(req, res, next);});

module.exports = router;
