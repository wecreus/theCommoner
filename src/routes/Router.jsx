import React from "react";
import { BrowserRouter, Route, Routes as RoutesList } from "react-router-dom";
import Home from "../layout/HomeLayout/Home"

// TODO: 
// 1. add 404 page
// 2. Global imports
// 3. not use react-page-scroller 
const Router = () => (
  <BrowserRouter>
    <RoutesList>
      <Route path={"/"} exact element={<Home />} />
    </RoutesList>
  </BrowserRouter>
);
export default Router;
