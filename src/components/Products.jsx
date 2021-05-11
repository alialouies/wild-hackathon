import React from "react";
import Edamame from "../assets/edamame.png";
import Mars from "../assets/mars.png";
import Burger from "../assets/pinkish-burger.png";
import Pepsi from "../assets/pepsi.png";
import Fries from "../assets/pommes.png";
import CashSound from '../assets/ka-ching.mp3'

function Products() {
  const audio = new Audio(CashSound);

  const play = () => {
    audio.play()
  }
  

  return (
    <>
      <div id="edamame" className="product" onClick={play}>
        <img className="edamame" src={Edamame} alt="" />
        <p id="edamame-p">YODA EARS 7$</p>
      </div>
      <div id="dessert" className="product" onClick={play}>
        <img className="dessert" src={Mars} alt="" />
        <p id="mars-p">DESSERT 2$</p>
      </div>
      <div id="burger" className="product" onClick={play}>
        <img className="burger" src={Burger} alt="" />
        <p id="burger-p">NANO BURGER 10$</p>
      </div>
      <div id="pepsi" className="product" onClick={play}>
        <img className="pepsi" src={Pepsi} alt="" />
        <p id="pepsi-p">Pepsi 5$</p>
      </div>
      <div id="fries" className="product" onClick={play}>
        <img className="fries" src={Fries} alt="" />
        <p id="fries-p">Fries 3$</p>
      </div>
    </>
  );
}

export default Products;
