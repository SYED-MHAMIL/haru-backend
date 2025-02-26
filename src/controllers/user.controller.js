import userService from '../services/user.service.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import asyncHandler from '../utils/asyncHandler.js'

const getUser = asyncHandler(async (req, res) => {
    const data = await userService.getUser(req?.params?.id)
    return res.status(201).json(
        new ApiResponse(200, data, "User Found Successfully")
    )
})

const addUser = asyncHandler(async (req, res) => {
    const data = await userService.addUser(req?.body)
    return res.status(201).json(
        new ApiResponse(200, data, "User registered Successfully")
    )

})

const updateUser = asyncHandler((req, res) => {
    const data = userService.updateUser()
    res.send(data)
})

const deleteUser = asyncHandler((req, res) => {
    const data = userService.deleteUser()
    res.send(data)
})

const login = asyncHandler(async (req, res) => {

    // Call the login service with the email and password from the request body
    const { accessToken, refreshToken, sanitizedUser } = await userService.login(req?.body);

    // Return the response with a success message and the relevant data
    return res.status(200).json(
        new ApiResponse(200, { accessToken, refreshToken, user: sanitizedUser }, "Login successful")
    );
});


export default { getUser, addUser, updateUser, deleteUser, login }