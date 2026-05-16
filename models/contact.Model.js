var mongoose=require("mongoose")
var contactSchema=mongoose.Schema({
    "name":String,
    "email":String,
    "message":String
})
var contactModel=mongoose.model("contact",contactSchema)
module.exports=contactModel