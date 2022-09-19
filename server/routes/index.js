import { Router } from "express";
import passport from "passport";
import AuthApi from "./AuthApi.js";
import TransactionsApi from "./TransactionsApi.js";
import UserApi from "./UserApi.js";
const router = Router();

router.use(
  "/transaction",
  passport.authenticate("jwt", { session: false }),
  TransactionsApi
);

router.use("/auth", AuthApi);
router.use("/user", UserApi);

export default router;
