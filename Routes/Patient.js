var express=require("express")
var router=express.Router()
const {singlePatient}=require("../Controllers/patient.Controllers")
router.get("/:id",singlePatient)
module.exports=router