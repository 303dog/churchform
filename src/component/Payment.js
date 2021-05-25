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

goPay(e){
  return(
      <a href='https://codepen.io/shirakha/pen/LYVyMVK'/>
  )
}

  render() {
    const e = this.state.cost;
    return (
      <>
        <div className='payment__row'>
          <button onClick={this.goPay(e)}>Go to Payment and CheckOut</button>
        </div>
      </>
    );
  }
}

export default Payment;
