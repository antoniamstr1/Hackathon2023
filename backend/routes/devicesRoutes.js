const express = require("express");

const {
  getDevices,
  getDevice,
  createDevice,

} = require("../controllers/deviceController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();
router.use(validateToken);
router.route("/").get(getDevices);
router.route("/").post(createDevice);
router.route("/:id").get(getDevices);


module.exports = router;