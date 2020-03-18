const mongoose =require('../database');

const ProductSchema = new mongoose.Schema({
    storeid:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    title:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    link:{
        type: String,
        required: true,
    },
    percentage:{
        type:Number,
        required: true,

    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
});

const Product= mongoose.model('Product', ProductSchema);

module.exports = Product;