import classNames from "classnames";
import GradientSVG from "@/common/circularProgressbar/GradientSVG";
import "./SocialIcon.scss";

const SocialIcon = ({ className, url, name, Icon, gradient }) => {
  const handleMouseMove = (event) => {

  };
  return (
    <div
      className={classNames("SocialIcon", className)}
      title={name}
      onClick={() => window.open(url, "_blank")}
      onMouseMove={(event) => handleMouseMove(event)}
    >
      <div className="SocialIcon-front">
        <svg className="SocialIcon-front__border">
          <rect rx="25" stroke="url(#borderGradient)"></rect>
        </svg>
        <Icon className="SocialIcon-front__icon" />
      </div>
      <div
        className="SocialIcon-back"
        style={{
          background: gradient,
        }}
      ></div>
      <GradientSVG
        idCSS={"borderGradient"}
        startColor={"#ffffff"}
        endColor={"#ffffff00"}
        rotation={"40"}
      />
      <GradientSVG
        idCSS={"iconGradient"}
        startColor={"#ffffff"}
        endColor={"#ffffff88"}
        rotation={"0"}
      />
    </div>
  );
};

export default SocialIcon;
