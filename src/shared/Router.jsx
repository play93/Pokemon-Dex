import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import PokemonCard from "../components/PokemonCard";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dex" element={<Dex />} />
        <Route path="/pokemon-detail" element={<PokemonCard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
