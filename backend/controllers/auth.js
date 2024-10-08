import mongoose from "mongoose";
import User from "../models/User.js"
import bcrypt from "bcryptjs"
import { createError } from  '../error.js';
import jwt from "jsonwebtoken";

export const signup = async (req,res,next)=> {
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({name: req.body.username,email: req.body.email, password: hash});

        await newUser.save();
        res.status(200).send("User has been created!")
    }catch(err){
        next(err)
    }
};
 
export const signin = async (req,res,next)=> {
    try{
        const user = await User.findOne({name: req.body.username});
        if(!user) return next(createError(404, "User not found"))
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if(!isPasswordCorrect) return next(createError(400, "wrong credentials"));

        const token = jwt.sign({id:user._id}, process.env.JWT)
        const {password, ...other} = user._doc;

        res.cookie("access_token", token,{
            httpOnly:true
        }).status(200).json(other)
    } catch(err){
        next(err)
    }
};
 