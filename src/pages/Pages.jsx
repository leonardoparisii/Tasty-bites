import React from "react";
import Popular from "../components/Popular";
import { Routes, Route, Navigate } from "react-router-dom";
import CuisineType from "./CuisineType";
import Recipe from "./Recipe";

function Pages() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to="/discover" />} />
        <Route path="/discover" element={<Popular />} />
        <Route path="/cuisine/:type" element={<CuisineType />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </>
  );
}

export default Pages;
