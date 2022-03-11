const mongoose = require("mongoose");

// Creating user's schema..
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String, // Why String type..??
      default: "",
    },
  },
  { timestamps: true }
);

// Export the model..
module.exports = mongoose.model("User", UserSchema)