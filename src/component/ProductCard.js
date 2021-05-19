import React from "react";
import "./ProductCard.css";
import Products from "./Products";


class ProductCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='pc__container'>
        invisible
            <img src='https://www.alliedprintdesign.com/wp-content/uploads/2015/03/logo-allied-print-design.png' />
        <div className='pc__main'>
          <Products />
        </div>
      </div>
    );
  }
}

export default ProductCard;
