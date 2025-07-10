import React from 'react'

import empty from '../../src/assets/svg/illustration-empty-cart.svg'
import { Link } from 'react-router-dom'

const NoPage = () => {
  return (
    <div className='w-full h-[75vh] flex justify-center items-center shadow-xl'>
        <div className='flex justify-center items-center flex-col w-[85%] lg:w-[40%] h-[95%] shadow-xl '>
            <div className='flex flex-col'>
                <h1 className='text-3xl'>This page doesn't exist</h1>
                <img src={empty} alt="Page doesnt exist" />
            </div>
        
            <p className='p-2'>How hungry are you?</p>
            <p className='p-3 flex gap-2 shadow hover:bg-[#caafa6] rounded-xl duration-300 ease-in-out'> 
                <span className='nopage-tootip font-medium'>Check out some desserts you can try </span> 
                <Link to='/'>
                    <button className="btn-2">
                        <span className="up">👆</span> 
                        <span className="text">🍰</span>
                    </button>
                </Link>
            </p>
        </div>
        
      {/* <Link 
      to='/'
      className='p-3 bg-black text-white hover:bg-[#ba5931] duration-200 ease-in-out'>
        Check out some desserts you can try
      </Link> */}
    </div>
  )
}

export default NoPage
