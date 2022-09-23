import mongoose from "mongoose";
const { Schema } = mongoose;

const transactionSchema = new Schema({
  amount: Number,
  description: String,
  type: {
    type: String,
    enum: ["expense", "income", "transfer"],
    default: "expense",
  },
  user_id: mongoose.Types.ObjectId,
  category_id: mongoose.Types.ObjectId,
  date: { type: Date, default: new Date() },
  createdAt: { type: Date, default: Date.now },
});

export default new mongoose.model("Transaction", transactionSchema);
