import { useRef, useLayoutEffect, useState, useMemo } from "react";
import { GlobeData } from "@/common/utils";
import { extend, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import ThreeGlobe from "three-globe";
import createCountryMaterial from "../helpers/createCountryMaterial";
import PopupHTML from "./PopupHTML";
import Heart from "./Heart";

extend({ ThreeGlobe });

// TODO: add clouds from drei
const Globe = () => {
  const globeRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  useFrame(({ camera }) => {
    setIsFocused(camera.rotation.z > 0.25 && camera.rotation.z < 0.5);
  });

  // React or R3F will think that args change even if they do not and rerender ThreeGlobe
  // godda do it this way
  const globeArgs = useMemo(() => [{ animateIn: false}], []);

  useLayoutEffect(() => {
    const globeMaterial = new THREE.MeshStandardMaterial({
      metalness: 1,
      roughness: 0.8,
      color: "#e4dfff",
    });

    // common
    globeRef.current
      .globeMaterial(globeMaterial)
      .polygonsData(GlobeData.features)
      .atmosphereAltitude(0.05);

    
    globeRef.current.position.y = -25;

    // polygons
    globeRef.current
      .polygonCapMaterial(createCountryMaterial)
      .polygonsTransitionDuration(200)
      .polygonSideColor((d) =>
        d.properties.ADMIN === "Ukraine" ? "#00000055" : "#00000000"
      )
      .polygonStrokeColor((d) =>
        d.properties.ADMIN === "Ukraine" ? "#2b2b2b" : "#575757ff"
      )
      .polygonAltitude((d) =>
        d.properties.ADMIN === "Ukraine" ? 0.015 : 0.008
      );
  }, []);

  /* eslint-disable react/no-unknown-property  */
  return (
    <>
      <Heart />
      <PopupHTML isFocused={isFocused} />
      <threeGlobe args={globeArgs} ref={globeRef} />
    </>
  );
  /* eslint-enable react/no-unknown-property  */
};

export default Globe;
