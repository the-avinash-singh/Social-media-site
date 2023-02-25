import React from 'react'
import { Link } from 'react-router-dom'

export default function Mobile() {
  return (
    <div className='flex items-center justify-center pt-72'>
        <div className='w-64'>
        <input type="text" min="0" placeholder='Mobile Number' className='rounded-lg border border-black border-solid text-sm w-full p-1' required=""/>
        <Link to="/otp"><button className='bg-none border border-solid border-black rounded-2xl p-1 mt-9 w-20 text-sm '>OTP &nbsp; &gt;</button></Link>
        </div>
      
    </div>
  )
}
