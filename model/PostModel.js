import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    attachments: [String], 
    likes: [
      {
        userId: {
          type: mongoose.Schema.ObjectId,
          ref: "User",
        },
      },
    ],
    comments: [
      {
        userId: {
          type: mongoose.Schema.ObjectId,
          ref: "User",
        },
        text: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Post", postSchema);
