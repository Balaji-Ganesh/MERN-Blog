const mongoose = require("mongoose");

// Creating user's schema..
const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Export the model..
module.exports = mongoose.model("User", CategorySchema);
