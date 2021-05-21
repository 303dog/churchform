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
          Payment coming soon
        </div>
      </>
    );
  }
}

export default Payment;
