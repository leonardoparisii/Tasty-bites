import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CuisineType from "./CuisineType";
import Recipe from "./Recipe";
import Search from "./Search";
import LandingContent from "../components/LandingContent";

function Pages() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to="/discover" />} />
        <Route path="/discover" element={<LandingContent />} />
        <Route path="/discover/:category" element={<LandingContent />} />
        <Route path="/cuisine/:type" element={<CuisineType />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/search/:search" element={<Search />} />
      </Routes>
    </>
  );
}

export default Pages;
