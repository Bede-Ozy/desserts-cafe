import React, { useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import AddToCartBtn from './AddToCartBtn'

const Card = (props) => {

  const { addToCart } = useOutletContext()

  // Track if this card is "selected"
  const [selected, setSelected] = useState(false)

  // Called when the "Add to Cart" button is clicked
  const handleClick = () => {
    setSelected(true) // visually highlight the card

    // Add the current product to the cart
    addToCart({
      id: props.id,
      name: props.name,
      price: props.price,
      image: props.image,
    })

    // ✅ Log it for inspection
    console.log('Product added:', product)
  }
  return (
    <div className='relative h-80 flex flex-col gap-2'>
      <div className='w-full h-[80%] py-2'>
        <Link to={`/product/${props.id}`}>
        <img className={`w-full h-full p-2 border transition-all duration-200 ${selected ? 'border-1 border-yellow-300' : 'border-transparent'}`} src={props.image} alt={props.name} />
        </Link>
      </div>
      <div>
        <p className='text-stone-400 '> {props.food} </p>
        <p className='font-medium '> {props.name} </p>
        <p> {`$${props.price}`} </p>
      </div>
      <div className='w-full h-15 flex justify-center items-center absolute top-52 '>
        <AddToCartBtn onClick={handleClick} />
      </div>
    </div>
  )
}

export default Card
