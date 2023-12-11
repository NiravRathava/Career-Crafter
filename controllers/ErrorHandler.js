// error production
const sendErrProd = (err, res) => {
  console.log("ERROR", err);
  if (err.code === 11000) {
    res.status(409).json({
      status: "error",
      message: "User already exists. Please sign in.",
    });
  } else {
    res.status(500).json({ status: "error", message: "Something Went Wrong" });
  }
};
// error development
const sendErrDev = (err, res) => {


  res.status(err.statusCode).json({
    error: err,
    message: err.message,
    stack: err.stack,
  });
};
// errro handling middleware
export const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  if (process.env.NODE_ENV === "development") {
    sendErrDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    sendErrProd(err, res);
  }
};