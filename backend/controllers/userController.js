const mongoose = require('mongoose');
const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const createAccessToken = (createUser)=>{
    if (!createUser) return "";
    const token = jwt.sign({id:createUser._id},process.env.jwtSecret,{expiresIn:process.env.jwtExpiry});
    return token;
}
const registerUser = async(req,res)=>{
    try {
        const {username,password} = req.body;
        //input validation
        if (!username || !password){
            return res.json({
                success: false,
                status: 401,
                message: "username and password must be needed!!"
            })
        }
        //check existance
        const userExist = await User.findOne({username: username});
        if (userExist){
            return res.json({
                success: false,
                status: 409,
                message: "User already exists"
            })
        }

        const hashPass = await bcryptjs.hash(password,10);
        const createUser = new User({username:username,
            password:hashPass
        });
        await createUser.save();
        console.log("user created");
        const accesstoken = createAccessToken(createUser);
        if (!accesstoken){
            res.json({success: false, status:500,message: "server error please try again"});
        }
        console.log("accessToken created");
        res.cookie('token', accesstoken).json({
            success:true,
            status:200,
            message: "user registered successfully"
        });
    } catch (error) {
        return res.json({success: false, status:400,
        message: error.message});
    }
}

module.exports = {registerUser};