import { useNavigate } from "react-router-dom";
import { CommonerWhite } from "@/common/utils";
import GradientSVG from "@/common/GradientSVG/GradientSVG";
import "./NotFound.scss";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="NotFound">
      <span className="NotFound-404">404</span>

      <p>Page not found </p>
      <a className="NotFound-link" onClick={() => navigate("/")}>
        <CommonerWhite className="NotFound-logo" />
        Return Home
      </a>
      <GradientSVG
        idCSS={"notFoundIconGradient"}
        startColor={"#ffffff"}
        endColor={"#ffffff4d"}
        rotation={"120"}
      />
    </div>
  );
};

export default NotFound;
