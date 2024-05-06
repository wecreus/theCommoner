import { useState } from "react";
import "./Home.scss";
import ReactPageScroller from "react-page-scroller";
import Welcome from "./HomeComponents/Welcome";
import Gallery from "./HomeComponents/Gallery";
import Reviews from "./HomeComponents/Reviews";
import MainPageSelector from "./HomeComponents/MainPageSelector";

const Home = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const handlePageChange = (page) => {
    setPageNumber(page);
  };

  return (
    <div className="main">
      <MainPageSelector
        totalPages={3} /* cool number 🗿 */
        currentPage={pageNumber}
        handlePageChange={handlePageChange}
      />
      <ReactPageScroller
        animationTimer={250}
        customPageNumber={pageNumber}
        onBeforePageScroll={(i) => {handlePageChange(i)}}
        renderAllPagesOnFirstRender
      >
        <Welcome onScrollClick={() => handlePageChange(1)} />
        <Gallery />
        <Reviews />
      </ReactPageScroller>
    </div>
  );
}

export default Home;
