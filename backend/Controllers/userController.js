const users = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    const foundUser = await users.findOne({ email: req.body.email });
    if (foundUser) {
      return res.status(400).json({ message: "User exists" });
    }
    if (req.body.password != req.body.confirmPassword) {
      return res.status(400).json({ message: "Password don't match" });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 14);
    req.body.password = hashedPassword;

    req.body.image = req.file.filename;
    console.log(req.body);

    await users.create(req.body);
    res.status(200).json({ message: "User created" });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const foundUser = await users.findOne({ email });
    if (!foundUser) {
      return res.status(400).json({ message: "User not registered" });
    }

    const decryptedPassword = await bcrypt.compare(
      password,
      foundUser.password
    );
    if (decryptedPassword == false) {
      return res.status(400).json({ message: "Password invalid" });
    }

    const token = jwt.sign(
      {
        id: foundUser._id,
        email: foundUser.email,
      },
      process.env.JWTSecret,
      { expiresIn: "30 m" }
    );
    res.status(200).json({ message: "Successfully logged in", token });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const foundUser = await users.findById(id);
    const foundUserProfile = {
      id: foundUser._id,
      name: foundUser.name,
      image: foundUser.image,
    };
    res.status(200).json({ message: foundUserProfile });
  } catch (err) {
    console.log(err);
  }
};

exports.updateOneUser = async (req, res) => {
  if (req.body.password != req.body.confirmPassword) {
    return res.status(200).json({ message: "Password don't match" });
  }
  hashedPassword = await bcrypt.hash(req.body.password, 14);
  await users.findOneAndUpdate(
    { email: req.body.email },
    { password: hashedPassword }
  );
  res.status(200).json({ message: "Successfully update" });
};

exports.deleteOneUser = async (req, res) => {
  try {
    const foundUser = await users.findOne({ email: req.body.email });
    if (!foundUser) {
      return res.status(400).json({ message: "User is not registered" });
    }
    await users.deleteOne({ email: req.body.email });
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    res.status(200).json({ error });
  }
};
