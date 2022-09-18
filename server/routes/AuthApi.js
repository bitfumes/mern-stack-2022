import { Router } from "express";
const router = Router();

router.post("/register", (req, res) => {
  // get all form data
  // check if user exists with same email
  // hash the password
  // store user
  res.json({ message: "user is created" });
});

export default router;
