import fs from 'fs';
import { ApiResponse } from '../utils/ApiResponse.js';
import asyncHandler from '../utils/asyncHandler.js';
import { getImagePath } from '../utils/function.js';

const uploadSingle = asyncHandler(async (req, res, next) => {

    return res.status(201).json(
        new ApiResponse(200, req.file.filename, "file uploaded successfully")
    )
})


const getFile = asyncHandler(async (req, res, next) => {
    const imageName = req.params.name;
    const imagePath = getImagePath(imageName);

    if (fs.existsSync(imagePath)) {
        res.sendFile(imagePath);
    } else {
        res.status(404).send('Image not found');
    }
})

export default {
    getFile,
    uploadSingle
};

