import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { errorHandler } from "./controllers/ErrorHandler.js";
import authRoutes from "./routes/AuthRoutes.js";
import userRoutes from "./routes/UserRoutes.js";
import userDetailsRoutes from "./routes/UserDetailRoutes.js";
import userEducationRoutes from "./routes/EducationRoutes.js";
import userExperienceRoutes from "./routes/ExperienceRoutes.js";
import userSkillRoutes from "./routes/SkillRoutes.js";

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
  console.log(`app listening on port ${port}`);
  connectToMongo();
});

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/usersdetails", userDetailsRoutes);
app.use("/api/userexperience", userExperienceRoutes);
app.use("/api/usereducation", userEducationRoutes);
app.use("/api/skill",userSkillRoutes)

app.use(errorHandler);
