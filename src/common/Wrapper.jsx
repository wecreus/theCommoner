import { useEffect } from "react";
import Footer from "@/layout/Footer/Footer";
import Header from "@/layout/Header/Header";
import { useLocation } from "react-router-dom";
import GradientSVG from "./GradientSVG";
import ThemeProvider from "./ThemeProvider/ThemeProvider";

const Wrapper = ({ children }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ThemeProvider>
      <Header />
      {children}
      <Footer />
      <GradientSVG
        idCSS={"gBaseColors"}
        endColor={"var(--support)"}
        startColor={"var(--secondary)"}
        rotation={45}
      />
      <GradientSVG
        idCSS={"iconGradient"}
        startColor={"#ffffff"}
        endColor={"#ffffff88"}
        rotation={"0"}
      />
    </ThemeProvider>
  );
};

export default Wrapper;
