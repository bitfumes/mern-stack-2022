import mongoose from "mongoose";

async function connect() {
  const url = process.env.MONGO_DB_URL;

  await mongoose.connect(url);
  console.log("MongoDB connection is successful");
}

export default connect;
