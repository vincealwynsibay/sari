const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        enum: ['buyer', 'seller', 'admin'],
        required: true
    }
})


const User = new mongoose.model('User', storeSchema);

module.exports = Store;