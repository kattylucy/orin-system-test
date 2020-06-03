const LocalStrategy = require('passport-local').Strategy;
const mongoose  = require('mongoose');
const bcrypt = require('bcryptjs');

//load user modal
const User = require('../models/Auth');


module.exports = function(passport){
    passport.use(
        new LocalStrategy({ email: 'user_email'}, (user_email, password, done) => {
            User.findOne({ user_email: user_email})
                .then(user => {
                    //match user email
                    if(!user){
                        return done(null, false, {msg:"Email is not registered"});
                    }
                   
                    // match password 
                    bcrypt.compare(password, user.password, (err, isMatch) =>{
                        if(err) throw err;

                        if(isMatch){
                            return done(null, user);
                        }else{
                            return done(null, false, {password: "Password Incorrect"})
                        }
                    })
                })
                .catch(err => console.log(err));
        })
    );

    passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
      
      passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
          done(err, user);
        });
      });
}