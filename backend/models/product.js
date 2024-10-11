const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
        type : String,
        required : true
    },
    productPrice: {
        type : Number,
        default : 0
    },
    productId: {
        type : String,
        required : true
    },
    productImg: {
        type : String,
        required : true
    },
    productCategory: {
        type : String,
        required : true
    },
    productStock: {
        type : Number,
        default : 0
    },
    productDetails: {
        type : String,
        required : true
    }
}, {timestamps : true});

const Product = mongoose.model('product' , productSchema);

module.exports = Product;
