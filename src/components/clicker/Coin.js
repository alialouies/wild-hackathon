import React from "react";

export default function Item({ amount, incrementAmount }) {
    console.log(incrementAmount)
  return (
    <div className="store-item" onClick={incrementAmount}>
       
      <span>
        {amount} <i className="icon-price" />
      </span>
    </div>
  );
}
