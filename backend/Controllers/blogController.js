const blogPost = require("../Models/blogPostModel");

// getAll
exports.getAllPosts = async (req, res) => {
  try {
    const foundBlogs = await blogPost.find({}).populate("user");
    res.status(200).json({ message: foundBlogs });
  } catch (error) {
    console.log(error);
  }
};

// getOne
exports.getOnePost = async (req, res) => {
  try {
    const { id } = req.params;
    const foundBlog = await blogPost.findById(id).populate("user");
    if (!foundBlog) {
      res.status(400).json({ message: "Blog not found" });
    }
    res.status(200).json({ message: foundBlog });
  } catch (error) {
    console.log(error);
  }
};

// create blog
exports.createPost = async (req, res) => {
  try {
    req.body.image = req.file.filename;
    console.log(req.body);
    await blogPost.create(req.body);
    res.status(200).json({ message: "Blog successfully added." });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

// update blog
exports.updatePost = (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  const content = req.body.content;
  const blog = blogs.find((blog) => blog.id == id);
  if (!blog) {
    res.status(404).json({ alert: "Blog not found." });
  }
  blog.title = title;
  blog.content = content;
  res.status(200).json({ message: "Blog updated." });
};

// delete blog
exports.deletePost = (req, res) => {
  const id = req.params.id;
  const blogDel = blogs.findIndex((blogDel) => blogDel.id == id);
  if (blogDel == -1) {
    res.status(404).json({ alert: "Blog not found." });
  }
  blogs.splice(blogDel, 1);
  res.status(200).json({ message: "Blog deleted." });
};

// get comment
// exports.getComment = (req, res) => {
//   const id = req.params.id;
//   const blog = blogs.find((blog) => blog.id == id);
//   if (!blog) {
//     res.status(404).json({ alert: "Blog not found." });
//   }
//   res.status(200).json({ comments: blog.comments });
// };

// // create comment
// exports.createComment = (req, res) => {
//   const blogID = req.params.id;
//   const newComment = req.body.comment;
//   const blog = blogs.find((blog) => blog.id == blogID);
//   if (!blog) {
//     res.status(404).json({ alert: "Blog not found." });
//   }
//   // const newComment = comment;
//   blog.comments.push(newComment);
//   res.status(200).json({ message: "New comment added." });
// };

// // update comment
// exports.updateComment = (req, res) => {
//   const id = req.params.id;
//   const index = req.params.index;
//   const comment = req.body.comment;
//   const blogIndex = blogs.findIndex((blog) => blog.id == id);
//   const commentIndex = blogs[blogIndex].comments.findIndex(
//     (comment, cIndex) => cIndex == index
//   );
//   if (blogIndex == -1) {
//     res.status(404).json({ alert: "Blog not found." });
//   } else if (commentIndex == -1) {
//     res.status(404).json({ alert: "Comment not found." });
//   }
//   // else {
//   //   blogs[blogIndex].comments[index] = comment;
//   //   res.status(200).json({ message: "Comment updated." });
//   // }
//   blogs[blogIndex].comments[index] = comment;
//   res.status(200).json({ message: "Comment updated." });
// };

// // delete comment
// exports.deleteComment = (req, res) => {
//   const id = req.params.id;
//   const index = req.params.index;
//   const blogIndex = blogs.findIndex((blog) => blog.id == id);
//   const commentIndex = blogs[blogIndex].comments.findIndex(
//     (comment, cIndex) => cIndex == index
//   );
//   if (blogIndex == -1) {
//     res.status(404).json({ alert: "Blog not found." });
//   } else if (commentIndex == -1) {
//     res.status(404).json({ alert: "Comment not found." });
//   } else {
//     blogs[blogIndex].comments.splice(index, 1);
//     res.status(200).json({ message: "Comment deleted." });
//   }
// };
