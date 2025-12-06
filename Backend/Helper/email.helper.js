import nodemailer from "nodemailer"
import emailFormat from "./emailFormat";
import dotenv from "dotenv";
dotenv.config();

const sendOtp =  async(email,otp)=>{
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.USER ,
    pass: process.env.PASS ,
  },
  });

 const info = await transporter.sendMail({
    from: `"Abhishek Jaiswal" ${process.env.USER}`, // sender address
    to: email,
    subject: "OTP ✔",
    text: "hello User Verify your Account", // plain‑text body
    html: emailFormat(otp), // HTML body
  });

  console.log("Message sent:",info, info.messageId);
  
}

export default sendOtp;