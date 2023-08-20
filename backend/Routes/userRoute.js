const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController");
const upload = require("../upload/multer");

router
  .route("/:id")
  .get(userController.getOneUser)
  .put(userController.updateOneUser)
  .delete(userController.deleteOneUser);
router.post("/signup", upload.single("image"), userController.signup);
router.post("/login", userController.login);

module.exports = router;
