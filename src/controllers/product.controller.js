import productService from '../services/product.service.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import asyncHandler from '../utils/asyncHandler.js'

const oneProduct = asyncHandler(async (req, res) => {
    const data = await productService.oneProduct(req?.params?.id)
    return res.status(201).json(
        new ApiResponse(200, data, "User Found Successfully")
    )
})

const getProducts = asyncHandler(async (req, res) => {

    const products = await productService.getProducts()
    return res.status(200).json(
        new ApiResponse(200, products, "Products Found Successfully")
    )


})

const addProduct = asyncHandler(async (req, res) => {
    const data = await productService.addProduct(req?.body)
    return res.status(201).json(
        new ApiResponse(200, data, "Product Added Successfully")
    )

})

const deleteProduct = asyncHandler(async (req, res) => {

    const data = await productService.deleteProduct(req?.params?.id)
    return res.status(201).json(
        new ApiResponse(200, {}, data)
    )

})

const updateProduct = asyncHandler(async (req, res) => {
    const { _id } = req.body
    const data = await productService.updateProduct(_id, req.body)
    return res.status(201).json(
        new ApiResponse(200, data, "Product Updated Successfully")
    )
})




export default {
    oneProduct,
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct,
}