import React from 'react'
import AddToCartBtn from '../components/AddToCartBtn'
import { Link, useParams } from 'react-router-dom'
import dessertProducts from '../../src/data/products';
import { useOutletContext } from 'react-router-dom';
import PageCart from '../components/PageCart';
import NoProduct from '../components/NoProduct';



const ProductPage = () => {
  const { id } = useParams()   // Get :id from URL

  // console.log(id)   // e.g., "2"                    
  const { addToCart } = useOutletContext()              // Get addToCart function
  const product = dessertProducts.find(p => p.id === Number(id))  // Find product by ID

  if (!product) {
    return (
      <div className="p-4">
        <NoProduct />
      </div>
    )
  }

  return (
    <div className='w-full m-auto p-10'>
      <main className='grid grid-cols-1 lg:grid-cols-[70%_25%] gap-3'>
        <div className='w-full h-full'>
          <Link 
            to='/'
            className='py-3 px-10 inline-block my-5 rounded-3xl text-white hover:bg-black duration-150 bg-[#88635a]'>
              Back
          </Link>
          <div className='w-full h-[300px] flex justify-center'>
            <img src={product.image} alt="" />
          </div>
          <p className='p-3 flex gap-5'>
            <span className='text-stone-500'>{product.recipe}</span>
            <span className='font-bold'>{product.name}</span>
            <span className='font-medium'>$ {product.price.toFixed(2)}</span>
          </p>
          <p className='px-3 py-5'>{product.desc}</p>
          
          <div className='w-full p-3 bg-black rounded-xl flex justify-center'>
            <AddToCartBtn onClick={() => addToCart(product)}/>
          </div>
        </div>
        <div className='h-fit bg-green-300 lg:sticky lg:top-10'>
          <PageCart /> {/* On-Page display Cart */}
        </div>
      </main>
     
      
    </div>

    
  )
}

export default ProductPage
