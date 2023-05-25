import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import routes from "./routes/route.js";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.port || 5000;

app.use(express.json());
app.use(cors());

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log(`connected to MongoDB...`))
    .catch((err) => console.log(err))

app.use(routes);

app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`));