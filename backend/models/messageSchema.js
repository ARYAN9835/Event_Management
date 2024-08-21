import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    name : {
        type : "String",
        required : [true, "!Name Required"],
        minLenght : [3,"Must contains atleast 3 characters!"],
    },
    email : {
        type : "String",
        required : [true, "!Email Required"],
        validate : [validator.isEmail,"Enter valid Email!"],
    },
    subject : {
        type: "String",
        required : [true, "!subject Required"],
        minLenght : [100,"Must Contains atmost 100 characters!"],
    },
    message : {
        type : "String",
        required : [true, "!Name Required"],
        maxLength : [1000,"Must contains atmost 1000 characters!"],
    },
});

export const Message = mongoose.model("Message", messageSchema);