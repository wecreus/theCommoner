import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes as RoutesList } from "react-router-dom";
import Wrapper from "@/common/Wrapper/Wrapper";
import LoadingSpinner from "@/common/LoadingSpinner/LoadingSpinner";

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
            <Suspense fallback={<LoadingSpinner />}>
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
            <Suspense fallback={<LoadingSpinner />}>
              <ContactMe />
            </Suspense>
          </Wrapper>
        }
      />
    </RoutesList>
  </BrowserRouter>
);
export default Router;
