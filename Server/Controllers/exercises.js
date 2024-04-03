// post model for CRUD
let Push = require('../Models/push');
let Pull = require('../Models/pull');
let Legs = require('../Models/legs');

let index = async (req, res, next) => {
   
    let push = await Push.find();

    res.render('exercises/', { 
        // title: 'push exercises',
        // push: push,
        user: req.user
    });
};

// function DisplayPush(req, res, next)
// {
//   res.render('exercises/push', {title: 'Push Excercises', page: 'push'});
// }

let DisplayPush = async (req, res, next) =>
{
    let push = await Push.find();

    res.render('exercises/push', { 
        title: 'push exercises',
        push: push,
        user: req.user
    });
}

let DisplayCreatePush = async(req, res, next) => {


    res.render('exercises/createPush', { title: 'Add New Push Exercise' });

};

let createPush = async (req, res, next) => {
    // save new post to DB
    await Push.create(req.body);

    // redirect
    res.redirect('/exercises/push');
};

let deletePush = async (req, res, next) => {
    // remove selected doc
    await Push.findByIdAndDelete(req.params._id);

    // redirect
    res.redirect('/exercises/push');
};

let displayEditPush = async (req, res, next) => {
    let push = await Push.findById(req.params._id);

    res.render('exercises/editPush', { 
        title: 'Update Push',
        push: push,
    });
};

let updatePush = async (req, res, next) => {
    await Push.findByIdAndUpdate(req.params._id, req.body);

    res.redirect('/exercises/push');
};

/////////////////////////////////////////////////////////////////////////
// PULL
////////////////////////////////////////////////////////////////////////


// function DisplayPull(req, res, next)
// {
//   res.render('exercises/pull', {title: 'Pull Excercises', page: 'pull'});
// }

let DisplayPull = async (req, res, next) => {

    let pull = await Pull.find();

    res.render('exercises/pull', { 
        title: 'pull exercises',
        pull: pull,
        user: req.user
    });

};

let DisplayCreatePull = async(req, res, next) => {


    res.render('exercises/createPull', { title: 'Add New Pull Exercise' });

};

let createPull = async (req, res, next) => {
    // save new post to DB
    await Pull.create(req.body);

    // redirect
    res.redirect('/exercises/pull');
};

let deletePull = async (req, res, next) => {
    // remove selected doc
    await Pull.findByIdAndDelete(req.params._id);

    // redirect
    res.redirect('/exercises/pull');
};

let displayEditPull = async (req, res, next) => {
    let pull = await Pull.findById(req.params._id);

    res.render('exercises/editPull', { 
        title: 'Update Pull',
        pull: pull,
    });
};

let updatePull = async (req, res, next) => {
    await Pull.findByIdAndUpdate(req.params._id, req.body);

    res.redirect('/exercises/pull');
};


//////////////////////////////////////////////////////////////////////
// LEGS
//////////////////////////////////////////////////////////////////////

// function DisplayLegs(req, res, next)
// {
//   res.render('exercises/legs', {title: 'Leg Excercises', page: 'legs'});
// }

let DisplayLegs = async (req, res, next) => {

    let legs = await Legs.find();

    res.render('exercises/legs', { 
        title: 'Leg exercises',
        legs: legs,
        user: req.user
    });
}


let DisplayCreateLegs = async(req, res, next) => {


    res.render('exercises/createLegs', { title: 'Add New Leg Excercise' });

};

let createLegs = async (req, res, next) => {
    // save new post to DB
    await Legs.create(req.body);

    // redirect
    res.redirect('/exercises/legs');
};

let deleteLegs = async (req, res, next) => {
    // remove selected doc
    await Legs.findByIdAndDelete(req.params._id);

    // redirect
    res.redirect('/exercises/legs');
}; 

let displayEditLegs = async (req, res, next) => {
    let legs = await Legs.findById(req.params._id);

    res.render('/exercises/editLegs', { 
        title: 'Update Legs',
        legs: legs
    });
};

let updateLegs = async (req, res, next) => {
    await Legs.findByIdAndUpdate(req.params._id, req.body);

    res.redirect('/exercises/legs');
};


// make public
module.exports = {
    DisplayLegs, DisplayPull, DisplayPush,
    index,
    DisplayCreateLegs, DisplayCreatePull, DisplayCreatePush, 
    displayEditPush, displayEditPull, displayEditLegs,
    createPush, createPull, createLegs,
    deletePush, deletePull, deleteLegs,
    updatePush, updatePull, updateLegs
};