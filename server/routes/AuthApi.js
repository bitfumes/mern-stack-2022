import { Router } from "express";
import { login, register } from "../controller/AuthController.js";
const router = Router();

router.post("/register", register);
router.post("/login", login);

export default router;
