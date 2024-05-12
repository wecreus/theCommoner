import { useState, useEffect } from "react";
import db from "@/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { Carousel } from "react-responsive-carousel";
import "./Reviews.scss"

// TODO: adding firebase reduces the performance by a lot
const Reviews = () => {
  const [reviews, setReviews] = useState();

  useEffect(() => {
    const reviewsCollectionRef = collection(db, "reviews");
    const getReviews = async () => {
      const data = await getDocs(reviewsCollectionRef);
      setReviews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getReviews();
    console.log("ran");
  }, []);
  return (
    <section className="card card-reviews">
      <p className="card__content">My 100% correct and totally unbiased game reviews</p>

      <Carousel
        showThumbs={false}
        showStatus={false}
        className="carousel-reviews"
        onSwipeMove={(e) => {
          e.stopPropagation();
        }}
        autoPlay={true}
        infiniteLoop={true}
        interval={10000}
      >
        {reviews?.map((review, i) => (
          <ReviewSlide
            url={review.coverUrl}
            name={review.name}
            score={review.score}
            description={review.description}
            key={review.name + i}
          />
        ))}
      </Carousel>
    </section>
  );
};

const ReviewSlide = ({ name, score, url, description }) => {
  return (
    <div className="review-slide">
      <div
        className="review-slide__cover"
        style={{
          backgroundImage: "url(" + url + ")",
        }}
        title={name}
        aria-label={name}
        role="img"
      />
      <span>{name}</span>
      <span>{score}</span>
      <p>{description}</p>
    </div>
  );
};

export default Reviews;
