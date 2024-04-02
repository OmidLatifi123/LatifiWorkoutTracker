const express = require('express');
const router = express.Router();

// global auth check middleware we built
const exercisesController = require('../Controllers/exercises');

/* GET: default route */
router.get('/', (req, res, next) => {
    exercisesController.index(req, res, next);
});



/////////////////////////////////////////////////////////////////////////
// PUSH
/////////////////////////////////////////////////////////////////////////

/* GET Push Excercise Page */
router.get('/push', (req, res, next)=>
{
    exercisesController.DisplayPush(req, res, next);
});

/* GET: /exercises/createPush => display blank form */
router.get('/createPush', (req, res, next) => {
    exercisesController.DisplayCreatePush(req, res, next);
});

/* POST: /exercises/create => process form submission for creating */
router.post('/createPush', (req, res, next) => {
    exercisesController.createPush(req, res, next);
});

/* GET: /exercises/delete/abc123 => delete selected post doc */
router.get('/delete/:_id', (req, res, next) => {
    exercisesController.deletePush(req, res, next);
});

/* GET: /exercises/edit/abc123 => display blank form */
router.get('/editPush/:_id', (req, res, next) => {
    exercisesController.displayEditPush(req, res, next);
});

/* POST: /exercises/edit/abc123 => process form submission for updating */
router.post('/editPush/:_id', (req, res, next) => {
    exercisesController.updatePush(req, res, next);
});

/////////////////////////////////////////////////////////////////////////
// PULL
/////////////////////////////////////////////////////////////////////////

/* GET Pull Excercise Page */
router.get('/pull', (req, res, next)=>
{
    exercisesController.DisplayPull(req, res, next);
});

/* GET: /exercises/createPull => display blank form */
router.get('/createPull', (req, res, next) => {
    exercisesController.DisplayCreatePull(req, res, next);
});

/* POST: /exercises/create => process form submission for creating */
router.post('/createPull', (req, res, next) => {
    exercisesController.createPull(req, res, next);
});

/* GET: /exercises/delete/abc123 => delete selected post doc */
router.get('/delete/:_id', (req, res, next) => {
    exercisesController.deletePull(req, res, next);
});

/* GET: /exercises/edit/abc123 => display blank form */
router.get('/editPull/:_id', (req, res, next) => {
    exercisesController.displayEditPull(req, res, next);
});

/* POST: /exercises/edit/abc123 => process form submission for updating */
router.post('/editPull/:_id', (req, res, next) => {
    exercisesController.updatePull(req, res, next);
});

/////////////////////////////////////////////////////////////////////////
// LEGS
/////////////////////////////////////////////////////////////////////////

/* GET Legs Excercise Page */
router.get('/legs', (req, res, next)=>
{
    exercisesController.DisplayLegs(req, res, next);
});

/* GET: /exercises/createLegs => display blank form */
router.get('/createLegs', (req, res, next) => {
    exercisesController.DisplayCreateLegs(req, res, next);
});

/* POST: /exercises/create => process form submission for creating */
router.post('/createLegs', (req, res, next) => {
    exercisesController.createLegs(req, res, next);
});

/* GET: /exercises/delete/abc123 => delete selected post doc */
router.get('/delete/:_id', (req, res, next) => {
    exercisesController.deleteLegs(req, res, next);
});

/* GET: /exercises/edit/abc123 => display blank form */
router.get('/editLegs/:_id', (req, res, next) => {
    exercisesController.displayEditLegs(req, res, next);
});

/* POST: /exercises/edit/abc123 => process form submission for updating */
router.post('/editLegs/:_id', (req, res, next) => {
    exercisesController.updateLegs(req, res, next);
});

module.exports = router;