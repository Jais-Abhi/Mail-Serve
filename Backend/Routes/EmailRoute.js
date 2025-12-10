import express from "express"
import {sendOtpController,verifyController} from "../Controller/emailController.js";
const emailRoute = express.Router();


emailRoute.post("/sendotp", sendOtpController);
emailRoute.post("/verify", verifyController);

export default emailRoute;