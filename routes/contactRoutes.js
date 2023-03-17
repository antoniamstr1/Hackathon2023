const express = require("express");
const router = express.Router();
const {getContacts, createContact, deleteContact, updateContact, getInduvidualContact} = require("../controllers/contactController");

//GET 
router.route("/").get(getContacts);

//GET induvidual
router.route("/:id").get(getInduvidualContact);

//POST 
router.route("/").post(createContact);

//PUT 
//dodajem u rutu 
router.route("/:id").put(updateContact);

//DELETE 
router.route("/:id").delete(deleteContact);

module.exports = router;