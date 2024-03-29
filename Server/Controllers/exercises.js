// post model for CRUD
let Push = require('../Models/push');
let Pull = require('../Models/pull');
let Legs = require('../Models/legs');

let push = async (req, res, next) => {
    // fetch all post docs 
    let push = await Push.find();

    // console.log(post);
    res.render('exercises/push', { 
        title: 'Push Exercises',
        push: push
    });
};

let pull = async (req, res, next) => {
    // fetch all post docs 
    let pull = await Pull.find();

    // console.log(post);
    res.render('exercises/pull', { 
        title: 'Pull Exercises',
        pull: pull
    });
};

let legs = async (req, res, next) => {
    // fetch all post docs 
    let legs = await Legs.find();

    // console.log(post);
    res.render('exercises/legs', { 
        title: 'Legs Exercises',
        legs: legs
    });
};

let DisplayCreatePush = async(req, res, next) => {


    res.render('exercises/createPush', { title: 'Add New Push Exercise' });

};

let createPush = async (req, res, next) => {
    // save new post to DB
    await Push.create(req.body);

    // redirect
    res.redirect('/push');
};

let deletePush = async (req, res, next) => {
    // remove selected doc
    await Push.findByIdAndDelete(req.params._id);

    // redirect
    res.redirect('/push');
};

let displayEditPush = async (req, res, next) => {
    let push = await Push.findById(req.params._id);

    res.render('exercises/push', { 
        title: 'Update Push',
        push: push,
    });
};

let updatePush = async (req, res, next) => {
    await Push.findByIdAndUpdate(req.params._id, req.body);

    res.redirect('/push');
};

/////////////////////////////////////////////////////////////////////////
// PULL
////////////////////////////////////////////////////////////////////////

let DisplayCreatePull = async(req, res, next) => {


    res.render('exercises/createPull', { title: 'Add New Pull Exercise' });

};

let createPull = async (req, res, next) => {
    // save new post to DB
    await Pull.create(req.body);

    // redirect
    res.redirect('/pull');
};

let deletePull = async (req, res, next) => {
    // remove selected doc
    await Pull.findByIdAndDelete(req.params._id);

    // redirect
    res.redirect('/pull');
};

let displayEditPull = async (req, res, next) => {
    let pull = await Pull.findById(req.params._id);

    res.render('exercises/pull', { 
        title: 'Update Pull',
        pull: pull,
    });
};

let updatePull = async (req, res, next) => {
    await Pull.findByIdAndUpdate(req.params._id, req.body);

    res.redirect('/pull');
};


//////////////////////////////////////////////////////////////////////
// LEGS
//////////////////////////////////////////////////////////////////////

let DisplayCreateLegs = async(req, res, next) => {


    res.render('exercises/createLegs', { title: 'Add New Leg Excercise' });

};

let createLegs = async (req, res, next) => {
    // save new post to DB
    await Legs.create(req.body);

    // redirect
    res.redirect('/push');
};

let deleteLegs = async (req, res, next) => {
    // remove selected doc
    await Legs.findByIdAndDelete(req.params._id);

    // redirect
    res.redirect('/Legs');
};

let displayEditLegs = async (req, res, next) => {
    let legs = await Legs.findById(req.params._id);

    res.render('exercises/legs', { 
        title: 'Update Legs',
        legs: legs,
    });
};

let updateLegs = async (req, res, next) => {
    await Legs.findByIdAndUpdate(req.params._id, req.body);

    res.redirect('/legs');
};


// make public
module.exports = {
    push, pull, legs, 
    DisplayCreateLegs, DisplayCreatePull, DisplayCreatePush, 
    createPush, createPull, createLegs,
    deletePush, deletePull, deleteLegs,
    deletePush, deletePull, deleteLegs,
    updatePush, updatePull, updateLegs
};