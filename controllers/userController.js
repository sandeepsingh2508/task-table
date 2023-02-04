const catchAsyncError=require('../middleware/catchAsyncError')
const User=require('../models/userScema')

//getAll user
exports.getUser=catchAsyncError(async(req,res,next)=>{
    const result= await User.find()
    res.status(200).json({
        success:true,
        result
    })
});

//create user 
exports.createUser=catchAsyncError(async(req,res,next)=>{
    const data=new User(req.body)
    const result=await data.save()
    res.status(200).json({
        success:true,
        result
    })
})