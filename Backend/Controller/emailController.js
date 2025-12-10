import sendOtp from "../Helper/email.helper.js";

const sendOtpController = async(req,res)=>{
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        console.log(email,otp);
        await sendOtp(email,otp);
        
        res.status(200).json({ message: "OTP sent successfully", otp });
    
    } catch (error) {
        res.status(500).json(error,{ message: "Internal Server Error" });
    }
}

export default sendOtpController;