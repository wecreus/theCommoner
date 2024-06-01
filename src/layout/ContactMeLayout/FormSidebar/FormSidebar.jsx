import {
  AlienMonster,
  Fireworks,
  ProfilePic,
  Linkedin,
  Telegram,
  PDFicon,
} from "@/common/utils";
import SocialIcon from "@/common/SocialIcon/SocialIcon";
import { memo } from "react";
import "./FormSidebar.scss";
import Divider from "@/common/Divider/Divider";

const FormSidebar = memo(() => {
  const dummyText =
    "Itext ever since the 1500s, when an unknown printer took a galley of type and scram";
    
  return (
    <div className="Form-sidebar">
      <div className="Form-sidebar__text">
        <span className="Form-sidebar__text--gradient4 gradient-text">
          ADSA
        </span>
        {dummyText.slice(8)}
        <span className="Form-sidebar__text--gradient1 gradient-text">
          bestGrad
        </span>
        {dummyText.slice(14)}
        <img src={Fireworks} alt="" className="emoji" />
        {dummyText.slice(50)}
        <img src={AlienMonster} alt="" className="emoji" />
        {dummyText.slice(40)}
        <img src={AlienMonster} alt="" className="emoji" />
        {dummyText.slice(18)}
        <span className="Form-sidebar__text--gradient2 gradient-text">
          ONEne
        </span>
        {dummyText.slice(8)}
        <img src={Fireworks} alt="" className="emoji" />
        {dummyText.slice(35)}
        <span className="Form-sidebar__text--gradient3 gradient-text">
          fdskjljksjlkad
        </span>
        {Array(3)
          .fill()
          .map(() => dummyText)}
      </div>
      <div className="Form-profile">
        <div className="Form-profile__head">
          <div className="Form-profile__name">
            <b>Danylo Riabchuk</b>
            <span className="Form-profile__name--work">Looking for work</span>
          </div>
          <div
            className="Form-profile__picture"
            style={{
              backgroundImage: "url(" + ProfilePic + ")",
            }}
          ></div>
        </div>
        <p className="Form-profile__description">
          Front-end developer based in Ternopil, Ukraine
        </p>
        <Divider />
        <div className="Form-profile__links">
          <SocialIcon
            name="LinkedIn"
            gradient={
              "linear-gradient(135deg, #6095ca -20%, #0a66c2 30%, #0a66c2 120%)"
            }
            Icon={Linkedin}
            url={"https://www.linkedin.com/in/danylo-riabchuk-7a6277304/"}
          />
          <SocialIcon
            name="Telegram"
            gradient={
              "linear-gradient(135deg, #24A1DE -20%, #24A1DE 30%, #6dbbe2 120%)"
            }
            Icon={Telegram}
            url={"https://www.t.me/wecreus/"}
          />
          <SocialIcon
            name="Resume"
            gradient={
              "linear-gradient(135deg, #fcaf45 -20%, #e16030 30%, #f50101 120%)"
            }
            Icon={PDFicon}
            url={
              "https://drive.google.com/file/d/14NMpoOPFXjzX_dLaJIkqJHxE_oMh696q/view?usp=sharing"
            }
          />
        </div>
      </div>
    </div>
  );
});

export default FormSidebar;
