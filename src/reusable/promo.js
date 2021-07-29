import React from "react";
import "./promo.css";

const Promo = () => (
  <>
    <div className='promo__container'>
      <div className='promo__main'>
        <div className='promo__cc'>
          <div className='promo__mc'>
            <img className='promo__img' src='/csr.png' alt='iron-on' />
            <img className='promo__img' src='/speedy.png' alt='speedy service' />
            <img className='promo__img' src='/greenEco.png' alt='iron-on' />
            <img className='promo__img' src='/goldQuality.png' alt='best quality' />
            <img className='promo__img' src='/piggySave.png' alt='best price' />
            <img className='promo__img' src='/blackIron.png' alt='iron-on' />
        
            <img className='promo__img' src='/shipIt.png' alt='iron-on' />
            </div>
        </div>
      </div>
    </div>
  </>
);

export default Promo;
