const User = require("../models/User");
const bcrypt = require("bcryptjs");

const userController = {};

// createUser
userController.createUser = async (req, res) => {
  try {
    let { email, password, name, level } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      throw new Error("User already exists.");
    }

    // 패스워드 암호화
    const salt = await bcrypt.genSaltSync(10);
    password = await bcrypt.hash(password, salt);
    const newUser = new User({
      email,
      password,
      name,
      level: level ? level : "customer",
    });

    await newUser.save();
    return res.status(200).json({ status: "success" });
  } catch (err) {
    res.status(400).json({ status: "fail", message: err.message });
  }
};

module.exports = userController;
