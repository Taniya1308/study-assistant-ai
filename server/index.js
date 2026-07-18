import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import generateRoutes from "./routes/generateRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running successfully");
});

app.use("/generate", generateRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
