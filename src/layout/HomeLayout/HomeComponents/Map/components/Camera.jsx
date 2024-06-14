import { useRef, useState, useEffect, useLayoutEffect } from "react";
import { CameraControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useDispatch } from "react-redux";
import { updateIsInRange } from "@/slices/globeReducer";

// TODO: rotate camera to interesting point when idle
const Camera = () => {
  const dispatch = useDispatch();
  const cameraControlsRef = useRef(null);
  const [isInRange, setIsInRange] = useState(false);

  useFrame(({ camera }) => {
    setIsInRange(
      camera.rotation.z > 0.2 &&
        camera.rotation.z < 0.6 &&
        cameraControlsRef.current.distance < 150 &&
        cameraControlsRef.current.distance > 105
    );
  });

  useEffect(() => {
    dispatch(
      updateIsInRange({
        isInRange: isInRange,
      })
    );
  }, [isInRange, dispatch]);

  useLayoutEffect(() => {
     cameraControlsRef.current?.setLookAt( 42.56, 487, 601, 0, 0, 0);

     const myTimeout = setTimeout(() => {
      cameraControlsRef.current?.setLookAt( 55.12, 87.91, 95.46, 0, 0, 0, true);
    }, 500)
    return () => clearTimeout(myTimeout);
  }, []);

  return (
    <>
      <CameraControls
        ref={cameraControlsRef}
        azimuthRotateSpeed={0.5}
        minDistance={95}
        maxDistance={210}
        maxPolarAngle={Math.PI / 3.5}
        minPolarAngle={Math.PI / 3.5}
        dollySpeed={0.5}
        truck={false}
        makeDefault
      />
    </>
  );
};

export default Camera;
