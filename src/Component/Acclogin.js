import React from 'react'
import { Link } from 'react-router-dom'

export default function acclogin() {
  return (
    <div className='flex items-center justify-center pt-72'>
    <div className='w-64'>
      <input type="text" placeholder='Username' className='rounded-lg border border-black border-solid text-sm w-full p-1 hover:shadow-lg' required=""/>
        <input type="text" placeholder='Password' className='rounded-lg border border-black border-solid text-sm w-full mt-3 p-1 hover:shadow-lg' required=""/>
        <Link to="/mobile"><button className='bg-none border border-solid border-black rounded-2xl p-1 mt-9 w-20 text-sm '>Next &nbsp; &gt;</button></Link>
        <Link to="/login"><div className='text-blue-400 text-sm underline mt-10 cursor-pointer'>Sign-up to create a new account</div></Link>
    </div>
    </div>
  )
}
