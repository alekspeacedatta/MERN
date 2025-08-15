import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db";
import authRoutes from "./routes/auth";
import productRoutes from "./routes/product";

dotenv.config();
const app = express();

// Middleware
app.use(cors({
  origin: "*", // Change to frontend domain after deployment
  credentials: true
}));
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/product", productRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Connect DB & start server
connectDB();
const port = process.env.PORT || 3100;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
