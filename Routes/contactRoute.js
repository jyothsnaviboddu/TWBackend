var express=require("express")
var router=express.Router()
const {contact}=require("../Controllers/contact.Controller")
router.post("/",contact)
module.exports=router