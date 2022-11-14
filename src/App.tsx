import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import Beers from "./pages/Beers";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";

export default function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/beers" element={<Beers />}></Route>
        <Route path="/random-beer" element={<RandomBeer />}></Route>
        <Route path="/new-beer" element={<NewBeer />}></Route>
        <Route path="*" element={<h1>Erro 404</h1>}></Route>
      </Routes>
    </main>
  );
}
