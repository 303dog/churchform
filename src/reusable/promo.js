import React from "react";
import "./promo.css";

const Promo = () => (
  <>
    <div className='promo__container'>
      <div className='promo__main'>
        <div className='promo__cc'>
          <div className='promo__mc'>
            <i class='fab fa-cc-visa icon-2x'></i>
          </div>
          <div className='promo__mc'>
            <i class='fab fa-cc-mastercard'></i>
            </div>
          <div className='promo__mc'>
            <i class='fab fa-cc-amex'></i>
          </div>
          <div className='promo__mc'>
            <i class='fab fa-cc-discover'></i>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Promo;
