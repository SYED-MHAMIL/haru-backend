
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import router from './routes/index.routes.js';
import { ApiError } from "./utils/ApiError.js";

const app = express()

// app.use(cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true
// }))
app.use(cors())

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser())
app.use('/api/uploads', express.static('uploads'));



app.use('/api', router)


const errorHandler = (err, req, res, next) => {
    if (err instanceof ApiError) {
        // Custom error (instance of ApiError)
        return res.status(err.statusCode || 500).json({
            status: err.statusCode,
            success: err.success,
            message: err.message,
            errors: err.errors || [],
        });
    }

    // For other errors, send a generic error response
    return res.status(500).json({
        success: false,
        message: "Internal Server Error",
    });
};

// Add the error handler to your Express app
app.use(errorHandler);

export default app