import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Beers from "./pages/Beers";
import Details from "./pages/Details";
import NewBeer from "./pages/NewBeer";

export default function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          element={
            <>
              <Header />
              <div className="page">
                <Outlet />
              </div>
            </>
          }>
          <Route path="/beers" element={<Beers />}></Route>
          <Route path="/beers/:id" element={<Details />}></Route>
          <Route
            path="/beers/not-found"
            element={<h1>Beer not found</h1>}></Route>
          <Route
            path="/random-beer"
            element={<Details random={true} />}></Route>
          <Route path="/new-beer" element={<NewBeer />}></Route>
        </Route>
        <Route path="*" element={<h1>Erro 404</h1>}></Route>
      </Routes>
    </main>
  );
}
