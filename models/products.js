const mongoose = require('mongoose');

const productSchema = new mongoose.Schema ({
    name: String,
    shortDescription: String,
    description: String,
    img: String,
    price: {type: Number, min: 0},
    qty: {type: Number, min: 0}
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
