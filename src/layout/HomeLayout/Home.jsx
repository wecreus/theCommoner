import { useState, lazy, Suspense, useRef } from "react";
import Welcome from "./HomeComponents/Welcome";
import MainPageSelector from "./HomeComponents/MainPageSelector";
import useIntersectionObserver from "@/common/hooks/useIntersectionObserver";
import "./Home.scss";

const Reviews = lazy(() => import("./HomeComponents/Reviews/Reviews"));
const Gallery = lazy(() => import("./HomeComponents/Gallery/Gallery"));
const Map = lazy(() => import("./HomeComponents/Map/Map"));

const Home = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const handlePageChange = (page) => {
    setPageNumber(page);
  };
  const gallerySection = useRef(null);
  const reviewsSection = useRef(null);
  const mapSection = useRef(null);

  const isGalleryVisible = useIntersectionObserver(gallerySection);
  const isReviewsVisible = useIntersectionObserver(reviewsSection);
  const isMapVisible = useIntersectionObserver(mapSection);

  return (
    <>
      <MainPageSelector
        totalPages={4} /* total number of children for ReactPageScroller 🗿 */
        currentPage={pageNumber}
        handlePageChange={handlePageChange}
      />
      <section className="card card-welcome">
        <Welcome onScrollClick={() => handlePageChange(1)}/>
      </section>
      <section className="card card-reviews" ref={reviewsSection}>
        {isReviewsVisible && (
          <Suspense fallback={<div className="loading">Loading...</div>}>
            {/* Reviews needs to know when user scrolls to it */}
            <Reviews focused={isReviewsVisible} />
          </Suspense>
        )}
      </section>
      <section className="card card-gallery" ref={gallerySection}>
        {isGalleryVisible && (
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <Gallery />
          </Suspense>
        )}
      </section>
      <section className="card card-map" ref={mapSection}>
        {isMapVisible && (
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <Map />
          </Suspense>
        )}
      </section>
    </>
  );
};

export default Home;
