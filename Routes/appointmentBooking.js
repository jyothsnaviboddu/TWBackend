var express=require("express")
var router=express.Router()
const {appointments}=require("../Controllers/appointments.Controller")
router.post("/",appointments)
module.exports=router