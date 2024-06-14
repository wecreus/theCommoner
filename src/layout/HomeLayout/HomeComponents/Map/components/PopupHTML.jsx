import { Html } from "@react-three/drei";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PopupHTML = ({ handleClick }) => {
  const navigate = useNavigate();
  const isInRange = useSelector((store) => store.globe.isInRange);

  /* eslint-disable react/no-unknown-property  */
  return (
    <>
      <Html
        position={[30, 53.5, 60]}
        style={{
          opacity: isInRange ? 1 : 0,
          transform: "translate(0%, -50%)",
        }}
        className="three-embedded"
        
      >
        <div className="three-embedded__content" onClick={handleClick}>
          <span>
            Currently based in <b>Ternopil</b>
          </span>
          <span
            className="three-embedded__content--link"
            onClick={() => navigate("/contact")}
          >
            contact me
          </span>
        </div>
      </Html>
    </>
  );
  /* eslint-enable react/no-unknown-property  */
};

export default PopupHTML;
