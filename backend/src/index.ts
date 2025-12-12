import express from "express"; 
import mongoose from "mongoose"; 
import cors from "cors"; 
import dotenv from "dotenv"; 
import requestCallRoute from "./routes/requestCallRoute"; 
 
dotenv.config(); 
const app = express(); 

// Middlewares 
app.use(cors()); 
app.use(express.json()); 

// ROUTES 
app.use("/", requestCallRoute); 

// MONGODB CONNECTION 
mongoose 
  .connect(process.env.MONGO_URL as string) 
  .then(() => console.log("MongoDB Connected")) 
  .catch((err) => console.error("MongoDB Error:", err)); 
// Health Check 
app.get("/", (req, res) => { 
  res.json({ message: "Care Helpline backend is running" }); 
}); 
// Start server 
const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => { 
  console.log(`Backend running on port ${PORT}`); 
}); 