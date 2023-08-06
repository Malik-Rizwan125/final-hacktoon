import express from "express";
import { doLoginUp, doSignUp } from '../controlers/userController.js'
const router = express.Router();



router.post('/signup', doSignUp)
router.post('/login', doLoginUp)

export default router