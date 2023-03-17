//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = (req,res) => {
    res.status(200).json({ message: "Get all contacts" });
};

//@desc Create new contact
//@route POST /api/contacts
//@access public

const createContact = (req,res) => {
    console.log("The request body is:", req.body);
    const{name,email,phone} = req.body;
    if (!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    res.status(201).json({  message: `Update contact for ${req.params.id}` });
};

//@desc Get induvidual contact/:id
//@route GET /api/contacts
//@access public

const getInduvidualContact = (req,res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}`})
};

//@desc Delete  contact
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = (req,res) => {
        res.status(200).json({ message: `Delete contact for ${req.params.id}`
})};

//@desc Update  contact
//@route PUT /api/contacts/:id
//@access public

const updateContact = (req,res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}`
})};





module.exports = {getContacts, createContact, deleteContact, updateContact, getInduvidualContact};