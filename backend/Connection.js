const mongoose = require("mongoose");

const url = `mongodb+srv://${process.env.DBUsername}:${process.env.DBPassword}@cluster0.trmcbbq.mongodb.net/`;

mongoose
  .connect(url)
  .then(() => {
    console.log("✅ Connected to DB");
  })
  .catch((error) => {
    console.log("Not connected to DB", error);
    console.log(url);
  });
