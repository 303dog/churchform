import React from 'react'
import './promo.css'


const Promo = () => (
    <>
    <div className='promo__container'>
        <div className='promo__main'>
        <i class="fab fa-cc-visa"></i>
        <i class="fab fa-cc-mastercard"></i>
        <i class="fab fa-cc-amex"></i>
        <i class="fab fa-cc-discover"></i>
        </div>
        <div className='promo__second'>
        <i class="fas fa-shipping-fast"></i>
        </div>
    </div>
    </>
)

export default Promo;