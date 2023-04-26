const express = require("express");
const { loginuser, signupuser } = require("../controllers/userController");
const router = express.Router();

//Login route

router.post("/login", loginuser);

// sign up route

router.post("/signup", signupuser);

module.exports = router;
