import { useState } from "react";
import "./App.scss";
import Welcome from "./MainComponents/Welcome";
import Gallery from "./MainComponents/Gallery";
import ReactPageScroller from "react-page-scroller";

function App() {
  return (
    <ReactPageScroller animationTimer={350}>
      <Welcome />
      <Gallery />
    </ReactPageScroller>
  );
}

export default App;
