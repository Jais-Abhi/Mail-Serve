import express from 'express';
import dotenv from 'dotenv';
import cors from "cors"
import emailRoute from './Routes/EmailRoute.js';
dotenv.config()
const app = express();


const port  = parseInt(process.env.PORT || 8000)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(port,()=>{
    console.log("app is running on port",port)
})

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}));


app.use("/email",emailRoute);
