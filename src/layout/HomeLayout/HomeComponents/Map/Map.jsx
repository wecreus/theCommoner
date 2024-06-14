import { memo } from "react";
import { Canvas } from "@react-three/fiber";
import Globe from "./components/Globe";
import { GlobeData } from "@/common/utils";
import { Environment, Stats } from "@react-three/drei";
import Camera from "./components/Camera";

import "./Map.scss";

// TODO: Environment adds about 2 seconds to load time, find ways to optimise
// add point to Mariupol
const Map = memo(() => {
  
  /* eslint-disable react/no-unknown-property  */
  return (
    <div className="card__content card__map">
      <Canvas shadows camera={{ fov: 50, position: [55.12, 87.91, 95.46] }} gl={{antialias: true}}>
        <Globe polygonsData={GlobeData.features} />
        <Environment preset={"dawn"} />
        <Stats />
        <Camera />
      </Canvas>
    </div>
    /* eslint-enable react/no-unknown-property  */
  );
});

export default Map;
