import { Product } from "../models/product.model.js";
import { ApiError } from "../utils/ApiError.js";

// Service to get a user by ID
const oneProduct = async (id) => {
    try {
        const product = await Product.findById(id);
        if (!product) {
            throw new ApiError(404, "Product not found");
        }
        return product;
    } catch (error) {
        throw new ApiError(500, error.message);
    }
};


const getProducts = async () => {
    try {
        const products = await Product.find()
        return products
    } catch (error) {
        throw new ApiError(500, error.message);
    }
}


const addProduct = async (body) => {
    try {
        // Use your Mongoose model to create a new product
        const product = await Product.create(body);
        return product;
    } catch (error) {

        // Other unexpected errors
        throw new ApiError(500, error.message); // Internal Server Error
    }
}

const deleteProduct = async (id) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(id)
        if (!deletedProduct) {
            throw new ApiError(404, "Product not found");
        }
        return "Product deleted successfully";
    } catch (error) {
        throw new ApiError(500, error.message);
    }
}

const updateProduct = async (id, body) => {
    try {
        console.log(id, body)
        const updateProduct = await Product.findByIdAndUpdate(id, body, { new: true });
        console.log(updateProduct)
        if (!updateProduct) {
            throw new ApiError(404, "Product not found");
        }
        return updateProduct;
    } catch (error) {
        throw new ApiError(500, error.message);
    }
};


export default {
    oneProduct,
    getProducts,
    addProduct,
    deleteProduct,
    updateProduct
}