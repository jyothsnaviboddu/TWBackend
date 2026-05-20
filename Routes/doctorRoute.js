var express=require("express")
var router=express.Router()
const {allDoctors}=require("../Controllers/doctor.Controller")
router.get("/",allDoctors)
module.exports=router