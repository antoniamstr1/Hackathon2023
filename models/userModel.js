const mongoose = require("mongoose");

   
const userSchema = mongoose.Schema({
    role: { type: String, required: true },
    username: {
        
        type: String,
        required: [true,"Please add the username."],
    },
    
    email:{
        type:String,
        required: [true, "Please add the email"],
        unique: [true, "Email taken"],
    },
    password:{
        type:String,
        required: [true, "Please add the password"],
    },
    phone:{
        type:String,
        required: [true, "Please add the phone"],
    },},
{
    timestamps: true,
}
);



module.exports = mongoose.model("User", userSchema);