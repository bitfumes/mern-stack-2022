import cors from "cors";
import express from "express";
import mongoose from "mongoose";

const PORT = 4000;
const app = express();
app.use(cors);

await mongoose.connect(
  "mongodb+srv://bitfumes:bitfumes123@bitfumes-mern.ykzqss0.mongodb.net/?retryWrites=true&w=majority"
);
console.log("MongoDB connection is successful");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log("Server is running at http://localhost:4000");
});
