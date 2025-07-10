import React from 'react'


const CartItem = ({item, updateQuantity, removeFromCart}) => {
  return (
     <div className='flex flex-col items-center gap-3 p-3 w-[95%] m-auto shadow'>
      <div className='flex gap-3 items-center'>
        <img
          className='w-16 h-16 object-cover'
          src={item.image}
          alt={item.name}
        />
        <div>
          <p className='font-bold w-[200px]'>{item.name}</p>
          <p>{`$${item.price}`} × {item.quantity}</p>
        </div>
      </div>

      <div className='flex items-center gap-2'>
        {/* Decrease quantity */}
        <button
          className='px-2 border rounded'
          onClick={() => updateQuantity(item.id, -1)}
        >-</button>

        {/* Show current quantity */}
        <span>{item.quantity}</span>

        {/* Increase quantity */}
        <button
          className='px-2 border rounded'
          onClick={() => updateQuantity(item.id, 1)}
        >+</button>

        {/* Remove item from cart */}
        <button
          className='cursor-pointer hover:border hover:text-red-500 duration-200 px-4 text-red-600 ml-3'
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  )
}

export default CartItem
