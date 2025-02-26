import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // The name field is required
        trim: true, // Automatically trims whitespace
    },
    price: {
        type: String,
        required: true, // The price field is required
        min: 0, // Ensures price is non-negative
    },
    discountPercent: {
        type: Number,
        default: 0, // Defaults to 0 if no discount is provided
        min: 0,
        max: 100, // Ensures discount is between 0 and 100
    },
    description: {
        type: String,
        trim: true,
    },
    detail: {
        type: String,
        trim: true,
    },
    category: {
        type: String,
        required: true, // Makes the category mandatory
        trim: true,
    },
    image1: {
        type: String,
        required: true, // Image URL is required
        trim: true,
    },
    stock: {
        type: Number,
        required: true,
        min: 0, // Ensures stock is non-negative
    },
}, {
    timestamps: true, // Adds createdAt and updatedAt timestamps
});

// Creating a model from the schema
export const Product = mongoose.model('Product', productSchema);
