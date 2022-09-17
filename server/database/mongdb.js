import mongoose from "mongoose";

async function connect() {
  await mongoose.connect(
    "mongodb+srv://bitfumes:bitfumes123@bitfumes-mern.ykzqss0.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("MongoDB connection is successful");
}

export default connect;
