import "./App.css";
import NavbarHome from "./components/navbar-home";
import NavbarPages from "./components/navbar-pages";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Mart from "./pages/mart";
import Gallery from "./pages/gallery";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mart" element={<Mart />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
}

export default App;
