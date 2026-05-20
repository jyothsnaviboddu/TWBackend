var mongoose=require("mongoose")
var appointmentSchema=mongoose.Schema(
{
       patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient" },
        doctorName: { type: String,},
        doctorMail: { type: String },
        consultationFee: { type: Number},
        status: { type: String },
        appointmentDate: { type: Date } ,
        time:{type:String}
                
  
})
//var appointmentmodel=mongoose.model("appointment",appointmentSchema)
var appointmentmodel=mongoose.model("appointment",appointmentSchema)
module.exports=appointmentmodel