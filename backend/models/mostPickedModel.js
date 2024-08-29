import mongoose from "mongoose";

const mostPickedSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true},
    imageUrl: { type: String, required: true},
    country: { type: String, required: true},
    city: { type: String, required: true},
    price: { type: Number, required: true},
    unit: {
        type: String,
        required: true,
        enum: ["night"]
    }
})

export default mongoose.model('MostPicked', mostPickedSchema);
