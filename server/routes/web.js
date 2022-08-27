import express from "express";
import mainController from "../controllers/mainController.js"

const router = express.Router();


router.get('/', mainController.home)
router.post('/upload', mainController.upload)



export default router