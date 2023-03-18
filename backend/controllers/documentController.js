const asyncHandler = require("express-async-handler");
const Documents = require("../models/documentModel");

//@desc Get all device
//@route GET /api/devices
//@access private
//get sve device jednog korisnika
const getDocumentsUser = asyncHandler(async (req, res) => {
    const documents = await Documents.find({ user_id: req.user.id });
    res.status(200).json(devices);
});

const getDocumentsDevice = asyncHandler(async (req, res) => {
    const documents = await Documents.find({ device_id: req.device.id });
    res.status(200).json(devices);
});

const getAllDocuments = asyncHandler(async (req, res) => {
    const documents = await Documents.find();
    res.status(200).json(devices);
});

module.exports = {getDocumentsUser, getDocumentsDevice, getAllDocuments}