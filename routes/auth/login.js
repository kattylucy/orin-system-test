
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

// const NewUser = require('../../models/AdminJobs');


router.post('/', (req,res, next) => {
    passport.authenticate('local', {
        failureMessage: 'something went wrong',
        failureRedirect:'/login',
        failureFlash: true,
        successRedirect:'/dashboard'
    })(req, res, next);
});







module.exports = router;