import { CoolArrow, AlienMonster, Technologist, Thoughts, Fireworks } from "@/common/utils";
import { ReactTyped } from "react-typed";

function Welcome(props) {
  const { onScrollClick } = props;

  return (
    <section className="card">
      <p className="card__text">
        <span className="commoner">
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
    </section>
  );
}

export default Welcome;
