const express = require("express");
const router = express.Router();
const blogController = require("../Controllers/blogController");
const upload = require("../upload/multer");

router.post("/create", upload.single("image"), blogController.createPost);

router.route("/").get(blogController.getAllPosts);
//   .post(upload.single("image"), blogController.createPost)

router.route("/:id").get(blogController.getOnePost);
//   .put(blogController.updatePost)
//   .delete(blogController.deletePost);

module.exports = router;
