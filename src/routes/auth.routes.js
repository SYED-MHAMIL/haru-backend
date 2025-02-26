import { Router } from "express";
import userController from "../controllers/user.controller.js";

const authRoute = Router()


authRoute.post('/login', userController.login)



export default authRoute