const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["Full-time", "Part-time", "Internship"],
  },
  experience: {
    type: String,
    enum: ["Junior", "Senior", "Expert"],
  },
  location: {
    type: String,
    enum: ["Onsite", "Remote"],
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const postModel = mongoose.model("Post", postSchema);
module.exports = postModel;
