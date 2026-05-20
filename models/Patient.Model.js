var mongoose=require("mongoose")
var appointmentmodel=require("./appointment.Model")
const embeddedAppointmentSchema =mongoose.Schema({
  appointmentId: { type: mongoose.Schema.Types.ObjectId, ref: "Appointment" },
  doctorName: String,
  doctorMail: String,
  consultationFee: Number,
  status: { type: String },
  appointmentDate: Date,
  time:String
});

const patientSchema = mongoose.Schema({
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