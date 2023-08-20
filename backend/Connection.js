const mongoose = require("mongoose");

const url = `mongodb+srv://${process.env.DBUsername}:${process.env.DBPassword}@cluster0.bq17ljx.mongodb.net/example`;

mongoose
  .connect(url)
  .then(() => {
    console.log("✅ Connected to DB");
  })
  .catch((error) => {
    console.log("Not connected to DB", error);
  });
