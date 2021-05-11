import React from "react";

export default function Clicker({ incrementCurrency }) {
  return (
    <div className="Clickers">
      <div className="mushroom-button" onClick={incrementCurrency} />
      <h2>Mushrooms</h2>
      <br></br>
      <div className="water-button" onClick={incrementCurrency} />
      <h2>Water</h2>
    </div>
  );
}
