import React from 'react'
import { Link } from 'react-router-dom'

const NavLinks = () => {
  return (
    <div>
      <ul className='flex justify-center items-center gap-5 h-[50px]'>
        <li className='h-full w-25'>
            <Link className='hover:border-b-1 hover:pb-2 duration-200 ease-in w-full h-full flex justify-center items-center' to='/'>Home</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavLinks
