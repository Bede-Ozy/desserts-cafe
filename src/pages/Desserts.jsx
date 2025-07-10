import React from 'react'
import ProductPageHeader from '../components/ProductPageHeader'
import ProductListings from '../components/ProductListings'
import PageCart from '../components/PageCart'

const Desserts = () => {
  return (
    <div className='p-10 w-screen'>
      <main className='grid grid-cols-1 lg:grid-cols-[70%_25%] gap-3'>
          <div className='w-full h-full'> 
            <div>
              <ProductPageHeader />  {/* header of product page */}
            </div>
            <div>
              <ProductListings /> {/* Product listing grid */}
            </div>
          </div>
          <div className='h-fit bg-green-300 lg:sticky lg:top-10'>
            <PageCart /> {/* On-Page display Cart */}
          </div>
      </main>
    </div>
  )
}

export default Desserts
