import { Router } from "express";
import productController from "../controllers/product.controller.js";

const productRoute = Router()


productRoute.get('/all', productController.getProducts)
productRoute.get('/:id', productController.oneProduct)
productRoute.post('/add', productController.addProduct)
productRoute.put('/update', productController.updateProduct)
productRoute.delete('/delete/:id', productController.deleteProduct)



export default productRoute