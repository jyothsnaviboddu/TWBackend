var express=require("express")
var router=express.Router()
const {allPatients}=require("../Controllers/patient.Controllers")
router.get("/",allPatients)
module.exports=router