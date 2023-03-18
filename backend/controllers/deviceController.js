const asyncHandler = require("express-async-handler");
const Device = require("../models/deviceModel");

//@desc Get all device
//@route GET /api/devices
//@access private
//get sve device jednog korisnika
const getDevices = asyncHandler(async (req, res) => {
    const devices = await Device.find({ user_id: req.user.id });
    res.status(200).json(devices);
  });
  
//@desc Get all device
//@route GET /api/devices
//@access private
//get sve device jednog korisnika
const getDevicesAll = asyncHandler(async (req, res) => {
  const devices2 = await Device.find();
  res.status(200).json(devices2);
});

//@desc Get contact
//@route GET /api/device/:id
//@access private
//get dodatni info o jednom device
const getDevice = asyncHandler(async (req, res) => {
    const device = await Device.findById(req.params.id);
    if (!device) {
      res.status(404);
      throw new Error("Contact not found");
    }
    res.status(200).json(device);
  });


//@desc Create New device
//@route POST /api/devices
//@access private
const createDevice = asyncHandler(async (req, res) => {
    console.log("The request body is :", req.body);
    const { name, IpAdresa, tip } = req.body;
    if (!name || !IpAdresa || !tip) {
      res.status(400);
      throw new Error("All fields are mandatory !");
    }
    const device = await Device.create({
      name,
      IpAdresa,
      tip,
      user_id: req.user.id,
    });
  
    res.status(201).json(device);
  });
  
module.exports = {getDevices,getDevice,createDevice};