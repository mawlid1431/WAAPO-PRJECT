const express = require("express");
const router = express.Router();
const commentCrontroller = require("../Controllers/commentController");

router
  .route("/")
  .post(commentCrontroller.createComment)
  .get(commentCrontroller.getAllComments);

router.route("/:id").get(commentCrontroller.getAllComments);

// router.route("/:id").get(commentCrontroller.getOneComment);

module.exports = router;
