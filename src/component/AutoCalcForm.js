import React from "react";
import "./AutoCalcForm.css";
import Button from "./Button";
import Upload from "./Upload";

class AutoCalcForm extends React.Component {
  state = {
    products: [
      { title: "Color Labels", size: '12"x18"', count: 0, price: 2.5 },
      { title: "Color Labels", size: '11"x17"', count: 0, price: 1.75 },
      { title: "Color Labels", size: '8.5"x11"', count: 0, price: 2.75 },
      { title: "Color Labels", size: '8.5"x5.5"', count: 0, price: 2.5 },
      { title: "Color Labels", size: '4.25"x5.5"', count: 0, price: 1.75 },
      { title: "Standard Labels", size: '12"x18"', count: 0, price: 2.8 },
      { title: "Standard Labels", size: '11"x17"', count: 0, price: 2.5 },
      { title: "Standard Labels", size: '8.5"x11"', count: 0, price: 1.75 },
      { title: "Standard Labels", size: '8.5"x5.5"', count: 0, price: 2.75 },
      { title: "Standard Labels", size: '4.25"x5.5"', count: 0, price: 2.75 },
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
        <div className='auto__main'>
          <ProductList
            products={this.state.products}
            onChange={this.onChange}
          />

          <Total products={this.state.products} />

          <Upload />
        </div>
      </>
    );
  }
}

const ProductList = ({ products, onChange }) => (
  <>
    <div className='auto__container'>
      <fieldset>
        <legend>Build Your Order</legend>
        <form>
          {products.map((product, i) => (
            <div className='auto__row'>
              <div className='auto__col25'>
                <label>{product.title}</label>
              </div>
              <div className='auto__col75' key={i}>
                {product.size}
              </div>

              <input
                className='auto__input'
                type='text'
                value={product.count}
                onChange={(e) => onChange(i, parseInt(e.target.value) || 0)}
              />
            </div>
          ))}
        </form>
        <Button
          type='Submit'
          className='auto__button'
          onChange={""}
          title='Submit'
        />
      </fieldset>
    </div>
  </>
);

const Total = ({ products }) => (
  <div className='auto__total'>
    <h3>
      Price: ${products.reduce((sum, i) => (sum += i.count * i.price), 0)}
    </h3>
  </div>
);
export default AutoCalcForm;
