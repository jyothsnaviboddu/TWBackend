var mongoose=require("mongoose")
require("dotenv").config()
var connect=()=>{
    mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("connected")
})
}
module.exports=connect