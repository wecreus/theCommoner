import { memo } from "react";
// import Globe from 'react-globe.gl';
import "./Map.scss";

const Map = memo(() => {
    return (
      <section className="card">
        <div className="card__content card__map">
          {/* <Globe height={"300"} width={"300"}/> */}
        </div>
      </section>
    );
  });
  
  export default Map;
  