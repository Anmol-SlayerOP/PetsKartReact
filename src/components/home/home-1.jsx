import { useNavigate } from "react-router";
import ButtonHome from "./buttonHome";

const Home1 = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="home-main-container w-screen h-[170vh] flex justify-around items-center mt-20 px-10 bg-[#ffe712] ">
        <div className="home-main-left w-full hidden md:flex">
          <img
            src="https://pettie.wpengine.com/wp-content/uploads/2023/04/Home-1-Slider-dog.png"
            alt="home-main-dog-pic"
          />
        </div>
        <div className="home-main-center flex flex-col justify-start items-center gap-7 text-center">
          <span className="three font-bold text-5xl md:text-7xl font">
            Fresh Flavoured <br /> Dog Food
          </span>
          {/* <span className="smile font-bold text-5xl md:text-7xl">Dog Food</span> */}
          <span className="w-[full] leading-[3rem] text-2xl whitespace-normal font-semibold">
            Bursting with Flavor: <br /> Premium Dog Food That Excites Their
            Taste Buds
          </span>
          <ButtonHome
            text="DISCOVER"
            onClick={() => {
              navigate("/mart");
            }}
          />
        </div>
        <div className="home-main-right w-full xl:flex flex-col items-end relative hidden gap-[-20rem]">
          <img
            className="z-10 absolute -top-16 "
            src="https://pettie.wpengine.com/wp-content/uploads/2023/04/Home-1-Slider-Off-img.png"
            alt="discount-20%"
          />
          <img
            className="z-0 "
            src="https://pettie.wpengine.com/wp-content/uploads/2023/04/Home-1-Slider-foodpack-2.png"
            alt="home-main-dog-food-pic "
          />
          <img
            className="z-10 absolute top-96"
            src="https://pettie.wpengine.com/wp-content/uploads/2023/04/Home-1-Slider-Plate-1.png"
            alt="home-main-dog-tray"
          />
        </div>
      </div>
    </>
  );
};
export default Home1;
