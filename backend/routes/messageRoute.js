import express from "express";
import { verifyToken } from "../verifyToken.js"
import { message } from "../controllers/messageController.js"

const router = express.Router();

router.post("/send",verifyToken,message); 

export default router;