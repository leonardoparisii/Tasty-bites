import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Recipe from "./Recipe";
import Search from "./Search";
import LandingContent from "../components/LandingContent";

function Pages() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to="/popular" />} />
        <Route path="/" element={<Navigate to="/popular" />} />
        <Route path="/" element={<LandingContent />} />
        <Route path="/:category" element={<LandingContent />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/search/:search" element={<Search />} />
      </Routes>
    </>
  );
}

export default Pages;
