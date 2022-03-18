const mongoose = require("mongoose");

// Creating user's schema..
const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: false,
    },
    postBannerFilename: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Export the model..
module.exports = mongoose.model("Post", PostSchema);
