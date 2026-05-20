const patientmodel=require("../models/Patient.Model")
const patient= async (req,res)=>
{
     var newPatient=new patientmodel(req.body)
    await newPatient.save()
     console.log(req.body)
  // await res.send({"msg":"patient added",newPatient})
  res.status(201).json({ newPatient });

}
const allPatients= (req,res)=>
{ 
     patientmodel.find().then((data)=>{
                res.send(data)
            })
 }
const singlePatient=async (req,res)=>
{
    var patient=await patientmodel.findById(req.params.id)
    console.log(patient)
    await  res.send(patient)
}        
module.exports={patient,allPatients,singlePatient}