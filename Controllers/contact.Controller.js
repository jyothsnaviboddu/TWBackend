var mongoose=require("mongoose")
var contactModel=require("../models/contact.Model")
var contact=(req,res)=>{
    console.log(req.body)
    var contact=new contactModel({
        "name":req.body.name,
        "email":req.body.email,
        "message":req.body.message
    }) 
    contact.save()
    res.send("done successful")
}
module.exports={contact}