import { useGLTF } from "@react-three/drei";
import { HeartShape } from "@/common/utils";
import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { animated, useSpring, config } from "@react-spring/three";
import { Outlines } from "@react-three/drei";

// TODO: add shadow
const Heart = () => {
  const { nodes } = useGLTF(HeartShape);
  const heartRef = useRef();
  const [active, setActive] = useState(false);

  useFrame(() => {
    if (!active) {
      heartRef.current.rotation.y += 0.005;
    }
  });

  const { scale, rotation } = useSpring({
    scale: active ? 4 : 2.5,
    rotation: [0, active ? -0.85 : 0, active ? 0.6 : 0],
    config: config.gentle,
  });

  useEffect(() => {
    document.body.style.cursor = active ? "pointer" : "auto";
    return () => (document.body.style.cursor = "auto");
  }, [active]);

  /* eslint-disable react/no-unknown-property  */
  return (
    <animated.mesh
      ref={heartRef}
      castShadow
      receiveShadow
      geometry={nodes.Cube002_Cube024.geometry}
      position={[28.8, 53.15, 59.5]}
      scale={scale}
      rotation={rotation}
      onPointerEnter={() => setActive(true)}
      onPointerLeave={() => setActive(false)}
    >
      <Outlines
        thickness={active ? 0.02 : 0}
        color="white"
        opacity={0.3}
        transparent
      />
      <meshStandardMaterial metalness={0.2} roughness={0.1} color={"red"} />
    </animated.mesh>
  );
  /* eslint-enable react/no-unknown-property  */
};

useGLTF.preload(HeartShape);

export default Heart;
