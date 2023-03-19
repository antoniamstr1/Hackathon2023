const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
  {
    role: String,
    username: String,
    email: { type: String, unique: true },
    password: String,
    phone: String,
  },
  {
    collection: "UserInfo",
  }
);

mongoose.model("UserInfo", UserDetailsScehma);
