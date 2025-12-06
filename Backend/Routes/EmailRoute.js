import express from "express"
import sendOtpController from "../Controller/emailController.js";
const emailRoute = express.Router();


emailRoute.post("/sendotp", sendOtpController);

export default emailRoute;