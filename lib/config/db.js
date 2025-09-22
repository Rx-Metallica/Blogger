import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://adityamote478:aditya@cluster0.m3wz7.mongodb.net/blog-app');
        console.log("MongoDB connected");
    } catch (error) { 
        console.log("MongoDB connection error:", error);
    }   
}