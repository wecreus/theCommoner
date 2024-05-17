import { useState, useEffect, memo } from "react";
import db from "@/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { Carousel } from "react-responsive-carousel";
import { AlienMonster } from "@/common/utils";
import ReviewSlide from "./ReviewSlide";
import classNames from "classnames";
import "react-circular-progressbar/dist/styles.css";
import "./Reviews.scss";

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

    getReviews().catch((e) => {
      console.error(e);
      setReviews(mock);
    });
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
