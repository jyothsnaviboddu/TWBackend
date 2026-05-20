var express=require("express")
var router=express.Router()
const {addDoctor}=require("../Controllers/doctor.Controller")
router.post("/",addDoctor)
module.exports=router