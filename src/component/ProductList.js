import React from "react";
import './ProductList.css'

const ProductList = ({ products, onChange }) => (
  <>
    <div className='auto__container'>
      <fieldset>
        <legend>Build Your Order</legend>
        <form>
          <div className='auto__row'>
          {products.map((product, i) => (
              <div className='auto__col25' key={i}>
                <label>{product.title}</label>
              <div className='auto__col75'>{product.size}</div>
              <input
                className='auto__input'
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
