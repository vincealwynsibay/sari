const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    productType: {
        type: String,
        lowercase: true,
        enum: ['food', 'utilities', 'clothes'],
        required: true
    },
    store_id: {
        type: Schema.Types.ObjectId,
        ref: 'Store'
    }

})

const Product = new mongoose.model('Product', productSchema);

module.exports = Product;