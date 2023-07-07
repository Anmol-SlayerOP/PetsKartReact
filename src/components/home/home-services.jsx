const HomeServices = () => {
  return (
    <>
      <div className="services-container w-screen flex flex-col items-center justify-center mb-44 ">
        <div className="title text-center font-bold text-6xl xl:text-7xl">
          <span>Our Services</span>
        </div>
        <div className="services w-full flex flex-col items-center gap-36 mt-24">
          <div className="w-full flex flex-col  justify-evenly items-center gap-20 xl:flex-row">
            <div className="grooming w-[25rem] sm:w-[28rem] h-[30rem] lg:h-[35rem] shadow-2xl flex justify-center items-center rounded-[2rem]">
              <div className="grooming-main">
                <img
                  className="rounded-[2rem] w-full"
                  src="https://pettie.wpengine.com/wp-content/uploads/2023/04/Home1-Service-img-1.webp"
                  alt=""
                />
                <div className="subheading text-center  text-4xl lg:text-5xl font-bold md:pt-7 pt-[4%] ">
                  <span>Grooming</span>
                </div>
              </div>
            </div>
            <div className="boarding w-[25rem] sm:w-[28rem] h-[30rem] lg:h-[35rem] shadow-2xl flex justify-center items-center rounded-[2rem]">
              <div className="boarding-main ">
                <img
                  className="rounded-[2rem] w-full"
                  src="https://pettie.wpengine.com/wp-content/uploads/2023/04/Home1-Service-img-2.webp"
                  alt=""
                />
                <div className="subheading text-center text-4xl lg:text-5xl font-bold md:pt-7 pt-[4%]">
                  <span>Boarding</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-evenly items-center gap-20 xl:flex-row">
            <div className="training w-[25rem] sm:w-[28rem] h-[30rem] lg:h-[35rem] shadow-2xl flex justify-center items-center rounded-[2rem]">
              <div className="training-main ">
                <img
                  className="rounded-[2rem] w-full"
                  src="https://pettie.wpengine.com/wp-content/uploads/2023/04/Home1-Service-img-3.webp"
                  alt=""
                />
                <div className="subheading text-center text-4xl lg:text-5xl font-bold md:pt-7 pt-[4%]">
                  <span>Training</span>
                </div>
              </div>
            </div>
            <div className="veterinary w-[25rem] sm:w-[28rem] h-[30rem] lg:h-[35rem] shadow-2xl flex justify-center items-center rounded-[2rem]">
              <div className="veterinary-main">
                <img
                  className="rounded-[2rem] w-full"
                  src="https://pettie.wpengine.com/wp-content/uploads/2023/04/Home1-Service-img-4.webp"
                  alt=""
                />
                <div className="subheading text-center text-4xl lg:text-5xl font-bold md:pt-7 pt-[4%]">
                  <span>Veterinary Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeServices;
