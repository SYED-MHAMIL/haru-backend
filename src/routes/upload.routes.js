import { Router } from "express";
import uploadController from "../controllers/upload.controller.js";
import upload from "../middlewares/upload.middleware.js";

const router = Router()


router.post('/single', [upload.single('file')], uploadController.uploadSingle);
router.get('/:name', uploadController.getFile)




export default router