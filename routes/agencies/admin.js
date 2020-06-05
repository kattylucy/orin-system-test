const express = require('express');
const router = express.Router();
const Agency = require('../../models/Auth');


/// GET ALL AGENCIES
router.get('/', (req, res) => {
    const { user_type } = req.body;

    const agency = Agency.find({user_type: user_type})
    agency.then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err})
    })
});


/// GET ONE AGENCY
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const agency = Agency.findById(id)
    agency.then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err})
    })
});








module.exports = router;