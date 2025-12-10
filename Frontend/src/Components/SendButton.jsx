import React from 'react'

const SendButton = ({handleSendOtp,otpSending,otpSent}) => {
  return (
    <button
              onClick={handleSendOtp}
              disabled={otpSending || otpSent}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
            >
              {otpSending ? 'Sending...' : otpSent ? 'OTP Sent' : 'Send OTP'}
            </button>
  )
}

export default SendButton