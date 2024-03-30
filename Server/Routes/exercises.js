const express = require('express');
const router = express.Router();

// global auth check middleware we built
// let authCheck = require('../Config/authCheck');
const exercisesController = require('../Controllers/exercises');

/* GET: default route */
router.get('/', (req, res, next) => {
    exercisesController.index(req, res, next);
});

/////////////////////////////////////////////////////////////////////////
// PUSH
/////////////////////////////////////////////////////////////////////////

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
router.get('/edit/:_id', (req, res, next) => {
    exercisesController.displayEditPush(req, res, next);
});

/* POST: /exercises/edit/abc123 => process form submission for updating */
router.post('/edit/:_id', (req, res, next) => {
    exercisesController.updatePush(req, res, next);
});

/////////////////////////////////////////////////////////////////////////
// PULL
/////////////////////////////////////////////////////////////////////////

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
router.get('/edit/:_id', (req, res, next) => {
    exercisesController.displayEditPull(req, res, next);
});

/* POST: /exercises/edit/abc123 => process form submission for updating */
router.post('/edit/:_id', (req, res, next) => {
    exercisesController.updatePull(req, res, next);
});

/////////////////////////////////////////////////////////////////////////
// LEGS
/////////////////////////////////////////////////////////////////////////

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
router.get('/edit/:_id', (req, res, next) => {
    exercisesController.displayEditLegs(req, res, next);
});

/* POST: /exercises/edit/abc123 => process form submission for updating */
router.post('/edit/:_id', (req, res, next) => {
    exercisesController.updateLegs(req, res, next);
});

module.exports = router;