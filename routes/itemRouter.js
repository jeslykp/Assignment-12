import express from "express";
import { createItem, getItems } from "../controllers/itemControler.js";

const router = express.Router();

router.post("/", createItem); 
router.get("/", getItems);     

export default router;
