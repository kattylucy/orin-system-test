const express = require('express');
const router = express.Router();
const NewSitterProfile = require('../../models/AdminProfiles');



///ROUTES POST SITTER PROFILE
router.post('/new', (req, res) => {
    const newSitter = new NewSitterProfile({
        name: req.body.name,
        bio: req.body.bio,
        location: req.body.location,
        phone_number: req.body.phone_number,
        joined_on: req.body.joined_on,
        years_of_experience: req.body.years_of_experience,
        sitter_skills: req.body.sitter_skills,
        education: req.body.education,
        profile_picture: req.body.profile_picture,
        email: req.body.email
    });

    newSitter.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err})
        })
});



//ROUTE EDIT SITTER PROFILE
router.post('/edit/:id', (req, res) => {
    const sitterID = req.params.id;

    const newName = req.body.name;
    const newBio= req.body.bio;
    const newEmail = req.body.email;
    const newLocation = req.body.location;
    const newPhone_number = req.body.phone_number;
    const newYears = req.body.years_of_experience;
    const newEducation= req.body.education;
    const new_sitter_skills= req.body.sitter_skills;
    const new_profile_picture=req.body.profile_picture;

    NewSitterProfile.findById(sitterID)
    .then(item => {
        item.name = newName;
        item.bio = newBio;
        item.location = newLocation;
        item.email = newEmail;
        item.phone_number = newPhone_number;
        item.numberYears = newYears;
        item.new_sitter_skills = new_sitter_skills;
        item.newEducation = newEducation;
        item.new_profile_picture = new_profile_picture;
        return item.save();
    }).then(result => {
        result.json({message:"sitter profile updated"})
    })
    .catch(err => {
        res.json({message: err})
    })
});


//ROUTE DELETE SITTER PROFILE

router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    NewSitterProfile.findByIdAndRemove(id)
    .then(result => {
        result.json({message:"sitter profile was deleted"})
    })
    .catch(err => {
        res.json({message: err})
    })
});







module.exports = router;