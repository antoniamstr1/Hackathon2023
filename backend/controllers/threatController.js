const asyncHandler = require("express-async-handler");
const Threats = require("../models/threatModel");

//@desc Get all device
//@route GET /api/devices
//@access private
//get sve device jednog korisnika


const createThreat = asyncHandler(async (req, res) => {
    console.log("The request body is :", req.body);
    const { title, SHA256Hash, type, threat, threat_severity, country} = req.body;
    if (!title || !SHA256Hash || !type || !threat || !threat_severity || !country) {
      res.status(400);
      throw new Error("All fields are mandatory !");
    }
    const threats = await Threats.create({
      title,
      SHA256Hash,
      type,
      threat,
      threat_severity,
      country
    });
  
    res.status(201).json(threats);
  });

module.exports = {createThreat}