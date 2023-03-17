const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name:{
        type:String,
        required: [true, "Please add the contact name"],
    },
    email:{
        type:String,
        required: [true, "Please add the contact email"],
    },
    phone:{
        type:String,
        required: [true, "Please add the contact phone"],
    },

    },
    {
        timestamps: true,
    }
);

//contact je ime
module.exports = mongoose.model("Contact", contactSchema )