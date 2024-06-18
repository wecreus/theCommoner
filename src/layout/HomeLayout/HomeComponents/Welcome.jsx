import { memo } from "react";
import {
  CoolArrow,
  AlienMonster,
  Technologist,
  Thoughts,
  Fireworks,
} from "@/common/utils";
import { ReactTyped } from "react-typed";

// TODO: find a way to not ruin Layout Shift with ReactTyped https://web.dev/articles/cls
const Welcome = memo((props) => {
  const { onScrollClick } = props;

  return (
    <>
      <p className="card__content welcome animate-render">
        <span className="commoner">
          <ReactTyped
            strings={["THE", "theCommoner"]}
            typeSpeed={100}
            backSpeed={20}
            className="react-typed gradient-text"
            onComplete={(instance) => {
              instance.cursor.className = "hidden";
            }}
          />
          <span className="commoner__background">theCOMMONER</span>
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
