import { useState } from "react";
import "./App.scss";
import CoolArrow from "./assets/icons/arrow.svg";

function App() {
  return (
    <div className="wrapper">
      <div className="card">
        <p className="card__text">
          <span className="card__commoner">theCommoner</span>is my humble
          library of thoughts 💭, game reviews 👾, and photos 📸, providing me
          with the opportunity to sharpen my skills as a developer👨🏻‍💻
        </p>
        <div className="card__arrow">
          <img src={CoolArrow} alt="" className="card__arrow-img" />
        </div>
      </div>
    </div>
  );
}

export default App;
