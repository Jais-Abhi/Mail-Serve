import express from 'express';
import dotenv from 'dotenv';
import cors from "cors"
import emailRoute from './Routes/EmailRoute.js';
import connectDB from './Helper/db.connection.js';
dotenv.config()
const app = express();


const port  = parseInt(process.env.PORT || 8000)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(port,async()=>{
    console.log("app is running on port",port)
    await connectDB();
})

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}));


app.use("/email",emailRoute);
