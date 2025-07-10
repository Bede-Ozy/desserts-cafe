import React from 'react'
import NavLinks from './NavLinks'

const ProductPageHeader = () => {
  return (
    <div className='flex justify-between items-center'>
      <h1 className='font-medium text-3xl'>Desserts</h1>
      <NavLinks />
    </div>
  )
}

export default ProductPageHeader
