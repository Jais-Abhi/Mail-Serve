import nodemailer from "nodemailer"


const sendOtp =  async(email,otp)=>{
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "buildwithme.web@gmail.com",
    pass: "mskk jnyx ibaa vazu",
  },
  });

 const info = await transporter.sendMail({
    from: '"Abhishek Jaiswal" buildwithme.web@gmail.com',
    to: email,
    subject: "OTP ✔",
    text: "hello User Verify your Account", // plain‑text body
    html: `<b>${otp}</b>`, // HTML body
  });

  console.log("Message sent:",info, info.messageId);
  
}

export default sendOtp;