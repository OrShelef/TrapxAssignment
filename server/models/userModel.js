const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  userName: {
    type: String,
    required: [true, "userName is required"],
    unique: true,
    minlength: [2, "Minimum length for userName is 2"],
  },
  loginName: {
    type: String,
    required: [true, "loginName is required"],

    minlength: [2, "Minimum length for loginName is 2"],
  },
  role: {
    type: String,
    required: [true, "role is required"],
    enum: ["Guest", "Regular", "Administrator"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minlength: [8, "Minimum length for password is 8"],
  },
  image: String,
});

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.comparePassword = async function (
  inputPassword,
  userPassword
) {
  return await bcrypt.compare(inputPassword, userPassword);
};

const User = mongoose.model("Users", userSchema);

module.exports = User;
