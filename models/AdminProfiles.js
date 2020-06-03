const mongoose = require('mongoose');

//create schema - represents how the post looks aka the data 

const NewSitterProfileSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    bio:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    phone_number:{
        type:String
    },
    joined_on: {
        type: Date,
        default: Date.now
    },
    years_of_experience: {
        type: Number,
        default: 0
    },
    education: {
        type: String,
    },
    location: {
        type: String
    },
    profile_picture:{
        type: String,
        required: true
    },
    sitter_skills:[{
        type:String
    }]
});





module.exports = mongoose.model('NewSitterProfile', NewSitterProfileSchema);