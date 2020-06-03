const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create schema - represents how the post looks aka the data 

const NewJobSchema = mongoose.Schema({
    // id:{
    //     type: Schema.Types.ObjectId,
    //     ref:'job',
    //     required: true
    // },
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    date_posted: {
        type: Date,
        default: Date.now
    },
    number_of_kids: {
        type: Number,
        default: 0
    },
    salary: {
        type: Number
    },
    location: {
        type: String
    },
    schedule:{
        type:String
    },
    requirements: [{
        type:String
    }],
    sitter_skills:[{
        type:String
    }],
    salary_type:{
        type:String
    }
});





module.exports = mongoose.model('NewJob', NewJobSchema);