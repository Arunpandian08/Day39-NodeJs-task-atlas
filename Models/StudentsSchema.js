import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    studentName:String,
    email:String,
    batch:String,
    Mentors:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Mentors'
    }
},{versionKey:false});
const Students = mongoose.model('Students',studentSchema)
export default Students;