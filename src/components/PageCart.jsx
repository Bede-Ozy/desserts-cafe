import React from 'react'
import CartItem from './CartItem'
import { useOutletContext } from 'react-router-dom'
import EmptyCart from './EmptyCart'

const PageCart = () => {
   const context = useOutletContext()

   const { cart, updateQuantity, removeFromCart, clearCart } = context

    const getTotalPrice = () => {
      return cart.reduce((total, item) => {
        return total + item.price * item.quantity
      }, 0).toFixed(2)
    }
  //  let loadCartItems = () => {
  //   cart.length === 0 ? 
  //    ( <EmptyCart /> ) : 
  //    ( cart.map(item => (
  //      <CartItem 
  //        key = {item.id}
  //        item = {item}
  //        updateQuantity = {updateQuantity}
  //        removeQuantity = {removeQuantity}
  //    )))
  //  }
  
  return (
    
    <div>
      <section className='text-black w-full bg-white flex flex-col gap-3 py-5'>
        <h2 className='text-black font-bold'>
          Your Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
        </h2>
         {cart.length === 0 ? (
          <EmptyCart />
        ) : (
          cart.map(item => (
            <CartItem
              id={item.id}
              item={item}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          ))
        )}

        {cart.length > 0 && (
          <div className="mt-4 text-right text-lg font-bold">
            Total: ${getTotalPrice()}
          </div>
        )}

        {cart.length > 0 && (
          <button
            onClick={clearCart}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Clear Cart
          </button>
        )}

      </section>
    </div>
  )
}

export default PageCart
