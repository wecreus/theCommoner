import { useRef, useState, useEffect } from "react";
import { CameraControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useDispatch } from "react-redux";
import { updateIsFocused } from "@/slices/globeReducer";

const Camera = () => {
  const dispatch = useDispatch();
  const cameraControlsRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  
  useFrame(({ camera }) => {
    setIsFocused(
      camera.rotation.z > 0.20 &&
        camera.rotation.z < 0.6 &&
        cameraControlsRef.current.distance < 160 &&
        cameraControlsRef.current.distance > 105
    );
  });

  useEffect(() => {
    dispatch(
      updateIsFocused({
        isFocused: isFocused,
      })
    );
  }, [isFocused, dispatch]);
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
