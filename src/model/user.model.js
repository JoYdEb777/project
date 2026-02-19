const mongoose = require ("mongoose")


const userSchema = new mongoose.Schema({
    username:{
        type: String,
        unique: [true, "Username already Exists..."],
        required: [true, "Username is required..."]
    },
    email:{
        type:String,
        unique:[true, " Email already Exists..."],
        required: [true, " Email is Required..."]
    },
    password:{
        type: String,
        required:[true,"Password is Required..."]
    },
    bio:String,
    ProfileImage:{
        type: String,
        default:"https://ik.imagekit.io/joydeb7/360_F_1168505794_IBCEiafsIrHFJ09e65P2vh5115C1XI7e.webp"
    }
})

const userModel = mongoose.model("users",userSchema)

module.exports = userModel