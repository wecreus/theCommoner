import { useRef, useLayoutEffect } from "react";
import { GlobeData } from "@/common/utils";
import { extend } from "@react-three/fiber";
import * as THREE from "three";
import ThreeGlobe from "three-globe";
import * as d3 from "d3";

extend({ ThreeGlobe });

const PointsData = [
  {
    lat: 49.55352,
    lng: 25.59477,
    size: 0.016,
    color: "#ff0000ff",
    radius: 0.1,
  },
];

// TODO: add clouds from drei
const Globe = () => {
  const globeRef = useRef(null);
  // const lineRef = useRef(null);
  // const [isLineVisible, setIsLineVisible] = useState(true);

  // useFrame((state) => {
  //   if(state.camera.rotation.z > 0.21 && state.camera.rotation.z < 0.4){
  //     setIsLineVisible(true);
  //   } else {
  //     setIsLineVisible(false);
  //   }
  // });

  // const points = useMemo(
  //   () => [new THREE.Vector3(28.5, 52.8, 59.6), new THREE.Vector3(30, 80, 80)],
  //   []
  // );

  const createCountryMaterial = (d) => {
    if (d.properties.ADMIN === "Ukraine") {
      const ukMesh = new THREE.ShaderMaterial({
        uniforms: {
          color1: {
            value: new THREE.Color("#fffc4b"),
          },
          color2: {
            value: new THREE.Color("#ffd698"),
          },
        },
        vertexShader: `
        varying vec2 vUv;

        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
        }
      `,
        fragmentShader: `
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec2 vUv;

        void main() {
          gl_FragColor = vec4(mix(color1, color2, vUv.y), 1);
        }
      `,
      });
      return ukMesh;
    }

    const colorScale = d3.scaleSequentialSqrt(d3.interpolateGreys);
    colorScale.domain([0, 6]);

    const otherContriesMesh = new THREE.MeshStandardMaterial({
      color: colorScale(Math.random() + 5),
      metalness: 0.5,
      roughness: 0.6,
    });

    return otherContriesMesh;
  };

  useLayoutEffect(() => {
    const globeMaterial = new THREE.MeshStandardMaterial({
      metalness: 1,
      roughness: 0.8,
      color: "#e4dfff",
    });

    globeRef.current
      .polygonsData(GlobeData.features)
      .atmosphereAltitude(0.05)
      .globeMaterial(globeMaterial)
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
      )
      .pointsData(PointsData)
      .pointAltitude("size")
      .pointColor("color")
      .pointRadius("radius")
      .pointsTransitionDuration(0);

    globeRef.current.position.y = -25;
  }, []);

  /* eslint-disable react/no-unknown-property  */
  return (
    <>
      {/* <Line
        points={points}
        color={"red"}
        lineWidth={15}
        opacity={isLineVisible ? 1 : 0}
        transparent
      /> */}

      <threeGlobe ref={globeRef} />
    </>
  );
  /* eslint-enable react/no-unknown-property  */
};

export default Globe;
