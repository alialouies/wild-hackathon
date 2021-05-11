import React from "react";

export default function Clicker({ incrementCurrency }) {
  return (
    
    <div className="Clickers">
     
      <div className="mushroom-button" onClick={incrementCurrency} />
      <h3>Mushrooms</h3>
      <br></br>
      <div className="water-button" onClick={incrementCurrency} />
      <h3>Water</h3>
    </div>
  );
}
