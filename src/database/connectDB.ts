import mongoose from "mongoose";
import { MONGO_NAME, MONGO_URI } from "../config.js";

const connectDB = async (): Promise<void> => {
  try {
    if (!MONGO_URI || !MONGO_NAME) {
      throw new Error("Database connection string not defined");
    }
    await mongoose.connect(MONGO_URI, {
      dbName: MONGO_NAME,
    });
    console.log("Connected to database successfully");
  } catch (error) {
    console.log("MongoDB connection failed", error);
    process.exit(1);
  }
};

export default connectDB;
