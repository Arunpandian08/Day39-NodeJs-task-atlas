import Mentors from "../Models/MentorSchema.js";

// create or add mentors detail and students assigned by _id
export const createMentors = async(req,res)=>{
    try {
       const newMentor = new Mentors(req.body);
        await newMentor.save()
        console.log(newMentor);
        res.status(200).json({msg:'Mentors Details added Successfully',MentorData:newMentor})
    } catch (error) {
        console.log('Cannot add Mentor detail',error);
    }
}
//find all mentors and students with their assigned id
export const getAllMentors = async (req, res) => {
    try {
        const mentors = await Mentors.find();
        res.status(200).json({mentors});
    } catch (error) {
        console.log('Error fetching students:', error);
        res.status(500).json({error: 'Error fetching students'});
    }
};

// Assign mentor to student
export const assignMentor = async (req, res) => {
    try {
        const {mentorId} = req.params
        const {studentId} = req.body
        console.log(studentId,mentorId);
        const mentor = await Mentors.findByIdAndUpdate(
            mentorId,{student:studentId},{new:true})
            res.status(200).json({message: 'Assigned student successfully',data:mentor})
            console.log(mentor);
    } catch (error) {
     console.log("Cannot assign student",error); 
     res.status(500).json({error:'server Error'})  
    }
}


