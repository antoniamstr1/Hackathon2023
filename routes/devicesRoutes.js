const express = require("express");
const router = express.Router();
const {
  getDevices,

} = require("../controllers/deviceController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
router.route("/devices").get(getDevices);


module.exports = router;