const mongoose = require('mongoose');

///register New company
const UserSchema = new mongoose.Schema({
    user_name:{
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    user_email:{
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    password:{
        type:String,
        required: true,
        max: 1024,
        min: 6
    },
    user_type:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);