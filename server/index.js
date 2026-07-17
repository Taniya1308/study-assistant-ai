import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import generateRoutes from "./routes/generateRoutes.js";
dotenv.config();

const app = express(); //browser

app.use(cors()); //middlewares
app.use(express.json()); //middlewares

app.use("/generate", generateRoutes); //register route

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); //start server
