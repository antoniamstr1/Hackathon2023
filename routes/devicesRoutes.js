const express = require("express");
const router = express.Router();
const {
  getDevices,
  getDevice,
  createDevice,

} = require("../controllers/deviceController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
router.route("/").get(getDevices);
router.route("/").post(getDevices);
router.route("/:id").get(createDevice);


module.exports = router;