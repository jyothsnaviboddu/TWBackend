const express=require("express")
const app=express()
const jwt=require("jsonwebtoken")
const cors=require("cors")
const bodyParser=require("body-parser")
const connect=require("./db")
const userModel=require("./models/users.Model")
const contactModel=require("./models/contact.Model")
const doctorModel=require("./models/doctor.model")
const patientmodel=require("./models/Patient.Model")
const appointmentmodel=require("./models/appointment.Model")
const {sign}=require("./Controllers/user.Controller")
const {login}=require("./Controllers/login.Controller")
const {contact}=require("./Controllers/contact.Controller")
const {addDoctor,deleteDoctor,allDoctors,updateDoctor}=require("./Controllers/doctor.Controller")
connect()
app.use(bodyParser.json())
app.use(cors())
app.use(express.static(__dirname+"/Public"))
app.get("/",(req,res)=>{
    res.send({msg:"Hello all"})
})
app.post("/signUp",sign)
app.post("/login",login)
app.post("/contact",contact)
app.post("/addDoctor",addDoctor)
app.get("/doctors",allDoctors)
app.delete("/deleteDoctor",deleteDoctor)
app.post("/patient",(req,res)=>{
     var newPatient=new patientmodel(req.body)
      newPatient.save()
    console.log(req.body)
    res.send({"msg":"patient added",newPatient})

      //console.log(req.body)
})
app.post("/appointments",async (req,res)=>
{       
    var patient=await patientmodel.findById(req.body.patientId)
    var { patientId,doctorName, doctorMail,consultationFee, appointmentDate, status}=req.body
    var Appointment=new appointmentmodel({
        patient:patientId,
        doctorName,
        doctorMail,
        consultationFee,
        status,
        appointmentDate,
        time
    })
    Appointment.save()
    console.log(patient)
  patient.appointments.push({
      appointmentId: Appointment._id,
      doctorName,
      doctorMail,
      consultationFee,
      status,
      appointmentDate,
      time
    });
    await patient.save()
})
app.get("/allPatients",(req,res)=>{
        var found=jwt.verify(req.headers.token,"Hello Admin")
        if(found)
        {
            patientmodel.find().then((data)=>{
                res.send(data)
            })
        }
        else
        {
            res.send({"msg":"You are not admin of this website"})
        }
      /* patientmodel.find().then((data)=>{
             res.send(data)
       })*/

})
app.post("/allAppointments",(req,res)=>
{
     var found=jwt.verify(req.headers.token,"Hello Admin")
        if(found)
        {
            appointmentmodel.find().then((data)=>{
                res.send(data)
            })
        }
        else
        {
            res.send({"msg":"You are not admin of this website"})
        }
   
})
app.post("/updateDoctor",updateDoctor)
app.listen(3600,()=>{
    console.log("Server is running successfully")
})