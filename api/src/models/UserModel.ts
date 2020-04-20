const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    authToken: {
        type: String,
        default: ""
    },
    resetToken: {
        types: String,
        default: ""
    },
    active: {
        type: Boolean,
        default: true,
        required: true
    },
    company: {
        type: String,
        default: "Hydro Heaven Spas",
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    }
});

const UserModel = mongoose.model('Users', UserSchema);

export default UserModel;