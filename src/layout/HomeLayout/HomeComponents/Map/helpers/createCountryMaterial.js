import * as THREE from "three";
import * as d3 from "d3";

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

export default createCountryMaterial;
