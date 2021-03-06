const mongoose =require('../database');

const StoreSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    logo:{
        type: String,
        required: true,
    },
    link:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
});

const Store= mongoose.model('Store', StoreSchema);

module.exports = Store;