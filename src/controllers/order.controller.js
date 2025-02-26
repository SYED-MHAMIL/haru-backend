import orderService from '../services/order.service.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import asyncHandler from '../utils/asyncHandler.js';

const getOrders = asyncHandler(async (req, res) => {
    const orders = await orderService.getOrders();
    return res.status(200).json(
        new ApiResponse(200, orders, "Orders Found Successfully")
    );
});

const getOrderById = asyncHandler(async (req, res) => {
    const order = await orderService.getOrderById(req.params.id);
    return res.status(200).json(
        new ApiResponse(200, order, "Order Found Successfully")
    );
});

const addOrder = asyncHandler(async (req, res) => {
    const order = await orderService.addOrder(req.body);
    return res.status(201).json(
        new ApiResponse(200, order, "Order Added Successfully")
    );
});

const updateOrder = asyncHandler(async (req, res) => {
    const order = await orderService.updateOrder(req.params.id, req.body);
    return res.status(200).json(
        new ApiResponse(200, order, "Order Updated Successfully")
    );
});

const deleteOrder = asyncHandler(async (req, res) => {
    const data = await orderService.deleteOrder(req.params.id);
    return res.status(200).json(
        new ApiResponse(200, {}, "Order Deleted Successfully")
    );
});

export default {
    getOrders,
    getOrderById,
    addOrder,
    updateOrder,
    deleteOrder,
};
