var express=require("express")
var router=express.Router()
const {updateDoctor}=require("../Controllers/doctor.Controller")
router.post("/",updateDoctor)
module.exports=router