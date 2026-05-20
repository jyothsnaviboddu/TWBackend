var mongoose=require("mongoose")
var doctorSchema=mongoose.Schema({
    "name":String,
    "email":String,
    "degree":String,
    "speciality":String,
    "gender":String,
    "experience":String,
    "fees":Number,
    "phone":Number,
    "address":String,
    "status":String,
})
var doctorModel=mongoose.model("doctor",doctorSchema)
module.exports=doctorModel