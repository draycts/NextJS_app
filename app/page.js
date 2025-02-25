import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function Home({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ScrollToTop>
        <Component {...pageProps} />
        <Toaster />
      </ScrollToTop>
    </Provider>
  );
}
