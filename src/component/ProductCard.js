import React from "react";
import Products from "./Products";
import "./ProductCard.css";


class ProductCard extends React.Component {
 

  render() {
    return (
      <div className='pc__container'>
        <div className='pc__main'>
          <Products />
        </div>
      </div>
    );
  }
}

export default ProductCard;
