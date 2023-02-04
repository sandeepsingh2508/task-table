const catchAsyncError=require('../middleware/catchAsyncError')
const Task=require('../models/taskSchema')


//get task
exports.getTask=catchAsyncError(async(req,res)=>{

    const task=await Task.find({user:req.params.id})
    res.status(200).json({
        success:true,
        task
    })
})

//post task
exports.createTask=catchAsyncError(async(req,res)=>{
    console.log(req.params.id)
    req.body.user=req.params.id
    
    
    const result=await Task.create(req.body)
    res.status(200).json({
        success:true,
        result
    })

})