import mongoose from "mongoose";

const mentorSchema = mongoose.Schema({
    mentorName:String,
    email:String,
    subject:String,
    students:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Students'
    }]
},{versionKey:false});
const Mentors = mongoose.model('Mentors',mentorSchema)
export default Mentors;