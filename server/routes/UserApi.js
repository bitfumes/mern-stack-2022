import { Router } from "express";
import passport from "passport";
const router = Router();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({ user: req.user });
  }
);

export default router;
