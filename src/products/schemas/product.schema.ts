import * as mongoose from 'mongoose';


export const ProductSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    price: Number,
})
