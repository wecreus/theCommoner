import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes as RoutesList } from "react-router-dom";
import Wrapper from "@/common/Wrapper/Wrapper";
import LoadingSpinner from "@/common/LoadingSpinner/LoadingSpinner";

const ContactMe = lazy(() => import("@/layout/ContactMeLayout/ContactMe"));
const Home = lazy(() => import("@/layout/HomeLayout/Home"));
const NotFound = lazy(() => import("@/layout/NotFoundLayout/NotFound"));

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
      <Route
        path="*"
        element={
          <Wrapper>
            <Suspense fallback={<LoadingSpinner />}>
              <NotFound />
            </Suspense>
          </Wrapper>
        }
      />
    </RoutesList>
  </BrowserRouter>
);
export default Router;
