import classNames from "classnames";
import GradientSVG from "@/common/circularProgressbar/GradientSVG";
import "./SocialIcon.scss";

const SocialIcon = ({ className, url, name, Icon, gradient }) => {
  // TODO: perspective with this code changes in the uglies manner possible
  //   const [styles, setStyles] = useState();

  //   const handleMouseMove = (event) => {
  //     const maxAngle = 20;
  //     const width = event.currentTarget.offsetWidth;
  //     const height = event.currentTarget.offsetHeight;
  //     const centerWidth = width / 2;
  //     const centerHeight = height / 2;
  //     const target = event.currentTarget.getBoundingClientRect();

  //     const x = Math.abs(event.clientX - target.left);
  //     const y = Math.abs(event.clientY - target.top);

  //     const rotateY = ((maxAngle / 100) * -(centerWidth - x)) / (centerWidth / 100);
  //     const rotateX = ((maxAngle / 100) * -(centerHeight - y)) / (centerHeight / 100);

  //     // setStyles({ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` });
  //   };
  return (
    <div
      className="SocialIcon-container"
      title={name}
      onClick={() => window.open(url, "_blank")}
    >
      <div className={classNames("SocialIcon", className)}>
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
      <div className="SocialIcon-title">{name}</div>
    </div>
  );
};

export default SocialIcon;