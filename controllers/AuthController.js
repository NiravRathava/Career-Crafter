import User from "../model/UserModel.js";
import jwt from "jsonwebtoken";
import { catchAsync } from "../utils/catchAsync.js";
import { appError } from "../utils/appError.js";
//function for signing token
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

export const signUp = catchAsync(async (req, res, next) => {
  const user = await User.create({
    email: req.body.email,
    password: req.body.password,
  });
  //signing token
  const token = signToken(user._id);
  //sending response
  res.status(201).json({ user, token });
});
export const signIn = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  //check if email  and password if exist
  if (!email || !password) {
    return next(new appError("please provide email  and password", 400));
  }

  // check if the user exits
  const user = await User.findOne({ email: email }).select("+password");

  if (!user || !(await user.verifyPassword(password, user.password))) {
    return next(new appError("Wrong credentials", 401));
  }

  const token = signToken(user._id);
  user.password = undefined;
  //sending response
  res.status(200).json({ user, token });
});
