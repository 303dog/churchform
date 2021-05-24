import React from 'react'
import './ProductCard.css'


  const Total = ({ products }) => (

    <div className='pc__total'>
    <fieldset>
      <legend>SubTotal</legend>
      <h3 className='pc__price'>
        ${products.reduce((sum, i) => (sum += i.count * i.price), 0)}
      </h3>
    </fieldset>
    </div>
  );

  export default Total;