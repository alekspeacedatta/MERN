import mongoose from "mongoose";

export const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI environment variable is not defined!");
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Atlas connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1); 
  }
};
