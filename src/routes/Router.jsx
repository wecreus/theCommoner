import { BrowserRouter, Route, Routes as RoutesList } from "react-router-dom";
import Wrapper from "@/common/Wrapper";
import Home from "@/layout/HomeLayout/Home";

// TODO:
// 1. add 404 page
// 2. not use react-page-scroller
const Router = () => (
  <BrowserRouter>
    <RoutesList>
      <Route
        path={"/"}
        exact
        element={
          <Wrapper>
            <Home />
          </Wrapper>
        }
      />
    </RoutesList>
  </BrowserRouter>
);
export default Router;
