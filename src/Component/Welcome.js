import React from 'react'
import { Link } from 'react-router-dom'

export default function welcome() {
  return (
    <div className=''>
      <div className='flex items-center font-semibold justify-center pt-80 underline'>
        Pro.file
      </div>
      <div className='py-8 font-light text-sm'>
      Everything About you at one place
      </div>
      <div className='pt-5'>
        <Link to="/login"><button className='bg-none border border-solid border-black rounded-2xl p-1 w-20 text-sm '>Next &nbsp; &gt;</button></Link>
      </div>

    </div>
  )
}
