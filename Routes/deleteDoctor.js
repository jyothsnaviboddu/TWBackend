var express=require("express")
var router=express.Router()
const {deleteDoctor}=require("../Controllers/doctor.Controller")
router.delete("/",deleteDoctor)
module.exports=router