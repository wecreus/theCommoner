import classNames from "classnames";
import GradientSVG from "@/common/GradientSVG/GradientSVG";
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
