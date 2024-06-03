import { memo } from "react";
import {
  CoolArrow,
  AlienMonster,
  Technologist,
  Thoughts,
  Fireworks,
} from "@/common/utils";
import { ReactTyped } from "react-typed";

const Welcome = memo((props) => {
  const { onScrollClick } = props;

  return (
    <>
      <p className="card__content welcome">
        <span className="commoner gradient-text">
          <ReactTyped
            strings={["THE", "theCommoner"]}
            typeSpeed={100}
            backSpeed={20}
            onComplete={(instance) => {
              instance.cursor.className = "hidden";
            }}
          />
        </span>
        is my humble library of thoughts{" "}
        <img src={Thoughts} alt="" className="emoji" />, game reviews{" "}
        <img src={AlienMonster} alt="" className="emoji" />, and photos{" "}
        <img src={Fireworks} alt="" className="emoji" />, providing me with an
        opportunity to sharpen my skills as a web developer{" "}
        <img src={Technologist} alt="" className="emoji" />
      </p>
      <div className="card__arrow" onClick={onScrollClick}>
        <CoolArrow className="card__arrow-img" />
      </div>
    </>
  );
});

export default Welcome;
