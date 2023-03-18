const express = require("express");
const router = express.Router();
const {
  getDocumentsUser,
  getDocumentsDevice,
  getAllDocuments,

} = require("../controllers/documentController");
const validateToken = require("../middleware/validateTokenHandler");

//router.use(validateToken);
router.route("/").get(getAllDocuments);
router.route("/:id").get(getDocumentsDevice);
router.route("/:id").get(getDocumentsUser);


module.exports = router;