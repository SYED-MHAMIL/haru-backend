import cardService from "../services/card.service.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const getCards = asyncHandler(async (req, res) => {
    const cards = await cardService.getCards();
    return res.status(200).json(new ApiResponse(200, cards, "Cards Found Successfully"));
});

const getCard = asyncHandler(async (req, res) => {
    const data = await cardService.getCard(req.params.id);
    return res.status(200).json(new ApiResponse(200, data, "Card Found Successfully"));
});

const addCard = asyncHandler(async (req, res) => {
    const data = await cardService.addCard(req.body);
    return res.status(201).json(new ApiResponse(200, data, "Card Added Successfully"));
});

const updateCard = asyncHandler(async (req, res) => {
    const { _id } = req.body;
    const data = await cardService.updateCard(_id, req.body);
    return res.status(201).json(new ApiResponse(200, data, "Card Updated Successfully"));
});

const deleteCard = asyncHandler(async (req, res) => {
    const data = await cardService.deleteCard(req.params.id);
    return res.status(200).json(new ApiResponse(200, {}, "Card Deleted Successfully"));
});

export default {
    getCards,
    getCard,
    addCard,
    updateCard,
    deleteCard
};
