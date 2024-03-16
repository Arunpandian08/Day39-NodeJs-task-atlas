import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const connectDB = async()=>{
    const mongoDBConnectionString = process.env.MONGODBCONNECTIONSTRING
    try {
        const connection = await mongoose.connect(mongoDBConnectionString)
        console.log('connected to MongoDB');
    } catch (error) {
        console.log("Cannot connect MongoDB",error);
    }
}

export default connectDB