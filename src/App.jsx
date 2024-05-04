import { useState } from "react";
import "./App.scss";
import Welcome from "./MainComponents/Welcome";
import Gallery from "./MainComponents/Gallery";
import Reviews from "./MainComponents/Reviews";
import ReactPageScroller from "react-page-scroller";
import MainPageSelector from "./MainComponents/MainPageSelector";


// migrate to react-scroll because this sucks
function App() {
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
        onBeforePageScroll={(i) => {console.log("scroller", i); handlePageChange(i)}}
      >
        <Welcome onScrollClick={() => handlePageChange(1)} />
        <Gallery />
        <Reviews />
      </ReactPageScroller>
    </div>
  );
}

export default App;
