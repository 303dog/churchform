import React from "react";

const Checkout = () => {
  const [selected, setSelected] = React.useState("");
  

  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
   
      };

  const colorSizes = ["12x18c", "11x17c", "8.5x11c", "8.5x5.5c", "4.25x5.5c"];
  const standardSizes = [
    "12x18s",
    "11x17s",
    "8.5x11s",
    "8.5x5.5s",
    "4.25x5.5s",
  ];

  function range(start, end) {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx);
  }
  var quantity = range(1, 1000);

  let type = null;

  let options = null;

  /** Setting Type variable according to dropdown */
  if (selected === "Color Carpet Labels") {
    type = colorSizes;
  } else if (selected === "Standard Carpet Labels") {
    type = standardSizes;
  }

  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>);
  }
  return (
    <div
      style={{
        padding: "16px",
        margin: "16px",
      }}
    >
      <form>
        <div>
          <select onChange={changeSelectOptionHandler}>
            <option>Choose...</option>
            <option name='color'>Color Carpet Labels</option>
            <option name='standard'>Standard Carpet Labels</option>
            <option>Qty</option>
          </select>
        </div>
        <div>
          <select>{options}</select>
        </div>
      </form>
    </div>
  );
};
export default Checkout;
