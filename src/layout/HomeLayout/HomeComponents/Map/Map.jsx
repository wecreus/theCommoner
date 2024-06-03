import { memo } from "react";
// import Globe from 'react-globe.gl';
import "./Map.scss";

const Map = memo(() => {
  return (
    <div className="card__content card__map animate-render">
      {/* <Globe height={"300"} width={"300"}/> */}
    </div>
  );
});

export default Map;
