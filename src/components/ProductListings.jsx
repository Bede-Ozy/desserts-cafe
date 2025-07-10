import React from 'react'
import Card from './Card';
import { Link } from 'react-router-dom';

import dessertProducts from '../data/products';

const ProductListings = () => {

    let loadDesserts = () => {
      return dessertProducts.map(dessert => {
    
        return<Card
                  key={dessert.key}
                  id={dessert.key}
                  image={dessert.image}
                  name={dessert.name} 
                  food={dessert.recipe} 
                  price={dessert.price.toFixed(2)}
                //   addToCart={addToCart}
                />
      });
    }

  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
        {loadDesserts()}
    </div>
  )
}

export default ProductListings
