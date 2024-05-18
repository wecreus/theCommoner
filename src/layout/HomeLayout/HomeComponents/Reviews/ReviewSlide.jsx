import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import GradientSVG from "@/common/circularProgressbar/GradientSVG";
import ProgressProvider from "@/common/circularProgressbar/ProgressbarProvider";
import Divider from "@/common/Divider/Divider";
import { Pen } from "@/common/utils";
import styles from "@/assets/styles/exports.module.scss";

const ReviewSlide = ({
    name,
    score,
    url,
    description,
    funFact,
    selected,
    focused,
  }) => {
    return (
      <div className="review-slide">
        <div
          className="review-slide__cover"
          style={{
            backgroundImage: "url(" + url + ")",
          }}
          title={name}
          aria-label={name}
        />
  
        <div className="review-slide__head">
          <span className="review-slide__title">{name}</span>
          <div className="review-slide__score-container" title="Rating">
            <span className="review-slide__score--title">Rating:</span>
            <ProgressProvider
              valueStart={1}
              valueEnd={focused && selected ? score : 0}
              duration={1500}
              delay={200}
              repeat
            >
              {(v) => (
                <CircularProgressbar
                  value={Math.round(v)}
                  minValue={0}
                  maxValue={100}
                  text={<tspan dy={2}>{Math.round(v)}</tspan>}
                  className={"review-slide__score"}
                  background={true}
                  backgroundPadding="10"
                  styles={buildStyles({
                    rotation: 0.26,
                    trailColor: "transparent",
                    backgroundColor: "transparent",
                    pathTransition: "none",
                  })}
                />
              )}
            </ProgressProvider>
          </div>
          <GradientSVG
            idCSS={"score"}
            endColor={styles.accent3}
            startColor={styles.accent2}
            rotation={45}
          />
        </div>
        <div className="review-slide__content">
          <Divider className={"review-slide__divider"}>
            <div className="review-slide__divider--content">REVIEW</div>
          </Divider>
          <p className="review-slide__description">{description}</p>
          {!!funFact && (
            <>
              <Divider className={"review-slide__divider"}>
                <div className="review-slide__divider--content">
                  FUN FACT
                  <i
                    style={{
                      backgroundImage: `url("${Pen}")`,
                    }}
                    alt=""
                    className="review-slide__divider--icon"
                  />
                </div>
              </Divider>
              <div className="review-slide__fun">{funFact}</div>
            </>
          )}
        </div>
      </div>
    );
  };

export default ReviewSlide;