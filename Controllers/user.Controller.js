const userModel=require("../models/users.Model")
function sign(req,res)
{
    console.log(req.body)
   var newuser=new userModel({
        "name":req.body.username,
        "role":req.body.role,
        "Password":req.body.password,
      })
      console.log(newuser) 
      newuser.save()
      res.send("send successfully")  
}
module.exports={sign}