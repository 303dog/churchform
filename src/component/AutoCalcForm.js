import React from "react";

class AutoCalcForm extends React.Component {
  state = {
    products: [
      { title: "Color", count: 0, price: 2.49 },
      { title: "B&W", count: 0, price: 1.78 },
      { title: "Half&Half", count: 0, price: 2.89 },
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
    <div className='product__box'>
      <ProductList products={this.state.products} onChange={this.onChange} />
      <Total products={this.state.products} />
    </div>
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