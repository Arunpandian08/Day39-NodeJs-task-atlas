import Students from "../Models/StudentsSchema.js";

// create or add new students detail assigned students 
export const createStudents = async(req,res)=>{
    try {
       const newStudent = new Students(req.body);
        await newStudent.save()
        // console.log(newStudent);
        res.status(200).json({msg:'Student Details added Successfully',StudentsData:newStudent})
    } catch (error) {
        console.log('Cannot add Student detail',error);
    }
}
//Find all created or added students data
export const getAllStudents = async (req, res) => {
    try {
        const students = await Students.find({});
        res.status(200).json({students});
    } catch (error) {
        console.log('Error fetching students:', error);
        res.status(500).json({error: 'Error fetching students'});
    }
};
//assign student to mentor
export const assignStudents = async (req, res) => {
    try {
        const {studentId} = req.params
        const {mentorId} = req.body
        console.log(studentId,mentorId);
        const student = await Students.findByIdAndUpdate(
            studentId,{mentor:mentorId},{new:true})
            res.status(200).json({message: 'Assigned mentor successfully',data:student})
            console.log(student);
    } catch (error) {
     console.log("Cannot assign students to mentor",error); 
     res.status(500).json({error:'server Error'})  
    }
}

// show all students for a particular mentor 
export const getStudents = async(req,res)=>{
    try {
        const {mentorId}=req.params;
        const students = await Students.find({mentor:mentorId})
        res.status(200).json({msg:"Students data fetched successfully",data:students})
    } catch (error) {
        console.log("cannot fetching students data");
        res.status(500).json({msg:"internal server error"})
    }
}

// show previously assigned mentor for particular student

export const getMentorToStudent = async(req,res)=>{
    try {
        const {studentId} = req.params;
        const student = await Students.findById(studentId).populate('Mentor')
        res.status(200).json({msg:"Data Fetched successfully"})
    } catch (error) {
        res.status(500).json({msg:'internal server error'})
    }
}