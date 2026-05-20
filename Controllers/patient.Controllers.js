const patientmodel=require("../models/Patient.Model")
const patient= async (req,res)=>
{
     var newPatient=new patientmodel(req.body)
    await newPatient.save()
     console.log(req.body)
   await res.send({"msg":"patient added",newPatient})
}
const allPatients= (req,res)=>{ 
     patientmodel.find().then((data)=>{
                res.send(data)
            })
       } 
module.exports={patient,allPatients}