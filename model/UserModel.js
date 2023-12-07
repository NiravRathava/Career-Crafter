import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      requried: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
