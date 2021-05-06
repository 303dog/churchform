import React from "react";
import "./Payment.css";

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: "",
      quantity: "",
      price: "",
      shipping: "",
    };
  }

  render() {
    return (
      <>
        <div className='payment__row'>
          <div className='payment__col75'>
            <div className='payment__container'>
              <form>
                <div className='payment__row'>
                  <div className='payment__col50'>
                    {" "}
                    <label>
                      <i class='fa fa-user'></i>Payment
                    </label>
                    <input
                    className='payment__input'
                      type='text'
                      value={this.state.value}
                      onChange={this.handleChange}
                    />
                    <label>Full Name</label>
                    <input
                    className='payment__input'
                      type='text'
                      value={this.state.value}
                      onChange={this.handleChange}
                    />
                    <label>
                      <i class='fa fa-envelope'></i>Email
                    </label>
                    <input
                    className='payment__input'
                      type='text'
                      value={this.state.value}
                      onChange={this.handleChange}
                    />
                    <label>
                      <i class='fa fa-address-card-o'></i>Address
                    </label>
                    <input
                    className='payment__input'
                      type='text'
                      value={this.state.value}
                      onChange={this.handleChange}
                    />
                    <label>City</label>
                    <input
                    className='payment__input'
                      type='text'
                      value={this.state.value}
                      onChange={this.handleChange}
                    />
                    <div className='payment__row'>
                      <div className='payment__col25'>
                        <label>State</label>
                        <input
                        className='payment__input'
                          type='text'
                          value={this.state.value}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className='payment__col50'>
                        <label>Zip</label>
                        <input
                        className='payment__zip'
                          type='text'
                          value={this.state.value}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='payment__col50'>
                    <h2>Payment</h2>
                    <label>Accepted Payment Forms</label>
                    <div className='payment__icons'>
                      <i class='fa fa-cc-visa'></i>
                      <i class='fa fa-cc-amex'></i>
                      <i class='fa fa-cc-mastercard'></i>
                      <i class='fa fa-cc-discover'></i>
                    </div>
                    <label>Name on Card</label>
                    <input
                    className='payment__input'
                      type='text'
                      value={this.state.value}
                      onChange={this.handleChange}
                    />
                    <label>Credit Card Number</label>
                    <input
                    className='payment__input'
                      type='text'
                      value={this.state.value}
                      onChange={this.handleChange}
                    />
                    <label>Expires</label>
                    <input
                    className='payment__input'
                      type='text'
                      value={this.state.value}
                      onChange={this.handleChange}
                    />
                    <div className='payment__row'>
                      <div className='payment__col50'>
                        <label>CVV</label>
                        <input
                        className='payment__input'
                          type='text'
                          value={this.state.value}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <label>
                  Shipping address same as billing
                  <input
                  className='payment__input'
                    type='checkbox'
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </label>
                <inpu type='submit' className='payment__button'>
                  Checkout
                </inpu>
              </form>
            </div>
          </div>
          <div className='payment__col25'>
            <div className='payment__container'>
              <h2>
                Cart
                <span className='payment__price'>
                  <i class='fa fa-shopping-cart'></i>
                  <b>4</b>
                </span>
              </h2>
              <p>
                <a href='#'>Item 1</a>{" "}
                <span className='payment__price'>$15</span>
              </p>
              <p>
                <a href={""}>Item 2</a>{" "}
                <span className='payment__price'>$5</span>
              </p>
              <p>
                <a href={""}>Item 3</a>{" "}
                <span className='payment__price'>$8</span>
              </p>
              <p>
                <a href={""}>Item 4</a>{" "}
                <span className='payment__price'>$2</span>
              </p>
              <div className='payment__costs'>             <p>             
                   <a href={""}>Tax</a>{" "}
                <span className='payment__tax'>$2</span>
              </p>
              <p>             
                   <a href={""}>Shipping</a>{" "}
                <span className='payment__shipping'>$2</span>
              </p>
              </div>
 
              <hr></hr>
              <p>
                Total{" "}
                <span className='payment__price'>
                  <b>$30</b>
                </span>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Payment;
