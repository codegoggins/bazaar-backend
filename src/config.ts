import dotenv from "dotenv";

dotenv.config();

export const NODE_ENV = process.env.NODE_ENV || "development";
export const PORT = process.env.PORT || 5500;
export const MONGO_URI = process.env.MONGO_URI;
export const MONGO_NAME = process.env.MONGO_NAME;
export const JWT_SECRET = process.env.JWT_SECRET;
