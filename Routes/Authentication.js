var express=require("express")
var router=express.Router()
const {login}=require("../Controllers/login.Controller")
router.post("/",login)
module.exports=router