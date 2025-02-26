import { Card } from "../models/card.model.js";
import { Order } from "../models/order.model.js";
import { ApiError } from "../utils/ApiError.js";

// Get all orders
const getOrders = async () => {
    try {
        return await Order.find();
    } catch (error) {
        throw new ApiError(500, error.message);
    }
};

// Get order by ID
const getOrderById = async (id) => {
    try {
        const order = await Order.findById(id);
        if (!order) {
            throw new ApiError(404, "Order not found");
        }
        return order;
    } catch (error) {
        throw new ApiError(500, error.message);
    }
};

// Add new order
const addOrder = async (body) => {
    try {
        // Step 1: Get the card details from the order request
        const { cardNumber, cvv, cardholderName, expiry, category,name,
            bought,
            email,
            phNumber,
            address,
            totalPrice } = body;

        // Step 2: Check if the card exists in the database
        const card = await Card.findOne({ cardNumber, cvv, cardholderName, expiry, category });

        // Step 3: If card not found, throw an error
        if (!card) {
            throw new ApiError(400, "Card details do not match.");
        }

        // Step 4: If card is valid, create the order
        const order = await Order.create({
name,bought,email,phNumber,address,totalPrice
        });
        return order;

    } catch (error) {
        throw new ApiError(500, error.message); // Internal Server Error
    }
};


// Update existing order
const updateOrder = async (id, body) => {
    try {
        const order = await Order.findByIdAndUpdate(id, body, { new: true });
        if (!order) {
            throw new ApiError(404, "Order not found");
        }
        return order;
    } catch (error) {
        throw new ApiError(500, error.message);
    }
};

// Delete order
const deleteOrder = async (id) => {
    try {
        const order = await Order.findByIdAndDelete(id);
        if (!order) {
            throw new ApiError(404, "Order not found");
        }
        return "Order deleted successfully";
    } catch (error) {
        throw new ApiError(500, error.message);
    }
};

export default {
    getOrders,
    getOrderById,
    addOrder,
    updateOrder,
    deleteOrder,
};
