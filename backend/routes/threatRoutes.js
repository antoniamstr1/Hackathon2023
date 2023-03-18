const express = require("express");


const {
  createThreat,

} = require("../controllers/threatController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();


//router.route("/").get(createThreat);
//router.route("/").post(createThreat);
router.route("/create").post(createThreat);



module.exports = router;