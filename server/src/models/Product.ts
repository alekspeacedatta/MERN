import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
    }
)

export const ProductModel = mongoose.model('Product', ProductSchema )