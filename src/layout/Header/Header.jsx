import "./Header.scss";
import { LogoTransparent } from "@/common/utils";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HalfCircle } from "@/common/utils";

const Header = () => {
  const [collapse, setCollapse] = useState(false);
  const navigate = useNavigate();
  const isScrolled = useSelector((store) => store.scroll.isScrolled);

  useEffect(() => {
    setCollapse(isScrolled);
  }, [isScrolled]);
  return (
    <header className={`Header ${collapse && "Header-collapse"}`}>
      <img
        src={LogoTransparent}
        className="Header-logo"
        onClick={() => navigate("/")}
      />
      <ul className="Header-sections">
        <li
          className="Header-sections__section"
          onClick={() => navigate("/contact")}
        >
          contact
        </li>
      </ul>
      <div className="Header-themes">
        {Array(3).fill().map((el, i) => (
          <ThemeSwitch key={`theme${i}`} />
        ))}
      </div>
    </header>
  );
};

const ThemeSwitch = () => {
  return <div className="ThemeSelector">
    <HalfCircle className="ThemeSelector__theme ThemeSelector__theme--primary" />
    <HalfCircle className="ThemeSelector__theme ThemeSelector__theme--secondary" />
  </div>;
};

export default Header;
