import React from 'react'

import cartIcon from '../assets/svg/icon-add-to-cart.svg'
const AddToCartBtn = ({ onClick }) => {
  return (
    <div className='w-40 h-10'>
      <button 
        className='flex bg-white gap-2 justify-center items-center cursor-pointer duration-200 hover:bg-red-200 w-full h-full border rounded-[50px]'
        // call function when button is clicked
        onClick={onClick}> 
        <img src={cartIcon} alt="" />
        Add To Cart
      </button>
    </div>
  )
}

export default AddToCartBtn
