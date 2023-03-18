const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//@desc Register user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req,res) => {
    const {role,username, email, password, phone} = req.body;
    if (!username || !email || !phone || !password){
       res.status(400);
       throw new Error("All field are mandatory");
    }     
    const userAvaliable = await User.findOne({email});
    if (userAvaliable){
        //already registered
        res.status(400);
       throw new Error("User already exists") 
    }
    //Hash password
    const hashedPassword =  await bcrypt.hash(password,10);
 
    console.log("Hashed password: ",hashedPassword);

    const user = await User.create({
        role,
        username,
        email,
        password: hashedPassword,
        phone,
    });
    console.log("User created");
    //response in JSON/*
    if (user){
        res.status(201).json({_id: user.id, email: user.email});
    }
    else{
        res.status(400);
        throw new Error("User data nota vaild");
    } 
    res.json({message: "Register the user."}); 
});

//@desc Login user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req,res) => {
    const {email, password} = req.body;
    if (!email || !password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const user = await User.findOne({email});
    //cmp pasw
    if(user && (await bcrypt.compare(password, user.password))){

        const accessToken = jwt.sign({
            user: {
                username:user.username,
                email:user.email,
                id: user.id,
                phone: user.phone,
            },
        },process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:"15m"});
        res.status(200).json({accessToken});

    }else{
        res.status(401);
        throw new Error("email or pasw in not valid")
    }

    
    res.json({message: "Login the user."})
});

//@desc Current user into
//@route Get /api/users/current
//@access private
const currentUser = asyncHandler(async (req,res) => {
    res.json(req.user);
});

const logoutUser = asyncHandler(async (req,res) => {
    const accessToken = jwt.sign(process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: 1 } , (logout, err) => {
        if (logout) {
        res.send({msg : 'You have been Logged Out' });
        } else {
        res.send({msg:'Error'});
        }
        });
    res.status(200).json({accessToken});
}
);

module.exports = {registerUser, loginUser, currentUser, logoutUser}