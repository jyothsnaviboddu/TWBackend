var express=require("express")
var router=express.Router()
const {patient}=require("../Controllers/patient.Controllers")
router.post("/",patient)
module.exports=router