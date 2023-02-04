const express=require('express')
const { getUser, createUser } = require('../controllers/userController')

const router=express.Router()

router.route('/getUser').get(getUser)
router.route('/createUser').post(createUser)

module.exports=router