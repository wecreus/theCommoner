import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import ProgressProvider from "@/common/Progressbar/ProgressbarProvider";
import Divider from "@/common/Divider/Divider";
import { memo } from "react";
import { Pen } from "@/common/utils";

const ReviewSlide = memo(({
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
              {(CircleValue) => (
                <CircularProgressbar
                  value={Math.round(CircleValue)}
                  minValue={0}
                  maxValue={100}
                  text={<tspan dy={2}>{Math.round(CircleValue)}</tspan>}
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
  });

export default ReviewSlide;