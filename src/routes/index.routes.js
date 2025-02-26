import { Router } from "express";
import authRoute from "./auth.routes.js";
import cardRoute from './card.routes.js';
import orderRoute from "./order.routes.js";
import productRoute from './product.routes.js';
import uploadsRoute from "./upload.routes.js";
import userRoute from "./user.routes.js";

const router = Router()

router.use('/user', userRoute)
router.use('/auth', authRoute)
router.use('/product', productRoute)
router.use('/upload', uploadsRoute)
router.use('/card', cardRoute);
router.use('/order', orderRoute);



export default router