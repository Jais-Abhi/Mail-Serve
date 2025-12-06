const emailFormat = (otp)=>{
    return`
  <div style="font-family: Arial, sans-serif; padding: 20px; background: #f7f7f7;">
    <div style="max-width: 500px; margin: auto; background: #ffffff; padding: 25px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
      
      <h2 style="color: #333; text-align: center;">🔐 Email Verification</h2>
      
      <p style="font-size: 16px; color: #555;">
        Hi,<br><br>
        Thank you for signing up! Please use the following One-Time Password (OTP) to verify your email address:
      </p>

      <div style="text-align: center; margin: 25px 0;">
        <span style="font-size: 32px; font-weight: bold; letter-spacing: 4px; color: #2d89ef;">
          ${otp}
        </span>
      </div>

      <p style="font-size: 15px; color: #666;">
        This OTP is valid for <strong>5 minutes</strong>. Do not share it with anyone for security reasons.
      </p>

      <p style="font-size: 14px; color: #999; margin-top: 30px; text-align: center;">
        © ${new Date().getFullYear()} BuildWithMe. All Rights Reserved.
      </p>
    </div>
  </div>
`}

export default emailFormat;