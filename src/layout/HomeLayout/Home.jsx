import { useState, lazy, Suspense, useEffect, useMemo } from "react";
import Welcome from "./HomeComponents/Welcome";
import MainPageSelector from "./HomeComponents/MainPageSelector";
import useIntersectionObserver from "@/common/hooks/useIntersectionObserver";
import "./Home.scss";

const Reviews = lazy(() => import("./HomeComponents/Reviews/Reviews"));
const Gallery = lazy(() => import("./HomeComponents/Gallery/Gallery"));
const Map = lazy(() => import("./HomeComponents/Map/Map"));

const Home = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const [galleryRef, isGalleryVisible, wasGalleryVisible] =
    useIntersectionObserver();
  const [reviewsRef, isReviewsVisible, wasReviewsVisible] =
    useIntersectionObserver();
  const [mapRef, isMapVisible, wasMapVisible] = useIntersectionObserver();
  const [welcomeRef, isWelcomeVisible] = useIntersectionObserver();

  // order of items in isVisibleList and in refList is important for scrolling
  const isVisibleList = useMemo(
    () => [isWelcomeVisible, isReviewsVisible, isGalleryVisible, isMapVisible],
    [isWelcomeVisible, isReviewsVisible, isGalleryVisible, isMapVisible]
  );

  const refList = [welcomeRef, reviewsRef, galleryRef, mapRef];

  const handlePageChange = (page) => {
    refList[page].current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  // should update page number on scroll
  useEffect(() => {
    for (let i = isVisibleList.length - 1; i >= 0; i--) {
      if (isVisibleList[i]) {
        setPageNumber(i);
        return;
      }
    }
  }, [isVisibleList]);

  return (
    <>
      <MainPageSelector
        totalPages={refList.length}
        currentPage={pageNumber}
        handlePageChange={handlePageChange}
      />
      <section className="card card-welcome" ref={welcomeRef}>
        <Welcome onScrollClick={() => handlePageChange(1)} />
      </section>
      <section className="card card-reviews" ref={reviewsRef}>
        {wasReviewsVisible && (
          <Suspense fallback={<div className="loading">Loading...</div>}>
            {/* Reviews needs to know when user scrolls to it */}
            <Reviews focused={isReviewsVisible} />
          </Suspense>
        )}
      </section>
      <section className="card card-gallery" ref={galleryRef}>
        {wasGalleryVisible && (
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <Gallery />
          </Suspense>
        )}
      </section>
      <section className="card card-map" ref={mapRef}>
        {wasMapVisible && (
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <Map />
          </Suspense>
        )}
      </section>
    </>
  );
};

export default Home;
