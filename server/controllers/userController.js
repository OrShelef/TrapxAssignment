const User = require("../models/userModel");

const AppError = require("../utils/AppError");
const Auth = require("../utils/auth");

exports.addUser = async (req, res, next) => {
  const result = await User.create(req.body);

  const token = Auth.getToken(result._id);
  res.status(200).json({
    status: "success",
    token,
    data: result,
  });
};

exports.signIn = async (req, res, next) => {
  const result = await User.findOne({ loginName: req.body.loginName });
  if (!result) return next(new AppError(401, "user not found"));
  const token = Auth.getToken(result._id);
  const passwordCheck = result.comparePassword(
    req.body.password,
    result.password
  );

  if (!result || !passwordCheck)
    return next(new AppError(401, "password or user is not correct"));

  res.status(200).json({
    status: "success",
    token,
    data: result,
  });
};

exports.getAll = async (req, res, next) => {
  const result = await User.find();

  res.status(200).json({
    status: "success",
    data: result,
  });
};

exports.delete = async (req, res, next) => {
  const result = await User.deleteOne({ _id: req.params.id });
  if (result.deletedCount == 0)
    return next(new AppError(401, "user id is incorrect"));

  res.status(200).json({
    status: "success",
    data: result,
  });
};
