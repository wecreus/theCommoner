import { useState, useEffect } from "react";
import ReactPageScroller from "react-page-scroller";
import { useDispatch } from "react-redux";
import { updateIsScrolled } from "@/slices/scrollReducer";
import Welcome from "./HomeComponents/Welcome";
import Gallery from "./HomeComponents/Gallery/Gallery";
import Reviews from "./HomeComponents/Reviews/Reviews";
import Map from "./HomeComponents/Map";
import MainPageSelector from "./HomeComponents/MainPageSelector";

import "./Home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(0);
  const handlePageChange = (page) => {
    setPageNumber(page);
  };

  useEffect(() => {
    dispatch(
      updateIsScrolled({
        isScrolled: !(pageNumber === 0),
      })
    )
  }, [dispatch, pageNumber]);

  useEffect(() => {
    return () => {
      dispatch(
        updateIsScrolled({
          isScrolled: false,
        })
      );
    };
  }, []);
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
    </main>
  );
};

export default Home;
