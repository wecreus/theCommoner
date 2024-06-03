import { BrowserRouter, Route, Routes as RoutesList } from "react-router-dom";
import Wrapper from "@/common/Wrapper";
import Home from "@/layout/HomeLayout/Home";
import ContactMe from "@/layout/ContactMeLayout/ContactMe";

// TODO:
// 1. add 404 page
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
      <Route
        path={"/contact"}
        exact
        element={
          <Wrapper>
            <ContactMe />
          </Wrapper>
        }
      />
    </RoutesList>
  </BrowserRouter>
);
export default Router;
