import User from "../model/UserModel.js";
import jwt from "jsonwebtoken";

//function for signing token
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

export const signUp = async (req, res,next) => {
  try {
    const user = await User.create({
      email: req.body.email,
      password: req.body.password,
    });
    //signing token
    const token = signToken(user._id);
    //sending response
    res.status(201).json({ user, token });
  } catch (error) {
    next(error)
  }
};
export const signIn = async () => {};
