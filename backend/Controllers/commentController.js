const comments = require("../Models/commentModel");

exports.createComment = async (req, res) => {
  try {
    await comments.create(req.body);
    res.status(200).json({ message: "Successfully commented" });
  } catch (error) {
    res.status(200).json({ message: error });
  }
};

exports.getAllComments = async (req, res) => {
  try {
    const { id } = req.params;
    const foundComments = await comments.find({ blog: id }).populate("user");
    res.status(200).json({ message: foundComments });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
