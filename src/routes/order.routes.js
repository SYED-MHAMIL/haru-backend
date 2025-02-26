import { Router } from "express";
import orderController from "../controllers/order.controller.js";

const orderRoute = Router();

orderRoute.get('/all', orderController.getOrders);
orderRoute.get('/:id', orderController.getOrderById);
orderRoute.post('/add', orderController.addOrder);
orderRoute.put('/update/:id', orderController.updateOrder);
orderRoute.delete('/delete/:id', orderController.deleteOrder);

export default orderRoute;
