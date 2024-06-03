import { useState, lazy, Suspense, useRef, useEffect, useMemo } from "react";
import Welcome from "./HomeComponents/Welcome";
import MainPageSelector from "./HomeComponents/MainPageSelector";
import useIntersectionObserver from "@/common/hooks/useIntersectionObserver";
import "./Home.scss";

const Reviews = lazy(() => import("./HomeComponents/Reviews/Reviews"));
const Gallery = lazy(() => import("./HomeComponents/Gallery/Gallery"));
const Map = lazy(() => import("./HomeComponents/Map/Map"));

const Home = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [shouldRender, setShouldRender] = useState({
    gallery: false,
    reviews: false,
    map: false,
  });

  const welcomeSection = useRef(null);
  const gallerySection = useRef(null);
  const reviewsSection = useRef(null);
  const mapSection = useRef(null);
  const sectionsList = [
    welcomeSection,
    reviewsSection,
    gallerySection,
    mapSection,
  ];

  const handlePageChange = (page) => {
    
    sectionsList[page].current.scrollIntoView({ behavior: "smooth" });
  };

  const isGalleryVisible = useIntersectionObserver(gallerySection);
  const isReviewsVisible = useIntersectionObserver(reviewsSection);
  const isMapVisible = useIntersectionObserver(mapSection);
  const isWelcomeVisible = useIntersectionObserver(welcomeSection);
  const isVisibleList = useMemo(() => [isWelcomeVisible, isReviewsVisible, isGalleryVisible, isMapVisible], [isWelcomeVisible, isReviewsVisible, isGalleryVisible, isMapVisible]);
  console.log(isVisibleList)
  // if shown once on screen then it should stay shown
  useEffect(() => {
    isGalleryVisible &&
      !shouldRender.gallery &&
      setShouldRender((prev) => {
        return { ...prev, gallery: isGalleryVisible };
      });

    isReviewsVisible &&
      !shouldRender.reviews &&
      setShouldRender((prev) => {
        return { ...prev, reviews: isReviewsVisible };
      });
    isMapVisible &&
      !shouldRender.map &&
      setShouldRender((prev) => {
        return { ...prev, map: isMapVisible };
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisibleList]);

  // should update page number on scroll
  useEffect(() => {
    for (let i = isVisibleList.length - 1; i >= 0; i--) {
      if(isVisibleList[i]) {
        setPageNumber(i);
        return;
      }
    }
  }, [isVisibleList]);

  return (
    <>
      <MainPageSelector
        totalPages={sectionsList.length}
        currentPage={pageNumber}
        handlePageChange={handlePageChange}
      />
      <section className="card card-welcome" ref={welcomeSection}>
        <Welcome onScrollClick={() => handlePageChange(1)} />
      </section>
      <section className="card card-reviews" ref={reviewsSection}>
        {shouldRender.reviews && (
          <Suspense fallback={<div className="loading">Loading...</div>}>
            {/* Reviews needs to know when user scrolls to it */}
            <Reviews focused={isReviewsVisible} />
          </Suspense>
        )}
      </section>
      <section className="card card-gallery" ref={gallerySection}>
        {shouldRender.gallery && (
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <Gallery />
          </Suspense>
        )}
      </section>
      <section className="card card-map" ref={mapSection}>
        {shouldRender.map && (
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <Map />
          </Suspense>
        )}
      </section>
    </>
  );
};

export default Home;
