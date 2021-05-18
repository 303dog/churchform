import React from 'react'


  const Total = ({ products }) => (

    <fieldset>
    <div className='pc__total'>
      <h3>
        Price: ${products.reduce((sum, i) => (sum += i.count * i.price), 0)}
      </h3>
    </div>
    </fieldset>
  );

  export default Total;