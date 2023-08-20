const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

const dotenv = require("dotenv");
const userRoute = require("./Routes/userRoute");
const postRoute = require("./Routes/postRoute");
const blogRoute = require("./Routes/blogRoute");
const commentRoute = require("./Routes/commentRoute");
dotenv.config({ path: "./.env" });
require("./Models/userModel");
require("./Models/postModel");
require("./Models/blogPostModel");
require("./Models/commentModel");
require("./Connection");

app.use(express.static("images"));
app.use(cors());
app.use(express.json());
app.use("/user", userRoute);
app.use("/job", postRoute);
app.use("/blog", blogRoute);
app.use("/comment", commentRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
