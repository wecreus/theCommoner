import "./Footer.scss";
import { Github, CommonerWhite } from "@/common/utils";
import GradientSVG from "@/common/GradientSVG/GradientSVG";

const Footer = () => {
  return (
    <footer className="Footer">
      <GradientSVG
          idCSS={"footerIconGradient"}
          startColor={"#ffffff"}
          endColor={"#ffffff88"}
          rotation={"120"}
        />
      <a
        className="Footer__item"
        target={"_blank"}
        href="https://github.com/wecreus/theCommoner"
      >
        <CommonerWhite  className="Footer__item--logo" />
        theCommoner
      </a>
      <a
        className="Footer__item"
        target={"_blank"}
        href="https://github.com/wecreus"
      >
        <Github className="Footer__item--logo" />
        Danylo Riabchuk
      </a>
    </footer>
  );
};

export default Footer;
