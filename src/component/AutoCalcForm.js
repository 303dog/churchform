import React from "react";
import UploadFile from './UploadFile'
import './AutoCalcForm.css'

class AutoCalcForm extends React.Component {
  state = {
    products: [
      { title: "Color XLarge", size: '12" X 18"', count: 0, price: 2.50 },
      { title: "Color Large", size: '11" X 17"', count: 0, price: 1.75 },
      { title: "Color Medium", size: '8.5" X 11"', count: 0, price: 2.75 },
      { title: "Color Small", size: '8.5" X 5.5"', count: 0, price: 2.50 },
      { title: "Color XSmall", size: '4.25" X 5.5"', count: 0, price: 1.75 },
      { title: "B&W XLarge", size: '12" X 18"', count: 0, price: 2.80 },
      { title: "B&W Large", size: '11" X 17"', count: 0, price: 2.50 },
      { title: "B&W Medium", size: '8.5" X 11"', count: 0, price: 1.75 },
      { title: "B&W Small", size: '8.5" X 5.5"', count: 0, price: 2.75 },
      { title: "B&W XSmall", size: '4.25" X 5.5"', count: 0, price: 2.75 },
    ],
  };

  onChange = (index, val) => {
    this.setState({
      products: this.state.products.map((product, i) =>
        i === index ? { ...product, count: val } : product
      ),
    });
  };
  
  render() {
    return (
      <>
    <div className='product__box'>
      <ProductList products={this.state.products} onChange={this.onChange} />
      <Total products={this.state.products} />
    <UploadFile />
    </div>
    </>
  );
}
}

const ProductList = ({ products, onChange }) => (
  <ul>
    {products.map((product, i) => (
      <li key={i}>
        {product.title}
        <input
          type='text'
          value={product.count}
          onChange={(e) => onChange(i, parseInt(e.target.value) || 0)}
        />
        {product.size}
      </li>
    ))}
  </ul>
);

const Total = ({ products }) => (
  <h3>
    Price: $
    {products.reduce((sum, i) => (sum += i.count * i.price), 0)}
  </h3>
);
export default AutoCalcForm;