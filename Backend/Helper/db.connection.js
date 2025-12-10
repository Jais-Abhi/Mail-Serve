import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.ATLAS_URL)
        console.log("Connected to Databse");
    } catch (error) {
        console.log("failed to connect DB : - ",error?.message)
    }
}

export default connectDB;