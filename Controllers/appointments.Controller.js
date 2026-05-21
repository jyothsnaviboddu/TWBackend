const appointmentmodel=require("../models/appointment.Model")
const patientmodel=require("../models/Patient.Model")
const appointments=async (req,res)=>
{   
    const { patientId, doctorName, doctorDetails, consultationFees, status, appointmentDate } = req.body;
    const patient = await patientmodel.findById(patientId);
    if (!patient) return res.status(404).json({ error: "Patient not found" });
    const appointment = new appointmentmodel({
      patient: patientId,
      doctorName,
      doctorDetails,
      consultationFee,
      status,
      appointmentDate
    });
    await appointment.save();
    patient.appointments.push({
      appointmentId: appointment._id,
      doctorName,
      doctorDetails,
      consultationFee,
      status,
      appointmentDate
    });
    await patient.save();

    res.status(201).json({ message: "Appointment booked successfully", appointment, patient });
  }
 
const allAppointments=(req,res)=>
{
     appointmentmodel.find().then((data)=>
        {
                res.send(data)
        })
    
}
module.exports={appointments,allAppointments}