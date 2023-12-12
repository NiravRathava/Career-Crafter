import { catchAsync } from "../utils/catchAsync.js";
import Message from "../model/MessageModel.js";

export const sendMessage = catchAsync(async (req, res, next) => {
  const message = {
    senderId,
    content,
    createdAt: Date.now(),
  };
  const update = {
    $addToSet: { messages: message },
  };
  if (req.params.id) {
    const res = await Message.findByIdAndUpdate(req.params.id, update, {
      new: true,
      runValidators: true,
    });
  } else {
    const res = await Message.create(req.body);
  }
  res.status(201).json(res);
});

export const getMessageHistory = catchAsync(async (req, res, next) => {
  const messages = await Message.findById(req.params.id);
  res.status(200).json(messages.messages);
});
