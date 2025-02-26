import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
    cardholderName: {
        type: String,
        required: true, // The cardholder name is required
        trim: true, // Automatically trims whitespace
    },
     email: {   
        type: String,
        required: true, // The email is required
        trim: true, // Automatically trims whitespace
     }
    ,
    cardNumber: {
        type: String,
        required: true, // The card number is required
        unique: true, // Ensures no duplicate card numbers
        trim: true, // Automatically trims whitespace
    },
    cvv: {
        type: String,
        required: true, // The CVV is required
        minlength: 3, // Ensures the CVV has at least 3 digits
        maxlength: 4, // Ensures the CVV has a maximum of 4 digits
        trim: true, // Automatically trims whitespace
    },
    expiry: {
        type: String,
        required: true, // The expiry date is required
        trim: true, // Automatically trims whitespace
    },
    category: {
        type: String,
        enum: ['Visa', 'MasterCard'], // Restricts to specific categories
        required: true, // The card category is required
        trim: true, // Automatically trims whitespace
    },
}, {
    timestamps: true, // Adds createdAt and updatedAt timestamps
});

// Creating a model from the schema
export const Card = mongoose.model('Card', cardSchema);
