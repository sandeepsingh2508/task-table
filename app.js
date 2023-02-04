const express=require('express')

const app=express()
app.use(express.json())

const task=require('./routes/taskRoute')
const user=require('./routes/userRoute')

app.use('/api',task)
app.use('/api',user)

module.exports=app