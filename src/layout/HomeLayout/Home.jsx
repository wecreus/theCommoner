import { useState } from "react";
import "./Home.scss";
import ReactPageScroller from "react-page-scroller";
import Welcome from "./HomeComponents/Welcome";
import Gallery from "./HomeComponents/Gallery";
import Reviews from "./HomeComponents/Reviews";
import Map from "./HomeComponents/Map";
import MainPageSelector from "./HomeComponents/MainPageSelector";
import GradientSVG from "@/common/circularProgressbar/GradientSVG";
import styles from "@/assets/styles/exports.module.scss";

const Home = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const handlePageChange = (page) => {
    setPageNumber(page);
  };
  // TODO: group all children of ReactPageScroller
  return (
    <main className="main">
      <MainPageSelector
        totalPages={4} /* cool number 🗿 */
        currentPage={pageNumber}
        handlePageChange={handlePageChange}
      />
      <ReactPageScroller
        animationTimer={250}
        customPageNumber={pageNumber}
        onBeforePageScroll={(i) => {
          handlePageChange(i);
        }}
        renderAllPagesOnFirstRender
      >
        <Welcome onScrollClick={() => handlePageChange(1)} />
        <Reviews focused={pageNumber === 1} />
        <Gallery />
        <Map />
      </ReactPageScroller>
      <GradientSVG
        idCSS={"WelcomeArrow"}
        endColor={styles.accent3}
        startColor={styles.accent2}
        rotation={45}
      />
            <GradientSVG
        idCSS={"WelcomeArrow2"}
        endColor={styles.accent1}
        startColor={styles.accent2}
        rotation={45}
      />
    </main>
  );
};

export default Home;
