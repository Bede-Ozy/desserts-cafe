import React from 'react'

import emptyCartImg from '../assets/svg/illustration-empty-cart.svg'

const EmptyCart = () => {
  return (
    <div className='w-full h-full flex justify-center items-center flex-col'>
      <img src={emptyCartImg} alt="Empty Cart" />
      <p>Your Cart Is Empty</p>
    </div>
  )
}

export default EmptyCart
