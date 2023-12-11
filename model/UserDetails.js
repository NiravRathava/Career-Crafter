import mongoose from "mongoose";

const userDetailsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    requried: [true, "Please Enter User Id"],
  },
  firstName: {
    type: String,
    requried: [true, "Please Enter Your Name"],
  },
  lastName: {
    type: String,
  },
  headline: { type: String },
  profilePicture: { type: String },
  summary: { type: String },
  location: { type: String },
});

export default mongoose.model("UserDetails", userDetailsSchema);
