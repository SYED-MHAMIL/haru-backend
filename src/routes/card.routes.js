import { Router } from "express";
import cardController from "../controllers/card.controller.js";

const cardRoute = Router();

cardRoute.get("/all", cardController.getCards); // Get all cards
cardRoute.get("/:id", cardController.getCard); // Get a specific card by ID
cardRoute.post("/add", cardController.addCard); // Add a new card
cardRoute.put("/update", cardController.updateCard); // Update an existing card
cardRoute.delete("/delete/:id", cardController.deleteCard); // Delete a card by ID

export default cardRoute;
