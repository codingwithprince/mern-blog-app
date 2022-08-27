import express from "express";
import mainController from "../controllers/mainController.js"

const router = express.Router();


router.get('/', mainController.home)
router.get('/w', (req, res)=> {
    res.send('working')
})



export default router