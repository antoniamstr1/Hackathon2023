const mongoose = require("mongoose");

const DeviceDetailsScehma = new mongoose.Schema(
  {
    user_id: String,
    name: String,
    ipAdresa: { type: String, unique: true },
    tip: String
    
  },
  {
    collection: "DeviceInfo",
  }
);

mongoose.model("DeviceInfo", DeviceDetailsScehma);
