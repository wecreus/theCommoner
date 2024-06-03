import { useState, useEffect, memo } from "react";
import db from "@/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { Carousel } from "react-responsive-carousel";
import { AlienMonster } from "@/common/utils";
import ReviewSlide from "./ReviewSlide";
import classNames from "classnames";
import { GalleryMock } from "@/common/mocks";
import markdownParser from "@/common/markdownParser/markdownParser";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-circular-progressbar/dist/styles.css";
import "./Reviews.scss";

const Reviews = memo(({ focused }) => {
  const [reviews, setReviews] = useState();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const parseReviews = (rawReviews) => [
      ...rawReviews.map((review) => {
        return {
          ...review,
          description: markdownParser(review.description),
          funFact: markdownParser(review.funFact),
        };
      }),
    ];

    if (import.meta.env.MODE === "development") {
      setReviews(parseReviews(GalleryMock));
      return;
    }

    const reviewsCollectionRef = collection(db, "reviews");
    const getReviews = async () => {
      const data = await getDocs(reviewsCollectionRef);
      setReviews(
        parseReviews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      );
    };

    getReviews().catch((e) => {
      console.error(e);
      setReviews(parseReviews(GalleryMock));
    });
  }, []);

  return (
    <div className="reviews animate-render">
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
  );
});

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
