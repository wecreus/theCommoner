import { useState } from "react";
import "./App.scss";
import Welcome from "./MainComponents/Welcome";
import Gallery from "./MainComponents/Gallery";
import ReactPageScroller from "react-page-scroller";

function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const handlePageChange = (page) => {
    setPageNumber(page);
  };

  return (
    <ReactPageScroller animationTimer={350} customPageNumber={pageNumber}  pageOnChange={handlePageChange}>
      <Welcome onScrollClick={() => setPageNumber(1)}/>
      <Gallery />
    </ReactPageScroller>
  );
}

export default App;
