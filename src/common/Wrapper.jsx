import { useEffect } from "react";
import Footer from "@/layout/Footer/Footer";
import Header from "@/layout/Header/Header";
import { useLocation } from "react-router-dom";
import GradientSVG from "./GradientSVG";
import styles from "@/assets/styles/exports.module.scss";

const Wrapper = ({ children }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="wrapper">
      <Header />
      {children}
      <Footer />
      <GradientSVG
        idCSS={"gBaseColors"}
        endColor={styles.accent3}
        startColor={styles.accent2}
        rotation={45}
      />
    </div>
  );
};

export default Wrapper;
