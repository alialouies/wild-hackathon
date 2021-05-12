import React from "react";
import Sound from '../../assets/ka-ching.mp3'

export default function Clicker({ incrementCurrency }) {
  const audioA = new Audio(Sound);

  const playSound = () => {
    audioA.play()
  }
  return (
    
    <div className="Clickers">
     
      <div className="mushroom-button" onClick={() => {incrementCurrency(); playSound()}} />
      <h3>Mushrooms</h3>
      <br></br>
      <div className="water-button" onClick={() => {incrementCurrency(); playSound()}} />
      <h3>Water</h3>
    </div>
  );
}
