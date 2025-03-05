const express=require('express')
const router=express.Router()

const StudentRouter=require('../Controller/Student')

router.post('/student',StudentRouter.StudentPost)

module.exports=router
