import React, { useState } from 'react'
import {account} from './appwrite-config'
import { useNavigate } from 'react-router-dom'
import './index.css'
function Login() {
    const [email,setEmail] = useState("")
    const [password,setPassword]=useState("")
    const navigate  = useNavigate()
    const handleEmailChange = (e)=>{
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e)=>{
        setPassword(e.target.value)
    }
    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            await account.createEmailSession(email,password)
            navigate("/profile")
        } catch (error) {
            
        }
       
    }
  return (
    <>
        <div className="bg-grey-400 min-h-screen">
      {/* Navbar */}
      <div className="h-16 bg-off-white">
        {/* Navbar content goes here */}
      </div>

      {/* Signup form */}
      <div className="flex flex-col items-center justify-center pt-16">
        <h1 className="text-lg text-black mb-8 sm:text-4xl sm:text-bold">Login</h1>

        <form className="bg-gray-100 px-8 py-6 rounded shadow-md w-1/2 sm:w-2/3">
          <div className="mb-4">
            <label className="text-black text-sm sm:text-lg">Email</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full bg-white border border-black px-3 py-2 rounded mt-2 "
            />
          </div>

          <div className="mb-4">
            <label className="text-black text-sm sm:text-lg">Password</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full bg-white border border-black px-3 py-2 rounded mt-2"
              required
            />
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="border-2 border-black py-2 px-4 rounded  mt-4 hover:bg-violet-700 hover:text-white text-sm sm:text-lg" 
          >
            Login
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login