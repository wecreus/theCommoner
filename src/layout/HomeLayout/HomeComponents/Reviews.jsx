import { useState, useEffect, memo } from "react";
import db from "@/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { Carousel } from "react-responsive-carousel";
import { AlienMonster, Pen } from "@/common/utils";
import classNames from "classnames";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import GradientSVG from "@/common/circularProgressbar/GradientSVG";
import ProgressProvider from "@/common/circularProgressbar/ProgressbarProvider";
import Divider from "@/common/Divider/Divider";
import styles from "@/assets/styles/exports.module.scss";
import "react-circular-progressbar/dist/styles.css";
import "./Reviews.scss";

// split this component
// TODO: use a more sophisticated mock
const mock = [
  {
    coverUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/12/Baldur%27s_Gate_3_cover_art.jpg",
    description:
      "An absolute breathtaking game that made me love a new genre. more more text more text more text more text more text more text text ",
    id: "Jn6d4huJ7XwnoDjwpV5H",
    name: "Baldurs Gate 3 mock",
    score: 95,
    funFact: "I have completed solo honour mode run watch it on youtube",
  },
  {
    coverUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/b7/Slay_the_spire_cover.jpg",
    description: "Card game that saved me from going insane (truth)",
    id: "qrTmXurJl3SOb7wU0RW6",
    name: "Slay the Spire",
    score: 88,
    funFact:
      "my Ascention 20 win streak is around 7 (I think) rotating  (I think) rotating (I think) rotating",
  },
];

// TODO: adding firebase reduces the performance by a lot

// fix a bug where gallery starts at the last item
const Reviews = memo(({ focused }) => {
  const [reviews, setReviews] = useState();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (import.meta.env.MODE === "development") {
      setReviews(mock);
      return;
    }

    const reviewsCollectionRef = collection(db, "reviews");
    const getReviews = async () => {
      const data = await getDocs(reviewsCollectionRef);
      setReviews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getReviews();
  }, []);
  return (
    <section className="card card-reviews">
      <div className="reviews">
        <p className="card__content card-reviews__content">
          My <b>100% correct</b> and totally unbiased game reviews{" "}
          <img src={AlienMonster} alt="" className="emoji" />
        </p>
        <Carousel
          showThumbs={false}
          showStatus={false}
          className="carousel-reviews"
          swipeable={false}
          autoPlay
          interval={8000}
          transitionTime={400}
          useKeyboardArrows
          stopOnHover
          selectedItem={currentSlide}
          onChange={(i) => {
            // why doesnt react do it on its own???
            if (i !== currentSlide) {
              setCurrentSlide(i);
            }
          }}
          renderArrowNext={(onClickHandler) => (
            <CustomArrow
              clickHandler={() =>
                currentSlide + 1 === reviews.length
                  ? setCurrentSlide(0)
                  : onClickHandler()
              }
              direction={"next"}
            />
          )}
          renderArrowPrev={(onClickHandler) => (
            <CustomArrow
              clickHandler={() =>
                currentSlide === 0
                  ? setCurrentSlide(reviews.length - 1)
                  : onClickHandler()
              }
              direction={"prev"}
            />
          )}
        >
          {reviews?.map((review, i) => (
            <ReviewSlide
              url={review.coverUrl}
              name={review.name}
              score={review.score}
              description={review.description}
              funFact={review.funFact}
              selected={i === currentSlide}
              key={review.name + i}
              focused={focused}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
});

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
        <div className="review-slide__score-container">
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

const CustomArrow = ({ clickHandler, direction }) => {
  return (
    <div
      className={classNames(
        "carousel-reviews__arrow",
        `carousel-reviews__arrow--${direction}`
      )}
      onClick={clickHandler}
    ></div>
  );
};

export default Reviews;
