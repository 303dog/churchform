import React from "react";
import "./Checkout.css";

function Checkout(props) {
     return (
  <div className='checkout__container'>
        <div className='order__row'>
          <table>
            <thead>
              <tr>
                <th>
                  <i className='fas fa-palette'></i>
                </th>
                <th>
                  <i className='fas fa-ruler-combined'></i>
                </th>
                <th>
                  Qty
                </th>
                <th>
                  <i className='fas fa-dollar-sign'></i> ea.
                </th>
              </tr>
            </thead>
            {props.cost.map((item) => {
              return (
              <tr>
                <td className='order__selectS'>{item.title}</td>
                <td className='order__selectT'>{item.size}</td>
                <td className='order__selectB'>{item.count}</td>
                <td className='order__selectR'>{item.price}</td>
              </tr>
            )})};
          </table>
        </div>
  </div>
     )
};

export default Checkout;
