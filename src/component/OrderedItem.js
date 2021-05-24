import React from "react";
import "./OrderedItem.css";


//props from Products/usersOrder
const Ordered = (props) => (
  <>
    <div className='order__container'>
      <fieldset>
        <legend>Confirm Your Order</legend>
        <div className='order__row'>
          <table>
            <thead>
              <tr>
                <th>
                  <i class='fas fa-palette'></i>
                </th>
                <th>
                  <i class='fas fa-ruler-combined'></i>
                </th>
                <th>
                  Qty
                </th>
                <th>
                  <i class='fas fa-dollar-sign'></i> ea.
                </th>
              </tr>
            </thead>
            {props.products.map((item, i) => (
              <tr key={i}>
                <td>{item.title}</td>
                <td className='order__select'>{item.size}</td>
                <td className='order__select'>{item.count}</td>
                <td className='order__select'>{item.price}</td>
              </tr>
            ))}
          </table>
        </div>
      </fieldset>
    </div>
  </>
);

export default Ordered;
