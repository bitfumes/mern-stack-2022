import { Router } from "express";
import * as CategoryController from "../controller/CategoryController.js";
const router = Router();

router.delete("/:id", CategoryController.destroy);
router.patch("/:id", CategoryController.update);
router.post("/", CategoryController.create);

export default router;
