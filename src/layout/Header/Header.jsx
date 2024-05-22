import "./Header.scss";
import { LogoTransparent } from "@/common/utils";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ThemeList from "./ThemeList/ThemeList";
import classNames from "classnames";

// TODO: check header styles for chrome on andriod
const Header = () => {
  const [collapse, setCollapse] = useState(false);
  const navigate = useNavigate();
  const isScrolled = useSelector((store) => store.scroll.isScrolled);

  useEffect(() => {
    setCollapse(isScrolled);
  }, [isScrolled]);
  return (
    <header
      className={classNames({ Header: true, "Header-collapse": collapse })}
    >
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
      <ThemeList />
    </header>
  );
};

export default Header;
