import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";

// Service to get a user by ID
const getUser = async (id) => {
    try {
        const user = await User.findById(id);
        if (!user) {
            throw new ApiError(404, "User not found");
        }
        return user;
    } catch (error) {
        throw new ApiError(500, error.message);
    }
};

// Service to add a new user
const addUser = async (body) => {
    try {
        // Use your Mongoose model to create a new user
        const newUser = await User.create(body);
        return newUser;
    } catch (error) {
        if (error.name === "ValidationError") {
            // Mongoose validation error
            throw new ApiError(400, error.message); // Bad Request
        }
        if (error.code === 11000) {
            // Duplicate key error (e.g., unique constraint on email)
            throw new ApiError(409, "User already exists"); // Conflict
        }
        // Other unexpected errors
        throw new ApiError(500, error.message); // Internal Server Error
    }
};


// Service to update a user
const updateUser = async (id, body) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(id, body, { new: true });
        if (!updatedUser) {
            throw new ApiError(404, "User not found");
        }
        return updatedUser;
    } catch (error) {
        throw new ApiError(500, error.message);
    }
};

// Service to delete a user
const deleteUser = async (id) => {
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            throw new ApiError(404, "User not found");
        }
        return "User deleted successfully";
    } catch (error) {
        throw new ApiError(500, error.message);
    }
};

// Authentication: Login
const login = async (body) => {
    try {
        const { email, password } = body
        const user = await User.findOne({ email });
        if (!user) {
            throw new ApiError(400, "Invalid email or password");
        }

        const isPasswordCorrect = await user.isPasswordCorrect(password);
        if (!isPasswordCorrect) {
            throw new ApiError(400, "Invalid email or password");
        }

        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        // Save the refresh token to the user's record
        user.refreshToken = refreshToken;
        await user.save();

        // Convert to plain object and delete the password field
        const sanitizedUser = user.toObject();
        delete sanitizedUser.password;
        console.log(sanitizedUser)

        return { accessToken, refreshToken, sanitizedUser };
    } catch (error) {
        throw new ApiError(500, error.message);
    }
};





export default {
    addUser,
    deleteUser,
    getUser,
    login,
    updateUser
};
