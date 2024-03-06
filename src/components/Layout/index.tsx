import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Waiting } from "../Waiting";
import { SearchForm } from "../SearchForm";
// import css from "./index.css";

function Layout() {
  return (
    <div >
      <div >

        <Header></Header>
        <Suspense fallback={<Waiting />}>
          <SearchForm></SearchForm>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}

export { Layout };