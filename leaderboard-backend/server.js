import express, { json } from "express";
import mongoose from "mongoose";
import cors from "cors";
import { config } from "dotenv";
import userRoutes from "./routes/userRoutes.js";

config();
const app = express();
app.use(cors());
app.use(json());
app.use("/api", userRoutes);

mongoose.connect("mongodb+srv://DKP:Password123@3w.816ep.mongodb.net/?retryWrites=true&w=majority&appName=3W")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
