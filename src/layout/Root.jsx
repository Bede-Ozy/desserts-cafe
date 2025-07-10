// import React from 'react'
// import { Outlet } from 'react-router-dom'

// const Root = () => {
//    const [cart, setCart] = useState([]);

   
//   return (
//     <div>
//       <Outlet context={{ cart, addToCart, updateQuantity, removeFromCart }}/>
//     </div>
//   )
// }

// export default Root

import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Root = () => {
  // This is the main cart state shared across your app
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : []
  })

  // ✅ Update localStorage every time cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  // add product to the cart
  const addToCart = (product) => {
    setCart(prev => {
      const found = prev.find(item => item.id === product.id)

      if (found) {
        // If the product is already in cart, increase quantity
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      // If it's a new product, add it with quantity 1
      return [...prev, { ...product, quantity: 1 }]
    }) 
  }

  // Function to increase or decrease product quantity
  const updateQuantity = (id, delta) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + delta, 1) } // min quantity = 1
          : item
      )
    )
  }

  // Function to completely remove an item from cart
  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  // Function to empty the cart
  const clearCart = () => {
    setCart([]) 
  }

  return (
    <div className='relative'>
      {/* Outlet is where nested routes render; we pass cart functions here */}
      <Navbar />
      <Outlet context={{ cart, addToCart, updateQuantity, removeFromCart, clearCart }} />
      <Footer />
    </div>
  )
}

export default Root

