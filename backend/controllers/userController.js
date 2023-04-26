const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "2d" });
};

// login user
exports.loginuser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);

    //create a token
    const token = createToken(user._id);

    res.status(200).json({
      email,
      token,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

//sign up user
exports.signupuser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signup(email, password);

    //create a token
    const token = createToken(user._id);
    res.status(200).json({
      email,
      token,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
