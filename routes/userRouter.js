import { Router } from "express";
import { createUser, loginUser } from "../controllers/userControler.js";
import { validateLogin } from "../middlewares/userMiddleware.js";



const router = Router()
router.route('/login').post(validateLogin, loginUser)
router.route('/register').post(createUser)



export default router;