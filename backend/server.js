import express from "express";
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";
import connectMongoDB from "./db/connectMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`server is up and running at port ${PORT}`);
  connectMongoDB();
});
