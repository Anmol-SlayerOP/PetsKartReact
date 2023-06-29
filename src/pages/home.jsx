import NavbarPages from "../components/navbar-pages";
import Home1 from "../components/home/home-1";
import Home2 from "../components/home/home-2";
import Home3 from "../components/home/home-3";
import HomeServices from "../components/home/home-services";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Home = () => {
  return (
    <>
      {/* <NavbarPages title="Home" /> */}
      <Navbar title="Home"/>
      <Home1/>
      <Home2/>
      <Home3/>
      <HomeServices/>
    </>
  );
}
export default Home