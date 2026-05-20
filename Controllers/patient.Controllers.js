const patientmodel=require("../models/Patient.Model")
const patient=(req,res)=>
{
     var newPatient=new patientmodel(req.body)
      newPatient.save()
    console.log(req.body)
    res.send({"msg":"patient added",newPatient})
}
const allPatients= (req,res)=>{ 
     patientmodel.find().then((data)=>{
                res.send(data)
            })
       } 
module.exports={patient,allPatients}