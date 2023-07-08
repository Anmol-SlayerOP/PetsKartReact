import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
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
import { ToastContainer } from "react-toastify";
import RequireLogout from "./components/authenticate/RequireLogout";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route element={<RequireLogout/>}><Route path="/login" element={<Login />} /></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />

        <Route element={<RequireAuth />}>
          <Route path="/mart" element={<Mart />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
