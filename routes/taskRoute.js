const express=require('express')
const { getTask, createTask } = require('../controllers/taskController')
const router=express.Router()

router.route('/getTask/:id').get(getTask)
router.route('/createTask/:id').post(createTask)

module.exports=router