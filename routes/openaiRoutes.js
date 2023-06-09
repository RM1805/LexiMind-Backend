import express from "express";
import { summaryController, paragraphController, chatbotController, codeController, imageController } from "../controllers/openaiController.js";



const router = express.Router();

router.post("/summary", summaryController);
router.post("/paragraph", paragraphController);
router.post("/chatbot", chatbotController);
router.post("/code-generator", codeController);
router.post("/image-generator", imageController);




export default router;