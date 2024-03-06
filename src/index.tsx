import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { AppRoutes } from "./router";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <RecoilRoot>
    <React.Suspense fallback={<div>LOADING . . .</div>}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </React.Suspense >
  </RecoilRoot>
  ,
  document.querySelector(".example")
);

