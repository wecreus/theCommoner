import { memo, useEffect, useState, useRef } from "react";
import Globe from "react-globe.gl";
import { GlobeData } from "@/common/utils";
import "./Map.scss";

// Globe renders component 73 times on mount :)
const Map = memo(() => {
  const [countries, setCountries] = useState({ features: [] });
  const globeRef = useRef(null);

  const getWindowDimensions = () => {
    return { width: window.innerWidth, height: window.innerHeight };
  };

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    setCountries(GlobeData);

    const handleResize = () => setWindowDimensions(getWindowDimensions());
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    globeRef.current.pointOfView({ lat: 49.55, lng: 25.59, altitude: 1.3 }, 2000);
    console.log(globeRef.current.controls());
    console.log(globeRef.current.camera());
    console.log(globeRef.current.scene());
    console.log(globeRef.current.renderer());
    
    // globeRef.current.controls().enabled = false;
    // globeRef.current.controls().enableZoom = true;
    globeRef.current.controls().maxDistance = 250;
    globeRef.current.controls().minDistance = 145;
    globeRef.current.controls().zoomSpeed = 5;
    globeRef.current.camera().fov = 40;
    
    globeRef.current.controls().minPolarAngle = Math.PI/4;
    globeRef.current.controls().maxPolarAngle = Math.PI/4;
  }, []);

  return (
    <div className="card__content card__map animate-render">
      <Globe
        ref={globeRef}
        height={800}
        width={windowDimensions.width < 800 ? windowDimensions.width : 800}
        backgroundColor="#00000000"
        polygonsData={countries.features}
        polygonCapColor={(d) =>
          d.properties.ADMIN === "Ukraine" ? "yellow" : "#0000ff22"
        }
        polygonSideColor={(d) =>
          d.properties.ADMIN === "Ukraine" ? "white" : "#00000000"
        }
        polygonStrokeColor={(d) =>
          d.properties.ADMIN === "Ukraine" ? "black" : "#494949"
        }
        polygonAltitude={(d) =>
          d.properties.ADMIN === "Ukraine" ? 0.02 : 0.005
        }
        polygonLabel={({ properties: d }) => `
        <b>${d.ADMIN}</b>
      `}
        // enablePointerInteraction={false}
      />
    </div>
  );
});

export default Map;
