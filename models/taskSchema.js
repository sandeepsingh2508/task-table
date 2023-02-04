const mongoose=require('mongoose')
const User=require("./userScema")
const taskSchema=new mongoose.Schema({
    taskName:{
        type:String,
    },
    taskType:{
        type:String
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true,
    }
    
})
module.exports=mongoose.model('Task',taskSchema)