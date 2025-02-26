import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    bought: [{
        name: {type : String , default : "zain"},
        qty:{type: Number, default: "0"}
    }] 
    ,
    status :  {type: String,default: "Pending"}
    ,
    email: {
        type: String,
    },
    phNumber: {
        type: String,
    },
    address: {
        type: String,
    },
    // paymentVerified: {
    //     type: Boolean,
    // },
    totalPrice: {
        type: String
    },
    orderDate: {
        type: Date,
        default: Date.now, // By default, sets the current date
    },
    deliveryDate: {
        type: Date,
        default: function () {
            return new Date().setDate(new Date().getDate() + 7); // By default, sets delivery date to 7 days later
        },
    },
}, {
    timestamps: true, // Adds createdAt and updatedAt timestamps
});

// Creating a model from the schema
export const Order = mongoose.model('Order', orderSchema);
