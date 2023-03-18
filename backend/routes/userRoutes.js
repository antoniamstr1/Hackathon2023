const express = require("express");
const {
  registerUser,
  currentUser,
  loginUser,
  logoutUser,
  getUser,
} = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current/:id", getUser);

router.get("/logout", logoutUser);

module.exports = router;