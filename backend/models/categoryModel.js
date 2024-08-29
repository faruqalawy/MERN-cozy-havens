import mongoose from "mongoose";

const categoryItemsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    imageUrl: { type: String, required: true},
    country: { type: String, required: true},
    city: { type: String, required: true},
    price: { type: Number, required: true},
    isPopular: { type: Boolean, required: true}
})

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true},
    items: [categoryItemsSchema]
})

export default mongoose.model('Category', categorySchema);
