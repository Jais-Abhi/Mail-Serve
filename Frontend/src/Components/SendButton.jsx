import React, { useEffect } from 'react'

const SendButton = ({handleSendOtp,otpSending,otpSent,setOtpSent,timer,setTimer}) => {


  useEffect(()=>{
    if(!otpSent) return;

    const countdown = setInterval(()=>{
        setTimer((pre)=> {
          console.log(pre)
          if(pre <=1){
            clearInterval(countdown);
            setOtpSent(false);
            return 0;
          }
          else{
            return pre -1;
          }
        });
      
    },1000)

    return () => clearInterval(countdown);
  },[otpSent])

  return (
    <button
        onClick={handleSendOtp}
        disabled={otpSending || otpSent}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
    >
    {otpSending ? 'Sending...' : otpSent ? `resend in ${timer}` : `send OTP`}
    </button>
  )
}

export default SendButton