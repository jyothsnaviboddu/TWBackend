var express=require("express")
var router=express.Router()
var {sign}=require("../Controllers/user.Controller")
router.post("/",sign)
module.exports=router