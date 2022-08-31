import express from "express";
import mainController from "../controllers/mainController.js"

const router = express.Router();


router.get('/', mainController.home)
router.post('/upload', mainController.upload)
router.get('/update/:id', mainController.getUpdate)
router.put('/update/:id', mainController.putUpdate)
router.delete('/delete/:id', mainController.deletePost)
router.get('/login', mainController.getUser)




export default router