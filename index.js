import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './Database/DB Config.js';
import studentRouter from './Routers/Students.router.js'
import mentorRouter from './Routers/Mentor.router.js'

dotenv.config()
const app = express();
app.use(cors())
app.use(express.json())
const port = process.env.PORT 
connectDB()

app.use('/',(req,res)=>{
    res.status(200).send(`
    <div style='text-align:center'>
    <h3 style='background-color:orange;color:black; font-size:1.2rem'>Student management system</h3>
    <h4 style='font-size:1rem'>End-points</h4>
    <h5 style='font-size:1rem' >Create students:POST/assign-mentor/create-students</h5>
    <h5 style='font-size:1rem' >Create mentor:POST/assign-mentor/create-mentor</h5>
    <h5 style='font-size:1rem' >Get students data:GET/assign-mentor/getStudentsData</h5>
    <h5 style='font-size:1rem' >Get mentors data:GET/assign-mentor/get-mentors</h5>
    <h5 style='font-size:1rem' >Assign mentor to student:PUT/assign-mentor/assign-mentor/:mentorId</h5>
    <h5 style='font-size:1rem' >Assign students to mentor:PUT/assign-mentor/assign-students/:studentId</h5>
    <h5 style='font-size:1rem' >Student for particular mentor:GET/assign-mentor/students-mentor/:mentorId</h5>
    <h5 style='font-size:1rem' >Previously assigned students for mentor:GET/assign-mentor/student-mentor/:studentId</h5>
    </div>`)
})

app.use('/assign-mentor',studentRouter)
app.use('/assign-mentor',mentorRouter)


app.listen(port,()=>{
    console.log('App is Running at',port);
})