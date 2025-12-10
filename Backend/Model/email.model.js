import mongoose from "mongoose"

const emailSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    otp : {
        type : String,
        required : true
    },
    expireAt: {
        type: Date,
        default: Date.now,
        expires: 30
    }
    
},{timestamps: true})

const Email = mongoose.model("Email",emailSchema)

export default Email;