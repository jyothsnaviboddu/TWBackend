const userModel=require("../models/users.Model")
const patientmodel=require("../models/Patient.Model")
const jwt=require("jsonwebtoken")
const login=async (req,res)=>
{
    console.log(req.body)
    if(req.body.role==="user")
     { 
        let users=[]
        console.log("User role....")
         await patientmodel.find({"role":req.body.role}).then((data)=>
        {
            users=data
        })
        const a_u=users.find((user)=>
        {
            
                if(user.username===req.body.username && user.password===req.body.password)
                {
                    return true;
                }
         
        })
        console.log(a_u)
        if(a_u)
        {
                        var  token=jwt.sign({...req.body},"Hello User")
                        res.send({msg:"login success",token,username:req.body.username,role:req.body.role})

        }  
        else
        {
            res.send({msg:"credentials mismatched"})
        }       
   }
 else if(req.body.role==="admin")
     {
        let users=[]  
        // res.send({"msg":"hello"})
           await userModel.find().then((data)=>{
                users=data
           })
           const a_u=users.find((user)=>
            {
                 if(user.name===req.body.username && user.Password===req.body.password)
                {
                    return true;
                }
         
           })
           if(a_u)
           {
                var token=jwt.sign({...req.body},"Hello Admin")
                res.send({"msg":"Login Success",token,username:req.body.username})
           }
           else
           {
                res.send({'msg':"credentails mismatch"})
           }
     }
   else
   {
            res.send("Credentials mismatched")
   }
}

module.exports={login}
