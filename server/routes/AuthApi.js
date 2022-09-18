import bcrypt from "bcrypt";
import { Router } from "express";
import User from "../models/User.js";
const router = Router();

router.post("/register", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(406).json({ message: "User already exists." });
    return;
  }

  // hash the password
  const saltRounds = 10;
  const salt = await bcrypt.genSaltSync(saltRounds);
  const hashedPassword = await bcrypt.hashSync(password, salt);

  const user = await User({
    email,
    password: hashedPassword,
    firstName,
    lastName,
  });
  await user.save();
  res.status(201).json({ message: "user is created" });
});

export default router;
