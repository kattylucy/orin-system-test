
const express = require('express');
const router = express.Router();
const Users = require('../../models/Auth');


/// GET USER BY TYPE 
/// company_creator, sitter, family, company_admin

router.get('/', (req, res) => {
    const { user_type } = req.body;

    const users = Users.find({user_type: user_type})
    users.then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err})
    })
});


/// GET USER BY ID

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const users = Users.findById(id)
    users.then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err})
    })
});








module.exports = router;