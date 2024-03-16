import express from "express";
import {assignStudents, createStudents, getAllStudents, getMentorToStudent, getStudents } from "../Controllers/Students controllers.js";



const router = express.Router();

router.post('/create-students',createStudents) //http://localhost:4000/assign-mentor/create-students
router.get('/getStudentsData',getAllStudents) //http://localhost:4000/assign-mentor/getStudentsData
router.put('/assign-students/:studentId',assignStudents) //http://localhost:4000/assign-mentor/assign-students/:id
router.get('/students-mentor/:mentorId',getStudents) //http://localhost:4000/assign-mentor/students-mentor/:mentorId
router.get('/student-mentor/:studentId',getMentorToStudent)//http://localhost:4000/assign-mentor/students-mentor/:studentId

export default router;