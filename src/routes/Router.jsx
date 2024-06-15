import { BrowserRouter, Route, Routes as RoutesList } from "react-router-dom";
import Wrapper from "@/common/Wrapper/Wrapper";
import { Suspense, lazy } from "react";

const ContactMe = lazy(() => import("@/layout/ContactMeLayout/ContactMe"));
const Home = lazy(() => import("@/layout/HomeLayout/Home"));

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
            <Suspense fallback={<div></div>}>
              <Home />
            </Suspense>
          </Wrapper>
        }
      />
      <Route
        path={"/contact"}
        exact
        element={
          <Wrapper>
            <Suspense fallback={<div></div>}>
              <ContactMe />
            </Suspense>
          </Wrapper>
        }
      />
    </RoutesList>
  </BrowserRouter>
);
export default Router;
