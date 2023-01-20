import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import authRouter from "./Routes/auth.js"
import userRouter from "./Routes/users.js"


const app = express();
dotenv.config();
mongoose.connect(process.env.MONGO_URL).then((data)=>{
    console.log("connected to database");
}).catch((err)=>{
    console.log(err.message);
})

app.use(express.json());
app.use(cors());
app.use("/api/auth",authRouter);
app.use("/api/users",userRouter);





app.listen(8900,()=>{
    console.log("server running on " +8900)
})