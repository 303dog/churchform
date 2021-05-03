import React from "react";
import "./AutoCalcForm.css";
import UploadFile from "./UploadFile";

class AutoCalcForm extends React.Component {
  state = {
    products: [
      { title: "Color XLarge", size: '12" X 18"', count: 0, price: 2.5 },
      { title: "Color Large", size: '11" X 17"', count: 0, price: 1.75 },
      { title: "Color Medium", size: '8.5" X 11"', count: 0, price: 2.75 },
      { title: "Color Small", size: '8.5" X 5.5"', count: 0, price: 2.5 },
      { title: "Color XSmall", size: '4.25" X 5.5"', count: 0, price: 1.75 },
      { title: "B&W XLarge", size: '12" X 18"', count: 0, price: 2.8 },
      { title: "B&W Large", size: '11" X 17"', count: 0, price: 2.5 },
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
          <ProductList
            products={this.state.products}
            onChange={this.onChange}
          />
        <div className='product__tot'>
          <Total products={this.state.products} />
          </div>
        <UploadFile />
        </div>
      </>
    );
  }
}

const ProductList = ({ products, onChange }) => (
  <div className='box'>
    <fieldset>
    <legend>Label Selector</legend>
      <div className='main'>
        <table>
          <tr>
            {products.map((product, i) => (
              <td className='row'>
                {" "}
                <div key={i}>
                  {product.title} {product.size}
                  <td  className='product__each'>
                    <input
                      className='fld'
                      type='text'
                      value={product.count}
                      onChange={(e) =>
                        onChange(i, parseInt(e.target.value) || 0)
                      }
                    />
                  </td>
                </div>
              </td>
            ))}
          </tr>
        </table>
      </div>
    </fieldset>
  </div>
);

const Total = ({ products }) => (
  <h3>Price: ${products.reduce((sum, i) => (sum += i.count * i.price), 0)}</h3>
);
export default AutoCalcForm;
