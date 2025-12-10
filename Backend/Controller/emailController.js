import sendOtp from "../Helper/email.helper.js";
import Email from "../Model/email.model.js";

const sendOtpController = async(req,res)=>{
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        console.log(email,otp);
        const newEmail = await new Email({
                email: email,
                otp: otp
            })
        await newEmail.save();
        const detail = await sendOtp(email,otp);
        console.log(detail)
        if(detail.status == 201){
            return res.status(200).json({ message: "OTP sent successfully", newEmail });
        }
        else if (detail.status == 500) 
            return res.status(500).json({ message: "failed to send otp" , error :detail.error });
        
    
    } catch (error) {
        res.status(500).json(error,{ message: "Internal Server Error in otp controller" });
    }
}

const verifyController = async(req,res)=>{
    const {email,otp} = req.body;
    try {
        const emailData = await Email.findOne({ email: email });
        if (!emailData) {
            return res.status(500).json(error,{ message: "Otp not send" });
        }
        if(emailData.otp != otp) {
            return res.status(400).json({ message: "Invalid OTP" });
        }
        return res.status(201).json({ message: "Email verified successfully" });
    } catch (error) {
        res.status(500).json(error,{ message: "not verify" });

    }
}


export {sendOtpController, verifyController};