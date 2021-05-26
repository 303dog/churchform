import React, { useEffect } from "react";

function Payment() {

  useEffect(() => {
    window.location.href = "https://www.alliedprintdesign.com/payment-information/";
  }, []);

  return (
    <div>
      <h2>Payment</h2>
    </div>
  );
}

export default Payment;
