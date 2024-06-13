import { memo, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Globe from "./components/Globe";
import { GlobeData } from "@/common/utils";
import { Environment, CameraControls, Stats } from "@react-three/drei";

import "./Map.scss";

const Map = memo(() => {
  const cameraControlsRef = useRef(null);

  /* eslint-disable react/no-unknown-property  */
  return (
    <div className="card__content card__map">
      <Canvas camera={{ fov: 50, position: [44, 88, 101] }}>
        <Globe polygonsData={GlobeData.features} />
        <Environment preset={"dawn"} />
        <CameraControls
          ref={cameraControlsRef}
          azimuthRotateSpeed={0.5}
          minDistance={100}
          maxDistance={190}
          maxPolarAngle={Math.PI / 3.5}
          minPolarAngle={Math.PI / 3.5}
          truck={false}
        />
        <Stats />
      </Canvas>
    </div>
    /* eslint-enable react/no-unknown-property  */
  );
});

export default Map;
