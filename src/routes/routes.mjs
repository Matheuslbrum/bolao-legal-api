import express from "express";
import { userController } from "../controllers/userController.mjs";
const router = express.Router();

router.get('user/', userController.getAllUsers)
router.post('user/', userController.createUser)

export default router;