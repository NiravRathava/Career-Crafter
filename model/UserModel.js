import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique:true
    },
    password: {
      type: String,
      requried: true,
    },
  },
  { timestamps: true }
);


export default mongoose.model("User", userSchema);
