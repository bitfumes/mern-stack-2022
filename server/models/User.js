import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstName: { type: String, required: ["First name field is required"] },
    lastName: { type: String, required: ["Last name field is required"] },
    email: { type: String, required: ["Email field is required"] },
    password: { type: String, required: ["Password field is required"] },
    categories: [{ label: String, icon: String }],
  },
  { timestamps: true }
);

export default new mongoose.model("User", userSchema);
