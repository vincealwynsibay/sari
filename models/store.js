const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const storeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    }
    ,
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'

        }],
    user_id: {
        type: String,
        required: true,
    }
})

const Store = new mongoose.model('Store', storeSchema);

module.exports = Store;