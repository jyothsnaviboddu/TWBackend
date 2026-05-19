var mongoose=require("mongoose")
var doctorModel=require("../models/doctor.model")
var jwt=require("jsonwebtoken")
const addDoctor=(req,res)=>
{
    //var token=req.headers.token;
    var found=jwt.verify(req.headers.token,"Hello Admin")
    if(found)
    {
        var newDoctor=new doctorModel({
            "name":req.body.name,
            "email":req.body.email,
            "degree":req.body.degree,
            "speciality":req.body.speciality,
            "gender":req.body.gender,
            "experience":req.body.experience,
            "fees":req.body.fees,
            "phone":req.body.phone,
            "address":req.body.address,
            "appointments":0
            })
            newDoctor.save()
                res.send({"msg":"Doctor added successfully...."})
    }
    else
    {
        res.send({"msg":"doctor is not added"})
    }
}
const deleteDoctor=(req,res)=>
{
    var found=jwt.verify(req.headers.token,"Hello Admin")
    if(found)
    {
          doctorModel.findByIdAndDelete(req.body.id).then((data)=>
          {
                res.send(data)
          })    
    }
    else
    {
        res.send({"msg":"Deletion unsuccessful....."})
    }
}
const allDoctors=(req,res)=>{
    doctorModel.find().then((data)=>{
        res.send(data)
    })
}
const updateDoctor=(req,res)=>
{
    const filter = { _id: req.body.id };
        const updateDoc = {
            $set:{
                    name:req.body.name,
                    email:req.body.email,
                    degree:req.body.degree,
                    speciality:req.body.speciality,
                    gender:req.body.gender,
                    experience:req.body.experience,
                    fees:req.body.fees,
                    phone:req.body.phone,
                    address:req.body.address,
                    status:req.body.status
                    
                },
     };
const result = await doctorModel.updateOne(filter, updateDoc);

}
module.exports={addDoctor,deleteDoctor,allDoctors}
/*
 "name":String,
    "email":String,
    "degree":String,
    "speciality":String,
    "gender":String,
    "experience":String,
    "fees":Number,
    "phone":Number,
    "address":String,
    "appointments":Number,
    "status":String
*/