import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/userDB');
        console.log('MongoDB Connected');
    } catch (error) {
        console.error(`MongoDB Connection Error ${error}`);
        process.exit(1);
    }
}