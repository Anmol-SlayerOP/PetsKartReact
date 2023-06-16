const Home1 = () => {
  return (
    <>
      <div className="home-main-container w-screen h-[170vh] flex justify-around items-center mt-20 px-10 py-6 bg-[#ffe712]">
        <div className="home-main-left">
          <img
            src="https://pettie.wpengine.com/wp-content/uploads/2023/04/Home-1-Slider-dog.png"
            alt="home-main-dog-pic"
          />
        </div>
        <div className="home-main-center flex flex-col justify-center items-center gap-7 ">
          <span className="three font-bold text-7xl">Fresh Flavoured</span>
          <span className="smile font-bold text-7xl">Dog Food</span>
          <span className="w-[40rem] leading-[3rem] text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ipsa
            tempora! Necessitatibus facere sint exercitationem!
          </span>
          <button className="btn text-xl tracking-widest px-12 py-4 mt-10 ">
            DISCOVER
          </button>
        </div>
        <div className="home-main-right flex flex-col items-end">
          <img
            className="z-10"
            src="https://pettie.wpengine.com/wp-content/uploads/2023/04/Home-1-Slider-Off-img.png"
            alt="discount-20%"
          />
          <img
            className="z-0 -mt-20"
            src="https://pettie.wpengine.com/wp-content/uploads/2023/04/Home-1-Slider-foodpack-2.png"
            alt="home-main-dog-food-pic"
          />
          <img
            className="z-10 -mt-44"
            src="https://pettie.wpengine.com/wp-content/uploads/2023/04/Home-1-Slider-Plate-1.png"
            alt="home-main-dog-tray"
          />
        </div>
      </div>
    </>
  );
};
export default Home1;
