import express from "express";
import { PORT } from "./config.js";
import cors from "cors";
import connectDB from "./database/connectDB.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.send(`Welcome to bazaar`);
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT}`);
    });
  } catch (error) {
    console.log(`Failed to start server`);
    process.exit(1);
  }
};

startServer();
