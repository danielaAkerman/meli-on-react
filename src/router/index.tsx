import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout";
import { SearchForm } from "../components/SearchForm";
import { SearchResults } from "../pages/SearchResults";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      {/* <Route index element={<SearchForm />} /> */}
        <Route path="/search/:query" element={<SearchResults />} />
      </Route>
    </Routes>
  );
}

export { AppRoutes };