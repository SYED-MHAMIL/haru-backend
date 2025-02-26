import { Card } from "../models/card.model.js";
import { ApiError } from "../utils/ApiError.js";

const getCards = async () => {
    try {
        const cards = await Card.find();
        return cards;
    } catch (error) {
        throw new ApiError(500, "gher jao beta");
    }
};

const getCard = async (id) => {
    try {
        const card = await Card.findById(id);
        if (!card) {
            throw new ApiError(404, "Card not found");
        }
        return card;
    } catch (error) {
        throw new ApiError(500, error.message);
    }
};

const addCard = async (body) => {
      const {email,cardNumber,cardholderName,category,cvv, expiry } = body;
    try {
        const card = await Card.create({cardholderName,email,cardNumber, cvv,expiry,category});
        return card;
    } catch (error) {
        throw new ApiError(500, error.message);
    }
};

const updateCard = async (id, body) => {
    try {
        const updatedCard = await Card.findByIdAndUpdate(id, body, { new: true });
        if (!updatedCard) {
            throw new ApiError(404, "Card not found");
        }
        return updatedCard;
    } catch (error) {
        throw new ApiError(500, error.message);
    }
};

const deleteCard = async (id) => {
    try {
        const deletedCard = await Card.findByIdAndDelete(id);
        if (!deletedCard) {
            throw new ApiError(404, "Card not found");
        }
        return "Card deleted successfully";
    } catch (error) {
        throw new ApiError(500, error.message);
    }
};

export default {
    getCards,
    getCard,
    addCard,
    updateCard,
    deleteCard
};
