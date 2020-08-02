const jwt = require("jsonwebtoken");
const catchAsync = require("../controllers/errorController").catchFunc;
const AppError = require("./AppError");
const { promisify } = require("util");
const User = require("../models/userModel");
const { spawn } = require("child_process");

exports.getToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

exports.protectedRoute = catchAsync(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) return next(new AppError(401, "token is not sent"));

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const user = await User.findById(decoded.id);

  if (!user) return next(new AppError(401, "this user not exist anymore"));

  req.user = user;

  const logItem = `[${req.method}][${new Date().toUTCString()}]: by ${
    req.user.userName
  }`;
  const python = spawn("python", ["log.py", logItem]);
  python.on("close", (code) => {
    next();
  });
});

exports.permission = (role) =>
  catchAsync(async (req, res, next) => {
    if (!req.user)
      return next(new AppError(401, "this user not exist anymore"));

    if (role.find((r) => r == req.user.role)) {
      next();
    } else {
      return next(new AppError(403, "this user is not authorized"));
    }
  });
