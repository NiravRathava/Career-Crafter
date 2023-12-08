import mongoose from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please provide your email id"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please provide your password"],
      select: false,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  //checking password ispasswordModified
  if (!this.isModified("password")) {
    return next();
  }
  try {
    //creating a hash for password
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
  } catch (error) {
    console.log(error);
    next();
  }
});
//method for verify userEntered password and the password saved in DB
userSchema.methods.verifyPassword=(async function (
  enterdPassword,
  savedPassword
) {
  return await bcrypt.compare(enterdPassword, savedPassword);
});
export default mongoose.model("User", userSchema);
