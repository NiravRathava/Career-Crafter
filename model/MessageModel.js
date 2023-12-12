import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  participants: [
    {
      userId: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
    },
  ],
  messages: [
    {
      senderId: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

export default mongoose.model("Message", messageSchema);
