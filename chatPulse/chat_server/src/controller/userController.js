const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// just checking routes
// 
const helloRoute = (req,res) => {
        res.send("hello working ....");
    };


// register new user 
// route is POST '/api/register'
 const registerUser = asyncHandler( 
    async(req,res) => {
        const {name , email , password} = req.body;

        // this block checks if fields are filled
        if(!name || !email || !password){
            res.status(400);
            console.log("error");

            throw new Error("please enter all fields ,, as all r required");
        }


        // this block will check weather user exists or not
        const userExist = await User.findOne(email);
        if(userExist){
            res.status(400);
            throw new Error("user already registered /exists");
        }

        // this block will create user
        const user = await User.create({

            name,
            email,
            password,
            pic,
         });


         if(user){
            res.status(201).json(
                {
                    _id: user.id,
                    name : user.name,
                    email : user.email,
                }
            )
         }else{
            res.status(400);
            throw new Error("user not found");
         };


    }
 );

 module.exports = {
    registerUser,
    helloRoute,
 }