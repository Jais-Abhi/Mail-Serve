import nodemailer from "nodemailer"
import emailFormat from "./emailFormat.js";
import dotenv from "dotenv";
dotenv.config();

const sendOtp =  async(email,otp)=>{
  console.log(email,otp);
try {
  const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.USER ,
    pass: process.env.PASS ,
  },
  });

    console.log("in email helper",email,otp);

 const info = await transporter.sendMail({
    from: `"Abhishek Jaiswal" ${process.env.USER}`, // sender address
    to: email,
    subject: "OTP ✔",
    text: "hello User Verify your Account", // plain‑text body
    html: emailFormat(otp), // HTML body
  });

  console.log("Message sent:",info, info.messageId);
  return ({status: 201, message : "otp send successfull"})
} catch (error) 
{
  console.log("error in sending otp",error)
    return ({status: 500, message : "failed to send otp", error: error.message})

}
  
}

export default sendOtp;