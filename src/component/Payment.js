import React, { useEffect } from "react";

function Payment() {

  useEffect(() => {
    window.location.href = "https://www.alliedprintdesign.com/payment-information/";
  }, []);

  return (
    <div className='redirect__pay'>
      <h2>You are being redirected to our Payment Portal on our parent site</h2>
    </div>
  );
}

export default Payment;
