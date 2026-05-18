const userModel=require("../models/users.Model")
const jwt=require("jsonwebtoken")
const login=async (req,res)=>{
   // console.log(req.body)
   var users=[]
   if(req.body.role==="doctor")
   {
        
       await userModel.find({"role":req.body.role}).then((data)=>
        {
            console.log("Iam in doctor")
            users=data
        })
       // console.log(users)
        const a_u=users.find((user)=>
        {
            
                if(user.name===req.body.username && user.Password===req.body.password)
                {
                    return true;
                }
         
        })
        console.log(a_u)
        if(a_u)
        {
                        var  token=jwt.sign({...req.body},"Hello Doctor")
                        res.send({msg:"login success",token,username:req.body.username,role:req.body.role})

        }  
        else
        {
            res.send({msg:"credentials mismatched"})
        }     

      //  console.log("Doctor role...")
   }
   else if(req.body.role==="admin")
   {
        console.log("Admin role....")
         await userModel.find({"role":req.body.role}).then((data)=>
        {
            //console.log("Iam in doctor")
            users=data
        })
       // console.log(users)
        const a_u=users.find((user)=>
        {
            
                if(user.name===req.body.username && user.Password===req.body.password)
                {
                    return true;
                }
         
        })
        console.log(a_u)
        if(a_u)
        {
                        var  token=jwt.sign({...req.body},"Hello Admin")
                        res.send({msg:"login success",token,username:req.body.username,role:req.body.role})

        }  
        else
        {
            res.send({msg:"credentials mismatched"})
        }     

      
   }
    else if(req.body.role==="user")
   {
        console.log("User role....")
         await userModel.find({"role":req.body.role}).then((data)=>
        {
            //console.log("Iam in doctor")
            users=data
        })
       // console.log(users)
        const a_u=users.find((user)=>
        {
            
                if(user.name===req.body.username && user.Password===req.body.password)
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
  
   else
   {
            res.send("Credentials mismatched")
   }

}
module.exports={login}
