const mongoose = require('mongoose');

//Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        index: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        index: true,
        required: true
    },
    password: String,
    phone: String,
    avatar: String,
    isAdmin: { type: Boolean, default: false, required: true },
}, {
    timestamps: true
})

//mOdel
//tham so thu 3 la colections name 
const User = mongoose.model('User', userSchema, 'users');

module.exports = User