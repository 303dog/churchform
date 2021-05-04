import React from "react";

const Button = props => {
  console.log(props.type);
  return (
    
    <button
      type={props.type}
      className={
        props.type === "primary" ? "btn btn-primary" : "btn btn-secondary"
      }
      onClick={props.action}
    >
      {props.title}
    </button>
  );
};

export default Button;