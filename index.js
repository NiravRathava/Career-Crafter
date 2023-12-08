import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/AuthRoutes.js";

const app = express();
const port = 8000;
dotenv.config();

const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO).then(() => {
      console.log("Connnected To MongoDb");
    });
  } catch (error) {
    console.log(error);
  }
};
app.listen(port, () => {
  console.log(` app listening on port ${port}`);
  connectToMongo();
});

app.use(express.json())

app.use("/api/auth", userRoutes);
