import User from "../model/UserModel.js";
import jwt from "jsonwebtoken";

//function for signing token
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

export const signUp = async (req, res) => {
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
    console.error("Error during signup:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const signIn = async () => {};
