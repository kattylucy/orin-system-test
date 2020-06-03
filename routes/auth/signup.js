const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const User = require('../../models/Auth');


///ROUTES GET ADMIN

router.post('/', (req,res) => {
    const { user_name, user_email, password, user_type } = req.body;

    User.findOne({user_email: user_email})
    .then(user => {
        if(user){
            //user exist
            res.render({msg:"Email is already registered"})
        }else{
            const newUser = new User({
                user_name,
                user_email,
                password,
                user_type
            })

            ///Hash password
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw error;
                    //set password to hashed
                    newUser.password = hash;
                    newUser.save()
                    .then(data => {
                        console.log(data)
                        res.json(data);
                        ///add redirect once the dashboard is completed
                        //res.redirect('/')
                    })
                    .catch(err => {
                        res.json({message: err})
                    })
                })
            })
        }
    })
    .catch(err => console.log(err))
    
    
});







module.exports = router;