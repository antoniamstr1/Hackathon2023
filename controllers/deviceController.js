const asyncHandler = require("express-async-handler");
const Device = require("../models/deviceModel");

//@desc Get all device
//@route GET /api/device
//@access private
const getDevices = asyncHandler(async (req, res) => {
    const devices = await Device.find({ user_id: req.user.id });
    res.status(200).json(devices);
  });