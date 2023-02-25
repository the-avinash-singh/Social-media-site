import React from 'react'
import { Link } from 'react-router-dom'

export default function Catagory() {
  return (
    <div className='flex items-center justify-center pt-80'>
    <div className='w-64'>
    <input type="text" placeholder='Catagory' className='rounded-lg border border-black border-solid text-sm w-full p-1 hover:shadow-lg' required=""/>
      <Link to="/propage"><button className='bg-none border border-solid border-black rounded-2xl p-1 mt-9 w-20 text-sm '>Next &nbsp; &gt;</button> </Link>
    </div>
    </div>
  )
}
