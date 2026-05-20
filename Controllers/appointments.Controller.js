const appointmentmodel=require("../models/appointment.Model")
const patientmodel=require("../models/Patient.Model")
const appointments=async (req,res)=>
{       
    var patient=await patientmodel.findById(req.body.patientId)
    var { patientId,doctorName, doctorMail,consultationFee, appointmentDate, status,time}=req.body
    var Appointment=new appointmentmodel({
        patient:patientId,
        doctorName,
        doctorMail,
        consultationFee,
        status,
        appointmentDate,
        time
    })
   await Appointment.save()
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
    res.send({"msg":"appointment confirmed"})
}
const allAppointments=(req,res)=>
{
     appointmentmodel.find().then((data)=>
        {
                res.send(data)
        })
    
}
module.exports={appointments,allAppointments}