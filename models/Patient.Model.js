var mongoose=require("mongoose")
var appointmentmodel=require("./appointment.Model")
const embeddedAppointmentSchema = new mongoose.Schema({
  appointmentId: { type: mongoose.Schema.Types.ObjectId, ref: "Appointment" },
  doctorName: String,
  doctorMail: String,
  consultationFees: Number,
  status: { type: String, enum: ["pending", "confirmed", "cancelled"], default: "pending" },
  appointmentDate: Date,
  time:String
});

const patientSchema = new mongoose.Schema({
  username: { type: String},
  password:{type:String},
  role:{type:String},
  dob: { type: Date },
  address: { type: String  },
  email: { type: String},
  phone: { type: String},
  appointments: [embeddedAppointmentSchema]   // embedded summary
});

var patientmodel=mongoose.model("patient",patientSchema)
module.exports=patientmodel