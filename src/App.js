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
import Footer from "./components/footer";
import RequireAuth from "./components/authenticate/RequireAuth";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Logout from "./pages/logout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/" element={<Home />} />

        {/* <Route element={<RequireAuth/>}>
        </Route> */}

        <Route element={<RequireAuth/>}>
        <Route path="/about" element={<About />} />
        </Route>
        <Route element={<RequireAuth/>}>
        <Route path="/contact" element={<Contact />} />
        </Route>
        <Route element={<RequireAuth/>}>
        <Route path="/mart" element={<Mart />} />
        </Route>
        <Route element={<RequireAuth/>}>
        <Route path="/gallery" element={<Gallery />} />
        </Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
