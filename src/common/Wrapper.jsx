import { useEffect } from "react";
import Footer from "@/layout/Footer/Footer";
import { useLocation } from "react-router-dom";

const Wrapper = ({ children }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="wrapper">
      {children} 
      <Footer />
    </div>
  );
};

export default Wrapper;