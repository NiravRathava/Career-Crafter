import jwt from "jsonwebtoken";
import { appError } from "../utils/appError.js";
import User from "../model/UserModel.js";

export const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return next(new appError("Unauthorized - No token provided", 401));
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if the user still exists
    const user = await User.findById(decoded.id);

    if (!user) {
      return next(new appError("User not found", 401));
    }

    // Attach the user object to the request for future middleware
    req.user = user;
    next();
  } catch (err) {
    return next(new appError("Unauthorized - Invalid token", 401));
  }
};
