import classNames from "classnames";
import GradientSVG from "@/common/GradientSVG/GradientSVG";
import "./SocialIcon.scss";

const SocialIcon = ({ className, url, name, Icon, gradient }) => {
  return (
    <a
      className="SocialIcon-container"
      title={name}
      href={url}
      target={"_blank"}
      rel="noopener noreferrer"
    >
      <div className={classNames("SocialIcon", className)}>
        <div className="SocialIcon-front">
          <svg className="SocialIcon-front__border" viewBox="0 0 80 80">
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
      </div>
      <div className="SocialIcon-title">{name}</div>
    </a>
  );
};

export default SocialIcon;
