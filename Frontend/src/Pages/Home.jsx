import React, { useState } from 'react'
import axios from "axios";

const Home = () => {
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSendOtp = async(e) => {
    e.preventDefault()
    if (!email) {
      alert('Please enter an email')
      return
    }
    try {
      setLoading(true)
      const result = await axios.post('http://localhost:8000/email/sendOtp', { email });
      console.log(result)
      setLoading(false)
      setOtpSent(true)
    } catch (error) {
      console.log(error)
    }
    // Simulate API call
  }

  const handleVerifyEmail = (e) => {
    e.preventDefault()
    if (!otp) {
      alert('Please enter OTP')
      return
    }
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      alert('Email verified successfully!')
      setEmail('')
      setOtp('')
      setOtpSent(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Email Verification</h1>

        {/* First Row - Email and Send OTP */}
        <div className="mb-8">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                disabled={otpSent}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition"
              />
            </div>
            <button
              onClick={handleSendOtp}
              disabled={otpSent || loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
            >
              {loading ? 'Sending...' : otpSent ? 'OTP Sent' : 'Send OTP'}
            </button>
          </div>
        </div>

        {/* Divider */}
        {otpSent && <div className="border-t border-gray-600 my-8"></div>}

        {/* Second Row - OTP and Verify Email */}
        {otpSent && (
          <div>
            <div className="space-y-4">
              <div>
                <label htmlFor="otp" className="block text-sm font-medium text-gray-300 mb-2">
                  Enter OTP
                </label>
                <input
                  type="text"
                  id="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter 6-digit OTP"
                  maxLength="6"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500 transition text-center text-lg tracking-widest"
                />
              </div>
              <button
                onClick={handleVerifyEmail}
                disabled={loading}
                className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
              >
                {loading ? 'Verifying...' : 'Verify Email'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home