import { Router } from "express";
import passport from "passport";
import AuthApi from "./AuthApi.js";
import CategoryApi from "./CategoryApi.js";
import TransactionsApi from "./TransactionsApi.js";
import UserApi from "./UserApi.js";
const router = Router();

const auth = passport.authenticate("jwt", { session: false });

router.use("/transaction", auth, TransactionsApi);
router.use("/auth", AuthApi);
router.use("/user", UserApi);
router.use("/category", auth, CategoryApi);

export default router;
