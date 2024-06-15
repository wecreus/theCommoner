import "./Header.scss";
import { LogoTransparent } from "@/common/utils";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { updateIsScrolled } from "@/slices/scrollReducer";
import ThemeList from "./ThemeList/ThemeList";
import classNames from "classnames";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isScrolled = useSelector((store) => store.scroll.isScrolled);
  const dispatch = useDispatch();
  const headerRef = useRef();

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const handleHeaderClick = (e) => {
    if (e.target === headerRef.current) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      dispatch(
        updateIsScrolled({
          isScrolled: !(window.scrollY <= 0),
        })
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch]);

  return (
    <header
      ref={headerRef}
      className={classNames({ Header: true, "Header-collapse": isScrolled })}
      onClick={handleHeaderClick}
    >
      <img
        src={LogoTransparent}
        className="Header-logo"
        onClick={handleLogoClick}
        title="Home"
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
