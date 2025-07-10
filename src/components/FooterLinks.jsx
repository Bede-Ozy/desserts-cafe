import React from 'react'
import { Link } from 'react-router-dom'

import githubIcon from '../assets/svg/github-fill.svg'
import twitterIcon from '../assets/svg/twitter-x-fill.svg'
import linkedinIcon from '../assets/svg/linkedin-box-fill.svg'

const FooterLinks = () => {
  return (
    <div className='w-full'>
      <ul className='text-white flex flex-col lg:flex-row justify-center border border-b-0 items-center lg:items-start gap-3 lg:gap-6 h-full w-fit m-auto p-3'>
        <li>
          <Link to='/' className='hover:text-sky-500 duration-200 ease-in'>
          Desserts for you
          </Link>
        </li>
        <li>
          <Link to='/' className='hover:text-sky-500 duration-200 ease-in'>
          Drinks & Smoothies
          </Link>
        </li>
        <li>
          <Link to='/' className='hover:text-sky-500 duration-200 ease-in'>
          Small-chops for big appetites
          </Link>
        </li>
        <li>
          <Link className='hover:text-sky-500 duration-200 ease-in'>
          Home Cooked Recipes
          </Link>
        </li>
        <li>
          <Link className='hover:text-sky-500 duration-200 ease-in'>
          Combo Jumbo
        </Link>
        </li>
      </ul>
      <div className='bg-white h-10 w-[66.7%] m-auto flex gap-5 justify-center items-center'>
        <span> <Link to='github.com'> <img className='w-6 hover:w-8 duration-200 ease-in' src={githubIcon} alt="github" /></Link></span>
        <span> <Link to='twitter.com'>  <img className='w-6 hover:w-8 duration-200 ease-in' src={twitterIcon} alt="github" /></Link></span> 
        <span> <Link to='linkedin.com'>  <img className='w-6 hover:w-8 duration-200 ease-in' src={linkedinIcon} alt="github" /> </Link> </span>
      </div>
    </div>
  )
}

export default FooterLinks
