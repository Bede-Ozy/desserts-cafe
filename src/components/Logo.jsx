import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div>
      <h1 className='w-60 flex justify-start items-center'> 
        <Link to='/'>
          <span className=' rounded text-[#ba5931] font-medium text-2xl p-3'>
            DESSERTS
          </span>
          <span className='p-3 bg-white text-2xl text-black hover:bg-transparent hover:text-white rounded duration-200 ease-in'>
            Cafe
          </span> 
        </Link> 
      </h1>
    </div>
  )
}

export default Logo
