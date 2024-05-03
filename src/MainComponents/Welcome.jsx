//TODO: add global import
import CoolArrow from "../assets/icons/arrow.svg";
import AlienMonster from "../assets/icons/AlienMonster.webp";
import Technologist from "../assets/icons/Technologist.webp";
import Thoughts from "../assets/icons/Thoughts.webp";
import Fireworks from "../assets/icons/Fireworks.webp";

function App() {
  return (
    <div className="card">
      <p className="card__text">
        <span className="commoner">theCommoner</span>is my humble library
        of thoughts <img src={Thoughts} alt="" className="emoji" />, game reviews <img src={AlienMonster} alt="" className="emoji" />, and photos <img src={Fireworks} alt="" className="emoji" />, providing me with the
        opportunity to sharpen my skills as a developer <img src={Technologist} alt="" className="emoji" />
      </p>
      <div className="card__arrow">
        <img src={CoolArrow} alt="" className="card__arrow-img" />
      </div>
    </div>
  );
}

export default App;
