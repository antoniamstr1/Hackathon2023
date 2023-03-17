const asyncHandler = require("express-async-handler");
//MODELS
const Contact = require("../models/contactModel");
//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler(async (req,res) => {
    //MODELS
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

//@desc Create new contact
//@route POST /api/contacts
//@access public

const createContact = asyncHandler(async(req,res) => {
    console.log("The request body is:", req.body);
    const{name,email,phone} = req.body;
    if (!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    //MODELS - kontakt koji stvaram iz posta
    const contact = await Contact.create({
        name, email, phone,
    });
    res.status(201).json(contact);
});

//@desc Get induvidual contact/:id
//@route GET /api/contacts
//@access public

const getInduvidualContact = asyncHandler(async(req,res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}`})
});

//@desc Delete  contact
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = asyncHandler(async(req,res) => {
        res.status(200).json({ message: `Delete contact for ${req.params.id}`
})});

//@desc Update  contact
//@route PUT /api/contacts/:id
//@access public

const updateContact = asyncHandler(async(req,res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}`
})});





module.exports = {getContacts, createContact, deleteContact, updateContact, getInduvidualContact};