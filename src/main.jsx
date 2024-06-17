import ReactDOM from "react-dom/client";
import Router from "./routes/Router";
import { Provider } from "react-redux";
import store from "./store";
import "./index.scss";
import { inject } from '@vercel/analytics';
 
inject();

// TODO: make a version of the website with either Next.js or React Server Components
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router />
  </Provider>
);
