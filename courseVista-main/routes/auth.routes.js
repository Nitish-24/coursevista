const express = require("express");
const router = express.Router();

const {
  sendOtp,
  signUp,
  login,
  changePassword,
} = require("../controllers/Auth");

router.post("/sendotp", sendOtp);
router.post("/signup", signUp);
router.post("/login", login);
router.post("/changepassword", changePassword);

module.exports = router;
