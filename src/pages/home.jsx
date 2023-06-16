import NavbarPages from "../components/navbar-pages";
import Home1 from "../components/home/home-1";
import Home2 from "../components/home/home-2";
import Home3 from "../components/home/home-3";

const Home = () => {
  return (
    <>
      <NavbarPages title="Home" />
      <Home1/>
      <Home2/>
      <Home3/>
    </>
  );
}
export default Home