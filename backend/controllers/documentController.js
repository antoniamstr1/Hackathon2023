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

const createDocument = asyncHandler(async (req, res) => {
    console.log("The request body is :", req.body);
    const { title, SHA256Hash, type, creation_date, threat, threat_severity, user_id, device_id} = req.body;
    if (!title || !SHA256Hash || !type || !creation_date || !threat || !threat_severity || !user_id || !device_id) {
      res.status(400);
      throw new Error("All fields are mandatory !");
    }
    const document = await Device.create({
      title,
      SHA256Hash,
      type,
      creation_date,
      threat,
      threat_severity,
      user_id,
      device_id
    });
  
    res.status(201).json(document);
  });

module.exports = {getDocumentsUser, getDocumentsDevice, getAllDocuments}