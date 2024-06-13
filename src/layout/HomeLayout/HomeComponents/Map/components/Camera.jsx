import { useRef } from "react";
import { CameraControls } from "@react-three/drei";

const Camera = () => {
  const cameraControlsRef = useRef(null);
    
  return (
    <>
      <CameraControls
        ref={cameraControlsRef}
        azimuthRotateSpeed={0.5}
        minDistance={100}
        maxDistance={190}
        maxPolarAngle={Math.PI / 3.5}
        minPolarAngle={Math.PI / 3.5}
        truck={false}
      />
    </>
  );
};

export default Camera;