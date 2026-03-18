import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "../Components/Navbar";
import Blog from "./Blog";
import About from "./About";
import Recipe from "./Recipe";

function Routing() {
  return (
    <BrowserRouter>
      <Navbar />

      <hr />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipe" element={<Recipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
