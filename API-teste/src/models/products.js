const mongoose =require('mongoose');

const ProductSchema = new mongoose.Schema({
    productid:{
        type: String,
        required: true,
        unique: true,
    },
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