const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter your name"],
    validate: {
      validator: (val) => validator.isAlpha(val, ["en-US"]),
      message: "Please use only characters from a-z",
    },
  },
  lastName: {
    type: String,
    required: [true, "Please enter your name"],
    validate: {
      validator: (val) => validator.isAlpha(val, ["en-US"]),
      message: "Please use only characters from a-z",
    },
  },
  phoneNumber: {
    type: Number,
    required: [true, "please enter phone number"],
    validate: {
      validator: function (num) {
        return num.toString().length == 10;
      },
      message: "mobile number must be 10 digit",
    },
  },
  email: {
    type: String,
    required: [true, "please enter your email"],
    unique: true,
    validate: [validator.isEmail, "please enter valid email"],
  },
  
  
})

module.exports = mongoose.model("User", userSchema);
