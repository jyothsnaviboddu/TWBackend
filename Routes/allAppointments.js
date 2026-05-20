var express=require("express")
var router=express.Router()
const {allAppointments}=require("../Controllers/appointments.Controller")
router.get("/",allAppointments)
module.exports=router