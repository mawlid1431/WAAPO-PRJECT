const posts = require("../Models/postModel");
exports.createPost = async (req, res) => {
  try {
    await posts.create(req.body);
    res.status(200).json({ message: "Successfully posted" });
  } catch (error) {
    res.status(200).json({ error });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const foundPosts = await posts.find({}).populate("user");
    res.status(200).json({ foundPosts });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.getOnePost = async (req, res) => {
  try {
    const foundPost = await posts
      .findOne({ _id: req.params.id })
      .populate("user");
    if (!foundPost) {
      return res.status(400).json({ message: "Post not found" });
    }
    res.status(200).json({ foundPost });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const foundPost = await posts.findOne({ _id: req.params.id });
    if (!foundPost) {
      return res.status(400).json({ message: "Post not found" });
    }
    await posts.findOneAndUpdate(
      { _id: req.params.id },
      { title: req.body.title, description: req.body.description }
    );
    res.status(200).json({ message: "Updated successfully" });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.deletePost = async (req, res) => {
  const foundPost = await posts.findOne({ _id: req.params.id });
  if (!foundPost) {
    return res.status(400).json({ message: "Poster not found" });
  }
  await posts.deleteOne({ _id: req.params.id });
  res.status(400).json({ message: "Successfully deleted" });
};
