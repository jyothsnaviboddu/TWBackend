var mongoose=require("mongoose")
var userSchema=mongoose.Schema({
    "name":String,
    "role":String,
    "Password":String
})
var userModel=mongoose.model("User",userSchema)
module.exports=userModel