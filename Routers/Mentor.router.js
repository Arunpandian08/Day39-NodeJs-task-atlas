import express from "express";
import {  assignMentor, createMentors, getAllMentors } from "../Controllers/Mentor.controller.js";



const router = express.Router();

router.post('/create-mentors',createMentors) //http://localhost:4000/assign-mentor/create-mentors
router.get('/get-mentors',getAllMentors) //http://localhost:4000/assign-mentor/get-mentors
router.put('/assign-mentor/studentId',assignMentor) //http://localhost:4000/assign-mentor/assign-mentor

export default router;