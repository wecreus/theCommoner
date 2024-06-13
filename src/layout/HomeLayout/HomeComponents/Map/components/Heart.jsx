import { useGLTF } from "@react-three/drei";
import { HeartShape } from "@/common/utils";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Heart = () => {
  const { nodes, materials } = useGLTF(HeartShape);
  const heartRef = useRef();

  useFrame(() => {
    heartRef.current.rotation.y += 0.005;
  });

  /* eslint-disable react/no-unknown-property  */
  return (
    <mesh
      ref={heartRef}
      castShadow
      receiveShadow
      geometry={nodes.Cube002_Cube024.geometry}
      material={materials["Material.008"]}
      position={[28.8, 53.15, 59.5]}
      scale={[2.5, 2.5, 2.5]}
      rotation={[0, 0, 0.5]}
    >
      <meshStandardMaterial metalness={0.2} roughness={0.1} color={"red"} />
    </mesh>
  );
  /* eslint-enable react/no-unknown-property  */
};

useGLTF.preload(HeartShape);

export default Heart;
