import { Router } from "express";
import userController from "../controllers/user.controller.js";

const userRoute = Router()


userRoute.get('/me/:id', userController.getUser)
userRoute.post('/add', userController.addUser)
userRoute.put('/update', userController.updateUser)
userRoute.delete('/delete', userController.deleteUser)



export default userRoute