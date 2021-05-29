import React from "react";
import './ProductCard.css'

const ProductList = ({ products, onChange }) => (
  <>
    <div className='auto__container'>
      <fieldset>
        <legend>Build Your Order</legend>
        <form>
          <div className='pc__row'>
          {products.map((product, i) => (
              <div className='pc__col25' key={i}>
                <label>{product.title}{' '}{product.size}</label>
              <div className='pc__col75'></div>
              <input
                className='pc__input'
                type='text'
                value={product.count}
                onChange={(e) => onChange(i, parseInt(e.target.value) || 0)}
                />
              </div>
              ))}
              </div>
             
        </form>
      </fieldset>
    </div>
  </>
);

export default ProductList;
