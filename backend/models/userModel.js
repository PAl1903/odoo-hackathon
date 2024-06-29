const mongoose = require("mongoose");
const validator = require("validator");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: [4, "Name should have minimum 4 characters!"],
    maxLength: [30, "Name can't exceed 30 characters!"],
    required: [true, "Name cannot be empty!"],
  },
  username: {
    type: String,
    unique: true,
    validate: [validator.isEmail, "Please Enter valid Email"],
    required: [true, "Email cannot be empty!"],
  },

  password: {
    type: String,
  },
  cpassword: {
    type: String,
  },
  registeredDate: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    default: "user",
  },
  // resetPasswordToken: String,
  // resetPasswordExpire: Date,
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("user", userSchema);

module.exports = User;
